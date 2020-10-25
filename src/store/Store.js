
import {
    applyMiddleware,
    compose,
    createStore
} from "redux";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";



const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(thunk),
        applyMiddleware(logger)
    )
);



export default store;
