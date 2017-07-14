import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/index'
import App from './components/app'
import '../style/app.sass'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.container'))
