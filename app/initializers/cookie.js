export function initialize(application) {
  application.inject('component', 'cookie', 'cookie:main');
}

export default {
  name: 'cookie',
  initialize
};
