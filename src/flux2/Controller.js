/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 18:07:29
 * @LastEditTime: 2019-08-04 18:45:04
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import View from './View'
import Action from "./Action"
import Store from "./Store"
import Dispatch from "./Dispatch"
export default class Controller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:Store.getAll()
        }
        this.changelist=this.changelist.bind(this)
    }
    add(item) {//生成action给dispatch
        Dispatch.dispatch(Action.add(item))
    }
    del(item) {//生成action给dispatch
        Dispatch.dispatch(Action.del(item))
    }
changelist(){
    this.setState({
        list:Store.getAll()
    }) 
}
    componentDidMount(){
        Store.changeListen(this.changelist)
    }
    render() {
        return (
            <div className="controller">
                <p>controller</p>
                <View add={this.add.bind(this)} list={this.state.list} del={this.del.bind(this)}></View>
            </div>
        )
    }
}
