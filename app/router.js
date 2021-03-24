import EmberRouter from '@ember/routing/router';
import config from 'soapbox-challenge/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  //used 'path' to modify the url string path to point to the routes 'index' and 'trending'
  this.route('index', {path: 'gifs'})
  this.route('trending', {path: 'gifs/trending'});
  this.route('not-found', {path: '/*path'});
});
