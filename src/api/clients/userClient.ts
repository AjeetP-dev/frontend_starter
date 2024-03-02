import axios from 'axios';


export const userClient = {
    getUser: async (): Promise<any> => {
        try {
            const url = 'http://localhost:3001/posts';
            const response = await axios.get(url);
            console.log("data inside get User", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching user data", error);
            throw error;
        }
    }
};


