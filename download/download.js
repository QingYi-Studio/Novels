function downloadFile(url) {
  var element = document.createElement('a');
  element.href = url;
  element.target = '_blank';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function android() {
  var fileUrl = 'https://hub.yzuu.cf/Grey-Wind/QingYiNovelsMobile/releases/latest/download/app.apk';
  downloadFile(fileUrl);
  alert("已开始下载")
}

function windows() {
  var fileUrl = 'https:///hub.yzuu.cf/Grey-Wind/QingYiNovels/releases/latest/download/Novels.zip';
  downloadFile(fileUrl);
  alert("已开始下载")
}

function undo() {
  alert("没做，不想做，麻烦，累了")
}













// 使用示例
// var fileUrl = 'http://example.com/file.pdf';
// downloadFile(fileUrl);
