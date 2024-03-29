import axios from "axios";

const token = localStorage.getItem("access-token");

axios.defaults.baseURL = "http://101.101.218.43";

if (token) {
    axios.defaults.headers = {
        Authorization: `Bearer ${token}`,
    };
}

export const signUp = async (form) => {
    const result = await axios.post("users", {
        ...form,
    });

    return result;
};

export const signIn = async (form) => {
    const result = await axios.post("users/login", {
        ...form,
    });
    const token = result.data.data.token;

    window.localStorage.setItem("access-token", token);

    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    return true;
};

export const getCurrentUser = async () => {
    const { data } = await axios.get("users/current");
    return data.data;
};

export const patchProfile = (form) => {
    return axios.patch("users/profile", form);
};

export const postPost = async (form) => {
    const { data } = await axios.post("posts", form);
    return data.data;
};

export const getPosts = async (page = 1) => {
    const { data } = await axios.get(`posts?page=${page}`);
    return data.data;
};

export const getComments = async (postId, page = 1) => {
    const { data } = await axios.get("comments", {
        params: {
            page,
            postId,
        },
    });
    return data.data;
};

export const setComment = async (form) => {
    const { data } = await axios.post(
        `comments?postId=${form.postId}&content=${form.content}`
    );
    console.log(data);
};

export const deleteComment = async (commentId) => {
    const { data } = await axios.delete(`comments/${commentId}`);
    console.log(data);
};

export const getPostById = async (postId) => {
    const { data } = await axios.get(`posts?postId=${postId}`);
    return data.data;
};

export const convertUrl = async (url) => {
    const res = await fetch(url);
    const data = await res.blob();
    const ext = url.split(".").pop();
    const fileName = url.split("/").pop();
    const metaData = { type: `image/${ext}` };

    return new File([data], fileName, metaData);
};

export const searchUser = async (name) => {
    const { data } = await axios.get(`users/search`, {
        params: {
            name,
        },
    });
    return data.data;
};

export const getUserById = async (id) => {
    const { data } = await axios.get("/users/" + id);
    return data.data;
};

export const getUserPostById = async (author) => {
    const { data } = await axios.get("posts/author/" + author);
    console.log(data.data);
    return data.data;
};
