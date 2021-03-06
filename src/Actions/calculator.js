import { ADD, DIFF, DIV, MULT } from "../Constants/actions";


export function actionAdd(payload) { // {d1: 12, d2: 58}
    return {
        type: ADD,
        payload: payload
    }
}

export function actionDiff(payload) {
    return {
        type: DIFF,
        payload: payload
    }
}

export function actionMult(payload) {
    return {
        type: MULT,
        payload: payload
    }
}

export function actionDiv(payload) {
    return {
        type: DIV,
        payload: payload
    }
}