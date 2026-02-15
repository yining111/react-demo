import {Suspense,use}from "react";

const delay =(ms:number)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}
const fetchMessage = async () => {
    await delay (2000);
    return "hello world";
}
// const Message = () => {
// //状态
//     const [loading,setLoading] = useState(true);
// //副作用
//     const [message,setMessage] = useState<string|null>(null);
//     useEffect(()=>{
//         fetchMessage().then((msg)=>{
//             setMessage(msg);
//         });
//     },[]);
// return (
//     <div>
//         {loading ? "loading..." : message}</div>
// );
// }
//Message组件在渲染时“读取”Promise
const Message = ({messagePromise}:{messagePromise:Promise<string>}) => {
    //在渲染期间直接 use(promise)
    const message = use(messagePromise);
    return <div>{message}</div>;
};


export const SuspenseNew = () => {
    //在渲染开始时就创建 Promise
    const messagePromise = fetchMessage();
    return (
        <div>
            <Suspense fallback={<div>loading...</div>}>
                <Message messagePromise={messagePromise} />
            </Suspense>
            
        </div>
    );
};

