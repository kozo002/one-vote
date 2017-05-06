import DS from 'ember-data';
import Ember from 'ember';

const {
  attr,
  belongsTo,
} = DS;

export default DS.Model.extend({
  body: attr("string"),
  questionary: belongsTo("questionary"),
  votes: attr("array"),

  isVotedBy(guestKey) {
    const votes = this.get("votes") || [];
    const vote = votes.find((gk) => gk === guestKey);
    return !Ember.isEmpty(vote);
  },

  addVoteBy(guestKey) {
    if (this.isVotedBy(guestKey)) { return; }

    const votes = this.get("votes") || [];
    votes.pushObject(guestKey);
    this.set("votes", votes);
    this.save();
  },

  loseVoteBy(guestKey) {
    this.set("votes", this.get("votes").filter((gk) => {
      return gk !== guestKey;
    }));
  }
});
