import { Link, Outlet, useNavigate } from "react-router-dom";

export const users = [
    { id: 1, name: "seok", email: "hbs9312@gmail.com" },
    { id: 2, name: "gwang", email: "gwang0310@naver.com" },
    { id: 3, name: "heoja", email: "heoja0517@nate.com" },
];

function Hello() {
    // Link태그를 클릭하는 것 외에 URL을 변경할 때 사용한다.
    const naviGate = useNavigate();
    const onChangeLink = (id) => {
        if (window.confirm("이동하시겠습니까?")) naviGate(`/hello/${id}`);
    };
    return (
        <div>
            <h1>Hello</h1>
            <p>Hello 페이지 입니다.</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p onClick={() => onChangeLink(user.id)}>{user.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hello;
