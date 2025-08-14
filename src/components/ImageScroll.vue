<template>
  <div class="image-scroll-container" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
    <div 
      class="image-track" 
      :style="{ transform: `translateX(-${scrollPosition}px)`, transition: isTransitioning ? 'transform 0.5s ease' : 'none' }"
    >
      <div 
        v-for="(image, index) in repeatedImages" 
        :key="`${image.alt}-${index}`" 
        class="image-item"
        @click="goToImage(index % imageCount)"
      >
        <img 
          :src="`${base}${image.src}`"
          :alt="image.alt"
          class="scroll-image"
          loading="lazy"
        >
      </div>
    </div>
    
    <!-- 导航按钮 -->
    <button class="nav-btn prev-btn" @click="prevImage">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="nav-btn next-btn" @click="nextImage">
      <i class="fas fa-chevron-right"></i>
    </button>
    
    <!-- 指示器 -->
    <div class="indicators">
      <span 
        v-for="(_, index) in imageCount" 
        :key="index"
        class="indicator"
        :class="{ active: currentIndex === index }"
        @click="goToImage(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
const base = import.meta.env.BASE_URL;

// 接收图片数据作为props
const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item => item.src && item.alt);
    }
  },
  // 滚动速度(ms)
  interval: {
    type: Number,
    default: 3000
  },
  // 图片宽度
  imageWidth: {
    type: Number,
    default: 300
  }
});

// 状态管理
const currentIndex = ref(0);
const scrollPosition = ref(0);
const isTransitioning = ref(true);
const scrollTimer = ref(null);
const isPaused = ref(false);

// 计算属性
const imageCount = computed(() => props.images.length);

// 复制图片数组用于无缝滚动
const repeatedImages = computed(() => {
  // 为了实现无缝滚动效果，复制一份图片数组
  return [...props.images, ...props.images];
});
console.log(repeatedImages.value[0].src);

// 滚动到指定图片
const goToImage = (index) => {
  if (index < 0 || index >= imageCount.value) return;
  
  isTransitioning.value = true;
  currentIndex.value = index;
  scrollPosition.value = index * props.imageWidth;
};

// 下一张图片
const nextImage = () => {
  let nextIdx = currentIndex.value + 1;
  
  // 当到达最后一张时，先滚动到复制的第一张，然后无缝切换到真实的第一张
  if (nextIdx >= imageCount.value) {
    isTransitioning.value = true;
    currentIndex.value = 0;
    // 先滚动到复制的第一张图片位置
    scrollPosition.value = imageCount.value * props.imageWidth;
    
    // 动画结束后，关闭过渡效果，切换到真实的第一张
    setTimeout(() => {
      isTransitioning.value = false;
      scrollPosition.value = 0;
    }, 500);
  } else {
    goToImage(nextIdx);
  }
};

// 上一张图片
const prevImage = () => {
  let prevIdx = currentIndex.value - 1;
  
  if (prevIdx < 0) {
    // 当在第一张时，先关闭过渡，跳转到复制的最后一张，然后开启动画滚动到真实的最后一张
    isTransitioning.value = false;
    scrollPosition.value = imageCount.value * props.imageWidth;
    
    setTimeout(() => {
      isTransitioning.value = true;
      currentIndex.value = imageCount.value - 1;
      scrollPosition.value = (imageCount.value - 1) * props.imageWidth;
    }, 50);
  } else {
    goToImage(prevIdx);
  }
};

// 自动滚动
const startScroll = () => {
  if (scrollTimer.value) clearInterval(scrollTimer.value);
  
  scrollTimer.value = setInterval(() => {
    if (!isPaused.value) {
      nextImage();
    }
  }, props.interval);
};

// 暂停滚动
const pauseScroll = () => {
  isPaused.value = true;
};

// 恢复滚动
const resumeScroll = () => {
  isPaused.value = false;
};

// 监听图片数量变化，重置滚动
watch(imageCount, () => {
  currentIndex.value = 0;
  scrollPosition.value = 0;
  restartScroll();
});

// 重启滚动计时器
const restartScroll = () => {
  if (scrollTimer.value) {
    clearInterval(scrollTimer.value);
  }
  startScroll();
};

// 生命周期钩子
onMounted(() => {
  startScroll();
});

onUnmounted(() => {
  if (scrollTimer.value) {
    clearInterval(scrollTimer.value);
  }
});
</script>

<style scoped>
.image-scroll-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.image-track {
  display: flex;
  height: 100%;
  will-change: transform;
}

.image-item {
  width: v-bind(imageWidth + 'px');
  flex-shrink: 0;
  padding: 0 8px;
  cursor: pointer;
}

.scroll-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.scroll-image:hover {
  transform: scale(1.03);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-btn:hover {
  background-color: white;
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #42b983; /* Vue品牌绿色 */
  transform: scale(1.2);
}
</style>
