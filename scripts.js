document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  const cmd1 = document.getElementById("cmd1");
  const title = document.getElementById("title");
  const cmd2 = document.getElementById("cmd2");
  const mission = document.getElementById("mission");
  const cmd3 = document.getElementById("cmd3");
  const about = document.getElementById("about");

  const heroButtons = document.getElementById("heroButtons");
  heroButtons.style.display = "none";

  const data = {
    cmd1: "whoami",
    title: "Java and Python Developer",
    cmd2: "echo $MISSION",
    mission: "Building scalable web systems with code and data",
    cmd3: "cat about_me.txt",
    about:
      "I specialize in backend development using Java jsf, (Spring Boot) and Python (Django). I build APIs, database-driven applications, and deploy production systems using Docker, GitHub Actions, and Linux hosting (cPanel). I also have basic knowledge of AI/ML."
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function type(element, text, speed = 40) {
    return new Promise((resolve) => {
      let i = 0;
      element.innerHTML = "";

      const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  }

  async function run() {
    await type(cmd1, data.cmd1, 50);
    await sleep(250);

    title.textContent = data.title;
    await sleep(250);

    await type(cmd2, data.cmd2, 50);
    await sleep(250);

    mission.innerHTML = data.mission + "<span class='cursor'></span>";
    await sleep(500);

    await type(cmd3, data.cmd3, 50);
    await sleep(250);

    await type(about, data.about, 12);

    heroButtons.style.display = "flex";
  }

  run();

  // Render blog cards dynamically
  const blogsGrid = document.getElementById("blogsGrid");
  if (blogsGrid && typeof blogs !== 'undefined') {
    blogs.forEach(blog => {
      const blogCard = document.createElement("a");
      blogCard.href = `blog.html?id=${blog.id}`;
      blogCard.className = "blog-card";
      blogCard.innerHTML = `
        <h3>${blog.title}</h3>
        <p class="blog-date">${blog.date}</p>
        <p>${blog.excerpt}</p>
        <span class="read-more">Read More →</span>
      `;
      blogsGrid.appendChild(blogCard);
    });
  }
});
