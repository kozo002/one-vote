import DS from 'ember-data';
import times from 'npm:lodash/times';
import constant from 'npm:lodash/constant';

const {
  attr,
  hasMany,
} = DS;

export default DS.Model.extend({
  title: attr("string"),
  choices: hasMany("choice", { async: true }),

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
  }
});
