import Ember from 'ember';

export default Ember.Component.extend({
  votedIndex: Ember.computed("questionary.choices.@each.votes", function() {
    const choices = this.get("questionary.choices");
    const guestKey = this.guestKey.get("value");
    let result;
    choices.forEach((choice, i) => {
      if (choice.isVotedBy(guestKey)) {
        result = i;
      }
    });
    return result;
  }),

  isVoted: Ember.computed("votedIndex", function() {
    const votedIndex = this.get("votedIndex");
    return !Ember.isEmpty(votedIndex);
  }),

  actions: {
    vote(choice) {
      if (this.get("isVoted")) { return; }
      choice.addVoteBy(this.guestKey.get("value"));
    },
  },
});
