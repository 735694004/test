/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 16:57:23
 * @LastEditTime: 2019-08-04 18:03:58
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import View from "./View"
import Dispatch from "./Dispatch"
import Action from "./Action"
import Store from "./Store"
export default class Controller extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: Store.getAll()
        }
        this.changeState = this.changeState.bind(this)
    }
    add(item) {
        Dispatch.dispatch(Action.add(item))
    }
    del(i){
        Dispatch.dispatch(Action.del(i))
    }
    changeState() {
        this.setState({
            list: Store.getAll()
        })
    }
    componentDidMount() {
        Store.changelisten(this.changeState)
    }
    render() {
        return (
            <div className="controller">
                <p>controller</p>
                <View add={this.add.bind(this)} list={this.state.list} del={this.del.bind(this)} />
            </div>
        )
    }
}

