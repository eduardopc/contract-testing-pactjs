import 'dotenv/config';

import path from 'path';

const LOG_LEVEL = process.env.LOG_LEVEL || 'WARN';

module.exports = {
  consumer: process.env.CONSUMER_SERVICE,
  provider: process.env.PROVIDER_SERVICE,
  port: parseInt(process.env.MOCK_SERVER_PORT),
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: LOG_LEVEL,
  spec: 2,
  cors: true
}