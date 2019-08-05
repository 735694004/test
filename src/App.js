/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-03 21:05:40
 * @LastEditTime: 2019-08-05 11:00:35
 * @LastEditors: 陈佳
 */
import React from 'react';

import './App.css';
// import TodoController from "./flux/TodoController"
import Controller from "./flux2/Controller"
import View from './redux/View';
function App() {
  return (
    <div className="App">
      <h2>redux的todolist</h2>
      <View ></View>
      <hr />
      <h2>flux的todolist</h2>
      <Controller></Controller>
      {/* <TodoController></TodoController> */}
    </div>
  );
}

export default App;
