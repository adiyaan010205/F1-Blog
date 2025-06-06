const f1Data = {
  "f1_colors": {
    "primary_red": "#FF1E00",
    "carbon_black": "#15151E", 
    "off_white": "#F7F4F1",
    "high_vis_white": "#FFFFFF"
  },
  "team_colors": {
    "McLaren": "#FF8000",
    "Ferrari": "#E8002D", 
    "Red_Bull": "#3671C6",
    "Mercedes": "#27F4D2",
    "Alpine": "#FF87BC",
    "Aston_Martin": "#229971",
    "Williams": "#64C4FF",
    "Haas": "#B6BABD"
  },
  "featured_articles": [
    {
      "title": "Piastri's Championship Leadership",
      "description": "Oscar Piastri continues to lead the championship fight after his dominant Spanish Grand Prix victory, showcasing McLaren's return to form.",
      "author": "F1 News Team",
      "date": "June 2025",
      "category": "Championship",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749188604/pplx_project_search_images/255aaed3beffc4ed991661d696332d964880dd26.jpg"
    },
    {
      "title": "Verstappen's Red Bull Dominance",
      "description": "Max Verstappen showcases incredible racecraft with his Red Bull RB20, though facing new challenges from McLaren's resurgence.",
      "author": "Racing Analysis",
      "date": "June 2025", 
      "category": "Driver Focus",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749188603/pplx_project_search_images/7c6d3223d4455b6ee8b28ae11ca109af8526214a.jpg"
    },
    {
      "title": "Ferrari's New Era with Hamilton",
      "description": "Lewis Hamilton joins Charles Leclerc at Ferrari, creating one of the most exciting driver pairings in recent F1 history.",
      "author": "Team Updates",
      "date": "May 2025",
      "category": "Team News", 
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749188603/pplx_project_search_images/277fd32b81f49122bea3eae0252514d8da523807.jpg"
    },
    {
      "title": "Spanish Grand Prix Highlights",
      "description": "Circuit de Barcelona-Catalunya delivers another thrilling race with dramatic battles and championship implications.",
      "author": "Race Report",
      "date": "May 2025",
      "category": "Race Review",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749188603/pplx_project_search_images/e50e160eee5e8cdab15dbe48d54641c47b2a954e.jpg"
    },
    {
      "title": "McLaren's Championship Challenge", 
      "description": "McLaren emerges as genuine championship contenders with Piastri and Norris forming a formidable driver partnership.",
      "author": "Championship Analysis",
      "date": "June 2025",
      "category": "Team Focus",
      "image": "https://static01.nyt.com/athletic/uploads/wp/2024/09/12054836/GettyImages-2162893925-scaled.jpg"
    },
    {
      "title": "F1 Movie and Merchandise",
      "description": "Limited edition F1 movie merchandise unveiled ahead of the summer premiere, celebrating the sport's cinematic debut.",
      "author": "Entertainment",
      "date": "June 2025",
      "category": "News",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1749188603/pplx_project_search_images/48bc77d085fd7a03911f42e13792053aa65b6681.jpg"
    }
  ],
  "championship_standings": [
    {"position": 1, "driver": "Oscar Piastri", "team": "McLaren", "points": 292, "color": "#FF8000"},
    {"position": 2, "driver": "Lando Norris", "team": "McLaren", "points": 374, "color": "#FF8000"},
    {"position": 3, "driver": "Charles Leclerc", "team": "Ferrari", "points": 356, "color": "#E8002D"},
    {"position": 4, "driver": "Max Verstappen", "team": "Red Bull Racing", "points": 437, "color": "#3671C6"},
    {"position": 5, "driver": "Lewis Hamilton", "team": "Ferrari", "points": 223, "color": "#E8002D"}
  ],
  "teams": [
    {"name": "McLaren", "color": "#FF8000", "drivers": ["Oscar Piastri", "Lando Norris"], "description": "Championship leaders with strong car performance"},
    {"name": "Ferrari", "color": "#E8002D", "drivers": ["Charles Leclerc", "Lewis Hamilton"], "description": "Iconic team with new driver lineup"},
    {"name": "Red Bull Racing", "color": "#3671C6", "drivers": ["Max Verstappen", "Yuki Tsunoda"], "description": "Defending champions facing new challenges"},
    {"name": "Mercedes", "color": "#27F4D2", "drivers": ["George Russell", "Kimi Antonelli"], "description": "Silver Arrows with young talent"}
  ],
  "recent_news": [
    "Briatore sets out clear Alpine target for 2026 as he shares update on search for new team boss",
    "Horner vows to give Tsunoda time at Red Bull after flashes of performance", 
    "Hulkenberg's Ferrari overtake in Spain a pinch yourself moment for Kick Sauber",
    "Aston Martin's Krack provides more background on Stroll's injury",
    "Palmer analyzes Oscar Piastri's championship-winning strengths"
  ]
};

let articlesGrid;
let standingsTable;
let teamsGrid;
let newsTicker;
let loadingSpinner;

document.addEventListener('DOMContentLoaded', function() {

  articlesGrid = document.getElementById('articles-grid');
  standingsTable = document.getElementById('standings-table');
  teamsGrid = document.getElementById('teams-grid');
  newsTicker = document.getElementById('news-ticker');
  loadingSpinner = document.getElementById('loading-spinner');

  initializeApp();
});

