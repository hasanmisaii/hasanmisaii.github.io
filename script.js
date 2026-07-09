/* ==========================================================================
   Dr. Hasan Misaii - Portfolio Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Theme Toggle System ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleIcon = themeToggleBtn.querySelector('i');
  
  // Load saved theme or fall back to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeToggleIcon.className = 'fa-solid fa-sun';
    } else {
      themeToggleIcon.className = 'fa-solid fa-moon';
    }
  }

  // --- Mobile Navigation Menu ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    menuToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  // Close navigation menu when links are clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // --- Active Link Highlight on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // Offset for fixed nav
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav-link.active')?.classList.remove('active');
          targetNavLink.classList.add('active');
        }
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);

  // --- Publications Data Structure ---
    const publications = [
      {
          "type": "journal",
          "year": "2026",
          "authors": "Misaii, H. [Hasan], Kesse-Guyot, E., & Mariotti, F.",
          "title": "Dynamic life expectancy modelling of shifting from animal-based to plant-based foods using individual-level dietary substitution",
          "journal": "Nature Food",
          "status": "Submitted-April 2026",
          "url": "https://scholar.google.com/scholar?q=%22Dynamic%20life%20expectancy%20modelling%20of%20shifting%20from%20animal-based%20to%20plant-based%20foods%20using%20individual-level%20dietary%20substitution%22%20Misaii%2C%20H.%20%5BHasan%5D%2C%20Kesse-Guyot%2C%20E.%2C%20%26%20Mariotti%2C%20F."
      },
      {
          "type": "journal",
          "year": "2026",
          "authors": "Misaii, H. [Hasan], Kesse-Guyot, E., & Mariotti, F.",
          "title": "Modelling usual nutrient intake distribution: A comprehensive comparative study using hierarchical models",
          "journal": "The Journal of Nutrition",
          "status": "April 2026",
          "url": "https://doi.org/10.1016/j.tjnut.2026.101542",
          "doi": "10.1016/j.tjnut.2026.101542"
      },
      {
          "type": "journal",
          "year": "2025",
          "authors": "Misaii, H. [Hasan], Ponchet Durupt, A., Vu, H. C., Boudaoud, N., Leduc, P., Xu, Y., & Caracciolo, A.",
          "title": "A comprehensive degradation modeling comparison from statistical to artificial intelligence models for curing oven chains",
          "journal": "Applied Stochastic Models in Business and Industry, 41(1), e2930",
          "status": "Published",
          "url": "https://doi.org/10.1002/asmb.2930",
          "doi": "10.1002/asmb.2930"
      },
      {
          "type": "journal",
          "year": "2024",
          "authors": "Misaii, H. [Hasan], Fouladirad, M., & Haghighi, F.",
          "title": "Optimal perfect corrective maintenance policy for a system with multiple components using data-driven decision-making methods",
          "journal": "Quality and Reliability Engineering International, 40(1), 472–498",
          "doi": "10.1002/qre.3435",
          "url": "https://doi.org/10.1002/qre.3435"
      },
      {
          "type": "journal",
          "year": "2023",
          "authors": "Misaii, H., Fouladirad, M., & Haghighi, F.",
          "title": "Optimal task-driven time-dependent covariate based maintenance policy",
          "journal": "Journal of Computational and Applied Mathematics",
          "status": "Published",
          "url": "https://doi.org/10.1016/j.cam.2023.115315",
          "doi": "10.1016/j.cam.2023.115315"
      },
      {
          "type": "journal",
          "year": "2022",
          "authors": "Misaii, H., Eftekhari Mahabadi, S., & Haghighi, F.",
          "title": "Multiple imputation of masked competing risks data using machine learning algorithms",
          "journal": "Journal of Statistical Computation and Simulation, 0(0), 1–26",
          "status": "Published",
          "url": "https://doi.org/10.1080/00949655.2022.2063864",
          "doi": "10.1080/00949655.2022.2063864"
      },
      {
          "type": "journal",
          "year": "2022",
          "authors": "Misaii, H., Haghighi, F., & Fouladirad, M.",
          "title": "Optimal shock-based maintenance policy for a system in a dynamic environment",
          "journal": "Applied Stochastic Models in Business and Industry",
          "status": "Published",
          "url": "https://doi.org/10.1002/asmb.2686",
          "doi": "10.1002/asmb.2686"
      },
      {
          "type": "journal",
          "year": "2021",
          "authors": "Haghighi, F., Castanier, B., & Misaii, H.",
          "title": "Rolling horizon optimal maintenance policy for a system subject to shocks and degradation under uncertain parameters",
          "journal": "Computers & Industrial Engineering, 157, 107298",
          "status": "Published",
          "url": "https://doi.org/10.1016/j.cie.2021.107298",
          "doi": "10.1016/j.cie.2021.107298"
      },
      {
          "type": "journal",
          "year": "2021",
          "authors": "Hassantabar, F., Misaii, H., Rezaei, Z., & Haghighi, F.",
          "title": "Discrete degradation modeling using generalized mixed effect model",
          "journal": "Journal of Statistical Modelling: Theory and Applications, 2(1), 39–45",
          "status": "Published",
          "url": "http://jsm.yazd.ac.ir/article_2058_997993a4079f5f55372d8143351909c1.pdf"
      },
      {
          "type": "journal",
          "year": "2021",
          "authors": "Misaii, H., Haghighi, F., & Fouladirad, M.",
          "title": "Opportunistic perfect preventive maintenance policy in presence of masked data",
          "journal": "Proceedings of the Institution of Mechanical Engineers, Part O: Journal of Risk and Reliability",
          "status": "Published",
          "url": "https://doi.org/10.1177/1748006x211058936",
          "doi": "10.1177/1748006x211058936"
      },
      {
          "type": "journal",
          "year": "2020",
          "authors": "Misaii, H., Eftekhari Mahabadi, S., & Haghighi, F.",
          "title": "Analysis of masked competing risks data with cause and time dependent masking mechanism",
          "journal": "Journal of Statistical Computation and Simulation, 90(12), 2256–2266",
          "status": "Published",
          "url": "https://doi.org/10.1080/00949655.2020.1779713",
          "doi": "10.1080/00949655.2020.1779713"
      },
      {
          "type": "journal",
          "year": "2020",
          "authors": "Misaii, H., Haghighi, F., & Eftekhari Mahabadi, S.",
          "title": "Masked data analysis based on the generalized linear model",
          "journal": "International Journal of Reliability, Risk and Safety: Theory and Application, 3(2), 1–7",
          "status": "Published",
          "url": "https://doi.org/10.30699/ijrrs.3.2.1",
          "doi": "10.30699/ijrrs.3.2.1"
      },
      {
          "type": "journal",
          "year": "2019",
          "authors": "Misaii, H., Khoshdel, A., Zareiyan, A., & Mohammadimehr, M.",
          "title": "Evaluating the educational services quality of a military medical university (servqual model): A descriptive analytic study",
          "journal": "Journal of Archives in Military Medicine, 7(1-2)",
          "status": "Published",
          "url": "https://doi.org/10.5812/jamm.92129",
          "doi": "10.5812/jamm.92129"
      },
      {
          "type": "journal",
          "year": "2018",
          "authors": "Misaii, H., & Mohammadimehr, M.",
          "title": "Evaluating the quality of educational services based on student’s viewpoint according to servqual model in the faculty of mathematical, statistical and computer sciences at tehran university",
          "journal": "Journal of Medical Education and Development, 12(4)",
          "status": "Published",
          "url": "https://doaj.org/article/3c478d44f84e4b9f8be93a9b93e7872c"
      },
      {
          "type": "conference",
          "year": "2026",
          "authors": "Misaii, H., Fouladirad, M., & Hlunguane, J. A. I.",
          "title": "Explainable automated machine learning failure causality diagnostic and prognostic in industrial systems",
          "journal": "European Safety and Reliability Conference (ESREL)",
          "url": "https://hal.science/hal-05669622"
      },
      {
          "type": "conference",
          "year": "2025",
          "authors": "Misaii, H., Fouladirad, M., & Durupt, A.",
          "title": "Failure causality diagnostic and prognostic in industrial systems through automated machine learning",
          "journal": "European Safety and Reliability Conference (ESREL)",
          "url": "https://doi.org/10.3850/978-981-94-3281-3_esrel-sra-e2025-p7259-cd",
          "doi": "10.3850/978-981-94-3281-3_esrel-sra-e2025-p7259-cd"
      },
      {
          "type": "conference",
          "year": "2025",
          "authors": "Misaii, H., Wang, J., Kesse-Guyot, E., & Mariotti, F.",
          "title": "Estimation de la distribution des apports usuels et nutriments : Une étude statistique comparative des modèles de variabilité et de leurs implications sur les estimations des prévalences d’inadéquation",
          "journal": "Journées Francophones de Nutrition, Dec 2025, Lyon, France. hal-05310592",
          "url": "https://hal.science/hal-05310592",
          "doi": "hal-05310592"
      },
      {
          "type": "conference",
          "year": "2024",
          "authors": "Misaii, H., Fouladirad, M., & Durupt, A.",
          "title": "Predictive degradation modelling using AI: Milling machine case study",
          "journal": "European Safety and Reliability Conference (ESREL)",
          "url": "https://hal.science/hal-04564828"
      },
      {
          "type": "conference",
          "year": "2023",
          "authors": "Misaii, H., Ponchet-Durupt, A., Boudaoud, N., Vu, H., Xu, Y., Caracciolo, A., & Leduc, P.",
          "title": "A comprehensive degradation modelling: From statistical to artificial intelligence models",
          "journal": "European Network for Business and Industrial Statistics (ENBIS 2023)",
          "url": "https://hal.science/hal-04121518"
      },
      {
          "type": "conference",
          "year": "2022",
          "authors": "Misaii, H., Fouladirad, M., & Haghighi, F.",
          "title": "Data-driven maintenance optimization using random forest algorithms",
          "journal": "ENBIS Spring Meeting",
          "url": "https://hal.science/hal-03663523"
      },
      {
          "type": "conference",
          "year": "2022",
          "authors": "Misaii, H., Fouladirad, M., & Haghighi, F.",
          "title": "Non-parametric data-based maintenance optimization using machine learning algorithms",
          "journal": "ENBIS Annual Conference",
          "url": "https://hal.science/hal-03702617"
      },
      {
          "type": "conference",
          "year": "2022",
          "authors": "Misaii, H., Fouladirad, M., & Haghighi, F.",
          "title": "Optimal corrective maintenance policy encountering competing risks using machine learning algorithms",
          "journal": "European Safety and Reliability Conference (ESREL)",
          "url": "https://hal.science/hal-03773061"
      },
      {
          "type": "conference",
          "year": "2022",
          "authors": "Misaii, H., Fouladirad, M., & Haghighi, F.",
          "title": "Time dependent perfect corrective maintenance policy",
          "journal": "8th Seminar on Reliability Theory and its Applications",
          "url": "https://hal.science/hal-03660777"
      },
      {
          "type": "conference",
          "year": "2022",
          "authors": "Misaii, H., Haghighi, F., & Fouladirad, M.",
          "title": "Multi-component system maintenance optimisation and masked data",
          "journal": "2022 10th International Conference on Systems and Control (ICSC), pp. 85–89, IEEE",
          "doi": "10.1109/icsc57768.2022.9993905",
          "url": "https://doi.org/10.1109/icsc57768.2022.9993905"
      },
      {
          "type": "conference",
          "year": "2021",
          "authors": "Misaii, H., Haghighi, F., & Fouladirad, M.",
          "title": "Maintenance in presence of incomplete data in series systems",
          "journal": "7th Seminar on Reliability Theory and its Applications",
          "url": "https://hal.science/hal-03654344"
      },
      {
          "type": "conference",
          "year": "2020",
          "authors": "Hassantabar, F., Misaii, H., Eftekhari Mahabadi, S., & Haghighi, F.",
          "title": "Optimum type-II progressive censoring scheme with random removal based on cost model",
          "journal": "6th Seminar on Reliability Theory and its Applications",
          "url": "https://scholar.google.com/scholar?q=%22Optimum%20type-II%20progressive%20censoring%20scheme%20with%20random%20removal%20based%20on%20cost%20model%22%20Hassantabar%2C%20F.%2C%20Misaii%2C%20H.%2C%20Eftekhari%20Mahabadi%2C%20S.%2C%20%26%20Haghighi%2C%20F."
      },
      {
          "type": "conference",
          "year": "2020",
          "authors": "Misaii, H., Eftekhari Mahabadi, S., Jafari, N., & Haghighi, F.",
          "title": "Analysis of masked competing risks data using machine learning imputation methods",
          "journal": "6th Seminar on Reliability Theory and its Applications",
          "url": "https://hal.science/hal-03654432"
      },
      {
          "type": "conference",
          "year": "2020",
          "authors": "Misaii, H., Hassantabar, F., Haghighi, F., & Rezaei, Z.",
          "title": "Bayesian methods for modeling repeated measures of discrete degradation",
          "journal": "15th Iranian Statistics Conference",
          "url": "https://hal.science/hal-03654400"
      },
      {
          "type": "conference",
          "year": "2019",
          "authors": "Misaii, H., F, H., & Eftekhary Mahabadi, S.",
          "title": "Bayesian analysis of masked data with non-ignorable missing mechanism",
          "journal": "Proceeding of Reliability Seminar on the Theory and its Applications (5th), p. 249",
          "url": "https://scholar.google.com/scholar?q=%22Bayesian%20analysis%20of%20masked%20data%20with%20non-ignorable%20missing%20mechanism%22%20Misaii%2C%20H.%2C%20F%2C%20H.%2C%20%26%20Eftekhary%20Mahabadi%2C%20S."
      },
      {
          "type": "conference",
          "year": "2016",
          "authors": "Misaii, H., & Eftekhari, S.",
          "title": "Analysis of masked data with non-ignorable missing mechanism",
          "journal": "2nd Seminar on Reliability Theory and its Applications, pp. 123–126",
          "url": "https://scholar.google.com/scholar?q=%22Analysis%20of%20masked%20data%20with%20non-ignorable%20missing%20mechanism%22%20Misaii%2C%20H.%2C%20%26%20Eftekhari%2C%20S."
      },
      {
          "type": "conference",
          "year": "2016",
          "authors": "Misaii, H., & Eftekhari, S.",
          "title": "Repeated measures modeling of discrete degradation along time",
          "journal": "13th Iranian Statistics Conference, pp. 123–126",
          "url": "https://scholar.google.com/scholar?q=%22Repeated%20measures%20modeling%20of%20discrete%20degradation%20along%20time%22%20Misaii%2C%20H.%2C%20%26%20Eftekhari%2C%20S."
      }
  ];

  // --- Publications Filtering & Search Dashboard Logic ---
  const searchInput = document.getElementById('pub-search');
  const tabBtns = document.querySelectorAll('.pub-tab-btn');
  const pubListContainer = document.getElementById('publications-list');
  
  let currentFilter = 'all'; // all, journal, conference
  let searchQuery = '';

  // Initial Counter Render
  updateCounters();
  renderPublications();

  // Handle Tab Switch
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderPublications();
    });
  });

  // Handle Search Input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderPublications();
  });

  function updateCounters() {
    const counts = {
      all: publications.length,
      journal: publications.filter(p => p.type === 'journal').length,
      conference: publications.filter(p => p.type === 'conference').length
    };
    
    document.getElementById('count-all').innerText = counts.all;
    document.getElementById('count-journal').innerText = counts.journal;
    document.getElementById('count-conference').innerText = counts.conference;
  }

  function highlightAuthor(authorString) {
    // Bold specific matches for "Misaii, H." or "Misaii, H. [Hasan]" or "Misaii, H. [Hasan]"
    return authorString.replace(/(Misaii, H\.(?:\s*\[Hasan\])?)/g, '<span class="pub-author-me">$1</span>');
  }

  function renderPublications() {
    pubListContainer.innerHTML = '';
    
    // Sort publications by year descending, then title
    const sortedPubs = [...publications].sort((a, b) => {
      if (b.year !== a.year) {
        return b.year.localeCompare(a.year);
      }
      return a.title.localeCompare(b.title);
    });

    const filtered = sortedPubs.filter(pub => {
      // Filter by tab type
      if (currentFilter !== 'all' && pub.type !== currentFilter) {
        return false;
      }
      
      // Filter by search query
      if (searchQuery) {
        const matchesTitle = pub.title.toLowerCase().includes(searchQuery);
        const matchesAuthors = pub.authors.toLowerCase().includes(searchQuery);
        const matchesJournal = pub.journal.toLowerCase().includes(searchQuery);
        const matchesYear = pub.year.includes(searchQuery);
        return matchesTitle || matchesAuthors || matchesJournal || matchesYear;
      }
      
      return true;
    });

    if (filtered.length === 0) {
      pubListContainer.innerHTML = `
        <div class="no-pubs-found">
          <i class="fa-regular fa-folder-open" style="font-size: 32px; margin-bottom: 12px; display: block;"></i>
          No publications found matching your criteria.
        </div>
      `;
      return;
    }

    filtered.forEach(pub => {
      const card = document.createElement('div');
      card.className = `pub-card`;
      
      const typeBadgeClass = pub.type === 'journal' ? 'journal' : 'conference';
      const typeBadgeText = pub.type === 'journal' ? 'Journal Article' : 'Conference Paper';
      const iconClass = pub.type === 'journal' ? 'fa-regular fa-file-lines' : 'fa-solid fa-users';
      
      let linkHtml = '';
      if (pub.url && pub.url !== '#') {
        const linkLabel = pub.doi ? `DOI: ${pub.doi}` : 'View Source';
        linkHtml = `
          <div class="pub-links">
            <a href="${pub.url}" target="_blank" rel="noopener" class="pub-link-btn">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> ${linkLabel}
            </a>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="pub-icon-box">
          <i class="${iconClass}"></i>
        </div>
        <div class="pub-details-box">
          <div class="pub-meta-top">
            <span class="pub-type-tag ${typeBadgeClass}">${typeBadgeText}</span>
            <span class="pub-year-badge">${pub.year}</span>
            ${pub.status && pub.status !== 'Published' ? `<span class="pub-type-tag" style="background: rgba(245,158,11,0.15); color: #fcd34d;">${pub.status}</span>` : ''}
          </div>
          <h4 class="pub-title">
            <a href="${pub.url}" target="_blank" rel="noopener" class="pub-title-link">
              ${pub.title} <i class="fa-solid fa-arrow-up-right-from-square title-link-icon"></i>
            </a>
          </h4>
          <p class="pub-authors">${highlightAuthor(pub.authors)}</p>
          <p class="pub-journal">${pub.journal}</p>
          ${linkHtml}
        </div>
      `;
      pubListContainer.appendChild(card);
    });
  }

  // --- Contact Form Client-side Submission and Feedback ---
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic fields read
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      showFeedback('Please fill out all fields.', 'error');
      return;
    }

    // Since this is a static client-side application, we simulate email sending
    // and offer mailto backup.
    showFeedback('Sending message...', 'success');
    
    setTimeout(() => {
      // Create mailto link as fallback
      const mailtoLink = `mailto:hasanmisaii14@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      
      showFeedback('Success! Preparing your email client to finalize sending...', 'success');
      
      // Open default mail client
      window.location.href = mailtoLink;
      
      contactForm.reset();
    }, 1000);
  });

  function showFeedback(msg, type) {
    formFeedback.innerText = msg;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.style.display = 'block';
  }

});
