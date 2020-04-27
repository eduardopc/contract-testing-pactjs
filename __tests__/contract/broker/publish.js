require('dotenv').config();

const publisher = require('@pact-foundation/pact-node');
const path = require('path');

if (process.env.PACT_LOCAL_BROKER) {
  const opts = {
      pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts/')],
      pactBroker: process.env.PACT_LOCAL_BROKER,
      tags: ['test'],
      consumerVersion: `${process.env.PACT_VERSION}`,
  };

  publisher.publishPacts(opts)
    .catch(e => {
      console.log('Publishing failed: ', e.message);
    });
} else {
  console.log('None value defined to PACT_BROKER env variable');
}