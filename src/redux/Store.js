/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-05 10:54:20
 * @LastEditTime: 2019-08-05 11:48:10
 * @LastEditors: 陈佳
 */
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Reducer from "./Reducer"
let Store=createStore(Reducer,applyMiddleware(thunk))
export default Store; 