document.addEventListener('DOMContentLoaded', () => {

    // Inicialização do Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: "#08a88a" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1.5 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // Loader
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader-wrapper");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 600);
    });

    // Tema Claro/Escuro
    document.querySelector('#toggle-mode').addEventListener('click', () => {
        const body = document.body;
        const icon = document.querySelector('#toggle-mode i');
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });


    // Typed.js para título dinâmico
    new Typed('#typed', {
        strings: ['Olá, eu sou Victor Hugo', 'Desenvolvedor Full Stack', 'Apaixonado por Tecnologia'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animações Hero Section
    gsap.from(".hero-content", { opacity: 0, y: -50, duration: 1, ease: "power1.out" });

    gsap.from(".animated-avatar", {
        opacity: 0,
        scale: 0,
        rotation: 90,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 1
    });

    // Animação seções
    gsap.utils.toArray('.content-section').forEach(section => {
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

    // Parallax na galeria
    gsap.utils.toArray('.gallery-container img').forEach(img => {
        gsap.fromTo(img, { y: 50 }, {
            y: -50,
            scrollTrigger: { trigger: img, scrub: true }
        });
    });

    // Buscar e exibir projetos GitHub com modal
    async function fetchGitHubProjects() {
        const projectsContainer = document.getElementById('projects-container');

        try {
            const response = await fetch('https://api.github.com/users/Hugoritimo/repos');

            if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

            const repos = await response.json();

            repos.forEach((repo, index) => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                projectElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sem descrição disponível.'}</p>
                <button class="open-modal">Detalhes</button>
                `;

                projectsContainer.appendChild(projectElement);

                projectElement.querySelector('.open-modal').addEventListener('click', () => {
                    document.getElementById('modal-title').textContent = repo.name;
                    document.getElementById('modal-description').textContent = repo.description || 'Sem descrição disponível.';
                    document.getElementById('modal-link').href = repo.html_url;
                    document.getElementById('modal').style.display = 'flex';
                });

                gsap.from(projectElement, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: "power1.out",
                    delay: 0.2 * index
                });
            });

        } catch (error) {
            console.error('Erro ao buscar projetos do GitHub:', error);
            projectsContainer.innerHTML = '<p>Erro ao carregar projetos. Tente novamente mais tarde.</p>';
        }
    }

    fetchGitHubProjects();

    // Modal fechar
    document.querySelector('.close-button').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });

    // Scroll suave na navegação
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // Animação da Imagem da Seção Sobre Mim
    gsap.from(".about-image img", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Animação do Texto Sobre Mim
    gsap.from("#about p", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    // Animação dos Ícones de Habilidades
    gsap.from(".skills-icons i", {
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".skills-icons",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Animação dos itens da Linha do Tempo
    gsap.from(".timeline-item", {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Animação do botão CTA
    gsap.from(".cta-button", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 0.5,
        scrollTrigger: {
            trigger: ".cta-button",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // Animação dos Cards de Projetos com GSAP
    gsap.from(".project", {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Funcionalidade do Filtro por Tecnologia
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelector('.filter-btn.active').classList.remove('active');
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            document.querySelectorAll('.project').forEach(project => {
                const techs = project.getAttribute('data-tech').split(',');
                if (filter === 'all' || techs.includes(filter)) {
                    project.style.display = 'block';
                    gsap.fromTo(project, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" });
                } else {
                    gsap.to(project, {
                        opacity: 0, y: 20, duration: 0.3, ease: "power1.in", onComplete: () => {
                            project.style.display = 'none';
                        }
                    });
                }
            });

        });
    });

});
document.addEventListener('DOMContentLoaded', () => {

    // Animação para vídeos demonstrativos
    gsap.from(".video-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#videos",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {

    // Animações da seção "Vamos Conversar!"
    gsap.from(".contact-form", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".social-icons a", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".social-icons",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".contact-info p", {
        opacity: 0,
        x: -30,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-info",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

});
