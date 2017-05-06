import Ember from 'ember';

export default Ember.Component.extend({
  isSubmitted: false,
  isLoading: false,

  saveButtonLabel: Ember.computed("isLoading", function() {
    return this.get("isLoading") ? "Now Saving..." : "Start voting!!";
  }),

  actions: {
    addChoice() {
      this.get("poll").addChoice();
    },

    removeChoice(index) {
      const poll = this.get("poll");
      const targetChoice = poll.get("choices").objectAt(index);

      if (Ember.isEmpty(targetChoice.get("body")) ||
          window.confirm("Really want to remove? (this operation is can't undo)")) {
        poll.removeChoice(index);
      }
    },

    submit() {
      this.set("isSubmitted", true);
      const poll = this.get("poll");
      if (poll.get("isValid")) {
        this.set("isLoading", true);
        poll.saveWithChoices().then(() => {
          this.set("isLoading", false);
          this.sendAction("onCreate", poll);
        });
      }
    },
  },
});
