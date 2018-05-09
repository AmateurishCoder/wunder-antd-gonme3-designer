import {createStore} from "redux";
import {reducers} from "../reducer/Reducers";

const store = {
    init: function (initValue = {}) {
        return createStore(reducers, initValue);
    }
};

export {
    store
}