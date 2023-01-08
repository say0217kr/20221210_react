import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentUser, getPosts } from "../../api/admin";
import { useUserIdDispatch } from "../../data/auth";
import Post from "../home/Post";

function Home() {
    const [postList, setPostList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLast, setIsLast] = useState(false);

    const dispatch = useUserIdDispatch();

    useEffect(() => {
        getCurrentUser().then((user) => dispatch(user.id));
    }, [dispatch]);

    useEffect(() => {
        getPosts(page).then((data) => {
            if (data.length < 10) setIsLast(true);
            setPostList((postList) => [...postList, ...data]);
        });
    }, [page]);
    return (
        <Container>
            {postList.map((post, idx) => (
                <Post key={idx} post={post} />
            ))}
            {!isLast && (
                <BtnMore onClick={() => setPage(page + 1)}>더 보기</BtnMore>
            )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const BtnMore = styled.div`
    padding: 10px 20px;
    margin-top: 30px;

    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6);

    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    text-align: center;
    user-select: none;

    cursor: pointer;
`;

export default Home;
