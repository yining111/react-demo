import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const GrandChild = () => {
    const {theme} = useContext(ThemeContext);
    return <div>GrandChild with theme: {theme}</div>;
};