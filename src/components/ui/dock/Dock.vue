<template>
  <div
    ref="dockRef"
    :class="
      cn(
        'bg-white mx-auto mt-8 flex h-auto w-max rounded-[9999px] border transition-all gap-[38px]',
        orientation === 'vertical' && 'flex-col w-[auto] h-max',
        dockClass,
        props.class
      )
    "
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    :style="computedStyles"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, provide, onMounted } from "vue";
import { cn } from "@/lib/utils";
import {
  MOUSE_X_INJECTION_KEY,
  MOUSE_Y_INJECTION_KEY,
  MAGNIFICATION_INJECTION_KEY,
  DISTANCE_INJECTION_KEY,
  ORIENTATION_INJECTION_KEY,
} from "./injectionKeys";

const props = defineProps({
  class: { type: null, required: false },
  magnification: { type: Number, required: false, default: 60 },
  distance: { type: Number, required: false, default: 140 },
  direction: { type: String, required: false, default: "middle" },
  orientation: { type: String, required: false, default: "horizontal" },
});

const dockRef = ref(null);
const mouseX = ref(Infinity);
const mouseY = ref(Infinity);

// 计算样式 - 使用行内样式确保内边距生效
const computedStyles = computed(() => ({
  boxSizing: 'border-box',
  paddingLeft: '42px',
  paddingRight: '42px',
  paddingTop: '21px',
  paddingBottom: '21px',
  // 垂直布局时交换内边距
  ...(props.orientation === 'vertical' && {
    paddingLeft: '21px',
    paddingRight: '21px',
    paddingTop: '42px',
    paddingBottom: '42px',
  })
}));

const magnification = computed(() => props.magnification);
const distance = computed(() => props.distance);

const dockClass = computed(() => ({
  "items-start": props.direction === "top",
  "items-center": props.direction === "middle",
  "items-end": props.direction === "bottom",
}));

// 强制应用样式的备选方案
onMounted(() => {
  if (dockRef.value) {
    // 双重保障：直接操作DOM设置样式
    const el = dockRef.value;
    el.style.boxSizing = 'border-box';
    el.style.paddingLeft = '42px';
    el.style.paddingRight = '42px';
    el.style.paddingTop = '21px';
    el.style.paddingBottom = '21px';
    
    if (props.orientation === 'vertical') {
      el.style.paddingLeft = '21px';
      el.style.paddingRight = '21px';
      el.style.paddingTop = '42px';
      el.style.paddingBottom = '42px';
    }
  }
});

function onMouseMove(e) {
  requestAnimationFrame(() => {
    mouseX.value = e.pageX;
    mouseY.value = e.pageY;
  });
}

function onMouseLeave() {
  requestAnimationFrame(() => {
    mouseX.value = Infinity;
    mouseY.value = Infinity;
  });
}
provide(MOUSE_X_INJECTION_KEY, mouseX);
provide(MOUSE_Y_INJECTION_KEY, mouseY);
provide(ORIENTATION_INJECTION_KEY, props.orientation);
provide(MAGNIFICATION_INJECTION_KEY, magnification);
provide(DISTANCE_INJECTION_KEY, distance);
</script>
