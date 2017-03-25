import Ember from 'ember';
import uuidV4 from 'npm:uuid/v4';

export default Ember.Service.extend({
  init() {
    let guestKey = this.cookie.getCookie("guestKey");
    if (Ember.isEmpty(guestKey)) {
      guestKey = uuidV4();
      this.cookie.setCookie("guestKey", guestKey);
    }
    this.set("value", guestKey);
  }
});
