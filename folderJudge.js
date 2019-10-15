function isFolderFull(folder, limit) {
  if (limit > 300) {
    limit = 300;
  }
  
  var files = folder.getFiles();
  var fileCount = 0;
  while (files.hasNext() && fileCount < limit) {
    var file = files.next();
    fileCount++;
  }
  
  return fileCount >= limit;
}

/**
 * test function
 */
function testFolderIsFull() {
  var folderId = 'YOUR_FOLDER_ID';
  var folder = DriveApp.getFolderById(folderId);
  var limit = 5; // if a folder has 5 files, then it is full.
  
  var actual = isFolderFull(folder, limit)
  var expected = true;
  
  assertSame('testFolderIsFull', expected, actual);
}