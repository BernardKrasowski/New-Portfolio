import axios from "axios";

const url = "https://portfoliobernard.herokuapp.com/message";

export const createPost = (newPost) => axios.post(url, newPost);
export const fetchPost = () => axios.get(url);
