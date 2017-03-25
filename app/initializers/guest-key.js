export function initialize(application) {
  application.inject('component', 'guestKey', 'service:guest-key');
}

export default {
  name: 'guest-key',
  initialize
};
