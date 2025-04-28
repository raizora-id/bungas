import 'npm:@testing-library/jest-dom';
import { afterEach } from 'npm:vitest';
import { cleanup } from 'npm:@testing-library/react';

// Runs cleanup after each test case to avoid test leakage
afterEach(() => {
  cleanup();
});