// services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getContacts = () => API.get("/users");
export const addContact = (data) => API.post("/users", data);
export const updateContact = (id, data) => API.put(`/users/${id}`, data);
export const deleteContact = (id) => API.delete(`/users/${id}`);