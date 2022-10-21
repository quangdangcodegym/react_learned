import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DemoApp1 from './DemoApp1';
import DemoApp2 from './DemoApp2';
import DemoApp1State from './DemoApp1State';
import DemoApp2State from './DemoApp2State';
import DemoApp2Effect from './DemoApp2Effect';
import DemoRouterApp from './DemoRouterApp';
import DemoReducer from './DemoReducer';
import LoginApp from './LoginApp';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import DemoReactReduxMainApp from './DemoReactReduxMainApp';
import { Provider } from 'react-redux';
import DemoReactRedux from './DemoReactRedux';
let obj = {
  "firstName": "Quang", 
  "lastName": "Dang",
  "country": "VietNam",
  "gender": "Nam",
  "location": "Go Vap"
}

/**
 * Tạo store, và đăng kí root element với store
    Sử dụng redux thuần: 
    <DemoReactReduxMainApp  value={store.getState().counter}
      inc={()=> store.dispatch({"type": "inc"})}
      dec={()=> store.dispatch({"type": "dec"})}
    />

    Sử dụng thư viện react-redux: ta có thêm 2 cái hook useSelector(), và useDispatch()
 */
export const store = configureStore({
  reducer: {
    "counter": counterReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => root.render(
    <Provider store={store}>
        <DemoReactRedux />
    </Provider>
);
render();

store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
