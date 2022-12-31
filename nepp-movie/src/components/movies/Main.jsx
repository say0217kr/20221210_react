import styled from "styled-components";
import MovieList from "./MovieList";

function Main() {
    return (
        <Container>
            <Wrapper>
                <MovieList title="What's Popular" />
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    flex: 1;
    max-width: 960px;

    padding: 50px 0;
`;

export default Main;
