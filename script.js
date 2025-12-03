{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // ===== Theme toggle =====\
const themeToggle = document.getElementById("themeToggle");\
\
function applyTheme(theme) \{\
  document.documentElement.setAttribute("data-theme", theme);\
  localStorage.setItem("theme", theme);\
  themeToggle.textContent = theme === "dark" ? "Light theme" : "Dark theme";\
\}\
\
const savedTheme =\
  localStorage.getItem("theme") ||\
  document.documentElement.getAttribute("data-theme") ||\
  "dark";\
applyTheme(savedTheme);\
\
themeToggle.addEventListener("click", () => \{\
  const next =\
    document.documentElement.getAttribute("data-theme") === "dark"\
      ? "light"\
      : "dark";\
  applyTheme(next);\
\});\
\
// ===== Before / After slider =====\
const baRange = document.getElementById("baRange");\
const baClip = document.getElementById("baClip");\
\
if (baRange && baClip) \{\
  baRange.addEventListener("input", () => \{\
    baClip.style.width = `$\{baRange.value\}%`;\
  \});\
\}\
\
// ===== Footer year =====\
const yearSpan = document.getElementById("year");\
if (yearSpan) \{\
  yearSpan.textContent = new Date().getFullYear();\
\}\
\
// ===== Timeline data =====\
// You can replace these with your own events & real Bellevue photos later.\
const TIMELINE_DATA = [\
  \{\
    year: 1930,\
    tag: "Agriculture \'b7 Community",\
    title: "Japanese American Strawberry Farms",\
    text:\
      "Japanese American farmers cultivate strawberries and other crops in Bellevue, forming the backbone of the local economy and shaping the early rural landscape.",\
    img:\
      "https://images.unsplash.com/photo-1464960919068-1a07f9194c92?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Representative image of berry fields. In the project, this can be replaced with an archival Bellevue photo.",\
  \},\
  \{\
    year: 1942,\
    tag: "WWII \'b7 Internment",\
    title: "Executive Order 9066 and Removal",\
    text:\
      "Under Executive Order 9066, Japanese American families in Bellevue are forcibly removed and incarcerated. Their farms are sold, abandoned, or taken over, disrupting communities and opening land for future redevelopment.",\
    img:\
      "https://images.unsplash.com/photo-1542089363-1c09a1ea190e?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Train platform representing forced relocation; in the final version, this can be replaced with specific local sources.",\
  \},\
  \{\
    year: 1940,\
    tag: "Infrastructure \'b7 Connectivity",\
    title: "Lake Washington Floating Bridge",\
    text:\
      "The first Lake Washington Floating Bridge opens, connecting Seattle to the Eastside. Over time, additional bridge and highway projects make Bellevue far more accessible for commuters and shoppers.",\
    img:\
      "https://images.unsplash.com/photo-1520975922327-8b456906c813?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Representative bridge and highway; stands in for the real bridge imagery.",\
  \},\
  \{\
    year: 1946,\
    tag: "Retail \'b7 Suburbanization",\
    title: "Bellevue Square Opens",\
    text:\
      "Kemper Freeman Sr. opens Bellevue Square as an early suburban shopping center. It is designed for cars, with large parking areas and modern storefronts, reflecting new patterns in American consumer culture.",\
    img:\
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Early-style shopping center; can be replaced with historical Bellevue Square photos.",\
  \},\
  \{\
    year: 1965,\
    tag: "Suburbs \'b7 Growth",\
    title: "Rapid Eastside Suburban Expansion",\
    text:\
      "Housing developments, schools, and roads spread across the Eastside. For many residents, Bellevue Square becomes the de facto 'downtown'\'97a place to shop, meet, and socialize.",\
    img:\
      "https://images.unsplash.com/photo-1517940310602-485b4a9b4f29?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Parking lots and cars symbolize the car-oriented nature of postwar suburbs.",\
  \},\
  \{\
    year: 1980,\
    tag: "Architecture \'b7 Enclosed Mall",\
    title: "Enclosure and Modernization",\
    text:\
      "Bellevue Square is renovated and enclosed, mirroring a national trend toward indoor malls. Climate-controlled interiors turn the mall into an all-weather social space and reinforce its role as a community hub.",\
    img:\
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Representative indoor mall atrium; can be aligned with specific renovation phases.",\
  \},\
  \{\
    year: 1995,\
    tag: "Tech \'b7 Edge City",\
    title: "Tech Boom and the Rise of an Edge City",\
    text:\
      "With Microsoft and other tech companies growing nearby, Bellevue sees an influx of high-income residents and global workers. The area around Bellevue Square intensifies with offices, restaurants, and hotels.",\
    img:\
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Modern skyline standing in for the Eastside\'92s tech-age built environment.",\
  \},\
  \{\
    year: 2008,\
    tag: "Mixed Use \'b7 Urban Core",\
    title: "The Bellevue Collection Expands",\
    text:\
      "Bellevue Square, Lincoln Square, and Bellevue Place are marketed together as The Bellevue Collection. The complex combines retail, dining, entertainment, hotels, and offices in a dense pedestrian core.",\
    img:\
      "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab7?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Mixed-use streetscape representing the fusion of shopping, dining, and work.",\
  \},\
  \{\
    year: 2020,\
    tag: "E-Commerce \'b7 Experience",\
    title: "Adapting in the Age of Online Shopping",\
    text:\
      "As online shopping grows and the COVID-19 pandemic disrupts patterns of foot traffic, Bellevue Square leans into events, dining, seasonal displays, and experiences to remain relevant as a place-based destination.",\
    img:\
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1600&q=80",\
    caption:\
      "Events and lighting highlight the shift from pure retail to experience-driven spaces.",\
  \},\
];\
\
const PAGE_SIZE = 3;\
let page = 0;\
\
const timelineList = document.getElementById("timelineList");\
const sentinel = document.getElementById("sentinel");\
\
// Create a single timeline item DOM node\
function createTimelineItem(entry) \{\
  const li = document.createElement("li");\
  li.className = "tl-item reveal";\
\
  const dot = document.createElement("div");\
  dot.className = "timeline__dot";\
  li.appendChild(dot);\
\
  const card = document.createElement("article");\
  card.className = "tl-card";\
  li.appendChild(card);\
\
  const header = document.createElement("div");\
  header.className = "tl-header";\
  header.innerHTML = `\
    <div class="tl-year">$\{entry.year\}</div>\
    <div class="tl-tag">$\{entry.tag\}</div>\
  `;\
  card.appendChild(header);\
\
  const h4 = document.createElement("h4");\
  h4.textContent = entry.title;\
  h4.style.margin = "2px 0 4px";\
  h4.style.fontSize = "15px";\
  card.appendChild(h4);\
\
  const p = document.createElement("p");\
  p.className = "tl-text";\
  p.textContent = entry.text;\
  card.appendChild(p);\
\
  if (entry.img) \{\
    const fig = document.createElement("figure");\
    fig.className = "tl-media";\
    const img = document.createElement("img");\
    img.src = entry.img;\
    img.alt = entry.title;\
    img.loading = "lazy";\
    fig.appendChild(img);\
    if (entry.caption) \{\
      const cap = document.createElement("figcaption");\
      cap.className = "tl-caption";\
      cap.textContent = entry.caption;\
      fig.appendChild(cap);\
    \}\
    card.appendChild(fig);\
  \}\
\
  return li;\
\}\
\
function loadNextPage() \{\
  if (!timelineList) return;\
  const start = page * PAGE_SIZE;\
  const end = start + PAGE_SIZE;\
  const slice = TIMELINE_DATA.slice(start, end);\
\
  slice.forEach((entry) => \{\
    const item = createTimelineItem(entry);\
    timelineList.appendChild(item);\
  \});\
\
  page++;\
\
  if (end >= TIMELINE_DATA.length && sentinel) \{\
    sentinel.textContent = "You\'92ve reached the end of the timeline.";\
    if (intersectionObserver) intersectionObserver.disconnect();\
  \}\
\
  triggerReveal();\
\}\
\
let intersectionObserver;\
if (sentinel) \{\
  intersectionObserver = new IntersectionObserver(\
    (entries) => \{\
      entries.forEach((en) => \{\
        if (en.isIntersecting) \{\
          setTimeout(loadNextPage, 200);\
        \}\
      \});\
    \},\
    \{ rootMargin: "250px" \}\
  );\
\
  intersectionObserver.observe(sentinel);\
\}\
\
// ===== Reveal on scroll =====\
function triggerReveal() \{\
  const elements = document.querySelectorAll(".reveal:not(.show)");\
  elements.forEach((el) => \{\
    const io = new IntersectionObserver(\
      (entries, obs) => \{\
        entries.forEach((en) => \{\
          if (en.isIntersecting) \{\
            el.classList.add("show");\
            obs.disconnect();\
          \}\
        \});\
      \},\
      \{ threshold: 0.15 \}\
    );\
    io.observe(el);\
  \});\
\}\
triggerReveal();\
\
// ===== Flip cards =====\
function initFlipCards() \{\
  const flips = document.querySelectorAll(".flip");\
  flips.forEach((flip) => \{\
    const btn = flip.querySelector(".flip__btn");\
\
    function toggleFlip() \{\
      const flipped = flip.classList.toggle("is-flipped");\
      if (btn) \{\
        btn.setAttribute(\
          "aria-label",\
          flipped ? "Flip to view cause" : "Flip to view effect"\
        );\
      \}\
    \}\
\
    if (btn) \{\
      btn.addEventListener("click", (e) => \{\
        e.stopPropagation();\
        toggleFlip();\
      \});\
    \}\
\
    flip.addEventListener("click", (e) => \{\
      if (e.target.closest(".flip__btn")) return;\
      toggleFlip();\
    \});\
\
    flip.addEventListener("keydown", (e) => \{\
      if (e.key === "Enter" || e.key === " ") \{\
        e.preventDefault();\
        toggleFlip();\
      \}\
    \});\
  \});\
\}\
\
initFlipCards();\
}