document.addEventListener('DOMContentLoaded', () => {
	const tabs=document.querySelectorAll('.tab-btn');
	const contents=document.querySelectorAll('.settings-wrapper');

	tabs.forEach(tab=>{
		tab.addEventListener('click',()=>{
			tabs.forEach(t => t.classList.remove('active'));
			tab.classList.add('active');	
	
			contents.forEach(c => c.classList.remove('active'));
			const target = document.getElementById(tab.dataset.target);
			target.classList.add('active');
		});
	});
});

function toggleTheme(selected) {
  const lightBox = document.getElementById('light-theme');
  const darkBox = document.getElementById('dark-theme');

  if (selected === 'light') {
    darkBox.checked = false;
    lightBox.checked = true;
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    lightBox.checked = false;
    darkBox.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}
