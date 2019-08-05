/*
 * @Description: Action
 * @Author: 陈佳
 * @Date: 2019-08-05 10:55:00
 * @LastEditTime: 2019-08-05 11:25:40
 * @LastEditors: 陈佳
 */
let  Action ={
    add(item){
        return{
            type:"ADD",
            text:item
        }
    },
    del(i){
        return{
            type:"DEL",
            text:i
        }
    }
}
export default Action;