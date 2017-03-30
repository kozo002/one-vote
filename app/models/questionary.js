import Ember from 'ember';
import DS from 'ember-data';
import times from 'npm:lodash/times';

const {
  attr,
  hasMany,
} = DS;

export default DS.Model.extend({
  title: attr("string"),
  choices: hasMany("choice", { async: true, inverse: null }),

  errors: [],

  ready() {
    const choices = this.get("choices");
    const store = this.get("store");
    if (choices.get("length") > 0) { return; }

    times(3, () => {
      choices.pushObject(store.createRecord("choice"));
    });
  },

  addChoice() {
    const store = this.get("store");
    const choices = this.get("choices");
    choices.pushObject(store.createRecord("choice"));
  },

  removeChoice(index) {
    const choices = this.get("choices");
    choices.removeAt(index, 1);
  },

  isValid: Ember.computed("choices.@each.body", function() {
    let errors = [];
    const filledChoices = this.get("choices").filter((choice) => {
      return !Ember.isBlank(choice.get("body"));
    });

    if (filledChoices.length <= 1) {
      errors.pushObject("Please fill in choices greater than 1");
    }

    this.set("errors", errors);
    return errors.length === 0;
  }),

  isInvalid: Ember.computed("isValid", function() {
    return !this.get("isValid");
  }),

  totalVotesCount: Ember.computed("choices.@each.votesCount", function() {
    return this.get("choices").reduce((res, choice) => {
      res += choice.get("votesCount");
      return res;
    }, 0);
  }),

  eachChoicesVotesCountChanged: Ember.observer("choices.@each.votesCount", function() {
    const total = this.get("totalVotesCount");
    const choices = this.get("choices");

    if (total > 0) {
      choices.forEach((choice) => {
        const rate = Math.floor(choice.get("votesCount") / total * 100);
        choice.set("rate", rate);
      });
    } else {
      choices.forEach((choice) => choice.set("rate", 0));
    }
  }),

  saveWithChoices() {
    const choiceSaves = this.get("choices").map((choice) => {
      return choice.save();
    });
    return Ember.RSVP.all(choiceSaves).then(() => {
      this.save();
    });
  },
});
