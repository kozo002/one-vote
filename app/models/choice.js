import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany,
} = DS;

export default DS.Model.extend({
  body: attr("string"),
  questionary: belongsTo("questionary"),
  votes: hasMany("vote"),
});
