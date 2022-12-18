import { useEffect, useState } from "react";
import styled from "styled-components";

function Section() {
    const [idx, setIdx] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: idx * window.innerHeight, behavior: "smooth" });

        const handleIdx = (e) => {
            e.preventDefault();
            if (isScrolling) return;
            if (e.deltaY < 0 && idx === 0) return;
            if (e.deltaY > 0 && idx === 3) return;
            setIsScrolling(true);
            setTimeout(() => {
                setIsScrolling(false);
            }, 400);
            if (e.deltaY > 0) setIdx(idx + 1);
            else setIdx(idx - 1);
        };

        window.addEventListener("wheel", handleIdx, { passive: false });

        return () =>
            window.removeEventListener("wheel", handleIdx, { passive: false });
    }, [idx, isScrolling]);
    return (
        <div>
            <SectionBlock bgColor="red">1</SectionBlock>
            <SectionBlock bgColor="lime">2</SectionBlock>
            <SectionBlock bgColor="blue">3</SectionBlock>
            <SectionBlock bgColor="lightgreen">4</SectionBlock>
        </div>
    );
}

const SectionBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
    width: 100vw;
    height: 100vh;
    background-color: ${({ bgColor }) => bgColor};
`;

export default Section;
