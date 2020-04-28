import { Pact } from '@pact-foundation/pact';

import { fetchCharacters } from '../../../src/service/api';
import charactersInteraction from '../interactions/characters.interaction';
import provider from '../settings/provider.mock';

const mockProvider = new Pact(provider);

describe('API Pact Test - Characters Service', () => {
  beforeAll(async () => 
    await mockProvider.setup().then(() => {
      mockProvider.addInteraction(charactersInteraction);
    })
  );

  afterEach(() => mockProvider.verify());

  afterAll(() => mockProvider.finalize());

  it('should return the expected data', async () => {
    const response = await fetchCharacters();

    const { name, age } = response.data[0];

    expect(response.status).toEqual(200);
    expect(name).toBe('Walter White');
    expect(age).toBe(58);
  });
});