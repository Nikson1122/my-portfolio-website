function readingTime(html) {
  const words = String(html || "").replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    const setMenu = (open) => {
      navLinks.classList.toggle("active", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    };

    menuBtn.setAttribute("aria-controls", "navLinks");
    menuBtn.setAttribute("aria-label", "Toggle navigation menu");
    setMenu(false);

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setMenu(!navLinks.classList.contains("active"));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setMenu(false));
    });

    // Close on a tap outside, on Escape, or when widening past the mobile layout
    document.addEventListener("click", (e) => {
      if (!navLinks.classList.contains("active")) return;
      if (!navLinks.contains(e.target) && e.target !== menuBtn) setMenu(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) setMenu(false);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const cmd1 = document.getElementById("cmd1");
  const title = document.getElementById("title");
  const cmd2 = document.getElementById("cmd2");
  const mission = document.getElementById("mission");
  const cmd3 = document.getElementById("cmd3");
  const about = document.getElementById("about");

  const heroButtons = document.getElementById("heroButtons");
  if (heroButtons) heroButtons.style.display = "none";

  const data = {
    cmd1: "whoami",
    title: "Java and Python Developer",
    cmd2: "$MISSION",
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
    await type(cmd3, data.cmd3, 50);
    await sleep(250);

    await type(about, data.about, 12);

    if (heroButtons) heroButtons.style.display = "flex";
  }

  if (cmd3 && about) run();

  // Render blog cards dynamically
  const blogsGrid = document.getElementById("blogsGrid");
  if (blogsGrid && typeof blogs !== "undefined") {
    const sorted = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

    blogsGrid.innerHTML = sorted
      .map((blog, i) => {
        const media = blog.image
          ? `<img src="${blog.image}" alt="${blog.title}" loading="lazy">`
          : `<span class="blog-card-icon"><i class="fa-solid ${blog.icon || "fa-pen-nib"}"></i></span>`;

        return `
          <a class="blog-card${i === 0 ? " featured" : ""}" href="blog.html?id=${blog.id}">
            <div class="blog-card-media">
              ${media}
              ${i === 0 ? '<span class="blog-badge">Latest</span>' : ""}
            </div>

            <div class="blog-card-body">
              <div class="blog-card-meta">
                <span class="blog-cat">${blog.category || "Article"}</span>
                <span class="blog-dot">&middot;</span>
                <span>${blog.date}</span>
                <span class="blog-dot">&middot;</span>
                <span>${readingTime(blog.content)} min read</span>
              </div>

              <h3>${blog.title}</h3>
              <p>${blog.excerpt}</p>
              <span class="read-more">Read article <i class="fas fa-arrow-right"></i></span>
            </div>
          </a>`;
      })
      .join("");
  }
});

