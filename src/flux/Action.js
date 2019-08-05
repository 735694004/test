/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-03 22:32:01
 * @LastEditTime: 2019-08-04 16:50:54
 * @LastEditors: 陈佳
 */
let  Action={
    addTodo:function(msg){
        return{
            type:"ADDTODO",
            text:msg
        }
    },
    delTodo:function(msg){
        return{
            type:"DELTODO",
            text:msg
        }
    }
}
export default Action;