<script setup>
</script>

<template>
  <div id="bg"></div>
  <router-view />
</template>

<style>
#bg {
  /* 固定定位使元素充满整个屏幕 */
  position: fixed;
  top: 0;
  left: 0;
  /* 确保元素在最底层 */
  z-index: -1;
  /* 充满整个屏幕 */
  width: 100vw;
  height: 100vh;
  /* 背景图片设置 */
  background-image: url('/App_bg.jpg');
  background-size: cover;
  /* 保持比例并覆盖整个元素 */
  background-position: center;
  /* 图片居中显示 */
  background-repeat: no-repeat;
  /* 不重复平铺 */
}
</style>
