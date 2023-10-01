let timeoutId;

function toggleFloatBox() {
  const floatBox = document.getElementById('floatBox');
  floatBox.classList.toggle('open');

  clearTimeout(timeoutId);

  if (floatBox.classList.contains('open')) {
    // 在此处实时获取并展示最近十条 commits
    fetchCommits();
  } else {
    // 清空 commits 内容
    document.getElementById('commitsContent').innerHTML = '';
  }

  // 设置新的计时器，在鼠标离开按钮或悬浮框5秒后调用 hideFloatBox 函数
  timeoutId = setTimeout(hideFloatBox, 5000);
}

function fetchCommits() {
  // 使用合适的方法获取 commits，并将结果展示在 float-box-content 中
  // 以下仅为示例代码，你需要根据实际情况进行修改

  const url = 'https://api.github.com/repos/Grey-Wind/Novels/commits?per_page=10';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const commitsContent = document.getElementById('commitsContent');

      data.forEach((commit) => {
        const commitElement = document.createElement('a');
        commitElement.href = commit.html_url;
        commitElement.target = "_blank";
        commitElement.textContent = commit.commit.message;
        commitElement.classList.add('float-link');
        commitsContent.appendChild(commitElement);
      });
    })
    .catch((error) => console.log(error));
}

function hideFloatBox() {
  const floatBox = document.getElementById('floatBox');
  floatBox.classList.remove('open');
}