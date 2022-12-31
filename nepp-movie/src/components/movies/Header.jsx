import { Link } from "react-router-dom";
import styled from "styled-components";

const gnbList = [
    { id: 1, text: "Movie", url: "/movies" },
    { id: 2, text: "TV Show", url: "/shows" },
    { id: 3, text: "Person", url: "/persons" },
];

function Header() {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Link to="/">Nepp Movie</Link>
                </Logo>
                <GnbList>
                    {gnbList.map((item) => (
                        <NavItem key={item.id}>
                            <Link to={item.url}>{item.text}</Link>
                        </NavItem>
                    ))}
                </GnbList>
            </Wrapper>
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    justify-content: center;

    padding: 20px 0;

    border-bottom: 1px solid #ddd;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 960px;
    flex: 1;

    background-color: eee;
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    margin-right: 30px;
`;

const GnbList = styled.ul`
    display: flex;
`;

const NavItem = styled.li`
    & + & {
        margin-left: 20px;
    }

    a {
        &:hover {
            font-size: 700;
        }
    }
`;

export default Header;
