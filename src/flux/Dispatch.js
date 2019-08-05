/*
 * @Description: 通知store做数据更新
 * @Author: 陈佳
 * @Date: 2019-08-03 22:32:23
 * @LastEditTime: 2019-08-04 16:45:05
 * @LastEditors: 陈佳
 */
import { Dispatcher } from "flux"
import Store from "./Store"
let Dispatch = new Dispatcher()
Dispatch.register((action) => {//action是controller里面传过来的action对象
    switch (action.type) {
        case "ADDTODO":
            console.log(action.text)
            Store.addItem(action.text)
            Store.changes()
            break;
        case "DELTODO":
            console.log(action.text)
            Store.delItem(action.text)
            Store.changes()
            break;
        default: break;
    }

})
export default Dispatch;