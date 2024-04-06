import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { CircleButton } from "@components/CircleButton";
import { NumberField } from "@components/NumberField";
import { Evaluate } from "@utils/math";

// 計算式配列
let formula = []

// 前回のアクションがシンボル（加減乗除）の場合、trueになる
let prevActionSymbol = false

// 前回のアクションがシンボル（＝）の場合、trueになる
let prevActionEqual = false

export const Home = () => {
    const [text, setText] = useState("0");

    /**
     * 数字(0-9)押下
     */
    const onNumberButtonClick = (number) => {
        if (prevActionSymbol || prevActionEqual) {
            setText(number)
            prevActionSymbol = false
            prevActionEqual = false
        } else if (text == "0") {
            setText(number)
        } else if (text == "-0") {
            setText("-".concat(number))
        } else {
            setText(text.concat(number))
        }
    };

    /**
     * 小数点(.)押下
     */
    const onDotButtonClick = () => {
        if (prevActionSymbol || prevActionEqual) {
            setText("0.")
            prevActionSymbol = false
            prevActionEqual = false
        }
        else if (text.includes(".")) {
            // 何もしない
        } else {
            setText(text.concat("."))
        }
    }

    /**
     * シンボル(加減乗除)押下
     */
    const onSymbolButtonClick = (symbol) => {
        const dict = { "加":"+", "減":"-", "乗":"*", "除":"/"}
        if (prevActionSymbol) {
            // １つ前の操作がシンボル（加減乗除）押下の場合、１つ前の操作を上書きする。
            formula.pop()
        } else {
            formula.push(text)
        }
        formula.push(dict[symbol])
        prevActionSymbol = true
        prevActionEqual = false
    };

    /**
     * シンボル(＝)押下
     */
    const onEqualButtonClick = () => {
        if (prevActionEqual) {
            // １つ前の操作がシンボル（＝）の場合、何もしない。
            return
        }
        if (prevActionSymbol) {
            // １つ前の操作がシンボル（加減乗除）の場合、１つ前の操作を無効にする。
            formula.pop()
        }
        formula.push(text)
        setText(Evaluate(formula))
        formula = []
        prevActionSymbol = false
        prevActionEqual = true
    }

    /**
     * オールクリア(AC)押下
     */
        const onAllClearButtonClick = () => {
            formula = []
            prevActionSymbol = false
            prevActionEqual = false
            setText("0")
        }

    /**
     * 符号(±)押下
     */
    const onChangeSignButtonClick = () => {
        if (prevActionSymbol) {
            setText("-0")
            prevActionSymbol = false
        }
        else if (text.startsWith("-")) {
            setText(text.slice(1))
        } else {
            setText("-".concat(text)) 
        }
    }

    return(
        <div>
            <Grid container spacing={1} sx={{width: "300px"}}>
                <Grid item xs={12}><NumberField text={text}></NumberField></Grid>

                <Grid item xs={3}><CircleButton label="AC" type="other" onButtonClick={() => onAllClearButtonClick()}/></Grid>
                <Grid item xs={3}><CircleButton label="±" type="other" onButtonClick={() => onChangeSignButtonClick()}/></Grid>
                <Grid item xs={6}></Grid> {/* spacer */}

                <Grid item xs={3}><CircleButton label="7" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="8" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="9" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="除" type="symbol" onButtonClick={(symbol) => onSymbolButtonClick(symbol)}/></Grid>

                <Grid item xs={3}><CircleButton label="4" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="5" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="6" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="乗" type="symbol" onButtonClick={(symbol) => onSymbolButtonClick(symbol)}/></Grid>

                <Grid item xs={3}><CircleButton label="1" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="2" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="3" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="減" type="symbol" onButtonClick={(symbol) => onSymbolButtonClick(symbol)}/></Grid>

                <Grid item xs={3}><CircleButton label="0" type="number" onButtonClick={(number) => onNumberButtonClick(number)}/></Grid>
                <Grid item xs={3}><CircleButton label="." type="number" onButtonClick={() => onDotButtonClick()}/></Grid>
                <Grid item xs={3}><CircleButton label="＝" type="symbol" onButtonClick={() => onEqualButtonClick()}/></Grid>
                <Grid item xs={3}><CircleButton label="加" type="symbol" onButtonClick={(symbol) => onSymbolButtonClick(symbol)}/></Grid>
            </Grid>
        </div>
    );
};
