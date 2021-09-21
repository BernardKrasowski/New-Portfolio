import axios from "axios";

const url = "http://localhost:9000/email";

export const createPost = (newPost) => axios.post(url, newPost);
