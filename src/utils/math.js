import { Decimal } from 'decimal.js';

export const Evaluate = (formula) => {
    // 乗除
    for (let i = 0; i < formula.length; i++) {
        switch(formula[i]) {
            case "*":
                formula[i-1] = String(Decimal.mul(formula[i-1], formula[i+1]))
                formula.splice(i, 2)
                i--
                break
                
            case "/":
                formula[i-1] = String(Decimal.div(formula[i-1], formula[i+1]))
                formula.splice(i, 2)
                i--
                break
        }
    }

    // 加減
    for (let i = 0; i < formula.length; i++) {
        switch(formula[i]) {
            case "+":
                formula[i-1] = String(Decimal.add(formula[i-1], formula[i+1]))
                formula.splice(i, 2)
                i--
                break
            case "-":
                formula[i-1] = String(Decimal.sub(formula[i-1], formula[i+1]))
                formula.splice(i, 2)
                i--
                break
        }
    }

    return formula[0]
}
