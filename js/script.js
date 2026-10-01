const articlesData = {
    1: {
    category: "Energía Limpia",
    title: "El despegue de la eólica marina flotante en costas profundas",
    author: "Dra. Elena Ramos • Especialista en Ingeniería Oceánica",
    date: "Septiembre 2026",
    content: `
        <p class="text-slate-600 leading-relaxed">Los parques eólicos offshore tradicionales requerían anclajes rígidos sobre el lecho marino a profundidades menores de 50 metros. Sin embargo, las costas más ventosas del planeta —como las del Pacífico, el Atlántico Norte y el Mar del Norte meridional— descienden abruptamente a cientos de metros.</p>
        <h4 class="font-bold text-slate-900 text-lg mt-4 mb-2">Plataformas Semisumergibles y Cables Dinámicos</h4>
        <p class="text-slate-600 leading-relaxed">Mediante estructuras semisumergibles inspiradas en las plataformas petrolíferas reconvertidas, las nuevas turbinas de hasta 18 megavatios operan sobre flotadores de hormigón ecológico y líneas de amarre de fibra sintética de alta resistencia.</p>
        <div class="p-4 bg-brand-50 rounded-2xl border border-brand-200 text-brand-900 text-sm my-4">
        <strong>Impacto proyectado:</strong> Se estima que la capacidad marina flotante superará los 60 GW acumulados antes de 2035, reduciendo el costo nivelado de la energía (LCOE) a menos de 45 €/MWh.
        </div>
        <p class="text-slate-600 leading-relaxed">Además, los diseños actuales incorporan arrecifes artificiales en las bases flotantes para fomentar la proliferación de moluscos y peces locales, convirtiendo las granjas energéticas en zonas de veda y protección marina.</p>
    `
    },
    2: {
    category: "Economía Circular",
    title: "Biorreciclaje enzimático: Descomponer plásticos en 12 horas",
    author: "Ing. Marco Morales • Investigador en Biotecnología de Materiales",
    date: "Agosto 2026",
    content: `
        <p class="text-slate-600 leading-relaxed">El reciclaje termomecánico convencional degrada las cadenas poliméricas, limitando el número de veces que una botella puede volver a convertirse en envase alimentario. El biorreciclaje enzimático rompe este ciclo vicioso.</p>
        <h4 class="font-bold text-slate-900 text-lg mt-4 mb-2">Enzimas PETasa mutantes de alta cinética</h4>
        <p class="text-slate-600 leading-relaxed">Mediante diseño computacional de proteínas asistido por redes neuronales, se han obtenido variantes enzimáticas que operan a 65°C, hidrolizando tereftalato de polietileno (PET) sin generar microplásticos dispersos ni emisiones gaseosas.</p>
        <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-900 text-sm my-4">
        <strong>Ventaja competitiva:</strong> El producto resultante son monómeros puros (ácido tereftálico y etilenglicol) equivalentes en un 100% a la materia prima virgen de origen fósil.
        </div>
    `
    },
    3: {
    category: "Ciudades Resilientes",
    title: "Ciudades Esponja: El modelo para neutralizar inundaciones",
    author: "Arq. Lucía Castillo • Urbanista y Consultora de Resiliencia",
    date: "Septiembre 2026",
    content: `
        <p class="text-slate-600 leading-relaxed">El sellado asfáltico acelerado de las últimas décadas convirtió los núcleos urbanos en toboganes impermeables. Ante las lluvias torrenciales provocadas por el cambio climático, la ingeniería clásica de tuberías subterráneas resulta insuficiente y prohibitiva.</p>
        <h4 class="font-bold text-slate-900 text-lg mt-4 mb-2">Humedales escalonados y pavimentos vivos</h4>
        <p class="text-slate-600 leading-relaxed">El concepto de 'Ciudad Esponja' propone infiltrar, retener y purificar el agua donde cae. Las plazas cívicas se diseñan como anfiteatros inundables que albergan agua durante tormentas extraordinarias y se secan sin daño en 24 horas.</p>
        <p class="text-slate-600 leading-relaxed mt-2">Esta agua recarga los acuíferos subterráneos locales y alimenta la vegetación que reduce la temperatura ambiente hasta en 3.5°C en verano.</p>
    `
    },
    4: {
    category: "Biodiversidad",
    title: "Corredores biológicos: Conectando ecosistemas fragmentados",
    author: "Biol. David Saenz • Conservacionista",
    date: "Julio 2026",
    content: `
        <p class="text-slate-600 leading-relaxed">Las autopistas, campos de monocultivo y desarrollos residenciales han convertido los hábitats silvestres en islas aisladas donde las poblaciones sufren de empobrecimiento genético y alta mortalidad por atropellos.</p>
        <h4 class="font-bold text-slate-900 text-lg mt-4 mb-2">Pasos superiores e infraestructura verde continua</h4>
        <p class="text-slate-600 leading-relaxed">Los pasos ecológicos con vegetación autóctona permiten el cruce seguro de grandes mamíferos y polinizadores. Estudios recientes demuestran un incremento del 40% en la diversidad genética en poblaciones de fauna conectadas por estas franjas verdes.</p>
    `
    },
    5: {
    category: "Energía Limpia",
    title: "Redes eléctricas inteligentes (Smart Grids) y balance en tiempo real",
    author: "Ing. Carla Vega • Automatización y Redes",
    date: "Septiembre 2026",
    content: `
        <p class="text-slate-600 leading-relaxed">La integración masiva de paneles solares residenciales y coches eléctricos transforma el flujo unidireccional de la electricidad en una red bidireccional compleja. Las Smart Grids son el sistema nervioso que equilibra este nuevo paradigma.</p>
        <p class="text-slate-600 leading-relaxed mt-2">Mediante algoritmos de aprendizaje reforzado, la red redistribuye excedentes instantáneos hacia sistemas de bombeo hidroeléctrico o centros de recarga vehicular justo en los minutos de máxima radiación solar.</p>
    `
    },
    6: {
    category: "Economía Circular",
    title: "El fin del 'Fast Fashion': Trazabilidad y fibras reciclables",
    author: "Valeria Noguera • Consultora de Moda Circular",
    date: "Junio 2026",
    content: `
        <p class="text-slate-600 leading-relaxed">Cada segundo se quema o entierra en vertederos el equivalente a un camión de ropa usada. La nueva directiva de ecodiseño exige pasaportes digitales con códigos QR que revelan la composición exacta de cada hilo.</p>
        <p class="text-slate-600 leading-relaxed mt-2">Marcas pioneras están eliminando mezclas incompatibles (como algodón con elastano superior al 2%) para permitir el desmontaje químico directo y revalorizar las prendas al final de su ciclo de vida.</p>
    `
    }
};

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = !mobileMenu.classList.contains('hidden');
    if (isExpanded) {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    } else {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    }
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    });
});

