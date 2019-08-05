/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 16:56:51
 * @LastEditTime: 2019-08-04 18:03:10
 * @LastEditors: 陈佳
 */
import { EventEmitter } from "events"
let Store =Object.assign({},EventEmitter.prototype,{
    List:[],
    add(item){
        console.log(item)
        this.List.push(item)
    },
    del(i){
        console.log(i)
        this.List.splice(i,1)
    },
    changes(){
        this.emit("change")
    },
    changelisten(callback){
        this.on("change",callback)
    },
    getAll(){
        return this.List
    }

})
export default Store;