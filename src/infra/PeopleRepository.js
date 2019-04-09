import fetchJsonp from 'fetch-jsonp';
import { BASE_URL } from './baseUrl';

const getPeopleFromPage = async (page) => {
  const response = await fetch(`${BASE_URL}/people/?page=${page}`);
  const people = await response.json();
  return people;
};

const getPersonImage = async (name) => {
  const url = `https://www.googleapis.com/customsearch/v1?cx=${GOOGLE_CX}&key=${GOOGLE_API_KEY}&q=${encodeURI(name)}&imgSize=medium&searchType=image`;
  console.log(url);

  // const response = await fetchJsonp(url);
  const data = await response.json();
  console.log('aqui: ', data);
  return data;
};

const PeopleRepository = {
  getPeopleFromPage,
  getPersonImage
};

export default PeopleRepository;
