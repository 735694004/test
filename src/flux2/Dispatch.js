/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-04 18:07:09
 * @LastEditTime: 2019-08-04 18:45:51
 * @LastEditors: 陈佳
 */
import { Dispatcher } from "flux"
import Store from "./Store"
let Dispatch = new Dispatcher()
Dispatch.register((action) => {
    switch (action.type) {
        case "ADD":
            Store.add(action.text)
            Store.changes()
            break;
        case "DEL":
            Store.del(action.text)
            Store.changes()
            break;
        default:
            break;
    }
})
export default Dispatch;