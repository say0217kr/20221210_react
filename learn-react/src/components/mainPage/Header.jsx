import { DarkModeContext } from "./Main";
import { useContext } from "react";

/* function Header({ darkMode }) { */
function Header({ children }) {
    const darkMode = useContext(DarkModeContext);
    console.log(darkMode);
    return (
        <header
            style={{
                textAlign: "center",
                borderBottom: "1px solid",
                backgroundColor: darkMode ? "#000" : "#ddd",
                color: darkMode ? "#ddd" : "black",
                padding: 20,
            }}
        >
            <h1 style={{ margin: 0 }}>Hello Reack!</h1>
            {children}
        </header>
    );
}

export default Header;
