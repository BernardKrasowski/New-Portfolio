import axios from "axios";

const url = "https://portfoliobernard.herokuapp.com/email";

export const createPost = (newPost) => axios.post(url, newPost);
