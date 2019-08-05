/*
 * @Description: 顶层容器唯一可以使用setState的地方
 * @Author: 陈佳
 * @Date: 2019-08-03 22:33:19
 * @LastEditTime: 2019-08-04 16:45:39
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import View from "./View"
import Dispatch from "./Dispatch"
import Action from "./Action"
import Store from "./Store";
export default class TodoController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: Store.getAll()
        }
        this.changelist = this.changelist.bind(this)
    }
    add(msg) {//接收view传递过来的数据变化
        console.log(msg)
        //Action.addTodo(msg)
        Dispatch.dispatch(Action.addTodo(msg))//将action给dispatch

    }
    del(i){
        console.log(i)
        Dispatch.dispatch(Action.delTodo(i))
    }
    changelist() {//改变状态的唯一方法
        this.setState({
            list: Store.getAll()
        })
    }
    componentDidMount() {
        Store.changelisten(this.changelist)
    }

    render() {
        return (
            <div className="controller">
                <p>todocontroller</p>
                <View add={this.add.bind(this)} list={this.state.list} del={this.del.bind(this)}></View>
            </div>
        )
    }
}
