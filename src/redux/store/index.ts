import { createStore, applyMiddleware } from 'redux';
import thunMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>;
export default store;