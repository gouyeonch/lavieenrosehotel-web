import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hotel.dcs-hyungjoon.com', // API의 기본 URL 설정

});
  
export default api;