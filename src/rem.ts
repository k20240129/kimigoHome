// rem等比适配配置文件
// 基准大小
const baseSize = 16;
// 设置 rem 函数
function setRem() {
  // 当前页面屏幕分辨率相对于 1280宽的缩放比例，可根据自己需要修改
  const scale = document.documentElement.clientWidth / 1680;
  // 设置页面根节点字体大小（“Math.min(scale, 3)” 指最高放大比例为3，可根据实际业务需求调整）
  document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 1)}px`;
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = () => {
  setRem();
};
