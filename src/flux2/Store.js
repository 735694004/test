/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 18:05:49
 * @LastEditTime: 2019-08-04 18:47:01
 * @LastEditors: 陈佳
 */
import {EventEmitter} from "events"
let Store=Object.assign({},EventEmitter.prototype,{
    data:[],
    changes(){
        this.emit("change")
    },
    changeListen(callback){
        this.on("change",callback)
    },
    getAll(){
        return this.data
    },
    add(item){

        this.data.push(item)
    },
    del(item){
        this.data.splice(item,1)
    }
})
export default Store; 