/* ---------- INTERACTION POLISH ---------- */
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* 1. Cursor glow that trails the pointer */
  if (finePointer && !reduced) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty, raf = null;

    const render = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4
        ? requestAnimationFrame(render)
        : null;
    };

    window.addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.classList.add("visible");
      if (!raf) raf = requestAnimationFrame(render);
    }, { passive: true });

    document.addEventListener("pointerleave", () => glow.classList.remove("visible"));
  }

  /* 2. Spotlight that follows the pointer inside each card */
  const SPOTLIT = ".work-card, .skill-group, .cap-card, .project-card, .blog-card, .resume-card, .contact-info-card, .contact-form-card, .skill-pill";

  if (finePointer && !reduced) {
    document.querySelectorAll(SPOTLIT).forEach((card) => {
      card.classList.add("spotlight");
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }, { passive: true });
    });
  }

  /* 3. Reveal sections and cards as they scroll into view */
  const revealTargets = document.querySelectorAll(
    ".section-head, .work-card, .blog-hero, .edu-strip, .skill-group, .cap-card, .tl-item, .cta-band, .project-card, .blog-card, .resume-card, .resume-top, .contact-info-card, .contact-form-card, .skills-grid"
  );

  if (reduced || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("revealed"));
  } else {
    revealTargets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", `${Math.min(i % 4, 3) * 70}ms`);
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealTargets.forEach((el) => io.observe(el));
  }

  /* 4. Shrink the navbar once the page is scrolled */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* 5. Screenshot carousels + shared lightbox (Gothalo project card) */
  const carouselCtl = new WeakMap();

  const shotLightbox = (() => {
    const lightbox = document.getElementById("invLightbox");
    if (!lightbox) return null;

    const lbImg = lightbox.querySelector("img");
    const lbClose = lightbox.querySelector(".inv-lightbox-close");
    const lbPrev = document.getElementById("invLightboxPrev");
    const lbNext = document.getElementById("invLightboxNext");
    const lbHint = document.getElementById("invLightboxHint");

    let source = null;
    let slides = [];
    let lbIndex = 0;

    function setLbImage(i) {
      if (!slides.length) return;
      lbIndex = (i + slides.length) % slides.length;
      const img = slides[lbIndex].querySelector("img");
      lbImg.src = img.src;
      lbImg.alt = img.alt || "";
      lbImg.classList.remove("zoomed");
      lbImg.style.transform = "";
      lbImg.style.transformOrigin = "center";
      if (lbHint) lbHint.textContent = `${lbIndex + 1} / ${slides.length} \u00B7 Click to zoom \u00B7 \u2190/\u2192 to browse \u00B7 Esc to close`;
    }

    function open(carousel) {
      source = carousel;
      slides = Array.from(carousel.querySelectorAll(".inv-slide"));
      const activeImg = carousel.querySelector(".inv-slide.active img");
      const i = activeImg ? slides.indexOf(activeImg.closest(".inv-slide")) : 0;
      setLbImage(i < 0 ? 0 : i);
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
      const ctl = carouselCtl.get(carousel);
      if (ctl) ctl.pause();
    }

    function close() {
      lightbox.classList.remove("open");
      lbImg.classList.remove("zoomed");
      lbImg.style.transform = "";
      document.body.style.overflow = "";
      const ctl = source && carouselCtl.get(source);
      if (ctl) ctl.resume();
      source = null;
    }

    lbClose.addEventListener("click", close);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });

    if (lbPrev) lbPrev.addEventListener("click", (e) => { e.stopPropagation(); setLbImage(lbIndex - 1); });
    if (lbNext) lbNext.addEventListener("click", (e) => { e.stopPropagation(); setLbImage(lbIndex + 1); });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setLbImage(lbIndex - 1);
      if (e.key === "ArrowRight") setLbImage(lbIndex + 1);
    });

    /* Click on image: zoom into the clicked spot / zoom back out */
    lbImg.addEventListener("click", (e) => {
      e.stopPropagation();

      if (lbImg.classList.contains("zoomed")) {
        lbImg.classList.remove("zoomed");
        lbImg.style.transform = "";
        return;
      }

      const rect = lbImg.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      lbImg.style.transformOrigin = `${x}% ${y}%`;
      lbImg.style.transform = "scale(2.5)";
      lbImg.classList.add("zoomed");
    });

    return { open };
  })();

  document.querySelectorAll(".inv-carousel").forEach((carousel) => {
    const slides = carousel.querySelectorAll(".inv-slide");
    if (!slides.length) return;

    const interval = parseInt(carousel.dataset.interval, 10) || 3500;
    const dotsWrap = carousel.parentElement.querySelector(".inv-dots");
    const multi = slides.length > 1;
    let index = 0;
    let timer = null;

    const dots = multi
      ? Array.from(slides).map((_, i) => {
          if (!dotsWrap) return null;
          const dot = document.createElement("button");
          dot.className = "inv-dot" + (i === 0 ? " active" : "");
          dot.setAttribute("aria-label", `Show image ${i + 1}`);
          dot.addEventListener("click", () => {
            show(i);
            restart();
          });
          dotsWrap.appendChild(dot);
          return dot;
        })
      : [];

    function show(i) {
      slides[index].classList.remove("active");
      if (dots[index]) dots[index].classList.remove("active");
      index = i;
      slides[index].classList.add("active");
      if (dots[index]) dots[index].classList.add("active");
    }

    function next() {
      show((index + 1) % slides.length);
    }

    function restart() {
      clearInterval(timer);
      timer = setInterval(next, interval);
    }

    if (multi && !reduced) restart();

    carouselCtl.set(carousel, {
      pause: () => clearInterval(timer),
      resume: () => {
        if (multi && !reduced) restart();
      }
    });

    carousel.addEventListener("pointerenter", () => clearInterval(timer));
    carousel.addEventListener("pointerleave", () => {
      if (multi && !reduced) restart();
    });

    /* Click to open zoomable lightbox */
    carousel.addEventListener("click", () => {
      if (shotLightbox) shotLightbox.open(carousel);
    });
  });
})();
