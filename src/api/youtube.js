import axios from 'axios';

const KEY = 'AIzaSyB6hAIoXGfffKjg6HdW1cs_pRG7A4NokCQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
