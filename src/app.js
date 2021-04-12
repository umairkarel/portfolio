const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const info = document.getElementsByClassName('info')[0]
const headshot_img = document.getElementsByClassName('headshot-container')[0]
const project_container = document.getElementsByClassName('project-container')[0]


function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


fetch('src/data.json')
	.then(res => res.json()) 
	.then(data => {
	data.forEach(project => {
		let div = document.createElement('div');
		div.classList.add('project-card');
		detail = `<img class="project-img" src="${project.src}" alt="project">
				  <h3>${project.name}</h3>
				  <p class="subtext">${project.about}.</p>
				  <hr>
				  <p class="subtext"><a class="project-link" href="${project.link}">view here</a></p>`
		div.innerHTML = detail
		project_container.appendChild(div)
		});		
	})