<template>
    <div class="first_img">
        <!-- Logo 容器 -->
        <div class="logo">
            <img src="/public/Home_logo.jpg" alt="SZTUFA Logo" />
        </div>
        <!-- 标题容器 -->
        <div class="title">
            <div class="title-white">WELCOME</div>
            <div class="title-orange">TO SZTUFA</div>
        </div>
        <!-- 背景图片 -->
        <img src="/Home_bg.jpg" alt="背景图片" />
    </div>
</template>

<style scoped>
.first_img {
    width: 93.75%;
    height: calc(100vh - 61px);
    /* 减去导航栏高度 */
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: relative;
    /* 父容器设为相对定位，供子元素绝对定位 */
}

/* Logo 样式调整 - 固定为120px×120px */
.logo {
    position: absolute;
    /* 绝对定位 */
    top: 5%;
    /* 距离顶部 5% 位置，可根据需求调整 */
    left: 50%;
    /* 水平居中基础 */
    transform: translateX(-50%);
    /* 水平居中修正 */
    z-index: 10;
    /* 确保在背景图上方 */
    width: 120px;
    /* 固定宽度 */
    height: 120px;
    /* 固定高度 */
}

/* Logo 图片样式 - 确保图片在120px×120px内正确显示 */
.logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* 保持图片比例，完整显示在容器内 */
}

/* 背景图片样式 */
.first_img>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: inline-block;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 10;
    /* 确保在背景图上方 */
}

.title-white,
.title-orange {
    font-family: 'Noto Sans Bengali ExtraCondensed';
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
}

.title-white {
    color: rgba(255, 255, 255, 1);
}

.title-orange {
    color: rgba(255, 101, 32, 1);
    letter-spacing: -2px;
}

/* 默认字体大小 - 适用于中等屏幕 */
.title-white,
.title-orange {
    font-size: clamp(5rem, 15vw, 10.625rem);
}

@font-face {
    font-family: 'Noto Sans Bengali ExtraCondensed';
    src: url('../assets/NSBE.ttf');
    font-display: swap;
}

/* 大屏幕设备 */
@media (min-width: 1200px) {
    .first_img {
        height: 88%;
    }

    .logo {
        top: 8%;
        /* 大屏幕可适当提高 Logo 位置 */
    }
}

/* 平板设备 */
@media (max-width: 992px) {
    .first_img {
        width: 96%;
        border-radius: 15px;
    }

    .logo {
        top: 6%;
    }

    .title {
        width: 90%;
    }
}

/* 手机设备 */
@media (max-width: 768px) {
    .top_nav {
        height: 50px;
    }

    .first_img {
        width: 98%;
        height: calc(100vh - 50px);
        border-radius: 10px;
        box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
    }

    .logo {
        top: 5%;
    }

    .title-white,
    .title-orange {
        letter-spacing: normal;
    }
}

/* 小屏手机 */
@media (max-width: 576px) {
    .title {
        width: 95%;
    }

    .logo {
        top: 4%;
    }

    .title-white,
    .title-orange {
        font-size: clamp(3rem, 18vw, 7rem);
    }
}
</style>