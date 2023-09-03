function downloadFile(url) {
  var element = document.createElement('a');
  element.href = url;
  element.target = '_blank';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function android() {
  var url = 'http://github.com'; // 指定要检测的网址
  var startTime = performance.now();
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var endTime = performance.now();
      var duration = endTime - startTime;

      if (duration > 300) {
        // 访问速度超过300毫秒，Gitee
        var fileUrl = 'https://gitee.com/sunrise-studio/QingYiNovelsMobile/releases/download/v1.0.0/v1.0.0.apk';
        downloadFile(fileUrl);
      } else {
        // 访问速度未超过300毫秒，GitHub
        var fileUrl = 'https://github.com/Grey-Wind/QingYiNovelsMobile/releases/latest/download/app.apk';
        downloadFile(fileUrl);
      }
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
}

function windows() {
  var url = 'http://github.com'; // 指定要检测的网址
  var startTime = performance.now();
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var endTime = performance.now();
      var duration = endTime - startTime;

      if (duration > 300) {
        // 访问速度超过300毫秒，hub.ggo.icu
        var fileUrl = 'https://hub.ggo.icu/Grey-Wind/QingYiNovels/releases/download/v2.1.0/v2.1.0.zip';
        downloadFile(fileUrl);
      } else {
        // 访问速度未超过300毫秒，GitHub
        var fileUrl = 'https://github.com/Grey-Wind/QingYiNovels/releases/download/v2.1.0/v2.1.0.zip';
        downloadFile(fileUrl);
      }
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
}

function undo() {
  alert("没做，不想做，麻烦，累了")
}













// 使用示例
// var fileUrl = 'http://example.com/file.pdf';
// downloadFile(fileUrl);
