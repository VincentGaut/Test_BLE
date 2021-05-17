import {initializeViews} from './bluetooth_internals.js';
import {loadTestModule} from './test_loader_util.js';

document.addEventListener('DOMContentLoaded', () => {
  // Using a query of "module" provides a hook for the test suite to perform
  // setup actions.
  if (!loadTestModule()) {
    initializeViews();
  }
});