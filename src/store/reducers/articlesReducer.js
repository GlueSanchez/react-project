import {GET_ALL_ARTICLES} from "../actions";

const defaultState = [];

export const articlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_ARTICLES: {

        }
        default:
            return state;
    }
};

// export const doAction = (dos)=> ({type: TypeError,  dos}) ;