function initializeApp() {
  try {

    setTimeout(() => {
      hideLoadingSpinner();
    }, 800);

    populateArticles();
    populateStandings();
    populateTeams();
    populateNewsTicker();

    initializeScrollEffects();
    initializeNavigation();
    initializeAnimations();

  } catch (error) {
    console.error('Error initializing app:', error);
    hideLoadingSpinner();
  }
}

function hideLoadingSpinner() {
  if (loadingSpinner) {
    loadingSpinner.classList.add('hidden');
    setTimeout(() => {
      loadingSpinner.style.display = 'none';
    }, 500);
  }
}

function populateArticles() {
  if (!articlesGrid) return;

  articlesGrid.innerHTML = '';

  f1Data.featured_articles.forEach((article, index) => {
    const articleCard = createArticleCard(article, index);
    articlesGrid.appendChild(articleCard);
  });
}

function createArticleCard(article, index) {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6 col-sm-12';

  col.innerHTML = `
    <div class="article-card fade-in" style="animation-delay: ${index * 0.1}s">
      <img src="${article.image}" alt="${article.title}" loading="lazy">
      <div class="article-card-body">
        <span class="article-category">${article.category}</span>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-description">${article.description}</p>
        <div class="article-meta">
          <span>By ${article.author}</span>
          <span>${article.date}</span>
        </div>
      </div>
    </div>
  `;

  const card = col.querySelector('.article-card');
  card.addEventListener('click', () => {
    showArticleModal(article);
  });

  return col;
}

function populateStandings() {
  if (!standingsTable) return;

  standingsTable.innerHTML = '';

  const sortedStandings = [...f1Data.championship_standings].sort((a, b) => b.points - a.points);

  sortedStandings.forEach((standing, index) => {
    const standingRow = createStandingRow(standing, index + 1);
    standingsTable.appendChild(standingRow);
  });
}

function createStandingRow(standing, actualPosition) {
  const row = document.createElement('div');
  row.className = 'standings-row fade-in';
  row.style.animationDelay = `${actualPosition * 0.1}s`;

  row.innerHTML = `
    <div class="team-color-bar" style="background-color: ${standing.color}"></div>
    <div class="standings-position">${actualPosition}</div>
    <div class="standings-driver">
      <div class="driver-name">${standing.driver}</div>
      <div class="driver-team">${standing.team}</div>
    </div>
    <div class="standings-points">${standing.points} pts</div>
  `;

  return row;
}

function populateTeams() {
  if (!teamsGrid) return;

  teamsGrid.innerHTML = '';

  f1Data.teams.forEach((team, index) => {
    const teamCard = createTeamCard(team, index);
    teamsGrid.appendChild(teamCard);
  });
}

function createTeamCard(team, index) {
  const col = document.createElement('div');
  col.className = 'col-lg-3 col-md-6 col-sm-12';

  const driversHtml = team.drivers.map(driver => `<li><i class="fas fa-user me-2"></i>${driver}</li>`).join('');

  col.innerHTML = `
    <div class="team-card fade-in" style="animation-delay: ${index * 0.1}s">
      <div class="team-card-header" style="background: linear-gradient(135deg, ${team.color}, ${adjustColorBrightness(team.color, -20)})">
        <h4 class="team-name">${team.name}</h4>
      </div>
      <div class="team-card-body">
        <ul class="team-drivers">
          ${driversHtml}
        </ul>
        <p class="text-muted">${team.description}</p>
      </div>
    </div>
  `;

  return col;
}

function populateNewsTicker() {
  if (!newsTicker) return;

  newsTicker.innerHTML = '';

  f1Data.recent_news.forEach((news, index) => {
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
      <i class="fas fa-chevron-right me-2 text-danger"></i>
      ${news}
    `;
    newsTicker.appendChild(newsItem);
  });
}

function initializeScrollEffects() {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; 
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(21, 21, 30, 0.95)';
      } else {
        navbar.style.backgroundColor = 'rgba(21, 21, 30, 1)';
      }
    }
  });
}

function initializeNavigation() {

  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
}

function initializeAnimations() {

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }, 100);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

function adjustColorBrightness(color, amount) {
  const usePound = color[0] === '#';
  const col = usePound ? color.slice(1) : color;
  const num = parseInt(col, 16);
  let r = (num >> 16) + amount;
  let b = (num >> 8 & 0x00FF) + amount;
  let g = (num & 0x0000FF) + amount;
  r = r > 255 ? 255 : r < 0 ? 0 : r;
  b = b > 255 ? 255 : b < 0 ? 0 : b;
  g = g > 255 ? 255 : g < 0 ? 0 : g;
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

function showArticleModal(article) {

  alert(`📰 ${article.title}\n\n${article.description}\n\n✍️ By: ${article.author}\n📅 Date: ${article.date}\n🏷️ Category: ${article.category}`);
}

setTimeout(() => {

  const cards = document.querySelectorAll('.article-card, .team-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  const brand = document.querySelector('.navbar-brand');
  if (brand) {
    setInterval(() => {
      brand.style.animation = 'pulse 0.6s ease-in-out';
      setTimeout(() => {
        brand.style.animation = '';
      }, 600);
    }, 5000);
  }
}, 1000);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {

    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  }
});

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  setTimeout(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }, 500);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

window.addEventListener('error', function(e) {
  console.error('An error occurred:', e.error);

  hideLoadingSpinner();
});

window.scrollToSection = scrollToSection;

setTimeout(() => {
  hideLoadingSpinner();
}, 2000);