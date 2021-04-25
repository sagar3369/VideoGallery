import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAf8dxjxx7Y-VpOdYQH8f-VkQmh-y_-7wI'
    }
});
