import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useTodoDispatch } from "../context/todos";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

function TodoItem({ todo }) {
    const { id, text, done } = todo;
    const [disapper, setDisapper] = useState(false);
    const dispatch = useTodoDispatch();
    const onToggle = () => {
        dispatch({
            type: "TOGGLE_TODO",
            id,
        });
    };
    const onRemove = () => {
        // if()
        setDisapper(true);
        setTimeout(() => {
            dispatch({ type: "REMOVE_TODO", id });
        }, 400);
    };
    return (
        <ItemBlock disapper={disapper}>
            <CheckCircle onClick={onToggle} done={done}>
                {<AiOutlineCheck />}
            </CheckCircle>
            <p>{text}</p>
            <TrashIcon onClick={onRemove} />
        </ItemBlock>
    );
}

const ItemBlock = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 10px;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    user-select: none;

    p {
        flex: 1;
    }

    transition: transform 0.4s;
    ${({ disapper }) =>
        disapper &&
        css`
            transform: translate(100%);
        `}
`;

const TrashIcon = styled(BsFillTrashFill)`
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

const CheckCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 50%;

    ${({ done }) =>
        done &&
        css`
            background-color: black;
        `}
`;

export default TodoItem;
