/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-03 22:31:44
 * @LastEditTime: 2019-08-04 16:54:05
 * @LastEditors: 陈佳
 */
import { EventEmitter } from "events"
//  import assign from "Object-assign"
let Store = Object.assign({}, EventEmitter.prototype, {
    Todos: [],
    addItem(msg) {
        this.Todos.push(msg)
        console.log(msg)
    },
    delItem(i) {
        this.Todos.splice(Number(i),1)
        
    },
    changes() {
        this.emit("change")//发送change事件
    },
    changelisten(callback) {//controller里的方法
        this.on("change", callback)//接收change事件
    },
    getAll(){
        return this.Todos
    }
})
export default Store;