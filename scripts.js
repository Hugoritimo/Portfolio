// Certifique-se de que o conteúdo seja renderizado corretamente sem animações
document.addEventListener('DOMContentLoaded', () => {
    console.log('Conteúdo carregado sem animações.');
});

// Substitua 'seu-usuario' pelo seu nome de usuário do GitHub
const githubUsername = 'Hugoritimo';
const projectsContainer = document.getElementById('projects-container');

// Função para buscar projetos do GitHub
async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        const repos = await response.json();

        repos.forEach(repo => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
            `;

            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Erro ao buscar projetos do GitHub:', error);
    }
}
// Registrar ScrollTrigger para efeitos baseados em rolagem
gsap.registerPlugin(ScrollTrigger);

// Animação de entrada para o Hero Section
gsap.from(".hero-title", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power1.out"
});

gsap.from(".hero-description", {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: "power1.out",
    delay: 0.5
});

gsap.from(".hero-button", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power1.out",
    delay: 1
});

// Animação de entrada para seções de conteúdo
gsap.utils.toArray('.content-section').forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Função para buscar projetos do GitHub e animá-los
async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        const repos = await response.json();

        repos.forEach(repo => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            projectElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
            `;

            projectsContainer.appendChild(projectElement);

            // Animação para a entrada dos projetos
            gsap.from(projectElement, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power1.out",
                delay: 0.2
            });
        });
    } catch (error) {
        console.error('Erro ao buscar projetos do GitHub:', error);
    }
}

// Chama a função para buscar e exibir os projetos
fetchGitHubProjects();

// Smooth scroll para a navegação
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Chama a função para buscar e exibir os projetos
fetchGitHubProjects();
