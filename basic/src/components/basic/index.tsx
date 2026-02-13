import { useCallback, useState } from "react";


export const BasicState = () => {
    const [info, setInfo] = useState({
      age: 0,
    });
    const handleAdd = useCallback(() => {
        setInfo((prevInfo)=>({  //就近原则，prevInfo是最新状态
            ...prevInfo,
            age: prevInfo.age + 1,
        }));
    },[]);
    return (
        <div>
            {info.age}
            <button onClick={handleAdd}>add</button>
        </div>  
    );
};