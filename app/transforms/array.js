import DS from 'ember-data';
import Ember from 'ember';
import trim from 'npm:lodash/trim';

export default DS.Transform.extend({
  deserialize(serialized) {
    return Ember.typeOf(serialized) === "array" ? serialized : [];
  },

  serialize(deserialized) {
    const type = Ember.typeOf(deserialized);
    if (type === 'array') {
      return deserialized;
    } else if (type === 'string') {
      return deserialized.split(',').map((item) => {
        return trim(item);
      });
    } else {
      return [];
    }
  }
});
