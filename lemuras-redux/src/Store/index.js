import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import namesReducer from "../Reducers/namesReducer";

const logger = createLogger();

const myLogger = store => next => action => {

    console.log('dis====>', action);

    if (!action.payload) {
        action.payload = 'No name';
    }

    let result = next(action);
    return result
}

export default createStore(
    namesReducer,
    applyMiddleware(myLogger)
);