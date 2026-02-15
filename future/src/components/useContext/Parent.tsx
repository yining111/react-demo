import {Child} from "./Child";
import {ThemeContext} from "./ThemeContext";
import { useState } from "react";

export const Parent = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Child />
                <button onClick={toggleTheme}>Toggle Theme</button>
            </ThemeContext.Provider>
        </div>
    );
};