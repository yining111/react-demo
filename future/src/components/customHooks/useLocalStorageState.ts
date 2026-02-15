import { useState,useEffect} from "react";

//自定义Hook 使用了TypeScript泛型<T>
//泛型相当于函数（实参，形参）里的形参
export function useLocalStorageState<T>(
    //1.从localStorage中获取数据的key,初始值
    key: string,
    defaultValue: T
):[T,React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue  !== null ? JSON.parse(storedValue) : defaultValue;
    });
    //2.当state发生变化时,将新的state保存到localStorage中
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}
//在组件中使用这个自定义Hook
