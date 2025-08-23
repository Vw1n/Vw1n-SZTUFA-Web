<template>
    <div class="first_img">
        <!-- Logo 容器 -->
        <!--
        <div class="logo">
            <img src="/Home_logo.png" alt="SZTUFA Logo" />
        </div>
        -->
        <!-- 标题容器 -->
        <div class="title">
            <ClientOnly>
                <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
                    <div class="title-white">WELCOME TO</div>
                    <div class="title-orange">SZTUFA</div>
                </BlurReveal>
            </ClientOnly>
        </div>
        <!-- 背景图片 -->
        <!--
        <img src="/Home_bg.jpg" alt="背景图片" />
        -->

        <!--球队队标-->
        <div class="team-icon">
            <div class="teams-icon">
                <img src="/zd.png" alt="中德队徽">
            </div>
            <div class="teams-icon">
                <img src="/jt.png" alt="交物队徽">
            </div>
            <div class="teams-icon">
                <img src="/gw.png" alt="工物队徽">
            </div>
            <div class="teams-icon">
                <img src="/jk.png" alt="健康队徽">
            </div>
            <div class="teams-icon">
                <img src="/xny.png" alt="新材能队徽">
            </div>
            <div class="teams-icon">
                <img src="/dsj.png" alt="大数据队徽">
            </div>
        </div>
    </div>
</template>

<style scoped>


.first_img {
    width: 93.75%;
    height: calc(100vh - 122px); /* 调整高度，减去导航栏和新增边距的总和 */
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
    /*
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    */
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
    width: 1200px;
    height: 481px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 20px 0px 20px 0px;
    top:169px;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.title-white,
.title-orange {
    width: 1200px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 20px 0px;
    font-family: 'Noto Sans Bengali ExtraCondensed';
    font-size: 240px;
    font-weight: 400;
    text-align: center;
}

.title-white {
    color: rgba(255, 255, 255, 1);
    line-height: 400px;
    letter-spacing: 0px;
    margin-bottom: 80px;
}

.title-orange {
    color: rgba(255, 101, 32, 1);
    line-height: 318px;
    letter-spacing: -2px;
    
}

/* 默认字体大小 - 适用于中等屏幕 */
/*
.title-white,
.title-orange {
    font-size: clamp(5rem, 15vw, 10.625rem);
}
*/
.team-icon{
    width: 1200px;
    height: 135px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top:calc(199px + 300px);
}

.teams-icon
{
    width: 128px;
    height: 128px;
    display: flex;
    opacity: 0.5;
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