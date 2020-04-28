import 'dotenv/config';

const LOG_LEVEL = process.env.LOG_LEVEL || 'WARN';
const providerService = `${process.env.SERVER_URI}:${process.env.SERVER_PORT}`;
const pactBrokerUrl = `${process.env.PACT_LOCAL_BROKER}pacts/`;

const local = {
  provider: process.env.PROVIDER_SERVICE,
  logLevel: LOG_LEVEL,
  providerBaseUrl: providerService,
  pactUrls: [`${pactBrokerUrl}provider/${process.env.PROVIDER_SERVICE}/consumer/${process.env.CONSUMER_SERVICE}/latest`],
  publishVerificationResult: true,
  providerVersion: process.env.PACT_VERSION
};

const pactflow = {
  provider: process.env.PROVIDER_SERVICE,
  providerBaseUrl: providerService,
  pactBrokerUrl: process.env.PACTFLOW_URI,
  pactBrokerToken: process.env.PACTFLOW_TOKEN,
  publishVerificationResult: true,
  providerVersion: process.env.PACT_VERSION,
  logLevel: LOG_LEVEL,
};

module.exports = {
  local,
  pactflow
};