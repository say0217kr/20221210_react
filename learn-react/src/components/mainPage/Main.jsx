import Header from "./Header";
import Content from "./Content";
import { useState, createContext } from "react";

// 컨텍스트 생성 => 값을 사용하는 컴포넌트에서 userContext의 인자로 전달되어야한다.
//  => createContext의 인자로 전달한 값은 기본값 => Provider로 감싸지 않은 컴포넌트에서 사용할 때 반환되는 값.
export const DarkModeContext = createContext(null);
export const ChangeModeContext = createContext(null);

function Main() {
    const [darkMode, setDarkMode] = useState(false);

    const onChangeMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <DarkModeContext.Provider value={darkMode}>
            <ChangeModeContext.Provider value={onChangeMode}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh",
                    }}
                >
                    {/* <Header darkMode={darkMode} /> */}
                    <Header>
                        <h1>개어렵네 ..</h1>
                        <p>놀고싶어 ..</p>
                    </Header>
                    {/* <Content darkMode={darkMode} onChangeMode={onChangeMode} /> */}
                    {/* <Content onChangeMode={onChangeMode} /> */}
                    <Content />
                </div>
            </ChangeModeContext.Provider>
        </DarkModeContext.Provider>
    );
}

export default Main;
