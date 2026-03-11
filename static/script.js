function toggleTheme(clickedCheckbox) {
  const lightBox = document.getElementById('light-theme');
  const darkBox = document.getElementById('dark-theme');

  if (clickedCheckbox.id === 'light-theme' && clickedCheckbox.checked) {
    darkBox.checked = false;
    document.documentElement.style.setProperty('--bg-color','linear-gradient(rgb(255,255,255),rgb(255,255,255),rgb(225,200,190),rgb(21,20,20))');
  }
  else if (clickedCheckbox.id === 'dark-theme' && clickedCheckbox.checked) {
    lightBox.checked = false;
    document.documentElement.style.setProperty('--bg-color','linear-gradient(rgb(50,65,75),rgb(50,50,75),rgb(20,20,45),rgb(0,0,25))');
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

  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const desc = product.querySelector('.product-description');

    product.addEventListener('click', () => {
      const isActive = product.classList.contains('active');

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
                    <p class="small mb-0">Php ${price.toLocaleString()}</p>
                </div>
            </div>

            <button class="remove-item btn btn-sm btn-outline-danger">X</button>
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