// Search and Category Filter System
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.article-card');
const noResults = document.getElementById('noResults');
const resetFilterBtn = document.getElementById('resetFilterBtn');

let currentCategory = 'all';
let currentSearchQuery = '';

function filterArticles() {
    let visibleCount = 0;

    articleCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const cardTitle = card.getAttribute('data-title').toLowerCase();
    const cardText = card.textContent.toLowerCase();

    const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
    const matchesSearch = currentSearchQuery === '' || cardTitle.includes(currentSearchQuery) || cardText.includes(currentSearchQuery);

    if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        visibleCount++;
    } else {
        card.classList.add('hidden');
    }
    });

    if (visibleCount === 0) {
    noResults.classList.remove('hidden');
    } else {
    noResults.classList.add('hidden');
    }
}

// Category Buttons Click
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
    // Reset styles
    filterButtons.forEach(b => {
        b.className = 'filter-btn px-4 py-2 rounded-xl text-sm font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition';
    });
    // Active style
    btn.className = 'filter-btn px-4 py-2 rounded-xl text-sm font-semibold bg-brand-600 text-white shadow-sm transition';
    currentCategory = btn.getAttribute('data-cat');
    filterArticles();
    });
});

// Search input listener
searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase().trim();
    filterArticles();
});

resetFilterBtn.addEventListener('click', () => {
    currentSearchQuery = '';
    currentCategory = 'all';
    searchInput.value = '';
    filterButtons[0].click();
});

// Footprint Calculator Logic
const transportRange = document.getElementById('transportRange');
const transportVal = document.getElementById('transportVal');
const dietSelect = document.getElementById('dietSelect');
const energyRange = document.getElementById('energyRange');
const energyVal = document.getElementById('energyVal');
const totalCo2 = document.getElementById('totalCo2');
const statusBadge = document.getElementById('statusBadge');
const recommendationText = document.getElementById('recommendationText');

