import "./Header.css";
import { FaSun, FaMoon } from "react-icons/fa";
export default function Header(props){
    const {theme,setTheme} = props;
    
    function ToggleTheme(){
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
        <header>
            <div className="logo">
                <span>To-Do List</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light"? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
                <span className="icon" onClick={ToggleTheme}>
                    {theme === "light" ? <FaSun/> : <FaMoon/>}
                </span>
            </div>
        </header>
    );
}