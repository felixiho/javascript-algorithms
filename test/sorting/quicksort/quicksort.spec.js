var sortTestCase = require('../sort.testcase.js');
var quickSort =
      require('../../../src/sorting/quicksort/quicksort.js').quickSort;

sortTestCase(quickSort, 'Quick sort');
