import { TestBed } from '@angular/core/testing';
import { API_COMMAND_URL, API_QUERY_URL } from './api.config';

describe('API Config', () => {
  it('should provide API_COMMAND_URL', () => {
    const url = TestBed.inject(API_COMMAND_URL);
    expect(url).toContain('/persons');
  });

  it('should provide API_QUERY_URL', () => {
    const url = TestBed.inject(API_QUERY_URL);
    expect(typeof url).toBe('string');
  });
});
