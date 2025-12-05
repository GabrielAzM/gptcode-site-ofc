document.addEventListener("DOMContentLoaded", function () {
  // ===== NAVBAR SCROLL HANDLER =====
  const navbar = document.getElementById("navbar");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");
  let lastScrollTop = 0;

  const isHomePage = () => {
    return window.location.pathname === "/" || window.location.pathname.includes("index");
  };

  // Aplicar classe inicial baseada na página
  if (!isHomePage()) {
    navbar.classList.add("navbar-scrolled");
  }

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (isHomePage()) {
      if (currentScroll >= 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    } else {
      navbar.classList.add("navbar-scrolled");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // ===== SMOOTH SCROLLING PARA LINKS INTERNOS =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Fechar menu mobile antes de fazer scroll
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click();
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== FECHAR MENU AO CLICAR FORA =====
  document.addEventListener("click", function (e) {
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      if (!navbar.contains(e.target)) {
        navbarToggler.click();
      }
    }
  });

  // ===== BOOTSTRAP TOOLTIPS =====
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // ===== BACK TO TOP BUTTON =====
  document.querySelectorAll(".back-to-top").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  // ===== FAVICON DINÂMICO =====
  (function () {
    const faviconUrl = "{{ url_for('static', filename='imagens/logos/GPTCODE-LOGO-BARRA.png') }}";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = faviconUrl;
  })();
});

// ===== PAGE ANIMATIONS - SMOOTH TRANSITIONS ON NAVIGATION =====
document.addEventListener("DOMContentLoaded", function () {
  // Animar hero/header
  const pageHeader = document.querySelector(".page-header, .hero, header");
  if (pageHeader) {
    pageHeader.classList.add("fade-in");
  }

  // Animar título principal
  const mainTitle = document.querySelector("main h1, .hero h1");
  if (mainTitle) {
    mainTitle.classList.add("fade-in-up", "stagger-1");
  }

  // Animar seções
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    if (!section.classList.contains("fade-in")) {
      section.classList.add("fade-in");
    }
  });

  // Animar cards de projeto
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.classList.add("fade-in-up");
    card.style.animationDelay = `${0.1 + index * 0.08}s`;
  });

  // Animar cards genéricos
  const cards = document.querySelectorAll(".card, .glass-card, .highlight-card");
  cards.forEach((card, index) => {
    if (!card.classList.contains("fade-in-up")) {
      card.classList.add("fade-in-up");
      card.style.animationDelay = `${0.1 + index * 0.08}s`;
    }
  });

  // Animar imagens
  const images = document.querySelectorAll("section img, main img");
  images.forEach((img, index) => {
    if (!img.classList.contains("fade-in")) {
      img.classList.add("fade-in-right");
      img.style.animationDelay = `${0.25 + index * 0.1}s`;
    }
  });

  // Animar botões
  const buttons = document.querySelectorAll("button:not(.navbar-toggler), a.btn");
  buttons.forEach((btn, index) => {
    if (!btn.classList.contains("fade-in")) {
      btn.classList.add("fade-in-up");
      btn.style.animationDelay = `${0.3 + index * 0.06}s`;
    }
  });

  // ===== INTERSECTION OBSERVER PARA VIEWPORT ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains("fade-in") &&
            !entry.target.classList.contains("fade-in-up")) {
          entry.target.classList.add("fade-in-up");
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".card, section, article").forEach(el => {
    observer.observe(el);
  });
});
