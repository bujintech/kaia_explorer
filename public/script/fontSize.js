function setRem() {
  const baseSize = 16;
  const width = document.body.clientWidth;

  let newSize = (width / 1920) * baseSize;
  if (width <= 668) {
    newSize = (width / 375) * baseSize;
  }
  document.documentElement.style.fontSize = newSize + "px"; // 设置根字体大小
}

// 初始化设置
setRem();

// 监听窗口调整
window.addEventListener("resize", setRem);
