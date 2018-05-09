import {combineReducers} from "redux";

// const doJob = (action, state, namespace, job) => {
//     console.log(action.type && action.type.indexOf(namespace + "/") === 0);
//     if (action.type && action.type.indexOf(namespace + "/") === 0) {
//         return job();
//     } else {
//         return state;
//     }
// };

const reducers = combineReducers({

    functions: (state = {number: 30}, action = {}) => {
        const number = state.number;
        switch (action.type) {
            case 'functions/decrease':
                return {number: number - 1};
            default:
                return state
        }
    },

    userDescription: (state = {}, action = {}) => {
        const number = state.number;
        switch (action.type) {
            case 'userDescription/decrease':
                return {number: number - 1};
            default:
                return state
        }
    },

});

export {
    reducers
}