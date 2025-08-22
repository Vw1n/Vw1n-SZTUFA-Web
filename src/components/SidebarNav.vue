<template>
  <!-- 左侧导航栏 -->
  <aside class="sidebar">
    <nav class="main-nav">
      <ul>
        <!-- 赛事按钮 -->
        <li class="nav-item" :class="{ 'active': $route.name === 'Match' }">
          <router-link to="/match" class="nav-link">
            <i class="fa fa-trophy"></i>
            <span class="vertical-text">
              <span>赛</span>
              <span>事</span>
            </span>
          </router-link>
        </li>
        
        <!-- 积分榜按钮 -->
        <li class="nav-item" :class="{ 'active': $route.name === 'Ranking' }">
          <router-link to="/ranking" class="nav-link">
            <i class="fa fa-bar-chart"></i>
            <span class="vertical-text">
              <span>积</span>
              <span>分</span>
              <span>榜</span>
            </span>
          </router-link>
        </li>
        
        <!-- 赛程按钮 -->
        <li class="nav-item" :class="{ 'active': $route.name === 'MatchCalendar' }">
          <router-link to="/calendar" class="nav-link">
            <i class="fa fa-calendar"></i>
            <span class="vertical-text">
              <span>赛</span>
              <span>程</span>
            </span>
          </router-link>
        </li>
        
        <!-- 射手榜按钮 -->
        <li class="nav-item" :class="{ 'active': $route.name === 'Scorers' }">
          <router-link to="/scorers" class="nav-link">
            <i class="fa fa-user"></i>
            <span class="vertical-text">
              <span>射</span>
              <span>手</span>
              <span>榜</span>
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// 侧边导航组件逻辑
</script>

<style scoped>
/* 左侧导航栏样式 */
.sidebar {
  width: 60px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 15px 0;
  box-sizing: border-box;
  
  /* 核心调整：向右移动100px */
  position: relative;
  left: 100px;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-item {
  margin: 0;
  text-align: center;
}

.nav-link {
  width: 48px;
  height: 110px;
  border-radius: 24px;
  background-color: rgba(11, 59, 156, 0.9);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 导航按钮hover动效 */
.nav-item:hover .nav-link {
  background-color: rgba(11, 59, 156, 1);
  transform: scale(1.05);
}

/* 激活状态样式 */
.nav-item.active .nav-link {
  background-color: rgba(255, 122, 0, 0.9);
}

.nav-item.active .nav-link:hover {
  background-color: rgba(255, 122, 0, 1);
}

/* 图标样式 */
.nav-link i {
  font-size: 19px;
  margin-bottom: 10px;
}

/* 竖排文字样式 */
.vertical-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 13px;
  font-weight: 500;
}

.vertical-text span {
  line-height: 1;
}

/* 激活状态右侧标识线 */
.nav-item.active .nav-link::before {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 36px;
  background-color: white;
  border-radius: 2px 0 0 2px;
}

/* 响应式适配：小屏横向导航 */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: 65px;
    padding: 0;
    left: 0;
  }
  
  .main-nav ul {
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    width: 100%;
    padding: 0 8px;
  }
  
  .nav-link {
    width: 75px;
    height: 48px;
    border-radius: 24px;
    flex-direction: row;
    gap: 6px;
    padding: 0 8px;
  }
  
  .nav-link i {
    margin-bottom: 0;
    font-size: 15px;
  }
  
  .vertical-text {
    flex-direction: row;
    gap: 2px;
    font-size: 12px;
  }
  
  .nav-item.active .nav-link::before {
    width: 100%;
    height: 3px;
    top: 0;
    right: 0;
    transform: none;
  }
}
</style>
    