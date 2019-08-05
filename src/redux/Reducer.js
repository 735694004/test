/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-05 10:55:10
 * @LastEditTime: 2019-08-05 11:45:43
 * @LastEditors: 陈佳
 */
import { combineReducers} from "redux"
import Listapi from "./Listapi"
// let Reducer = (state = [], action) => {
//     switch (action.type) {
//         case "ADD":
//             state.push(action.text)
//             return state;
//         case "DEL":
//             state.splice(action.text,1)
//             return state;
//         default:
//             return state;
//     }
// }
let Reducer=combineReducers({
    list:Listapi,
})
export default Reducer;