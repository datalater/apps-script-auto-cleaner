var testMessage = {};
testMessage.success = 'TEST SUCCESS';
testMessage.fail = 'TEST FAILED';
testMessage.name = 'Name: \t\t';
testMessage.expected = 'Expected: \t';
testMessage.actual = 'Actual: \t\t';
testMessage.end = "==========EOT==========\n";

function assertSame(testName, expected, actual) {
  if (isSame(expected, actual)) {
    Logger.log(testMessage.success);
    Logger.log(testMessage.name + testName);
    Logger.log(testMessage.expected + expected);
    Logger.log(testMessage.actual + actual);
    Logger.log(testMessage.end);
    return;
  }
  
  Logger.log(testMessage.fail);
  Logger.log(testMessage.name + testName);
  Logger.log(testMessage.expected + expected);
  Logger.log(testMessage.actual + actual);
  Logger.log(testMessage.end);
}

function isSame(expected, actual) {
  return expected === actual;
}