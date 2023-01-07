import axios from "axios";

const token = localStorage.getItem("access-token");

axios.defaults.baseURL = "http://101.101.218.43";

if (token) {
    axios.defaults.headers = {
        Authorization: `Bearer ${token}`,
    };
}

export const signUp = async (form) => {
    console.log(form);
    try {
        const result = await axios.post("users", {
            ...form,
        });

        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
};

export const signIn = (form) => {
    console.log(form);
    try {
        const result = axios.post("users/login", {
            ...form,
        });

        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
};

export const getCurrentUser = () => {
    return axios.get("users/current");
};

export const patchProfile = (form) => {
    return axios.patch("users/profile", form);
};

export const postPost = (form) => {
    return axios.post("posts", form);
};
