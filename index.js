saturdayFun()
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

const wrapAdjective = function (style = '*') {
    return function (Adj = "special") {
    return `You are ${style}${Adj}${style}!`
    }
}