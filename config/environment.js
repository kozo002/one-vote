/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'one-vote',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.firebase = {
      apiKey: process.env.DEV_FIREBASE_API_KEY,
      authDomain: process.env.DEV_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.DEV_FIREBASE_DATABASE_URL,
      storageBucket: process.env.DEV_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.DEV_FIREBASE_MESSAGING_SENDER_ID,
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = {
      apiKey: process.env.PROD_FIREBASE_API_KEY,
      authDomain: process.env.PROD_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.PROD_FIREBASE_DATABASE_URL,
      storageBucket: process.env.PROD_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.PROD_FIREBASE_MESSAGING_SENDER_ID,
    };

    if (process.env.PROD_GOOGLE_ANALYTICS_ID != null &&
        process.env.PROD_GOOGLE_ANALYTICS_ID != "") {
      ENV.googleAnalytics = {
        webPropertyId: process.env.PROD_GOOGLE_ANALYTICS_ID
      };
    }
  }

  return ENV;
};
