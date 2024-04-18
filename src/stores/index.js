// Axios
import axios from 'axios';

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// Reducer
import contactReducer from './contact';

// Function
export * from './contact/functions'

// Base URL
export const baseUrl = 'https://contact.herokuapp.com';

// Base Axios
export const baseAxios = axios.create({ 
    baseURL: baseUrl,
    timeout: 10000,
});

const rootReducer = combineReducers({
    // reducer
    contactReducer
});

export default function ReduxState(props) {
    let store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

    // FOR PRODUCTION
    // let store=createStore(rootReducer,applyMiddleware(reduxSoldierMiddleware));

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}
