/**
 * Jest unit tests - run with: npm run test:jest
 */
import { Person, CreatePerson, UpdatePerson } from '../../src/app/person/person.model';

describe('Person model (Jest)', () => {
  it('should have correct Person interface shape', () => {
    const person: Person = {
      id: '1',
      name: 'Ada',
      email: 'ada@test.com',
      createdAt: '2025-01-01',
      updatedAt: '2025-01-02',
    };
    expect(person.id).toBe('1');
    expect(person.name).toBe('Ada');
    expect(person.email).toBe('ada@test.com');
  });

  it('CreatePerson should require name and email', () => {
    const create: CreatePerson = {
      name: 'Test',
      email: 'test@test.com',
    };
    expect(create.name).toBeDefined();
    expect(create.email).toBeDefined();
  });

  it('UpdatePerson should allow partial updates', () => {
    const update: UpdatePerson = { name: 'Updated' };
    expect(update.name).toBe('Updated');
    expect(update.email).toBeUndefined();
  });
});
