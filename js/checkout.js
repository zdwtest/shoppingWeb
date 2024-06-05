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

            // 处理订单信息，例如发送到服务器
            // ...

            // 显示成功提示
            alert('订单已成功提交！');

            // 清空购物车
            localStorage.removeItem('cart');

            // 跳转回首页
            window.location.href = 'index.html';
        });