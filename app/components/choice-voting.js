import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    vote() {
      this.sendAction("onVote", this.get("choice"));
    }
  },
});
