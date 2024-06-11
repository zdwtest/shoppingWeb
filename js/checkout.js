// 获取表单元素
const checkoutForm = document.getElementById('checkout-form');

// 表单提交事件
checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 阻止默认表单提交行为

    // 获取用户输入的信息
    const name = checkoutForm.elements.name.value;
    const email = checkoutForm.elements.email.value;
    const address = checkoutForm.elements.address.value;
    const city = checkoutForm.elements.city.value;
    const zip = checkoutForm.elements.zip.value;
    const payment = checkoutForm.elements.payment.value;

    // 模拟订单处理
    alert(`订单已成功提交！\n
          姓名: ${name}\n
          邮箱: ${email}\n
          地址: ${address}\n
          城市: ${city}\n
          邮编: ${zip}\n
          支付方式: ${payment}`);

    // 清空购物车 (假设购物车信息存储在 localStorage 中)
    localStorage.removeItem('cart');

    // 跳转回首页
    window.location.href = 'index.html';
});