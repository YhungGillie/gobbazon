document.addEventListener('DOMContentLoaded', () => {

    const
        cartCount =
            document.getElementById('cart-count');

    const
        cartItemsContainer =
            document.getElementById('cart-items');

    const
        totalPriceElement =
            document.getElementById('total-price');



    function
        renderCart() {

        const
            cart =
                JSON.parse(localStorage.getItem('cart'))
                || [];

        cartItemsContainer.innerHTML = '';

        let
            totalPrice =
                0;



        cart.forEach(item => {

            const productDiv = document.createElement('div');

            productDiv.className = 'cart-item';

            productDiv.innerHTML =
                `<p>Product ID: ${item.id}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>`;

            cartItemsContainer.appendChild(productDiv);

            totalPrice
                += item.price
                *
                item.quantity;

        });



        totalPriceElement.textContent
            =
            totalPrice.toFixed(2);

    }



    function
        updateCartCount() {

        const
            cart =
                JSON.parse(localStorage.getItem('cart'))
                || [];

        const
            totalCount =
                cart.reduce((total,
                    item) => total
                    + item.quantity,
                    0);

        cartCount.textContent
            =
            totalCount;

    }



    renderCart();

    updateCartCount();

});