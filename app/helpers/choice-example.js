import Ember from 'ember';

export function choiceExample(params/*, hash*/) {
  const index = params[0];
  const types = [
    "Espresso",
    "Americano",
    "Cappuccino",
    "Caffe Latte",
    "Latte Macchiato",
    "Espresso Macchiato",
  ]
  const type = types[index];
  return type === undefined ? "" : `ex: ${types[index]}`;
}

export default Ember.Helper.helper(choiceExample);
