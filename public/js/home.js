const projects = [
    {
        name: "Money Tracker",
        description: "A personal finance management tool to track income and expenses.",
        image: "https://money-tracker.mysterious-hatter.engineer/static/img/logo.png",
        link: "https://money-tracker.mysterious-hatter.engineer",
        docs: "https://github.com/mysterious-hatter/money-tracker",
    },
    {
        name: "Referral Telegram Bot",
        description: "A Telegram bot that manages referral links and tracks user referrals.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png",
        docs: "https://github.com/mysterious-hatter/go-referral-bot",
    },
    {
        name: "Quardratic Equation Solver",
        description: "A package for solving quadratic equations in Go.",
        image: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
        docs: "https://github.com/mysterious-hatter/quadratic-equation-solver",
    },
];

displayProjects();

function displayProjects() {
    const projectsContainer = document.getElementById("projects");
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.docs}">Docs</a>
                ${project.link != null ? `<a href="${project.link}" class="demo">Demo</a>` : ''}
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}