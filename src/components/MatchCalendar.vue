<template>
  <div class="app-container">
    <!-- 背景图片 -->
    <div class="page-background"></div>

    <!-- 侧边导航栏 -->
    <SidebarNav />

    <!-- 主内容区域：赛事日历 -->
    <main class="main-content">
      <div class="match-calendar-container">
        <!-- 左侧日历区域 -->
        <div class="calendar-wrapper">
          <div class="calendar-header">
            <div class="date-nav">
              <div class="year-nav">
                <button @click="changeYear(-1)" class="nav-btn" aria-label="上一年">
                  <i class="fa fa-chevron-left"></i>
                </button>
                <span class="year-display">{{ currentYear }}</span>
                <button @click="changeYear(1)" class="nav-btn" aria-label="下一年">
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
              
              <div class="month-selector">
                <button 
                  v-for="(month, index) in months" 
                  :key="index"
                  @click="setMonth(index)"
                  class="month-btn"
                  :class="{ 'active': currentMonth === index }"
                >
                  {{ month }}
                </button>
              </div>
            </div>
            
            <div class="match-day-tag">
              <span class="dot"></span>
              比赛日
            </div>
          </div>
          
          <div class="weekdays">
            <span v-for="(weekday, index) in weekdays" :key="index" class="weekday">
              {{ weekday }}
            </span>
          </div>
          
          <div class="calendar-grid">
            <div 
              class="calendar-cell empty" 
              v-for="(empty, index) in prevMonthEmptyCells" 
              :key="'empty-' + index"
            ></div>
            
            <div 
              class="calendar-cell"
              :class="{
                'today': isToday(date),
                'selected': isSelected(date),
                'has-match': hasMatch(date)
              }"
              v-for="date in currentMonthDates"
              :key="date.getTime()"
              @click="selectDate(date)"
            >
              <span class="date-number">{{ date.getDate() }}</span>
            </div>
          </div>
        </div>
        
        <!-- 右侧赛程区域 -->
        <div class="schedule-wrapper">
          <div class="schedule-header">
            <i class="fa fa-calendar-o"></i>
            <h3 class="schedule-title">当日赛程</h3>
            <span class="schedule-date">
              {{ selectedDate.getFullYear() }}年{{ selectedDate.getMonth() + 1 }}月{{ selectedDate.getDate() }}日
            </span>
          </div>
          
          <div class="schedule-content">
            <template v-if="selectedDateMatches.length === 0">
              <div class="no-match">
                <i class="fa fa-calendar-times-o"></i>
                <p>当前所选日期暂无赛事安排</p>
              </div>
            </template>
            
            <template v-else>
              <div 
                class="match-item"
                v-for="(match, index) in selectedDateMatches"
                :key="index"
              >
                <div class="match-time">{{ match.time }}</div>
                <div class="match-league">{{ match.league }}</div>
                <div class="match-teams">{{ match.teams }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航栏 -->
    <Navigation />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SidebarNav from './SidebarNav.vue';
import Navigation from './Navigation.vue';

const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

const today = new Date();
const selectedDate = ref(new Date(today));
const currentYear = ref(today.getFullYear());
const currentMonth = ref(today.getMonth());

const matchData = [
  {
    date: new Date(2025, 7, 15),
    matches: [
      { time: '09:30', league: '校长杯', teams: '集成电路与光电芯片学院 VS 工程物理学院' },
      { time: '14:00', league: '校长杯', teams: '集成电路与光电芯片学院 VS 工程物理学院' }
    ]
  }
];

const currentMonthDates = computed(() => {
  const dates = [];
  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(new Date(currentYear.value, currentMonth.value, day));
  }
  return dates;
});

const prevMonthEmptyCells = computed(() => {
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay();
  return firstDayOfMonth;
});

const isToday = (date) => {
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};

const isSelected = (date) => {
  return (
    date.getFullYear() === selectedDate.value.getFullYear() &&
    date.getMonth() === selectedDate.value.getMonth() &&
    date.getDate() === selectedDate.value.getDate()
  );
};

const hasMatch = (date) => {
  return matchData.some(item => 
    item.date.getFullYear() === date.getFullYear() &&
    item.date.getMonth() === date.getMonth() &&
    item.date.getDate() === date.getDate()
  );
};

const selectedDateMatches = computed(() => {
  const matches = matchData.find(item => 
    item.date.getFullYear() === selectedDate.value.getFullYear() &&
    item.date.getMonth() === selectedDate.value.getMonth() &&
    item.date.getDate() === selectedDate.value.getDate()
  );
  return matches ? matches.matches : [];
});

const setMonth = (monthIndex) => {
  currentMonth.value = monthIndex;
};

const changeYear = (step) => {
  currentYear.value += step;
};

const selectDate = (date) => {
  selectedDate.value = new Date(date);
};
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
  padding: 15px;
  overflow-y: auto;
  max-height: calc(100vh - 70px);
  box-sizing: border-box;
}

.match-calendar-container {
  display: flex;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  background-color: #0b3b9c;
  color: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.calendar-wrapper {
  flex: 0 0 55%;
  padding: 16px 18px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}

.schedule-wrapper {
  flex: 1;
  padding: 16px 18px;
}

.calendar-header {
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.year-nav {
  margin-bottom: 10px;
}

.year-display {
  font-size: 19px;
  margin: 0 10px;
  min-width: 65px;
}

.nav-btn {
  width: 30px;
  height: 30px;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.month-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
}

.month-btn {
  padding: 4px 9px;
  font-size: 12px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.month-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.month-btn.active {
  background-color: #ff7a00;
  font-weight: 500;
  transform: scale(1.05);
}

.match-day-tag {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  justify-content: center;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #adff2f;
  margin-right: 4px;
}

.weekdays {
  display: flex;
  margin-bottom: 7px;
}

.weekday {
  flex: 1;
  text-align: center;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  padding: 3px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.calendar-cell {
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.calendar-cell.empty {
  background-color: rgba(255, 255, 255, 0.05);
  cursor: default;
}

.calendar-cell:not(.empty):hover {
  background-color: rgba(255, 255, 255, 0.18);
}

.date-number {
  font-size: 13px;
  transition: transform 0.3s ease;
}

.calendar-cell:not(.empty):hover .date-number {
  transform: translateY(-10px);
}

.today .date-number {
  color: #ff7a00;
  font-weight: 600;
}

.selected {
  border: 2px solid #adff2f;
}

.has-match::after {
  content: '';
  position: absolute;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #adff2f;
}

.schedule-header {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.schedule-title {
  font-size: 15px;
  margin-right: 10px;
}

.schedule-date {
  font-size: 12px;
  color: #ff7a00;
  font-weight: 500;
}

.schedule-content {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  padding: 14px;
  min-height: 220px;
}

.match-item {
  padding: 9px 11px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  margin-bottom: 9px;
  transition: background-color 0.2s ease;
}

.match-item:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.match-time {
  font-size: 11px;
  color: #ff7a00;
  margin-bottom: 3px;
}

.match-league {
  font-weight: 600;
  margin-bottom: 2px;
  font-size: 13px;
}

.match-teams {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
}

.no-match {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding: 18px;
}

.no-match .fa-calendar-times-o {
  font-size: 30px;
  margin-bottom: 10px;
  opacity: 0.7;
}

.no-match p {
  font-size: 13px;
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

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
    padding-bottom: 65px;
  }
  
  .main-content {
    padding: 12px;
    max-height: calc(100vh - 65px - 65px);
  }
  
  .match-calendar-container {
    flex-direction: column;
  }
  
  .calendar-wrapper {
    flex: none;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}
</style>
