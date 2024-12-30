// @ts-nocheck
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store/store'

ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode>, */}
  </Provider>
)
