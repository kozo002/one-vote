import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    jumpTo(poll) {
      this.transitionToRoute("poll", poll.get("id"));
    },
  },
});
