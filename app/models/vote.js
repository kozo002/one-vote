import DS from 'ember-data';

const {
  attr,
  belongsTo,
} = DS;

export default DS.Model.extend({
  guestKey: attr("string"),
  choice: belongsTo("choice"),
});
