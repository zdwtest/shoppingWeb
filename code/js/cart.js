        // 获取 localStorage 中的购物车信息
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // 获取购物车商品列表区域
        let cartItemsContainer = document.getElementById('cart-items');

        // 获取总价区域
        let totalPriceElement = document.getElementById('total-price');

        // 获取清空购物车按钮
        let clearCartButton = document.getElementById('clear-cart');

        // 获取结算按钮
        let checkoutButton = document.getElementById('checkout');

        // 渲染购物车商品列表
        function renderCartItems() {
            cartItemsContainer.innerHTML = ''; // 清空列表

            let totalPrice = 0;

            // 遍历购物车商品
            cart.forEach(item => {
                let cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>数量：<span class="item-quantity">${item.quantity}</span></p>
                    <p>价格：￥<span class="item-price">${item.price}</span></p>
                    <button class="adjust-quantity" data-product-id="${item.id}" data-action="decrease">-</button>
                    <button class="adjust-quantity" data-product-id="${item.id}" data-action="increase">+</button>
                `;
                cartItemsContainer.appendChild(cartItem);

                // 计算总价
                totalPrice += item.price * item.quantity;
            });

            // 更新总价
            totalPriceElement.textContent = totalPrice.toFixed(2);
        }

        // 更新购物车数量
        function updateCartCount() {
            let cartCount = 0;
            cart.forEach(item => {
                cartCount += item.quantity;
            });
            document.getElementById('cart-count').textContent = cartCount;
        }

        // 清空购物车
        clearCartButton.addEventListener('click', () => {
            localStorage.removeItem('cart');
            cart = [];
            renderCartItems();
            updateCartCount();
        });

        // 结算
        checkoutButton.addEventListener('click', () => {
            // 跳转到结算页面
            window.location.href = 'checkout.html';
        });

        // 调整商品数量
        cartItemsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('adjust-quantity')) {
                const productId = event.target.dataset.productId;
                const action = event.target.dataset.action;

                // 查找商品
                let productIndex = cart.findIndex(item => item.id === productId);
                if (productIndex !== -1) {
                    if (action === 'increase') {
                        cart[productIndex].quantity++;
                    } else if (action === 'decrease' && cart[productIndex].quantity > 1) {
                        cart[productIndex].quantity--;
                    } else if (action === 'decrease' && cart[productIndex].quantity === 1) {
                        cart.splice(productIndex, 1); // 删除数量为 0 的商品
                    }

                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCartItems();
                }
            }
        });

        // 页面加载时渲染购物车商品列表
        renderCartItems();
        updateCartCount();