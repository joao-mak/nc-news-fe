import axios from 'axios';

const baseURL = 'https://maks-nc-news.herokuapp.com/api'

export const fetchTopics = () => {
    return axios.get(`${baseURL}/topics`)
}

export const fetchArticles = (topic) => {
    return axios.get(`${baseURL}/articles`, {
        params: {topic}
    })
}

export const fetchArticleById = (article_id) =>  {
    return axios.get(`${baseURL}/articles/${article_id}`)
}

export const fetchCommentsByArticleId = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}/comments`)
}

export const patchArticleById = (article_id, incrementValue) => {
    return axios.patch(`${baseURL}/articles/${article_id}`, 
        { inc_votes: incrementValue })
}

export const patchCommentsById = (comment_id, incrementValue) => {
    return axios.patch(`${baseURL}/comments/${comment_id}`, 
        { inc_votes: incrementValue })
}

export const postComment = (article_id, username, body) => {
    return axios.post(`${baseURL}/articles/${article_id}/comments`, 
        { username: username, body: body })
}

export const fetchUserByUsername = (username) => {
    return axios.get(`${baseURL}/users/${username}`);
}

export const deleteCommentById = (comment_id) => {
    return axios.delete(`${baseURL}/comments/${comment_id}`)
}