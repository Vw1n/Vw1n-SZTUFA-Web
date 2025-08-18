<template>
    <div class="first_img">
        <!-- Logo 容器 -->
        <div class="logo">
            <img src="/Home_logo.png" alt="SZTUFA Logo" />
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
    height: calc(100vh - 122px); /* 调整高度，减去导航栏和新增边距的总和 */
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: relative;
    /* 添加上边距实现垂直居中，与底部导航保持平衡 */
    margin-top: 61px; /* 与顶部导航栏高度一致，形成对称间距 */
}

/* Logo 样式调整 - 固定为120px×120px */
.logo {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: 120px;
    height: 120px;
}

/* Logo 图片样式 */
.logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
        height: 80%; /* 调整高度适配大屏幕 */
        margin-top: 80px; /* 增加上边距 */
    }

    .logo {
        top: 8%;
    }
}

/* 平板设备 */
@media (max-width: 992px) {
    .first_img {
        width: 96%;
        border-radius: 15px;
        margin-top: 50px; /* 适中的上边距 */
        height: calc(100vh - 100px);
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
        height: calc(100vh - 100px); /* 减去顶部导航和边距 */
        border-radius: 10px;
        box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
        margin-top: 50px; /* 与手机导航栏高度匹配 */
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