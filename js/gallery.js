const swiper = new Swiper('.game-gallery', {
  slidesPerView: 3, // 每行显示 3 个卡片
  spaceBetween: 20,
  scrollbar: {
    el: '.swiper-scrollbar', // 指定滚动条元素
    hide: true, // 隐藏滚动条
},
  autoplay: {
      delay: 2000, // 自动播放间隔 2 秒
      disableOnInteraction: false // 鼠标交互后自动播放继续
  },
  speed: 500,
  // 鼠标悬浮停止自动播放
  on: {
      mouseenter: function () {
          this.autoplay.stop(); // 停止自动播放
      },
      mouseleave: function () {
          this.autoplay.start(); // 恢复自动播放
      }
  }
});