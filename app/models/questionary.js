import Ember from 'ember';
import DS from 'ember-data';
import times from 'npm:lodash/times';

const {
  attr,
  hasMany,
} = DS;

export default DS.Model.extend({
  title: attr("string"),
  choices: hasMany("choice", { async: true }),

  errors: [],

  ready() {
    const choices = this.get("choices");
    const store = this.get("store");
    if (choices.length > 0) { return; }

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
});
