import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { searchUser } from "../../api/admin";
import useDebounce from "../../hook/useDebounce";
import { Input } from "../common/input";
import UserInfo from "../common/UserInfo";

function Search() {
    const [input, setInput] = useState("");
    const [users, setUsers] = useState([]);

    const debounceSearch = useDebounce(input, 300);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            if (input === "") return;
            const data = await searchUser(input);
            console.log(data);

            setUsers(data);
        };

        fetchUsers();
    }, [debounceSearch]);

    return (
        <Container>
            <InputBox>
                <Input
                    type="text"
                    placeholder="이름을 입력해주세요."
                    onChange={handleInput}
                />
            </InputBox>
            <UserList>
                {users.map((user) => (
                    <UserItem key={user.id}>
                        <UserInfo user={user} />
                    </UserItem>
                ))}
            </UserList>
        </Container>
    );
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const InputBox = styled.div`
    padding: 5px 10px;
`;

const UserList = styled.ul`
    flex: 1;
    overflow-y: auto;
`;

const UserItem = styled.li`
    cursor: pointer;
    &:hover {
        background: #eee;
    }
`;

export default Search;
