import {data} from "@/data";

export function calculateProduction(item, amount, targetLevel) {
    let needObject = data[item].need
    if (!needObject) {
        return {}
    }
    let needNames = Object.getOwnPropertyNames(needObject)
    let resObject = {}
    needNames.forEach(needName => {
        let tmp = {}
        let levelAmount = 9999;
        let level = '';
        for (let i = 3; i >= 1; i--) {
            let tmpAmount = getAmountByLevel(targetLevel, 'level' + i, needName, needObject, item)
            if (tmpAmount <= levelAmount) {
                level = 'level' + i
                levelAmount = tmpAmount
            }
        }
        tmp[data[needName].production] = {level: level, amount: amount * levelAmount}
        resObject[needName] = tmp
    })
    return resObject
}

export function getAmountByLevel(targetLevel, materialLevel, needName, needObject, item) {
    let total = ((data[needName].speed[materialLevel] * needObject[needName]) / (data[item].speed[targetLevel]))
    return Math.ceil(total)
}

export function getMessage(message, result) {
    Object.getOwnPropertyNames(result).forEach(name => {
        Object.getOwnPropertyNames(result[name]).forEach(production => {
            message += name+'['+result[name][production].amount + '*' + production + '(' + (result[name][production].level === 'level1' ? '1级' : result[name][production].level === 'level1' ? '2级' : '3级') + ')]'
        })
    })
    return message
}
