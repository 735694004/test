/*
 * @Description: 分发任务
 * @Author: 陈佳
 * @Date: 2019-08-04 16:58:41
 * @LastEditTime: 2019-08-04 18:02:41
 * @LastEditors: 陈佳
 */
import { Dispatcher } from "flux"
import Store from "./Store"
let Dispatch = new Dispatcher();
Dispatch.register((action) => {
    switch (action.type) {
        case "ADDITEM":
            console.log(action.text)
            Store.add(action.text)
            Store.changes()
            break;
            case "DELITEM":
                    console.log(action.text)
                    Store.del(action.text)
                    Store.changes()
                    break;
        default:
            break;
    }
})


export default Dispatch;
