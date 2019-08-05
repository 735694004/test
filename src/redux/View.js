/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-05 10:54:12
 * @LastEditTime: 2019-08-05 11:56:33
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import Action from './Action';
import Store from "./Store"
export default class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: Store.getState().list
        }
        this.changelist = this.changelist.bind(this)
    }
    changelist() {
        this.setState({
            list: Store.getState().list
        })
    }
    componentDidMount() {
        Store.subscribe(this.changelist)
    }
    render() {
        return (
            <div className="view">
                <p>View</p>
                <input type="text" ref="ipt" />
                <button onClick={this.add.bind(this)}>添加</button>
                <hr />
                <ul>
                    {
                        this.state.list.map((item, i) => {
                            return (<li key={i}><span>{item}</span><button onClick={this.del.bind(this, i)}>删除</button></li>)
                        })
                    }
                </ul>

            </div>
        )
    }
    add() {
        let _this = this;
        // Store.dispatch(Action.add(this.refs.ipt.value))
        Store.dispatch((dispatch) => {//异步调用需要安插件redux-thunk 在Store创建时加上中间件applyMiddleware(thunk)
            setTimeout(function () {
                dispatch(Action.add(_this.refs.ipt.value))
            }, 5000)
        })

    }
    del(i) {

        // Store.dispatch(Action.del(i))
        //异步
        Store.dispatch((dispatch) => {
            setTimeout(function () {
                dispatch(Action.del(i))
            }, 5000)
        })

    }
}
