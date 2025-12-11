// Mock fetching blog posts from a backend API
document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        { title: "JavaScript Tips", content: "Learn some advanced JS techniques..." },
        { title: "CSS Grid Layout", content: "Mastering CSS Grid for responsive design..." },
        { title: "Portfolio Website", content: "Building a portfolio to showcase your projects..." }
    ];

    const blogContainer = document.getElementById("blog-posts");
    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "blog-post";
        div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(div);
    });

    // Contact Form Submit
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("form-response").textContent = "Message sent successfully!";
        form.reset();
    });
});
