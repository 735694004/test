/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 18:07:19
 * @LastEditTime: 2019-08-04 18:45:33
 * @LastEditors: 陈佳
 */
let Action={
    add:(item)=>{
        return {
            type:"ADD",
            text:item
        }
    },
    del:(item)=>{
        return {
            type:"DEL",
            text:item
        }
    }
}
export default Action;