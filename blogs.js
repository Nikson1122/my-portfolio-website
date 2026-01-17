// Blog Data - Add your blogs here
const blogs = [
  {
    id: 1,
    title: "Nepal Disaster Resilience Foundation - Building Resilience Through Information",
    date: "January 16, 2026",
    excerpt: "A comprehensive platform dedicated to strengthening disaster risk reduction and resilience in Nepal through awareness, training, research, innovation, partnerships, and evidence-based advocacy.",
    image: "https://ndrfnepal.org/static/app/images/homendrf.jpg",
    content: `
      <p>
        The Nepal Disaster Resilience Foundation (NDRF) is a leading non-profit organization dedicated to strengthening disaster risk reduction and resilience in Nepal. As a collaborative platform of institutions, professionals, scholars, and partners, NDRF works to enhance awareness, preparedness, response, recovery, and reintegration capacities across communities and institutions.
      </p>

      <h2>Technology Stack</h2>
      <p>
        The NDRF platform is developed using modern web technologies:
      </p>
      <ul>
        <li><strong>Backend:</strong> Django (Python Web Framework)</li>
        <li><strong>Database:</strong> PostgreSQL for robust data management</li>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
      </ul>

      <h2>Vision & Mission</h2>
      <p><strong>Vision:</strong> "A disaster-resilient Nepal where communities are safe, empowered, and Resilient."</p>
      <p><strong>Mission:</strong> To enhance disaster resilience by strengthening preparedness, response, recovery, and risk reduction capacities of communities and institutions through awareness, training, innovation, research, partnerships, and evidence-based advocacy.</p>
      <p><strong>Motto:</strong> "Building resilience through information and action."</p>

      <h2>Key Activities & Focus Areas</h2>
      <ul>
        <li><strong>Community Awareness Programs:</strong> Educating communities about disaster risks and preparedness</li>
        <li><strong>Training & Mock Drills:</strong> Building capacity and testing response mechanisms</li>
        <li><strong>Research & Development:</strong> Creating evidence-based approaches for resilience</li>
        <li><strong>IEC Materials:</strong> Developing Information, Education, and Communication materials for different disaster types</li>
        <li><strong>Pre, During & Post-Disaster Support:</strong> Comprehensive disaster management support at all phases</li>
      </ul>

      <h2>About NDRF</h2>
      <p>
        NDRF is a registered non-profit sharing organization dedicated to building an empowered, prepared, and aware society and community against natural and man-made disasters. Through collaborative efforts with various institutions and professionals, NDRF contributes to sustainable development and the overall safety and well-being of the people of Nepal.
      </p>

      <h2>Get Involved</h2>
      <p>
        You can reach out to NDRF for more information or emergency assistance:
      </p>
      <ul>
        <li><strong>Email:</strong> ndrf999@gmail.com</li>
        <li><strong>Helpline:</strong> 9851447999</li>
        <li><strong>WhatsApp:</strong> 9851447999</li>
        <li><strong>Location:</strong> Balkumari, Lalitpur, Nepal</li>
      </ul>
      <p><a href="https://ndrfnepal.org/" target="_blank">Visit NDRF Website</a></p>
    `
  },
  {
    id: 2,
    title: "Gothalo - Construction Management System",
    date: "January 16, 2026",
    excerpt: "A comprehensive platform for construction management featuring daily work reports, inventory tracking, and labor attendance management using Django.",
    image: "http://100.29.204.101/static/images/laborreport.png",
    content: `
      <p>
        Gothalo is a modern construction management system designed to streamline and simplify daily reporting, inventory management, and labor tracking on construction sites. This application bridges the gap between field operations and management, ensuring transparency and efficiency across all construction projects.
      </p>

      <h2>Technology Stack</h2>
      <p>
        Gothalo is built using modern web technologies:
      </p>
      <ul>
        <li><strong>Backend:</strong> Django (Python Web Framework)</li>
        <li><strong>Database:</strong> PostgreSQL for reliable data management</li>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript with responsive design</li>
      </ul>

      <h2>Core Features</h2>
      <ul>
        <li><strong>Labour Report:</strong> Track daily labor attendance and work hours with comprehensive reporting</li>
        <li><strong>Field Report:</strong> Document site conditions, progress, and daily updates from the field</li>
        <li><strong>Inventory Report:</strong> Manage construction materials and inventory tracking in real-time</li>
      </ul>

      <h2>Why Gothalo?</h2>
      <p>
        Gothalo offers a comprehensive all-in-one solution for construction management with several key advantages:
      </p>
      <ul>
        <li><strong>Labour Attendance & Hour Tracking:</strong> Automated systems for tracking worker attendance and billable hours</li>
        <li><strong>Integrated Inventory Management:</strong> Real-time inventory tracking prevents wastage and ensures material availability</li>
        <li><strong>Comprehensive Site Reporting:</strong> Detailed daily reports ensure transparency and accountability</li>
      </ul>

      <p>
        Our mission is to make daily reporting easy and effective while ensuring complete transparency across construction operations.
      </p>

      <h2>Contact & Connect</h2>
      <p>
        <strong>Phone:</strong> 9767653676, 9862769322<br>
        <strong>Email:</strong> info@gothalo.com<br>
        <strong>Website:</strong> <a href="http://100.29.204.101/" target="_blank">http://100.29.204.101/</a>
      </p>
    `
  },
  {
    id: 3,
    title: "Java Spring Boot Best Practices",
    date: "January 15, 2026",
    excerpt: "Learn best practices for building scalable Spring Boot applications with proper architecture and patterns.",
    image: "https://via.placeholder.com/400x250?text=Spring+Boot",
    content: `
      <p>
        Spring Boot has revolutionized the way we build Java applications. In this article, I'll share some best practices I've learned while working with Spring Boot in production environments.
      </p>

      <h2>1. Project Structure</h2>
      <p>
        Organizing your project properly from the start saves time later. Use a layered architecture with clear separation of concerns:
      </p>
      <ul>
        <li>Controllers - Handle HTTP requests</li>
        <li>Services - Business logic</li>
        <li>Repositories - Database access</li>
        <li>Models - Entity classes</li>
      </ul>

      <h2>2. Configuration Management</h2>
      <p>
        Always externalize your configuration. Use application.yml or application.properties files and environment variables for sensitive data like database credentials and API keys.
      </p>

      <h2>3. Error Handling</h2>
      <p>
        Implement proper exception handling with custom exceptions and a global exception handler. This ensures consistent error responses across your API.
      </p>

      <h2>4. Testing</h2>
      <p>
        Write unit tests for your business logic and integration tests for your controllers. Use JUnit 5 and Mockito for testing Spring Boot applications effectively.
      </p>

      <h2>5. Performance Optimization</h2>
      <p>
        Consider caching frequently accessed data, use pagination for large datasets, and optimize your database queries. Spring Boot provides excellent tools for these optimizations.
      </p>

      <p>
        These practices have helped me build robust and maintainable Spring Boot applications. I hope they're useful for your projects too!
      </p>
    `
  },
  {
    id: 4,
    title: "Docker for Backend Developers",
    date: "January 10, 2026",
    excerpt: "A comprehensive guide to containerizing your backend applications with Docker and best practices for production deployment.",
    image: "https://via.placeholder.com/400x250?text=Docker",
    content: `
      <p>
        Docker has become an essential tool for backend developers. It ensures consistency across development, testing, and production environments. Let me walk you through the fundamentals and best practices.
      </p>

      <h2>What is Docker?</h2>
      <p>
        Docker is a containerization platform that packages your application and all its dependencies into a standardized unit called a container. This eliminates the "it works on my machine" problem.
      </p>

      <h2>Creating Your First Dockerfile</h2>
      <p>
        A Dockerfile is a set of instructions to build a Docker image. Here's a basic example for a Java application:
      </p>
      <ul>
        <li>Use a base image (openjdk:11-jre)</li>
        <li>Copy your application JAR file</li>
        <li>Expose the port your app runs on</li>
        <li>Define the command to run your app</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Use specific base image versions, not latest</li>
        <li>Keep image layers small for faster builds</li>
        <li>Use multi-stage builds to reduce final image size</li>
        <li>Don't run containers as root user</li>
        <li>Use environment variables for configuration</li>
      </ul>

      <h2>Docker Compose for Development</h2>
      <p>
        Docker Compose helps you run multi-container applications easily. Define your services in a docker-compose.yml file and spin up your entire stack with a single command.
      </p>

      <p>
        Master Docker and you'll greatly improve your development workflow and deployment process!
      </p>
    `
  },
  {
    id: 5,
    title: "Database Optimization Techniques",
    date: "January 5, 2026",
    excerpt: "Discover key strategies to optimize your database queries and improve application performance significantly.",
    image: "https://via.placeholder.com/400x250?text=Database",
    content: `
      <p>
        Database performance is crucial for any application. Slow queries can bottleneck your entire system. Let's explore effective optimization techniques.
      </p>

      <h2>Indexing Strategy</h2>
      <p>
        Indexes are one of the most powerful tools for query optimization. Create indexes on columns that are frequently used in WHERE clauses and JOIN conditions.
      </p>
      <ul>
        <li>Analyze query patterns in your application</li>
        <li>Create indexes on frequently searched columns</li>
        <li>Monitor index usage and remove unused ones</li>
        <li>Be careful with too many indexes - they slow down writes</li>
      </ul>

      <h2>Query Optimization</h2>
      <p>
        Write efficient queries by:
      </p>
      <ul>
        <li>Using SELECT specific columns instead of SELECT *</li>
        <li>Filtering early with WHERE clauses</li>
        <li>Avoiding N+1 query problems</li>
        <li>Using JOIN instead of multiple queries</li>
      </ul>

      <h2>Connection Pooling</h2>
      <p>
        Use connection pooling to reuse database connections. This reduces overhead of creating new connections for each request.
      </p>

      <h2>Caching</h2>
      <p>
        Implement caching strategies to reduce database hits. Tools like Redis can dramatically improve performance for frequently accessed data.
      </p>

      <p>
        Apply these techniques and watch your application performance soar!
      </p>
    `
  },
  {
    id: 6,
    title: "Django Best Practices for Scalable Web Applications",
    date: "January 17, 2026",
    excerpt: "Master Django development with practical tips for building scalable, maintainable web applications using Python and PostgreSQL.",
    image: "https://via.placeholder.com/400x250?text=Django",
    content: `
      <p>
        Django is one of the most powerful Python web frameworks available. Over the years of working with Django in production environments, I've learned several best practices that make applications more maintainable, scalable, and secure. Let me share what I've discovered.
      </p>

      <h2>1. Project Structure and Organization</h2>
      <p>
        Start with a clean, scalable project structure from day one. Organize your Django apps logically:
      </p>
      <ul>
        <li><strong>models.py</strong> - Define your database models</li>
        <li><strong>views.py</strong> - Handle request/response logic</li>
        <li><strong>urls.py</strong> - URL routing configuration</li>
        <li><strong>serializers.py</strong> - For API endpoints (Django REST Framework)</li>
        <li><strong>forms.py</strong> - Form definitions and validation</li>
        <li><strong>admin.py</strong> - Django admin configuration</li>
      </ul>

      <h2>2. Leverage Django ORM Efficiently</h2>
      <p>
        The Django ORM is powerful but can be inefficient if misused. Follow these practices:
      </p>
      <ul>
        <li><strong>Use select_related() and prefetch_related():</strong> Reduce database queries by fetching related objects efficiently</li>
        <li><strong>Avoid N+1 queries:</strong> Don't query inside loops</li>
        <li><strong>Use database aggregations:</strong> Count, Sum, Avg operations at the database level</li>
        <li><strong>Utilize only() and defer():</strong> Select specific fields when you don't need all columns</li>
      </ul>

      <h2>3. Security First</h2>
      <p>
        Django provides excellent security features. Make sure to utilize them:
      </p>
      <ul>
        <li><strong>CSRF Protection:</strong> Always use {% csrf_token %} in forms</li>
        <li><strong>SQL Injection Prevention:</strong> Use the ORM instead of raw SQL</li>
        <li><strong>XSS Protection:</strong> Use template auto-escaping</li>
        <li><strong>Password Security:</strong> Use Django's password hashers and validation</li>
        <li><strong>HTTPS:</strong> Always use HTTPS in production</li>
        <li><strong>Environment Variables:</strong> Never hardcode sensitive data</li>
      </ul>

      <h2>4. API Development with Django REST Framework</h2>
      <p>
        If building APIs, use Django REST Framework (DRF) for rapid development:
      </p>
      <ul>
        <li>Create reusable serializers for data validation</li>
        <li>Use viewsets and routers for consistent API design</li>
        <li>Implement proper pagination for large datasets</li>
        <li>Add filtering, searching, and ordering capabilities</li>
        <li>Use token authentication or JWT for securing endpoints</li>
      </ul>

      <h2>5. Database Optimization with PostgreSQL</h2>
      <p>
        PostgreSQL is an excellent choice for Django applications. Optimize your database usage:
      </p>
      <ul>
        <li>Create proper database indexes on frequently queried columns</li>
        <li>Use database constraints for data integrity</li>
        <li>Write efficient migrations and test them thoroughly</li>
        <li>Monitor slow queries and optimize them</li>
        <li>Use connection pooling (pgBouncer) in production</li>
      </ul>

      <h2>6. Testing Your Django Application</h2>
      <p>
        Write comprehensive tests to ensure code quality:
      </p>
      <ul>
        <li><strong>Unit Tests:</strong> Test individual functions and methods</li>
        <li><strong>Integration Tests:</strong> Test API endpoints and workflows</li>
        <li><strong>Model Tests:</strong> Test your ORM models and relationships</li>
        <li>Use fixtures and factories for test data</li>
        <li>Aim for high code coverage but focus on critical paths</li>
      </ul>

      <h2>7. Deployment and DevOps</h2>
      <p>
        Prepare your Django application for production:
      </p>
      <ul>
        <li><strong>Containerization:</strong> Use Docker for consistent environments</li>
        <li><strong>CI/CD Pipeline:</strong> Automate testing and deployment with GitHub Actions</li>
        <li><strong>Environment Configuration:</strong> Use different settings for development, staging, and production</li>
        <li><strong>Error Tracking:</strong> Implement error monitoring with tools like Sentry</li>
        <li><strong>Logging:</strong> Set up proper logging for debugging production issues</li>
      </ul>

      <h2>8. Performance Tips</h2>
      <p>
        Keep your Django application fast:
      </p>
      <ul>
        <li><strong>Caching:</strong> Use Redis for caching frequently accessed data</li>
        <li><strong>Async Tasks:</strong> Use Celery for long-running tasks</li>
        <li><strong>Database Indexing:</strong> Create indexes strategically</li>
        <li><strong>Static Files:</strong> Serve static files through a CDN in production</li>
        <li><strong>Pagination:</strong> Always paginate large result sets</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Django's "batteries included" philosophy makes it an excellent choice for building web applications quickly. By following these best practices, you can build applications that are not only feature-rich but also maintainable, secure, and performant. Whether you're building a small project or a large-scale application like the NDRF platform or Gothalo construction management system, these principles will serve you well.
      </p>

      <p>
        Happy coding with Django! Feel free to reach out if you have questions about implementing these practices in your own projects.
      </p>
    `
  }
];
