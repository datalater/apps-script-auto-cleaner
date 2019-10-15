function createTimeDrivenTriggers() {
  // Trigger every Monday at 09:00.
  ScriptApp.newTrigger('runCleaner')
  .timeBased()
  .onWeekDay(ScriptApp.WeekDay.MONDAY)
  .atHour(9)
  .create();
}

function getTimezone() {
  var timeZone = Session.getScriptTimeZone();
  Logger.log(timeZone);
}
