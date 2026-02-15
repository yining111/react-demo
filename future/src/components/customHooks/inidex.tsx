import { useLocalStorageState } from './useLocalStorageState';

export const CustomHooks = () => {
    const [count, setCount] = useLocalStorageState<number>("count", 0);
    //传入的0 相当于实参
    return (
        <div>
            <h1>自定义Hook示例</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}