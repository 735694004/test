/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-05 11:41:40
 * @LastEditTime: 2019-08-05 11:42:15
 * @LastEditors: 陈佳
 */
let Listapi= (state = [], action) => {
    switch (action.type) {
        case "ADD":
            state.push(action.text)
            return state;
        case "DEL":
            state.splice(action.text,1)
            return state;
        default:
            return state;
    }
}
export default Listapi;