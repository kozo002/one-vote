import Ember from 'ember';
import classNames from 'npm:classnames';

export default Ember.Component.extend({
  classNames: ["sharing-box"],
  isOpened: false,
  isShowingUpSucceededTooltip: false,
  isShowingUpFailedTooltip: false,
  timerID: null,

  buttonsClassName: Ember.computed("isOpened", function() {
    return classNames("sharing-box__buttons", {
      active: this.get("isOpened"),
    });
  }),

  twitterURL: Ember.computed("text", function() {
    const text = this.get("text");
    const url = `https://twitter.com/share?text=${text}&url=${window.location.href}&hashtags=onevote`;
    return Ember.String.htmlSafe(url);
  }),

  facebookURL: Ember.computed(function() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    return Ember.String.htmlSafe(url);
  }),

  clipboardURL: Ember.computed(function() {
    return window.location.href;
  }),

  showTooltip(flagName) {
    this.set(flagName, true);
    clearTimeout(this.get("timerID"));
    const timerID = setTimeout(() => {
      this.set(flagName, false);
    }, 3000);
    this.set("timerID", timerID);
  },

  actions: {
    toggle() {
      this.set("isOpened", !this.get("isOpened"));
    },

    successClipboard() {
      this.showTooltip("isShowingUpSucceededTooltip");
    },

    errorClipboard(){
      this.showTooltip("isShowingUpFailedTooltip");
    },
  }
});
