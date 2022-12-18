import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../context/todos";
import { useInputs } from "../hook/useInputs";

function TodoCreate() {
    const [inputs, onChange, reset] = useInputs({
        text: "",
    });

    const [edit, setEdit] = useState(false);

    const { text } = inputs;

    const dispatch = useTodoDispatch();

    const nextId = useRef(4);

    const handleSubmit = () => {
        if (!edit) {
            setEdit(true);
            return;
        }
        if (!text) return;
        dispatch({
            type: "CREATE_TODO",
            id: nextId.current,
            text,
        });
        reset();
        nextId.current++;
        setEdit(false);
    };
    return (
        <CreateBlock edit={edit}>
            <InputBox edit={edit}>
                <input
                    type="text"
                    name="text"
                    onChange={onChange}
                    value={text}
                />
            </InputBox>
            <BtnSubmit
                onClick={handleSubmit}
                active={text.length > 0}
                edit={edit}
            >
                {edit ? "등록" : "추가"}
            </BtnSubmit>
        </CreateBlock>
    );
}

const CreateBlock = styled.div`
    padding: 20px 10px;
`;

const InputBox = styled.div`
    border: 1px solid #eee;
    border-width: 0;
    max-height: 0;
    overflow: hidden;

    ${({ edit }) =>
        edit &&
        css`
            padding: 0 5px;
            max-height: 40px;
            border-width: 1px;
            transition: max-height 0.5s;
        `}

    input {
        width: 100%;
        padding: 5px 0;
        border: none;
        outline: none;
    }
`;

const BtnSubmit = styled.button`
    padding: 5px 0;
    margin-top: 5px;
    width: 100%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.disabled};
    color: #fff;
    ${({ edit, theme }) =>
        !edit &&
        css`
            background-color: ${theme.colors.main};

            &:hover {
                background-color: ${theme.colors.hover};
            }

            &:active {
                background-color: ${theme.colors.active};
            }
        `}
    ${({ active, theme }) =>
        active &&
        css`
            background-color: ${theme.colors.main};
            cursor: pointer;
        `}
`;

export default TodoCreate;
