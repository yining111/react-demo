import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const SubmitButton = () => {
    const{pending,data,method}=useFormStatus();
    console.log("~pending",pending);
    console.log("~data",data);
    console.log("~method",method);
    return <button type="submit" disabled={pending}>{pending?'提交中...':'提交'}</button>;
};
export const FormAction = () => {

    const handleAction=async(previousState:any,formData:FormData)=>{
        console.log([...formData.keys()]);
        console.log([...formData.values()]);

        await delay(1000);
        return {
            success: true,
             data: {
                username: formData.get('username'),
                password: formData.get('password'),
            }
        };
    };
    const [state,submitAction,isPending]= useActionState(handleAction,null);
    console.log(state,isPending);
    return (
        <form action={submitAction}>
            <label>
                用户名：
                <input  type="text" name="username" />
            </label>
            <label>
                密码：
                <input type="password" name="password" />
            </label>
            {/*<button type="submit">提交</button>
            深层状态，用context 而不是props 传递 */}
            <SubmitButton />
        </form>
    );
};