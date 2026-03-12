function toggleTheme(selected) {
    const theme = selected === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);

    syncCheckboxes(theme);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('user-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    syncCheckboxes(savedTheme);
});

function syncCheckboxes(theme) {
    const lightBox = document.getElementById('light-theme');
    const darkBox = document.getElementById('dark-theme');

    if (lightBox && darkBox) {
        lightBox.checked = (theme === 'light');
        darkBox.checked = (theme === 'dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
	const tabs=document.querySelectorAll('.tab-btn');
	const contents=document.querySelectorAll('.settings-wrapper');

	tabs.forEach(tab=>{
		tab.addEventListener('click',()=>{
			tabs.forEach(t => t.classList.remove('active'));
			tab.classList.add('active');	
	
			contents.forEach(c => c.classList.remove('active'));
			const target = document.getElementById(tab.dataset.target);
			if (target) target.classList.add('active');
		});
	});

  // Product Container - opening and closing description

  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const desc = product.querySelector('.product-description');

    product.addEventListener('click', () => {
      // Activates the product
      const isActive = product.classList.contains('active');

      // Closes descriptions of all products except active
      products.forEach(p => {
        p.classList.remove('active');
        p.querySelector('.product-description').style.maxHeight = null;
      });

      if (!isActive) {
        product.classList.add('active');
        desc.style.maxHeight = desc.scrollHeight + "px";
      }
    });
  });

  // Cart

    const cartButtons = document.querySelectorAll('.addcart');
    const checkoutWrapper = document.querySelector('.checkout-wrapper');
    const totalElement = document.querySelector('.checkout-button p');

    let total = 0;

    cartButtons.forEach(button => {

    button.addEventListener('click', (e) => {

        e.stopPropagation();

        const product = button.closest('.product');

        const name = product.dataset.name;
        const price = parseInt(product.dataset.price);
        const img = product.dataset.img;

        const item = document.createElement('div');
        item.classList.add('item-wrapper','d-flex','align-items-center','mb-3','justify-content-between');

        item.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${img}" style="width:50px;" class="me-3">
                <div>
                    <h3 class="h6 mb-0">${name}</h3>
                    <p class="small mb-0">Php ${price.toLocaleString()}.00</p>
                </div>
            </div>

            <button class="remove-item">🗑</button>
        `;

        checkoutWrapper.insertBefore(item, document.querySelector('.checkout-button'));

        total += price;
        totalElement.textContent = "Php " + total.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });

        item.querySelector('.remove-item').addEventListener('click', () => {

            item.remove();

            total -= price;
            totalElement.textContent = "Php " + total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2

        });

    });

});
});
});
