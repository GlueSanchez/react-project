import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {authReducer} from "./reducers/authReducer";
import {workersReducer} from "./reducers/workersReducer";
import {articlesReducer} from "./reducers/articlesReducer";
import {materialsReducer} from "./reducers/materialsReduces";
import {photosReducer} from "./reducers/photoReducer";
import {monumentsReducer} from "./reducers/monumentsReducer";
import {customerReducer} from "./reducers/customerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducer,
    workers: workersReducer,
    articles: articlesReducer,
    materials: materialsReducer,
    photos: photosReducer,
    monuments: monumentsReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;