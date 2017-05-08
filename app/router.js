import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("home", { path: "/" });
  this.route("poll", { path: "p/:pollId" });
  this.route("release-notes", { path: "/release-notes" });
});

export default Router;
