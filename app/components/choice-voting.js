import Ember from 'ember';

export default Ember.Component.extend({
  isDisabled: Ember.computed("isVoted", "isAnyVoted", function() {
    const isAnyVoted = this.get("isAnyVoted");
    const isVoted = this.get("isVoted");
    return isAnyVoted && !isVoted;
  }),

  rateBarWidth: Ember.computed("choice.rate", function() {
    return new Ember.String.htmlSafe(`width:${this.get("choice.rate")}%;`);
  }),

  actions: {
    vote() {
      this.sendAction("onVote", this.get("choice"));
    }
  },
});