function calculateFootprint() {
    const km = parseFloat(transportRange.value);
    const dietFactor = parseFloat(dietSelect.value);
    const hoursAc = parseFloat(energyRange.value);

    transportVal.textContent = `${km} km`;
    energyVal.textContent = `${hoursAc} hrs`;

    // Simplified emission factors (kg CO2e)
    // Car: ~0.15 kg CO2 / km
    // AC/Heat: ~0.45 kg CO2 / hour
    // Diet: constant per day
    const transportCo2 = km * 0.15;
    const energyCo2 = hoursAc * 0.45;
    const dietCo2 = dietFactor;

    const total = (transportCo2 + energyCo2 + dietCo2).toFixed(1);
    totalCo2.textContent = total;

    // Badges
    if (total < 5.0) {
    statusBadge.className = 'mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800';
    statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500"></span><span>Nivel: Huella Baja y Ejemplar</span>';
    recommendationText.textContent = '¡Excelente! Tus hábitos generan una emisión significativamente inferior al promedio nacional.';
    } else if (total <= 12.0) {
    statusBadge.className = 'mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800';
    statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-500"></span><span>Nivel: Moderado y Promedio</span>';
    recommendationText.textContent = 'Tu huella se encuentra dentro del rango habitual urbano. Caminar en trayectos cortos o usar termostatos programables te ayudará a reducirla más.';
    } else {
    statusBadge.className = 'mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800';
    statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-rose-500"></span><span>Nivel: Huella Elevada</span>';
    recommendationText.textContent = 'Tu estimación supera el promedio sostenible. Reducir viajes individuales en combustión o alternar comidas basadas en vegetales marcaría una gran diferencia.';
    }
}

transportRange.addEventListener('input', calculateFootprint);
dietSelect.addEventListener('change', calculateFootprint);
energyRange.addEventListener('input', calculateFootprint);

// Copy impact to clipboard safely
function shareCalculatedImpact() {
    const co2 = totalCo2.textContent;
    const textToCopy = `Mi huella de carbono diaria estimada es de ${co2} kg CO2e calculada en el portal EcoSphere. ¡Súmate a la sostenibilidad!`;
    
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    showToast("Copiado al portapapeles", "Puedes pegar tu resultado en tus redes o notas.");
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const arrow = item.querySelector('.faq-arrow');

    toggle.addEventListener('click', () => {
    const isOpen = !content.classList.contains('hidden');
    
    // Close others
    faqItems.forEach(otherItem => {
        otherItem.querySelector('.faq-content').classList.add('hidden');
        otherItem.querySelector('.faq-arrow').classList.remove('rotate-180');
    });

    if (!isOpen) {
        content.classList.remove('hidden');
        arrow.classList.add('rotate-180');
    }
    });
});

// Newsletter Submit Event
const newsletterForm = document.getElementById('newsletterForm');
const emailSubscriber = document.getElementById('emailSubscriber');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailSubscriber.value.trim();
    if (email) {
    showToast("¡Suscripción confirmada!", `Te hemos enviado una bienvenida a ${email}`);
    newsletterForm.reset();
    }
});

// Modal Details Functions
const articleModal = document.getElementById('articleModal');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
    const data = articlesData[id];
    if (!data) return;

    modalContent.innerHTML = `
    <span class="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-2">
        ${data.category}
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
        ${data.title}
    </h2>
    <div class="text-xs text-slate-500 pb-3 border-b border-slate-100 flex items-center justify-between">
        <span>${data.author}</span>
        <span>${data.date}</span>
    </div>
    <div class="text-slate-700 text-sm space-y-3 pt-2">
        ${data.content}
    </div>
    `;

    articleModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    articleModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Close modal on click outside
articleModal.addEventListener('click', (e) => {
    if (e.target === articleModal) {
    closeModal();
    }
});

// Esc key close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !articleModal.classList.contains('hidden')) {
    closeModal();
    }
});

// Toast Notification helper
function showToast(title, message) {
    const toastBox = document.getElementById('toastBox');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toastBox.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toastBox.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
    toastBox.classList.remove('translate-y-0', 'opacity-100');
    toastBox.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    }, 4000);
}