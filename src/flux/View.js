/*
 * @Description: view用来展示数据  不做业务逻辑  所以要把形成的action给顶层容器
 * @Author: 陈佳
 * @Date: 2019-08-03 22:31:50
 * @LastEditTime: 2019-08-04 16:54:54
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'

export default class View extends Component {
    constructor(props){
        super(props)
    }
    additem(){
        this.props.add(this.refs.ipt.value)//将action传递给controller  子到父的传值
        this.refs.ipt.value=""
    }
    delitem(i){
        // console.log(this.refs[i].innerText)
        this.props.del(i)
    }
    render() {
        return (
            <div className="view">
                <p>视图层View</p>
                <input type="text" ref="ipt" />
                <button onClick={this.additem.bind(this)}>添加</button>
                <hr/>
                <ul>
                    {
                        this.props.list.map((item,i)=>(<li key={i}><span >{item}</span><button onClick={this.delitem.bind(this,i)}>删除</button></li>))
                    }
                </ul>
            </div>
        )
    }
}
