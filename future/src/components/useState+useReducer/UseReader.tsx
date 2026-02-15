import { useReducer } from "react";

const initialState = { 
    name:"tom",
    age:18,
}
const reducer = (state: typeof initialState,action:{type:string;payload:any})=>{
    switch (action.type) {
        case"changeName":
            return {
                ...state,
                name:action.payload
            };
        case"changeAge":
            return {
                ...state,
                age:Number(action.payload),
            };
        default:
            return state;
    }
};
export const UseReducer = () => {
    const [info,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <p>info: {info.name}</p>
            <p>info: {info.age}</p>
            <input
                value={info.name}
                onChange={(ev)=>
                    dispatch({
                    type:"changeName",
                    payload:ev.target.value,
                })}
            />
            <input
                value={info.age}
                onChange={(ev)=>
                    dispatch({
                    type:"changeAge",
                    payload:ev.target.value,
                })}
            />
        </div>
    );
};

//对于状态的操作，我们需要提取出来，叫做 action （处理）
//然后 action 需要有专门的方法来完成状态值的更新，叫做 reducer （逻辑）
//结果是 reducer，驱动试图更新