function runCleaner() {
  var folderId = 'YOUR_FOLDER_ID';
  var folder = DriveApp.getFolderById(folderId);
  var limit = 5;
  
  if (isFolderFull(folder, limit)) {
    backupOverflowFiles(folder, limit)
  }
}

function backupOverflowFiles(sourceFolder, limit) {
  var backupFolder = makeBackupFolder(); 
  moveFileInFolder(sourceFolder, limit, backupFolder);
}

function makeBackupFolder() {
  var preservationId = 'YOUR_BACKUP_ROOT_FOLDER_ID';
  var preservationFolder = DriveApp.getFolderById(preservationId);
  var folderName = now();
  return preservationFolder.createFolder(folderName);
}

function moveFileInFolder(sourceFolder, limit, targetFolder) {
  var files = sourceFolder.getFiles();
  
  var fileCount = 0;
  while (files.hasNext() && fileCount < limit) {
    var file = files.next();
    moveFile(file, targetFolder);
    fileCount++;
  }
}

function moveFile(sourceFile, targetFolder) {
  targetFolder.addFile(sourceFile);
  sourceFile.getParents().next().removeFile(sourceFile);
}