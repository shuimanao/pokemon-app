import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { mswServer } from './mswServer';

import 'whatwg-fetch';

// Establish API mocking before all tests
beforeAll(() =>
  mswServer.listen({
    onUnhandledRequest: 'error',
  })
);

// Clean up after the tests are finished
afterAll(() => mswServer.close());

// Reset requests handlers
afterEach(() => {
  cleanup();
  mswServer.resetHandlers();
});
