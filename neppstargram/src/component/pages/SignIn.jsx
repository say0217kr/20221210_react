import styled from "styled-components";
import { useInputs } from "../../hook/useInputs";
import AdminForm from "../admin/AdminForm";
import { Input } from "../common/input";
import { Button } from "../common/button";
import { getCurrentUser, signIn } from "../../api/admin";
import { useNavigate } from "react-router-dom";
import { useUserIdDispatch } from "../../data/auth";

function SignIn() {
    const [inputs, handleInputs] = useInputs({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const dispatch = useUserIdDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(inputs);

            const user = await getCurrentUser();
            dispatch(user.id);

            navigate("/");
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    const signUp = (e) => {
        e.preventDefault();

        navigate("/signUp");
    };

    return (
        <AdminForm title="로그인" onSubmit={onSubmit}>
            <InputWrapper>
                <Input
                    type="email"
                    name="email"
                    placeholder="이메일을 입력해주세요."
                    onChange={handleInputs}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력해주세요."
                    onChange={handleInputs}
                />
            </InputWrapper>

            <BtnWrapper>
                <Button bgColor="#999" type="submit">
                    로그인
                </Button>
                <Button onClick={signUp}>회원가입</Button>
            </BtnWrapper>
        </AdminForm>
    );
}

const InputWrapper = styled.div``;

const BtnWrapper = styled.div`
    margin-top: 30px;
`;

export default SignIn;
