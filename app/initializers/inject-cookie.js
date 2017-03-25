export function initialize(application) {
  application.inject('service', 'cookie', 'cookie:main');
}

export default {
  name: 'inject-cookie',
  after: ['cookie'],
  initialize
};
