<template>
  <div class="app-container">
    <!-- 背景图片 -->
    <div class="page-background"></div>

    <!-- 侧边导航栏 -->
    <SidebarNav />

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="main-page-content">
        <h1 class="page-title">校园足球联赛</h1>
        <div class="welcome-message">
          <p>欢迎来到校园足球联赛官方平台</p>
          <p>在这里您可以查看最新的赛事信息、积分排名和球员数据</p>
        </div>
        
        <div class="quick-links">
          <div class="link-card" @click="$router.push('/calendar')">
            <i class="fa fa-calendar"></i>
            <span>查看赛程</span>
          </div>
          <div class="link-card">
            <i class="fa fa-bar-chart"></i>
            <span>积分排名</span>
          </div>
          <div class="link-card">
            <i class="fa fa-user"></i>
            <span>射手榜单</span>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <Navigation />
  </div>
</template>

<script setup>
import SidebarNav from './SidebarNav.vue';
import Navigation from './Navigation.vue';
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  padding-bottom: 70px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.page-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url('/App_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.85);
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 70px);
  box-sizing: border-box;
}

.main-page-content {
  max-width: 1140px;
  margin: 0 auto;
  color: white;
}

.page-title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.welcome-message {
  background-color: rgba(11, 59, 156, 0.7);
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.welcome-message p {
  margin: 8px 0;
  font-size: 16px;
}

.quick-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.link-card {
  background-color: rgba(11, 59, 156, 0.8);
  border-radius: 12px;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.link-card:hover {
  transform: translateY(-5px);
  background-color: rgba(11, 59, 156, 0.95);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.link-card i {
  font-size: 40px;
  margin-bottom: 15px;
  color: #ff7a00;
}

.link-card span {
  font-size: 18px;
  font-weight: 500;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(11, 59, 156, 0.95);
  z-index: 20;
  box-sizing: border-box;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
    padding-bottom: 65px;
  }
  
  .main-content {
    padding: 15px;
    max-height: calc(100vh - 65px - 65px);
  }
  
  .page-title {
    font-size: 24px;
  }
  
  .link-card {
    width: 140px;
    height: 140px;
  }
  
  .link-card i {
    font-size: 32px;
  }
  
  .link-card span {
    font-size: 16px;
  }
}
</style>
