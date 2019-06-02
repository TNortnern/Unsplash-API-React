import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6543208103a127f020ea739187b15818bbe19446d9e70d8fdaba296e0a548d07'
    }
});