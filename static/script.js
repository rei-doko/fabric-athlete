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

      // Collapse all products
      products.forEach(p => {
        p.classList.remove('active');
        p.querySelector('.product-description').style.maxHeight = null;
      });

      // Expand clicked product
      if (!isActive) {
        product.classList.add('active');
        desc.style.maxHeight = desc.scrollHeight + "px";
      }
    });
  });
});