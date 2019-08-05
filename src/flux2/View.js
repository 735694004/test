/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 18:05:58
 * @LastEditTime: 2019-08-04 18:44:19
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'

export default class View extends Component {
    add() {
        this.props.add(this.refs.ipt.value)
    }
del(i){
    this.props.del(i)
}
    render() {

        return (
            <div className="view">
                <p>view</p>
                <input type="text" ref="ipt" />
                <button onClick={this.add.bind(this)}>添加</button>
                {
                    this.props.list.map((item, i) => {
                        return (
                            <div key={i}>
                                <span>{item}</span>
                                <button onClick={this.del.bind(this,i)}>删除</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
