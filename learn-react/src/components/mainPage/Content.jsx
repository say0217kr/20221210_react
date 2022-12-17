import { DarkModeContext, ChangeModeContext } from "./Main";
import { useContext } from "react";

/* function Content({ darkMode, onChangeMode }) { */
/* function Content({ onChangeMode }) { */
function Content() {
    const darkMode = useContext(DarkModeContext);
    const changeMode = useContext(ChangeModeContext);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                backgroundColor: darkMode && "black",
                color: darkMode && "white",
            }}
        >
            메인 컨텐츠입니다!
            {/* <button onClick={onChangeMode}>모드 변경</button> */}
            <button onClick={changeMode}>모드 변경</button>
        </div>
    );
}

export default Content;
