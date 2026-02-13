import {  useEffect, useRef,useState } from "react";


export const Hooks = () => {
    const [count,setCount] = useState(0);
    const inputRef = useRef(null);
    const isMounted = useRef(false); //记录组件是否挂载过
    const handleAdd = () => {
        setCount((count) => count + 1);
    };

    useEffect(() => {
        console.log(count);
        console.log(inputRef.current); //访问DOM元素
    }, [count]);

    useEffect(() => {
        console.log("组件挂载了"); //组件挂载时执行一次
        isMounted.current = true; //标记组件已经挂载过了
        return () => {
            console.log("组件卸载了"); //组件卸载时执行一次
        };
    }, []);

    useEffect(() => {
        console.log('组件更新'); //每次组件更新都会执行
    });
    return (
        <div>
            <div>当前计数：{count}</div>
            <button onClick={handleAdd}>增加</button>
            <input ref={inputRef} />

        </div>  
    );
};