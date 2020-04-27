import 'dotenv/config';

import path from 'path';

const LOG_LEVEL = process.env.LOG_LEVEL || 'WARN';

module.exports = {
  consumer: 'web-application',
  provider: 'characters-api-application',
  port: parseInt(process.env.MOCK_SERVER_PORT),
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: LOG_LEVEL,
  spec: 3,
  cors: true
}