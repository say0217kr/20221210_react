import Slider from "./component/Slider";
import { createGlobalStyle } from "styled-components";
import Section from "./component/Section";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
`;

function App() {
    return (
        <div>
            <GlobalStyle />
            {/* <Slider /> */}
            <Section />
        </div>
    );
}

export default App;
