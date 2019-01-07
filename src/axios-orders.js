import axios from 'axios';

const instance = axios.create({
   baseURL: "https://burger-builder-c7c36.firebaseio.com/"
});

export default instance;