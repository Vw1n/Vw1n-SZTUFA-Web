<script setup>
import { Dock, DockIcon, DockSeparator } from './ui/dock/index.js';
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="main">
    <!-- 使用Tailwind白色背景类及配套样式 -->
    <Dock class="mb-6 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
      <DockIcon>
        <!-- 图标使用深灰色与白色背景对比 -->
        <Icon icon="mdi:github" class="w-6 h-6 text-gray-800" />
      </DockIcon>
      <DockSeparator class="bg-gray-200 w-px h-6" />
      <DockIcon>
        <Icon icon="logos:google-drive" class="w-6 h-6 text-gray-800" />
      </DockIcon>
      <DockIcon>
        <Icon icon="logos:notion-icon" class="w-6 h-6 text-gray-800" />
      </DockIcon>
      <DockIcon>
        <Icon icon="logos:whatsapp-icon" class="w-6 h-6 text-gray-800" />
      </DockIcon>
    </Dock>
  </div>
</template>

<style scoped>
/* 如需额外样式，可在此处添加 */
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
    