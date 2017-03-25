import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get("store").createRecord("questionary", {
      title: "あなたの好きなコーヒーは？",
      choices: [
        this.get("store").createRecord("choice", { body: "エスプレッソ" }),
        this.get("store").createRecord("choice", { body: "カプチーノ" }),
        this.get("store").createRecord("choice", { body: "カフェラテ" }),
      ]
    });
  },
});
