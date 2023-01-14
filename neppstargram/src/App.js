import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Main from "./component/pages/Main";
import SignIn from "./component/pages/SignIn";
import SignUp from "./component/pages/SignUp";
import Home from "./component/pages/Home";
import Search from "./component/pages/Search";
import Edit from "./component/pages/Edit";
import Profile from "./component/pages/Profile";
import User from "./component/pages/User";

function App() {
    return (
        <Container>
            <Wrapper>
                <Routes>
                    <Route path="/*" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="search" element={<Search />} />
                        <Route path="edit">
                            <Route path="" element={<Edit />} />
                            <Route path=":postId" element={<Edit />} />
                        </Route>
                        <Route path="profile" element={<Profile />} />
                        <Route path="users/:id" element={<User />} />
                    </Route>
                    <Route path="signIn" element={<SignIn />} />
                    <Route path="signUp" element={<SignUp />} />
                </Routes>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;

    background-color: #eee;
`;

const Wrapper = styled.div`
    width: 390px;

    background-color: #fff;
`;

export default App;
