/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 16:58:49
 * @LastEditTime: 2019-08-04 18:02:08
 * @LastEditors: 陈佳
 */
let Action = {
    add: function (item) {
        console.log(item)
        return {
            type: "ADDITEM",
            text: item,
        }
    },
    del: function (i) {
        console.log(i)
        return {
            type: "DELITEM",
            text: i,
        }
    }
}
export default Action;