// cart.js

// 获取购物车信息
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// 获取购物车元素
const cartContainer = document.getElementById('cart-container');
const checkoutButton = document.getElementById('checkout-button');

// 渲染购物车内容
function renderCart() {
  // 清空购物车内容
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    // 购物车为空
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = '您的购物车是空的';
    cartContainer.appendChild(emptyMessage);
  } else {
    // 购物车不为空
    cart.forEach(item => {
      // 创建购物车条目元素
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      // 创建游戏名称元素
      const gameName = document.createElement('p');
      gameName.textContent = item.name;

      // 创建游戏价格元素
      const gamePrice = document.createElement('p');
      gamePrice.textContent = `Price: ${item.price}$`;


      // 将元素添加到购物车条目元素
      cartItem.appendChild(gameName);
      cartItem.appendChild(gamePrice);


      // 将购物车条目元素添加到购物车容器
      cartContainer.appendChild(cartItem);
    });
  }
}

// 添加结账按钮的点击事件
checkoutButton.addEventListener('click', () => {
  // 检查购物车是否为空
  if (cart.length === 0) {
    alert('您的购物车是空的！');
    return;
  }

  // 跳转到 checkout.html
  window.location.href = 'checkout.html';
});

// 渲染购物车内容
renderCart();