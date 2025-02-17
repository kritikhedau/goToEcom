import axios from "axios";

const API_URL = "https://www.omdbapi.com/"; 
const API_KEY = process.env.EXPO_PUBLIC_OMDB_API_KEY; // Add this in .env

const api = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY, // Automatically adds the API key to all requests
  },
});

export default api;
