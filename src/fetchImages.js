import axios from 'axios';
export async function fetchImages(name, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '33116099-d5555d2963401bafb3e45566a';
  const resp = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );

  return await resp.data;
}
