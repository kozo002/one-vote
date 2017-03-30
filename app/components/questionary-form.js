import Ember from 'ember';

export default Ember.Component.extend({
  isSubmitted: false,

  actions: {
    addChoice() {
      this.get("questionary").addChoice();
    },

    removeChoice(index) {
      const questionary = this.get("questionary");
      const targetChoice = questionary.get("choices").objectAt(index);

      if (Ember.isEmpty(targetChoice.get("body")) ||
          window.confirm("Really want to remove? (this operation is can't undo)")) {
        questionary.removeChoice(index);
      }
    },

    submit() {
      this.set("isSubmitted", true);
      const questionary = this.get("questionary");
      if (questionary.get("isValid")) {
        questionary.saveWithChoices().then(() => {
          this.sendAction("onCreate", questionary);
        });
      }
    },
  },
});
