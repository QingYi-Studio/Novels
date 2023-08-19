document.getElementById("floating-button").addEventListener("click", function() {
  // 创建或显示右侧悬浮框
var floatingBox = document.createElement("div");
floatingBox.id = "floating-box";
document.body.appendChild(floatingBox);

// 设置悬浮框样式
floatingBox.style.position = "fixed";
floatingBox.style.top = "20px";
floatingBox.style.right = "20px";
floatingBox.style.width = "33%";
floatingBox.style.height = "100%";
/* 添加其他样式 */

// 获取最近十条GitHub仓库的commits，并将其添加到悬浮框中
// 使用合适的API和数据处理方法来实现此功能

});
