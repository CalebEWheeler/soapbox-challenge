import Route from '@ember/routing/route';
import { api } from '../data/keys';

export default class TrendingRoute extends Route {
  //creating a model for the route to handle my Promise to GIPHY api.
  model() {
    const getTrendingGifs = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api.key}&limit=25&rating=r`)
    .then(result => result.json())
    .then(retrievedGifs => {
      console.log(retrievedGifs)
    })
    .catch(error => console.log(error));

    return getTrendingGifs;
  }
}
