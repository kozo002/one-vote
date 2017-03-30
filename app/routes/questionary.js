import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get("store").findRecord("questionary", params.questionaryId);
  },

  afterModel(model) {
    model.get("choices").then((choices) => {
      choices.forEach((choice) => {
        const votes = choice.get("votes") || [];
        choice.set("votesCount", votes.length);
      });
    });
  }
});
