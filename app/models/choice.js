import DS from 'ember-data';
import Ember from 'ember';

const {
  attr,
  belongsTo,
  hasMany,
} = DS;

export default DS.Model.extend({
  body: attr("string"),
  questionary: belongsTo("questionary"),
  votes: hasMany("vote"),

  votesCount: Ember.computed("votes.@each", function() {
    return this.get("votes.length");
  }),

  isVotedBy(guestKey) {
    const votes = this.get("votes");
    const vote = votes.find((vote) => vote.get("guestKey") === guestKey);
    return !Ember.isEmpty(vote);
  },

  addVoteBy(guestKey) {
    if (this.isVotedBy(guestKey)) { return; }

    const store = this.get("store");
    const votes = this.get("votes");
    votes.pushObject(store.createRecord("vote", { guestKey }));
  },

  loseVoteBy(guestKey) {
    this.set("votes", this.get("votes").filter((vote) => {
      return vote.get("guestKey") !== guestKey;
    }));
  }
});
