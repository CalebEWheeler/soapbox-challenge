import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TrendingController extends Controller {
  @tracked trendingInput = "";

  @action
  readTrendingInput(trendingInput, gifs) {
    for(let gif of gifs) {
      if(gif.title.includes(trendingInput.charAt(0).toUpperCase() + trendingInput.substring(1))) {
        console.log(gif.title)
      }
      // console.log(gif.title);
    }
    // console.log(trendingInput);
  }
}
