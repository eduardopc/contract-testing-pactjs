import { Verifier } from '@pact-foundation/pact';

import { local, pactflow } from './broker.verifications';

describe('Pact Verification', () => {
  it('should validate the expectations of the consumer service', () => {
    const opts = process.argv.pop().includes("pactflow") ? pactflow : local;

    return new Verifier(opts).verifyProvider();
  })
});