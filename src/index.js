/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-03 21:05:40
 * @LastEditTime: 2019-08-05 18:06:18
 * @LastEditors: 陈佳
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from "redux"
import { Provider, connect } from "react-redux"
let list = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            let arr = [...state];
            arr.push(action.text);
            return arr;
        case "DEL":
            let arr1 = [...state];
            arr1.splice(action.text,1);
            return arr1;
        default:
            return state
    }
}
const reducer = combineReducers({
    list: list
})
const store = createStore(reducer)

let iptel = "";
const App = (props) => {
    let { add, list, del } = props
    console.log(props)
    return (
        <div >
            <p>react-redux</p>
            <input type="text" ref={(ipt) => iptel = ipt} />
            <button onClick={() => add(iptel.value)}>添加</button>
            <hr />
            {
                list.map((item, i) => {
                    return (<div key={i}>{item} <button onClick={() => del(i)}>删除</button></div>)
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        add: (msg) => {
            dispatch({
                type: "ADD",
                text: msg
            })
        },
        del: (msg) => {
            dispatch({
                type: "DEL",
                text: msg
            })
        }
    }
}

const ToDoList = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(<Provider store={store}><ToDoList /></Provider>, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
