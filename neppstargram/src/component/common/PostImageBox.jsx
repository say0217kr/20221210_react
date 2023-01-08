import styled, { css } from "styled-components";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useState } from "react";

function PostImageBox({ img_list }) {
    const [idx, setIdx] = useState(0);

    const handleIdx = (operand) => {
        if (
            (operand === -1 && idx + operand < 0) ||
            (operand === 1 && idx + operand > img_list.length - 1)
        ) {
            setIdx(2);
            return;
        }
        setIdx(idx + operand);
    };

    return (
        <Container>
            <BtnSlide>
                <TfiAngleLeft color="#fff" onClick={() => handleIdx(-1)} />
            </BtnSlide>
            <Wrapper idx={idx}>
                {img_list.map((img, idx) => (
                    <PostImg key={idx} url={img.url} />
                ))}
            </Wrapper>
            <BtnSlide>
                <TfiAngleRight color="#fff" onClick={() => handleIdx(-1)} />
            </BtnSlide>
        </Container>
    );
}

const Container = styled.div`
    overflow: hidden;
    position: relative;
`;

const Wrapper = styled.ul`
    display: flex;
    height: 250px;
    background: #ddd;

    transition: transform 0.4s;
    ${({ idx }) => css`
        transform: translate(${idx * -100}%);
    `}
`;

const PostImg = styled.li`
    flex-shrink: 0;
    width: 100%;

    ${({ url }) => css`
        background: url(${url}) center/ cover;
    `}
`;

const BtnSlide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;

    border-radius: 50%;

    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;

    cursor: pointer;

    &:nth-of-type(1) {
        left: 10px;
    }
    &:nth-of-type(2) {
        right: 10px;
    }
`;

export default PostImageBox;
