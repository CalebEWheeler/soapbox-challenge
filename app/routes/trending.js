import Route from '@ember/routing/route';
import { api } from '../data/keys';

export default class TrendingRoute extends Route {
  //creating a model for the route to handle my Promise to GIPHY api.
  model() {
    const getTrendingGifs = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api.key}&limit=25&rating=pg-13`)
    .then(result => result.json())
    .then(retrievedGifs => {
      console.log(retrievedGifs.data)
      return retrievedGifs.data;
    })
    .catch(error => console.log(error));
    //will return the first 25 GIFS from GIPHY api with a rating of pg-13 to be made available in my template through the model.
    return getTrendingGifs;
  }
}
