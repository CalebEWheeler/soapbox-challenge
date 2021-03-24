import EmberRouter from '@ember/routing/router';
import config from 'soapbox-challenge/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', {path: 'gifs'})
  this.route('trending', {path: 'gifs/trending'});
});
