import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    jumpTo(questionary) {
      this.transitionToRoute("questionary", questionary.get("id"));
    },
  },
});
