import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentUser, patchProfile } from "../../api/admin";

function Profile() {
    const [user, setUser] = useState({});

    const { name, profile_url } = user;

    const onChange = (e) => {
        console.log("e.target.files : ", e.target.files);
        console.log("e.target.files[0] : ", e.target.files[0]);

        const form = new FormData();
        form.append("image", e.target.files[0]);
        patchProfile(form).then((res) => {
            console.log(res);
        });
    };

    useEffect(() => {
        getCurrentUser().then((res) => {
            console.log(res);
            setUser(res.data.data);
        });
    }, []);
    return (
        <Container>
            <Wrapper>
                <UserName>{name}</UserName>
                <ProfileCircle htmlFor="profile">
                    <img src={profile_url} alt="" />
                </ProfileCircle>
                <input
                    type="file"
                    accept="image/*"
                    id="profile"
                    style={{ display: "none" }}
                    onChange={onChange}
                />
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const UserName = styled.h2`
    text-align: center;
`;

const ProfileCircle = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;

    margin-top: 30px;

    border: 3px solid #eee;
    border-radius: 50%;

    overflow: hidden;
    cursor: pointer;
`;

export default Profile;
