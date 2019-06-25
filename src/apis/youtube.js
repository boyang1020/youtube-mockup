import axios from 'axios';

const KEY = 'AIzaSyCxbj5F3AB7DZ6rcpWGN7WZf5Il2v35Px0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY
  }
});
