import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../api/admin";
import { useInputs } from "../../hook/useInputs";
import AdminForm from "../admin/AdminForm";
import { Button } from "../common/button";
import { Input } from "../common/input";

function SignUp() {
    const [inputs, handleInputs] = useInputs({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = inputs;

    const active = name !== "" && email !== "" && password !== "";

    const navigate = useNavigate();

    const signUpMutate = useMutation(signUp, {
        onMutate: (form) => {
            console.log(form);
        },
        onSuccess: () => {
            alert("회원가입에 성공했습니다.");
            navigate("/signIn");
        },
        onError: (err) => {
            alert(err.response.data.message);
        },
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if (!active) return;

        // signUp(inputs)
        //     .then((res) => {
        //         console.log(res);
        //         if (!res) return;
        //         alert("회원가입에 성공했습니다.");
        //         navigate("/signIn");
        //     })
        //     .catch((e) => {
        //         alert(e.response.data.message);
        //     });

        signUpMutate.mutate({ name, email, password });
    };
    return (
        <AdminForm title="회원가입" onSubmit={onSubmit}>
            <InputWrapper>
                <Input
                    type="text"
                    placeholder="이름을 입력해주세요."
                    name="name"
                    onChange={handleInputs}
                />
                <Input
                    type="email"
                    placeholder="이메일을 입력해주세요."
                    name="email"
                    onChange={handleInputs}
                />
                <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    name="password"
                    onChange={handleInputs}
                />
            </InputWrapper>

            <BtnWrapper>
                <Button bgColor={active ? "#000" : "#ddd"}>회원가입</Button>
                <Button bgColor="#ddd" type="reset">
                    취소
                </Button>
            </BtnWrapper>
        </AdminForm>
    );
}

const InputWrapper = styled.div``;

const BtnWrapper = styled.div`
    margin-top: 30px;
`;

export default SignUp;
