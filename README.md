# Nikson Shrestha — Portfolio

Personal portfolio and CV of **Nikson Shrestha**, a Java & Python backend developer based in Lalitpur, Nepal.

**Live site:** https://niksonshrestha.netlify.app

## About

I build backend systems — REST APIs, payment gateway integrations and database-driven
applications — in Java (Spring Boot, JSF) and Python (Django), and deploy them with Docker,
GitHub Actions and Linux hosting.

Currently a Java Backend Developer at **Diyalo Technology**, working on **BusSewa**, Nepal's
fastest-growing online bus ticketing platform.

## Featured work

| Project | Role | Stack |
|---|---|---|
| [BusSewa](https://bussewa.com.np/) — online bus ticketing | Backend services, REST APIs, payment gateways, seat inventory | Java, JSF, Spring Boot, PostgreSQL |
| [NDRF](https://ndrfnepal.org/) — non-profit platform | Full-stack, concept to production | Django, Python, PostgreSQL |
| Gothalo — construction management | Full-stack, daily reports / inventory / attendance | Django, PostgreSQL, Docker |

## This site

Built from scratch — no framework, no build step, no dependencies.

- Semantic HTML across separate pages (home, skills, projects, blog, resume, contact)
- Hand-written CSS: custom properties, grid and flex layouts, responsive breakpoints
- Vanilla JavaScript: typewriter intro, pointer-tracked spotlight effects,
  `IntersectionObserver` scroll reveals, data-driven blog rendering
- Print stylesheet that exports the resume page as a clean A4 PDF
- SEO metadata, Open Graph tags and `schema.org` structured data

### Structure

```
index.html      Home — hero, capabilities, featured work, experience timeline
skills.html     Skills by category
projects.html   Project case studies
blogs.html      Blog index (rendered from blogs.js)
blog.html       Single post, read via ?id=N
resume.html     Resume + Download PDF
contact.html    Contact details and form
style.css       All styles, including the print/PDF rules
scripts.js      Interactions and blog card rendering
blogs.js        Blog content
```

### Running locally

```bash
python3 -m http.server 5500
# open http://localhost:5500
```

## Contact

- Email: sthanikson2000@gmail.com
- LinkedIn: https://www.linkedin.com/in/nikson-shrestha-a39387213
- GitHub: https://github.com/Nikson1122
