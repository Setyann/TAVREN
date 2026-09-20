(() => {
  'use strict';
  const D = window.TAVREN_DATA;
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const fmt = new Intl.NumberFormat('en-US');
  const state = {
    lang: 'en',
    serviceCategory: 'hair',
    servicesExpanded: false,
    workFilter: 'all',
    reviewIndex: 0,
    booking: freshBooking(),
    giftAmount: 30000,
  };

  const i18n = {
    en: {
      demoBar:'Fictional portfolio demo · No real appointments are created',navServices:'Services',navWork:'Work',navMasters:'Masters',navLocations:'Locations',navAbout:'About',book:'Book',bookAppointment:'Book an appointment',
      heroEyebrow:'Yerevan · Two studios · Online booking',heroTitle:'Know the service, specialist and time <em>before you arrive.</em>',heroLead:'Hair, nails, brows, lashes, makeup and non-medical care — with clear pricing, specialist portfolios and real front-end availability logic.',exploreServices:'Explore services',heroMetaServices:'services with pricing',heroMetaMasters:'specialists by skill',heroMetaLanguages:'interface languages',nextAvailable:'NEXT AVAILABLE',findAppointment:'Find an appointment →',
      servicesEyebrow:'Services & transparent pricing',servicesTitle:'Start with what you need.',servicesIntro:'Every service shows its expected time and price before booking. For variable color work, the final estimate is confirmed before the appointment begins.',showAllServices:'Show all services',showLessServices:'Show fewer services',
      workEyebrow:'Selected work',workTitle:'See the result.<br><em>Then choose who made it.</em>',workIntro:'Portfolio images connect directly to the service and specialist. No guessing which master created the result.',
      mastersEyebrow:'Specialists, not generalists',mastersTitle:'Choose by skill,<br>not by chance.',mastersIntro:'Every profile shows specialization, languages and selected work. Booking only offers services that the specialist actually performs.',
      whyTitle:'Less uncertainty between “I like it” and “I booked it.”',whyPriceTitle:'Prices before booking',whyPriceText:'Know the fixed rate or realistic starting price before choosing a slot.',whySpecialistsTitle:'Visible specialization',whySpecialistsText:'Work, services and master expertise are connected instead of buried in social posts.',whyBookTitle:'Book without messaging',whyBookText:'Choose service, specialist, location, date and time directly in the demo flow.',whyLanguageTitle:'Three-language structure',whyLanguageText:'The interface is prepared for Armenian, English and Russian clients.',
      knowNeed:'KNOW WHAT YOU NEED?',bookingBandTitle:'The calendar should answer faster than a direct message.',locationsEyebrow:'Two demo locations',locationsTitle:'One booking system.<br>Two different studios.',locationsIntro:'Location availability changes automatically according to the chosen service, specialist and working day.',
      reviewsEyebrow:'Fictional client notes',reviewsTitle:'Specific experiences beat generic praise.',reviewsNote:'All reviews are clearly fictional demo content created for this portfolio project.',
      packagesEyebrow:'Coordinated appointments',packagesTitle:'Packages with a reason.',packagesIntro:'No fake countdowns or huge discounts. Packages simply coordinate services that clients often need together.',
      giftEyebrow:'Gift cards',giftTitle:'Give the appointment.<br>Let them choose the service.',giftText:'Digital or physical demo cards. Valid for 12 months, usable across several visits and at both fictional locations.',chooseGift:'Choose a gift card',faqTitle:'Remove the question before it blocks the booking.',stillBook:'Book an appointment',finalEyebrow:"WHEN YOU'RE READY",finalTitle:'Choose a service.<br><em>See what is actually available.</em>',
      footerDesc:'A fictional Yerevan beauty studio created exclusively as a web-development portfolio demonstration.',footerExplore:'Explore',footerVisit:'Visit',footerFollow:'Follow',demoBooking:'INTERACTIVE DEMO BOOKING',bookingTitle:'Book an appointment',yourSelection:'YOUR SELECTION',summaryEmpty:'Choose a service to begin.',privacyNote:'Nothing is sent to a server. Confirmation is stored only in this browser.',back:'Back',continue:'Continue'
    },
    ru: {
      demoBar:'Вымышленный portfolio-demo · Реальные записи не создаются',navServices:'Услуги',navWork:'Работы',navMasters:'Мастера',navLocations:'Филиалы',navAbout:'О нас',book:'Запись',bookAppointment:'Записаться',
      heroEyebrow:'Ереван · Две студии · Онлайн-запись',heroTitle:'Знайте услугу, мастера и время <em>до визита.</em>',heroLead:'Волосы, ногти, брови, ресницы, макияж и немедицинский уход — с понятными ценами, портфолио мастеров и реальной frontend-логикой свободного времени.',exploreServices:'Смотреть услуги',heroMetaServices:'услуг с ценами',heroMetaMasters:'специалистов по профилю',heroMetaLanguages:'языка интерфейса',nextAvailable:'БЛИЖАЙШЕЕ ВРЕМЯ',findAppointment:'Найти время →',
      servicesEyebrow:'Услуги и прозрачные цены',servicesTitle:'Начните с того, что вам нужно.',servicesIntro:'Для каждой услуги заранее указаны примерное время и цена. Для сложного окрашивания итоговая оценка подтверждается до начала работы.',showAllServices:'Показать все услуги',showLessServices:'Показать меньше',
      workEyebrow:'Избранные работы',workTitle:'Посмотрите результат.<br><em>Затем выберите автора.</em>',workIntro:'Каждая работа связана с услугой и конкретным мастером. Не нужно угадывать, кто создал результат.',
      mastersEyebrow:'Специалисты, а не универсалы',mastersTitle:'Выбирайте по навыку,<br>а не случайно.',mastersIntro:'В профиле видны специализация, языки и работы. Запись предлагает только услуги, которые мастер действительно выполняет.',
      whyTitle:'Меньше неопределённости между «нравится» и «я записался».',whyPriceTitle:'Цена до записи',whyPriceText:'Фиксированная стоимость или реалистичная стартовая цена видна до выбора времени.',whySpecialistsTitle:'Понятная специализация',whySpecialistsText:'Работы, услуги и навыки мастера связаны между собой, а не спрятаны в соцсетях.',whyBookTitle:'Запись без переписки',whyBookText:'Выберите услугу, мастера, филиал, дату и время прямо на сайте.',whyLanguageTitle:'Три языка',whyLanguageText:'Интерфейс предусмотрен для армянского, английского и русского.',
      knowNeed:'УЖЕ ЗНАЕТЕ, ЧТО НУЖНО?',bookingBandTitle:'Календарь должен отвечать быстрее, чем Direct.',locationsEyebrow:'Два demo-филиала',locationsTitle:'Одна система записи.<br>Две разные студии.',locationsIntro:'Доступность филиала меняется автоматически в зависимости от услуги, мастера и рабочего дня.',
      reviewsEyebrow:'Вымышленные отзывы',reviewsTitle:'Конкретный опыт лучше общих похвал.',reviewsNote:'Все отзывы — явно вымышленный demo-контент для портфолио.',
      packagesEyebrow:'Скоординированные услуги',packagesTitle:'Пакеты со смыслом.',packagesIntro:'Без фальшивых таймеров и огромных скидок. Пакеты просто объединяют услуги, которые часто нужны вместе.',
      giftEyebrow:'Подарочные карты',giftTitle:'Подарите визит.<br>Услугу человек выберет сам.',giftText:'Цифровые или физические demo-карты. Действуют 12 месяцев, могут использоваться за несколько посещений и в обоих вымышленных филиалах.',chooseGift:'Выбрать подарочную карту',faqTitle:'Ответьте на вопрос до того, как он остановит запись.',stillBook:'Записаться',finalEyebrow:'КОГДА БУДЕТЕ ГОТОВЫ',finalTitle:'Выберите услугу.<br><em>Посмотрите реальное свободное время.</em>',
      footerDesc:'Полностью вымышленная beauty-студия в Ереване, созданная исключительно как демонстрация веб-разработки.',footerExplore:'Разделы',footerVisit:'Контакты',footerFollow:'Соцсети',demoBooking:'ИНТЕРАКТИВНАЯ DEMO-ЗАПИСЬ',bookingTitle:'Записаться',yourSelection:'ВАШ ВЫБОР',summaryEmpty:'Сначала выберите услугу.',privacyNote:'Ничего не отправляется на сервер. Подтверждение сохраняется только в этом браузере.',back:'Назад',continue:'Продолжить'
    },
    hy: {
      demoBar:'Հորինված portfolio-demo · Իրական գրանցումներ չեն ստեղծվում',navServices:'Ծառայություններ',navWork:'Աշխատանքներ',navMasters:'Վարպետներ',navLocations:'Մասնաճյուղեր',navAbout:'Մեր մասին',book:'Գրանցվել',bookAppointment:'Գրանցվել այցի',
      heroEyebrow:'Երևան · Երկու ստուդիա · Առցանց գրանցում',heroTitle:'Իմացեք ծառայությունը, մասնագետին և ժամը <em>մինչև այցը։</em>',heroLead:'Մազեր, եղունգներ, հոնքեր, թարթիչներ, դիմահարդարում և ոչ բժշկական խնամք՝ հստակ գներով, մասնագետների պորտֆոլիոյով և իրական frontend հասանելիության տրամաբանությամբ։',exploreServices:'Դիտել ծառայությունները',heroMetaServices:'ծառայություն գներով',heroMetaMasters:'մասնագետ ըստ ոլորտի',heroMetaLanguages:'ինտերֆեյսի լեզու',nextAvailable:'ՄՈՏԱԿԱ ԱԶԱՏ ԺԱՄԸ',findAppointment:'Գտնել ազատ ժամ →',
      servicesEyebrow:'Ծառայություններ և հստակ գներ',servicesTitle:'Սկսեք այն բանից, ինչ ձեզ պետք է։',servicesIntro:'Յուրաքանչյուր ծառայության համար նախապես երևում են մոտավոր տևողությունն ու գինը։ Փոփոխական գներով գունավորման դեպքում վերջնական գնահատականը հաստատվում է մինչև աշխատանքի սկիզբը։',showAllServices:'Ցույց տալ բոլոր ծառայությունները',showLessServices:'Ցույց տալ քիչ',
      workEyebrow:'Ընտրված աշխատանքներ',workTitle:'Տեսեք արդյունքը։<br><em>Հետո ընտրեք հեղինակին։</em>',workIntro:'Պորտֆոլիոյի յուրաքանչյուր աշխատանք կապված է ծառայության և կոնկրետ մասնագետի հետ։',
      mastersEyebrow:'Մասնագետներ, ոչ թե ամեն ինչ անողներ',mastersTitle:'Ընտրեք հմտությամբ,<br>ոչ պատահաբար։',mastersIntro:'Յուրաքանչյուր էջ ցույց է տալիս մասնագիտացումը, լեզուներն ու աշխատանքները։ Գրանցումը առաջարկում է միայն այն ծառայությունները, որոնք մասնագետը իրականում կատարում է։',
      whyTitle:'Ավելի քիչ անորոշություն «հավանում եմ»-ից մինչև «գրանցվեցի»։',whyPriceTitle:'Գինը մինչև գրանցվելը',whyPriceText:'Ֆիքսված կամ իրական մեկնարկային գինը երևում է մինչև ժամ ընտրելը։',whySpecialistsTitle:'Տեսանելի մասնագիտացում',whySpecialistsText:'Աշխատանքները, ծառայությունները և հմտությունները կապված են իրար, ոչ թե կորած սոցցանցերում։',whyBookTitle:'Գրանցում առանց նամակագրության',whyBookText:'Ընտրեք ծառայությունը, մասնագետին, մասնաճյուղը, օրը և ժամը անմիջապես կայքում։',whyLanguageTitle:'Երեք լեզու',whyLanguageText:'Ինտերֆեյսը նախատեսված է հայերեն, անգլերեն և ռուսերեն հաճախորդների համար։',
      knowNeed:'ԱՐԴԵՆ ԳԻՏԵ՞Ք՝ ԻՆՉ Է ՊԵՏՔ',bookingBandTitle:'Օրացույցը պետք է պատասխանի ավելի արագ, քան Direct-ը։',locationsEyebrow:'Երկու demo մասնաճյուղ',locationsTitle:'Մեկ գրանցման համակարգ։<br>Երկու տարբեր ստուդիա։',locationsIntro:'Մասնաճյուղի հասանելիությունը փոխվում է ըստ ծառայության, մասնագետի և աշխատանքային օրվա։',
      reviewsEyebrow:'Հորինված հաճախորդների կարծիքներ',reviewsTitle:'Կոնկրետ փորձը ավելի օգտակար է, քան ընդհանուր գովեստը։',reviewsNote:'Բոլոր կարծիքները հորինված demo բովանդակություն են այս portfolio նախագծի համար։',
      packagesEyebrow:'Համադրված այցեր',packagesTitle:'Փաթեթներ՝ պատճառաբանությամբ։',packagesIntro:'Առանց կեղծ հաշվիչների կամ հսկայական զեղչերի։ Փաթեթները պարզապես համադրում են այն ծառայությունները, որոնք հաճախ պետք են միասին։',
      giftEyebrow:'Նվեր քարտեր',giftTitle:'Նվիրեք այցը։<br>Ծառայությունը թող ընտրեն իրենք։',giftText:'Թվային կամ ֆիզիկական demo քարտեր։ Գործում են 12 ամիս, կարելի է օգտագործել մի քանի այցով և երկու հորինված մասնաճյուղերում։',chooseGift:'Ընտրել նվեր քարտ',faqTitle:'Պատասխանեք հարցին մինչև այն խանգարի գրանցվելուն։',stillBook:'Գրանցվել այցի',finalEyebrow:'ԵՐԲ ՊԱՏՐԱՍՏ ԼԻՆԵՔ',finalTitle:'Ընտրեք ծառայությունը։<br><em>Տեսեք իրական հասանելի ժամերը։</em>',
      footerDesc:'Երևանյան ամբողջությամբ հորինված beauty studio՝ ստեղծված միայն վեբ-մշակման portfolio ցուցադրության համար։',footerExplore:'Բաժիններ',footerVisit:'Կապ',footerFollow:'Սոցցանցեր',demoBooking:'ԻՆՏԵՐԱԿՏԻՎ DEMO ԳՐԱՆՑՈՒՄ',bookingTitle:'Գրանցվել այցի',yourSelection:'ՁԵՐ ԸՆՏՐՈՒԹՅՈՒՆԸ',summaryEmpty:'Սկսելու համար ընտրեք ծառայությունը։',privacyNote:'Ոչինչ չի ուղարկվում սերվեր։ Հաստատումը պահվում է միայն այս բրաուզերում։',back:'Հետ',continue:'Շարունակել'
    }
  };

  function freshBooking(){return {step:1,serviceId:null,masterId:null,preferredMasterId:null,locationId:null,date:null,time:null,resolvedMasterId:null,client:{name:'',phone:'',email:'',note:'',policy:false},confirmed:false,reference:null};}
  function tr(obj){ return typeof obj === 'string' ? obj : (obj?.[state.lang] || obj?.en || ''); }
  function money(v){ return `${fmt.format(v)} AMD`; }
  function duration(s){
    const min=s.durationMin,max=s.durationMax;
    const f=n=> n<60?`${n} min`:(n%60?`${Math.floor(n/60)}h ${n%60}m`:`${n/60}h`);
    return max?`${f(min)}–${f(max)}`:f(min);
  }
  function servicePrice(s){ return `${s.variable?'from ':''}${money(s.priceFrom)}`; }
  function byId(arr,id){return arr.find(x=>x.id===id)}
  function safe(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function timeToMin(t){const [h,m]=t.split(':').map(Number);return h*60+m}
  function minToTime(n){const h=Math.floor(n/60),m=n%60;return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`}
  function localDateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
  function parseDateKey(k){const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d)}
  function dateLabel(k,long=false){const d=parseDateKey(k);const locale=state.lang==='hy'?'hy-AM':state.lang==='ru'?'ru-RU':'en-GB';return new Intl.DateTimeFormat(locale,long?{weekday:'long',day:'numeric',month:'long'}:{day:'numeric',month:'short'}).format(d)}
  function weekdayShort(d){const locale=state.lang==='hy'?'hy-AM':state.lang==='ru'?'ru-RU':'en-GB';return new Intl.DateTimeFormat(locale,{weekday:'short'}).format(d)}

  // Locale
  function applyLocale(){
    document.documentElement.lang=state.lang;
    $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;const val=i18n[state.lang]?.[key]||i18n.en[key];if(val!=null)el.innerHTML=val;});
    $$('.lang-option').forEach(b=>b.classList.toggle('active',b.dataset.lang===state.lang));
    $('#service-search').placeholder = state.lang==='ru'?'Поиск услуг':state.lang==='hy'?'Ծառայությունների որոնում':'Search services';
    renderServiceTabs();renderServices();renderWorkFilters();renderWork();renderMasters();renderLocations();renderReview();renderPackages();renderFaq();
    if($('#booking-modal').classList.contains('open')) renderBooking();
  }

  // Navigation
  const menuBtn=$('.menu-toggle'), mobileMenu=$('#mobile-menu');
  menuBtn.addEventListener('click',()=>{const open=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!open));menuBtn.classList.toggle('open',!open);mobileMenu.hidden=open;});
  $$('#mobile-menu a, #mobile-menu .js-open-booking').forEach(el=>el.addEventListener('click',()=>{menuBtn.setAttribute('aria-expanded','false');menuBtn.classList.remove('open');mobileMenu.hidden=true;}));
  $$('.lang-option').forEach(b=>b.addEventListener('click',()=>{state.lang=b.dataset.lang;localStorage.setItem('tavren_lang',state.lang);applyLocale();}));
  state.lang=localStorage.getItem('tavren_lang')||'en';

  // Services
  function renderServiceTabs(){
    $('#service-tabs').innerHTML=D.categories.map(c=>`<button class="category-tab ${state.serviceCategory===c.id?'active':''}" type="button" data-category="${c.id}">${safe(tr(c.label))}</button>`).join('');
    $$('.category-tab').forEach(b=>b.addEventListener('click',()=>{state.serviceCategory=b.dataset.category;state.servicesExpanded=false;renderServiceTabs();renderServices();updateFeatureFromCategory();}));
  }
  function renderServices(){
    const query=$('#service-search').value.trim().toLowerCase();
    let items=D.services.filter(s=>s.category===state.serviceCategory);
    if(query) items=D.services.filter(s=>`${tr(s.name)} ${tr(s.desc)}`.toLowerCase().includes(query));
    const visible=state.servicesExpanded||query?items:items.slice(0,6);
    $('#service-list').innerHTML=visible.length?visible.map(s=>`<article class="service-row" tabindex="0" data-service="${s.id}">
      <div><h3>${safe(tr(s.name))}</h3><p>${safe(tr(s.desc))}</p></div><span class="meta">${duration(s)}</span><span class="price">${servicePrice(s)}</span><span class="row-arrow">↗</span>
    </article>`).join(''):`<div class="service-empty">${state.lang==='ru'?'Ничего не найдено.':state.lang==='hy'?'Ոչինչ չի գտնվել։':'No services found.'}</div>`;
    $('#all-services-toggle').style.display=(items.length>6&&!query)?'inline-flex':'none';
    $('#all-services-toggle').firstElementChild.textContent = state.servicesExpanded?(i18n[state.lang].showLessServices):(i18n[state.lang].showAllServices);
    $$('.service-row').forEach(row=>{
      const activate=()=>{updateFeature(row.dataset.service);};
      row.addEventListener('mouseenter',activate);row.addEventListener('focus',activate);
      row.addEventListener('click',()=>openBooking(row.dataset.service));
      row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openBooking(row.dataset.service)}});
    });
  }
  function updateFeature(serviceId){
    const s=byId(D.services,serviceId)||D.services.find(x=>x.category===state.serviceCategory);if(!s)return;
    const imageMap={hair:D.images.heroAlt,nails:'https://images.pexels.com/photos/34930100/pexels-photo-34930100.jpeg?auto=compress&cs=tinysrgb&w=1200','brows-lashes':'https://images.pexels.com/photos/6135621/pexels-photo-6135621.jpeg?auto=compress&cs=tinysrgb&w=1200',makeup:'https://images.pexels.com/photos/5654208/pexels-photo-5654208.jpeg?auto=compress&cs=tinysrgb&w=1200',care:'https://images.pexels.com/photos/34775252/pexels-photo-34775252.jpeg?auto=compress&cs=tinysrgb&w=1200'};
    const cat=byId(D.categories,s.category); const img=$('#service-feature-image'); img.hidden=false; img.src=imageMap[s.category];
    $('#service-feature-kicker').textContent=`${tr(cat.label).toUpperCase()} / ${duration(s)}`;
    $('#service-feature-title').textContent=tr(s.name);$('#service-feature-desc').textContent=tr(s.desc);
    $('.service-feature .js-book-service').dataset.service=s.id;
  }
  function updateFeatureFromCategory(){updateFeature(D.services.find(s=>s.category===state.serviceCategory)?.id)}
  $('#service-search').addEventListener('input',renderServices);
  $('#all-services-toggle').addEventListener('click',()=>{state.servicesExpanded=!state.servicesExpanded;renderServices();});
  $('.service-feature .js-book-service').addEventListener('click',e=>openBooking(e.currentTarget.dataset.service));

  // Work
  function renderWorkFilters(){
    const allLabel=state.lang==='ru'?'Все':state.lang==='hy'?'Բոլորը':'All';
    $('#work-filters').innerHTML=`<button class="work-filter ${state.workFilter==='all'?'active':''}" data-filter="all">${allLabel}</button>`+D.categories.slice(0,4).map(c=>`<button class="work-filter ${state.workFilter===c.id?'active':''}" data-filter="${c.id}">${safe(tr(c.label))}</button>`).join('');
    $$('.work-filter').forEach(b=>b.addEventListener('click',()=>{state.workFilter=b.dataset.filter;renderWorkFilters();renderWork();}));
  }
  function renderWork(){
    const items=state.workFilter==='all'?D.portfolio:D.portfolio.filter(w=>w.category===state.workFilter);
    $('#work-grid').innerHTML=items.map(w=>{const m=byId(D.masters,w.masterId),s=byId(D.services,w.serviceId);return `<article class="work-card js-portfolio-open media-fallback" data-fallback="TAVREN / WORK" data-work="${w.id}" tabindex="0"><img src="${w.image}" alt="${safe(w.title)}" loading="lazy" onerror="this.hidden=true"><span class="corner">↗</span><div class="work-card-copy"><span>${safe(tr(byId(D.categories,w.category).label).toUpperCase())} · ${servicePrice(s)}</span><h3>${safe(w.title)}</h3><p>${safe(m.name)} · ${duration(s)}</p></div></article>`}).join('');
    $$('#work-grid .js-portfolio-open').forEach(el=>{el.addEventListener('click',()=>openWork(el.dataset.work));el.addEventListener('keydown',e=>{if(e.key==='Enter'){openWork(el.dataset.work)}});});
    const heroWork=$('.hero .js-portfolio-open'); if(heroWork && !heroWork.dataset.bound){heroWork.dataset.bound='1';heroWork.addEventListener('click',()=>openWork(heroWork.dataset.work));}
  }
  function openWork(id){
    const w=byId(D.portfolio,id);if(!w)return;const s=byId(D.services,w.serviceId),m=byId(D.masters,w.masterId),cat=byId(D.categories,w.category);
    $('#work-modal-content').innerHTML=`<div class="work-detail"><div class="work-detail-image media-fallback" data-fallback="TAVREN / RESULT"><img src="${w.image}" alt="${safe(w.title)}" onerror="this.hidden=true"></div><div class="work-detail-copy"><span class="micro-label">${safe(tr(cat.label).toUpperCase())} / SELECTED WORK</span><h2 id="work-modal-title">${safe(w.title)}</h2><p>${safe(tr(s.desc))}</p><div class="work-facts"><div class="work-fact"><span>SERVICE</span><strong>${safe(tr(s.name))}</strong></div><div class="work-fact"><span>BY</span><strong>${safe(m.name)}</strong></div><div class="work-fact"><span>TIME</span><strong>${duration(s)}</strong></div><div class="work-fact"><span>PRICE</span><strong>${servicePrice(s)}</strong></div></div><div class="work-detail-actions"><button class="button button-accent" id="work-book-service">${state.lang==='ru'?'Записаться на услугу':state.lang==='hy'?'Գրանցվել ծառայության':'Book this service'} ↗</button><button class="button button-outline" id="work-book-master">${state.lang==='ru'?'К этому мастеру':state.lang==='hy'?'Այս մասնագետի մոտ':'Book with master'}</button></div></div></div>`;
    $('#work-book-service').addEventListener('click',()=>{closeWork();openBooking(s.id,null)});$('#work-book-master').addEventListener('click',()=>{closeWork();openBooking(s.id,m.id)});openModal($('#work-modal'));
  }
  function closeWork(){closeModal($('#work-modal'))}
  $$('[data-close-work]').forEach(x=>x.addEventListener('click',closeWork));

  // Masters
  function renderMasters(){
    $('#masters-grid').innerHTML=D.masters.map((m,i)=>`<article class="master-card reveal is-visible"><div class="master-image media-fallback" data-fallback="TAVREN / MASTER"><span class="master-number">${String(i+1).padStart(2,'0')}</span><img src="${m.image}" alt="Portrait placeholder for ${safe(m.name)}" loading="lazy" onerror="this.hidden=true"></div><div class="master-info"><h3>${safe(m.name)}</h3><span>${safe(tr(m.shortRole))}</span><p class="master-specialties">${m.specialties.join(' · ')}</p><div class="master-meta"><span>${m.experience} ${state.lang==='ru'?'лет опыта':state.lang==='hy'?'տարի փորձ':'years experience'}</span><span class="master-langs">${m.languages.join(' / ')}</span></div><div class="master-actions"><button class="button button-outline js-master-work" data-master="${m.id}">${state.lang==='ru'?'Работы':state.lang==='hy'?'Աշխատանքներ':'View work'}</button><button class="button button-dark js-master-book" data-master="${m.id}">${state.lang==='ru'?'Запись':state.lang==='hy'?'Գրանցվել':'Book'}</button></div></div></article>`).join('');
    $$('.js-master-work').forEach(b=>b.addEventListener('click',()=>{const first=D.portfolio.find(w=>w.masterId===b.dataset.master);if(first)openWork(first.id);else toast('No portfolio item in this demo.')}));
    $$('.js-master-book').forEach(b=>b.addEventListener('click',()=>openBooking(null,b.dataset.master)));
  }

  // Locations
  function renderLocations(){
    $('#locations-grid').innerHTML=D.locations.map(l=>`<article class="location-card reveal is-visible"><div class="location-image media-fallback" data-fallback="TAVREN / LOCATION"><img src="${l.image}" alt="Salon interior placeholder for ${safe(l.name)}" loading="lazy" onerror="this.hidden=true"></div><div class="location-info"><div class="location-top"><div><span class="location-area">${safe(tr(l.area).toUpperCase())}</span><h3>${safe(l.name)}</h3><p class="location-address">${safe(l.address)}</p></div><span class="micro-label">DEMO LOCATION</span></div><div class="location-cats">${l.categories.map(c=>`<span>${safe(c)}</span>`).join('')}</div><div class="location-bottom"><div><small>${safe(l.hours)}</small><small>${safe(l.phone)}</small></div><button class="button button-dark js-location-book" data-location="${l.id}">${state.lang==='ru'?'Найти время':state.lang==='hy'?'Գտնել ժամ':'Find a time'} ↗</button></div></div></article>`).join('');
    $$('.js-location-book').forEach(b=>b.addEventListener('click',()=>openBooking(null,null,b.dataset.location)));
  }

  // Reviews
  function renderReview(){const r=D.reviews[state.reviewIndex%D.reviews.length];$('#review-stage').innerHTML=`<div class="quote-mark">“</div><blockquote>${safe(r.text)}</blockquote><div class="review-author"><strong>${safe(r.name)}</strong><span>${safe(r.service)} · FICTIONAL DEMO REVIEW</span></div>`;}
  $('#review-prev').addEventListener('click',()=>{state.reviewIndex=(state.reviewIndex-1+D.reviews.length)%D.reviews.length;renderReview()});
  $('#review-next').addEventListener('click',()=>{state.reviewIndex=(state.reviewIndex+1)%D.reviews.length;renderReview()});

  function renderPackages(){
    $('#packages-grid').innerHTML=D.packages.map((p,i)=>`<article class="package-card"><span>0${i+1}</span><h3>${safe(p.name)}</h3><p>${safe(p.items)}</p><p>${safe(p.duration)}</p><div class="package-price">${p.from?'from ':''}${money(p.price)}</div><button type="button" class="plain-button js-package">${state.lang==='ru'?'Собрать визит':state.lang==='hy'?'Կազմել այց':'Plan this visit'} →</button></article>`).join('');
    $$('.js-package').forEach(b=>b.addEventListener('click',()=>openBooking()));
  }

  function renderFaq(){
    $('#faq-list').innerHTML=D.faq.map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button class="faq-question" type="button" aria-expanded="${i===0}"><span>${safe(f.q)}</span><span>+</span></button><div class="faq-answer"><div><p>${safe(f.a)}</p></div></div></article>`).join('');
    $$('.faq-question').forEach(b=>b.addEventListener('click',()=>{const item=b.closest('.faq-item'),open=item.classList.toggle('open');b.setAttribute('aria-expanded',String(open));}));
  }

  // Booking
  const bookingModal=$('#booking-modal');
  $$('.js-open-booking').forEach(b=>b.addEventListener('click',()=>openBooking()));
  function openBooking(serviceId=null,masterId=null,locationId=null){
    state.booking=freshBooking();
    if(serviceId){state.booking.serviceId=serviceId;state.booking.step=masterId?3:2;}
    if(masterId){state.booking.masterId=masterId; state.booking.preferredMasterId=masterId; if(!serviceId){state.booking.step=1;}}
    if(locationId){state.booking.locationId=locationId;}
    renderBooking();openModal(bookingModal);
  }
  function closeBooking(){closeModal(bookingModal);setTimeout(()=>{document.body.classList.remove('booking-done')},300)}
  $$('[data-close-modal]').forEach(x=>x.addEventListener('click',closeBooking));
  $('#booking-back').addEventListener('click',()=>{
    if(state.booking.confirmed){closeBooking();return}
    if(state.booking.step===1){closeBooking();return}
    state.booking.step--; if(state.booking.step<7) state.booking.confirmed=false; renderBooking();
  });
  $('#booking-next').addEventListener('click',bookingNext);
  function bookingNext(){
    const b=state.booking;
    if(b.step===1&&!b.serviceId)return toast(state.lang==='ru'?'Выберите услугу.':state.lang==='hy'?'Ընտրեք ծառայությունը։':'Choose a service.');
    if(b.step===2&&!b.masterId)return toast(state.lang==='ru'?'Выберите мастера.':state.lang==='hy'?'Ընտրեք մասնագետին։':'Choose a specialist.');
    if(b.step===3&&!b.locationId)return toast(state.lang==='ru'?'Выберите филиал.':state.lang==='hy'?'Ընտրեք մասնաճյուղը։':'Choose a location.');
    if(b.step===4&&!b.date)return toast(state.lang==='ru'?'Выберите дату.':state.lang==='hy'?'Ընտրեք օրը։':'Choose a date.');
    if(b.step===5&&!b.time)return toast(state.lang==='ru'?'Выберите время.':state.lang==='hy'?'Ընտրեք ժամը։':'Choose a time.');
    if(b.step===6){if(!validateDetails())return;confirmBooking();return}
    if(b.step<6){b.step++;renderBooking()}
  }
  function renderBooking(){
    const b=state.booking;const labels={en:['Service','Master','Location','Date','Time','Details','Confirmation'],ru:['Услуга','Мастер','Филиал','Дата','Время','Данные','Подтверждение'],hy:['Ծառայություն','Մասնագետ','Մասնաճյուղ','Օր','Ժամ','Տվյալներ','Հաստատում']};
    const stepName=labels[state.lang][b.step-1];$('#booking-step-label').textContent=`${b.step} / 7 — ${stepName}`;const pct=Math.round((b.step/7)*100);$('#booking-progress-percent').textContent=`${pct}%`;$('#booking-progress-bar').style.width=`${pct}%`;
    $('#booking-back').textContent=b.step===1?(state.lang==='ru'?'Закрыть':state.lang==='hy'?'Փակել':'Close'):i18n[state.lang].back;
    $('#booking-next').style.display=b.step===7?'none':'inline-flex';$('#booking-next').textContent=b.step===6?(state.lang==='ru'?'Подтвердить demo-запись':state.lang==='hy'?'Հաստատել demo գրանցումը':'Confirm demo booking'):i18n[state.lang].continue;
    renderBookingSummary();
    const fn=[null,stepService,stepMaster,stepLocation,stepDate,stepTime,stepDetails,stepConfirmation][b.step];fn();
  }
  function renderBookingSummary(){
    const b=state.booking,s=byId(D.services,b.serviceId),m=b.resolvedMasterId?byId(D.masters,b.resolvedMasterId):(b.masterId&&b.masterId!=='any'?byId(D.masters,b.masterId):null),l=byId(D.locations,b.locationId);
    const rows=[];if(s)rows.push(['Service',tr(s.name)],['Duration',duration(s)],['Price',servicePrice(s)]);if(b.masterId)rows.push(['Master',b.masterId==='any'?(state.lang==='ru'?'Любой доступный':state.lang==='hy'?'Ցանկացած ազատ':'Any available'):(m?.name||'—')]);if(l)rows.push(['Location',l.name]);if(b.date)rows.push(['Date',dateLabel(b.date,true)]);if(b.time)rows.push(['Time',b.time]);
    $('#booking-summary-content').innerHTML=rows.length?rows.map(r=>`<div class="summary-item"><span>${safe(r[0])}</span><strong>${safe(r[1])}</strong></div>`).join(''):`<p class="summary-empty">${i18n[state.lang].summaryEmpty}</p>`;
  }
  function stepService(){
    const b=state.booking;let html=`<h3>${state.lang==='ru'?'Что вы хотите записать?':state.lang==='hy'?'Ի՞նչ ծառայություն եք ուզում։':'What would you like to book?'}</h3><p class="step-lead">${state.lang==='ru'?'Выберите услугу. Цена и время видны до выбора мастера.':state.lang==='hy'?'Ընտրեք ծառայությունը․ գինն ու տևողությունը երևում են նախապես։':'Choose a service. Price and duration are visible before selecting a specialist.'}</p>`;
    D.categories.forEach(c=>{const ss=D.services.filter(s=>s.category===c.id && (!b.preferredMasterId || s.masters.includes(b.preferredMasterId)));if(!ss.length)return;html+=`<div class="booking-category">${safe(tr(c.label))}</div><div class="booking-option-grid">${ss.map(s=>`<button type="button" class="booking-option ${b.serviceId===s.id?'selected':''}" data-pick-service="${s.id}"><strong>${safe(tr(s.name))}</strong><small>${safe(tr(s.desc))}</small><span class="option-price">${duration(s)} · ${servicePrice(s)}</span></button>`).join('')}</div>`});$('#booking-step').innerHTML=html;
    $$('[data-pick-service]').forEach(x=>x.addEventListener('click',()=>{b.serviceId=x.dataset.pickService;b.masterId=b.preferredMasterId||null;b.locationId=null;b.date=null;b.time=null;b.resolvedMasterId=null;renderBooking()}));
  }
  function stepMaster(){
    const b=state.booking,s=byId(D.services,b.serviceId);if(!s){b.step=1;return renderBooking()};const masters=s.masters.map(id=>byId(D.masters,id)).filter(Boolean);
    $('#booking-step').innerHTML=`<h3>${state.lang==='ru'?'Кто должен выполнить услугу?':state.lang==='hy'?'Ո՞վ պետք է կատարի ծառայությունը։':'Who should perform the service?'}</h3><p class="step-lead">${state.lang==='ru'?'Можно выбрать конкретного специалиста или максимально свободное время.':state.lang==='hy'?'Ընտրեք կոնկրետ մասնագետ կամ ցանկացած հասանելի մասնագետ։':'Choose a specific specialist, or keep the widest availability.'}</p><div class="booking-option-grid"><button type="button" class="booking-option master-book-option ${b.masterId==='any'?'selected':''}" data-pick-master="any"><span class="any-master-icon">↗</span><span><strong>${state.lang==='ru'?'Любой доступный мастер':state.lang==='hy'?'Ցանկացած ազատ մասնագետ':'Any available master'}</strong><small>${state.lang==='ru'?'Покажем больше свободных слотов.':state.lang==='hy'?'Կցուցադրվեն ավելի շատ ազատ ժամեր։':'See the widest selection of times.'}</small></span><span class="languages">AUTO</span></button>${masters.map(m=>`<button type="button" class="booking-option master-book-option ${b.masterId===m.id?'selected':''}" data-pick-master="${m.id}"><span class="mini-avatar media-fallback"><img src="${m.image}" alt="" onerror="this.hidden=true"></span><span><strong>${safe(m.name)}</strong><small>${safe(tr(m.shortRole))} · ${m.experience}y</small></span><span class="languages">${m.languages.join(' / ')}</span></button>`).join('')}</div>`;
    $$('[data-pick-master]').forEach(x=>x.addEventListener('click',()=>{b.masterId=x.dataset.pickMaster;b.locationId=null;b.date=null;b.time=null;renderBooking()}));
  }
  function possibleLocations(){
    const b=state.booking,s=byId(D.services,b.serviceId);if(!s)return[];
    if(b.masterId&&b.masterId!=='any'){const m=byId(D.masters,b.masterId);return D.locations.filter(l=>s.locations.includes(l.id)&&Object.values(m.schedule).some(sc=>sc.location===l.id));}
    return D.locations.filter(l=>s.locations.includes(l.id)&&s.masters.some(mid=>Object.values(byId(D.masters,mid).schedule).some(sc=>sc.location===l.id)));
  }
  function stepLocation(){
    const b=state.booking,locs=possibleLocations();if(b.locationId&&!locs.some(l=>l.id===b.locationId))b.locationId=null;
    $('#booking-step').innerHTML=`<h3>${state.lang==='ru'?'В какой студии?':state.lang==='hy'?'Ո՞ր ստուդիայում։':'Which studio works for you?'}</h3><p class="step-lead">${state.lang==='ru'?'Показываем только филиалы, где выбранная услуга и мастер реально доступны.':state.lang==='hy'?'Ցուցադրվում են միայն համապատասխան մասնաճյուղերը։':'Only locations compatible with the service and specialist are shown.'}</p><div class="booking-option-grid">${locs.map(l=>`<button type="button" class="booking-option ${b.locationId===l.id?'selected':''}" data-pick-location="${l.id}"><strong>${safe(l.name)}</strong><small>${safe(l.address)}</small><span class="option-price">${safe(l.hours)}</span></button>`).join('')}</div>`;
    $$('[data-pick-location]').forEach(x=>x.addEventListener('click',()=>{b.locationId=x.dataset.pickLocation;b.date=null;b.time=null;renderBooking()}));
  }
  function candidatesForDate(dateKey){
    const b=state.booking,s=byId(D.services,b.serviceId),d=parseDateKey(dateKey),dow=d.getDay();let ids=b.masterId==='any'?s.masters:[b.masterId];return ids.map(id=>byId(D.masters,id)).filter(m=>m&&m.services.includes(s.id)&&m.schedule[dow]?.location===b.locationId);
  }
  function stepDate(){
    const b=state.booking;const today=new Date();today.setHours(0,0,0,0);const dates=[];for(let i=0;i<21;i++){const d=new Date(today);d.setDate(today.getDate()+i);const k=localDateKey(d);dates.push({d,k,enabled:candidatesForDate(k).length>0});}
    $('#booking-step').innerHTML=`<h3>${state.lang==='ru'?'Выберите дату':state.lang==='hy'?'Ընտրեք օրը':'Choose a date'}</h3><p class="step-lead">${state.lang==='ru'?'Недоступные дни отключаются по расписанию мастеров.':state.lang==='hy'?'Անհասանելի օրերը անջատված են ըստ մասնագետների գրաֆիկի։':'Unavailable days are disabled from actual demo schedules.'}</p><div class="date-grid">${dates.map(x=>`<button type="button" class="date-option ${b.date===x.k?'selected':''}" data-pick-date="${x.k}" ${x.enabled?'':'disabled'}><span>${safe(weekdayShort(x.d))}</span><strong>${x.d.getDate()}</strong><span>${safe(new Intl.DateTimeFormat(state.lang==='ru'?'ru-RU':state.lang==='hy'?'hy-AM':'en-GB',{month:'short'}).format(x.d))}</span></button>`).join('')}</div>`;
    $$('[data-pick-date]').forEach(x=>x.addEventListener('click',()=>{b.date=x.dataset.pickDate;b.time=null;b.resolvedMasterId=null;renderBooking()}));
  }
  function demoBlocksFor(masterId,dateKey){
    const today=new Date();today.setHours(0,0,0,0);return D.demoBookings.filter(db=>db.masterId===masterId).map(db=>{const d=new Date(today);d.setDate(today.getDate()+db.dayOffset);return {...db,date:localDateKey(d)}}).filter(x=>x.date===dateKey);
  }
  function isFree(master,dateKey,start,durationMin){const a=timeToMin(start),z=a+durationMin;return !demoBlocksFor(master.id,dateKey).some(x=>{const xa=timeToMin(x.start),xz=xa+x.duration;return a<xz&&z>xa})}
  function availableSlots(){
    const b=state.booking,s=byId(D.services,b.serviceId),l=byId(D.locations,b.locationId);if(!s||!l||!b.date)return[];const d=parseDateKey(b.date),dow=d.getDay(),durationNeeded=s.durationMin,candidates=candidatesForDate(b.date),slots=[];
    candidates.forEach(m=>{const sch=m.schedule[dow],open=l.open[dow];if(!sch||!open)return;const start=Math.max(timeToMin(sch.start),timeToMin(open[0])),end=Math.min(timeToMin(sch.end),timeToMin(open[1]));for(let t=start;t+durationNeeded<=end;t+=30){const ts=minToTime(t);if(isFree(m,b.date,ts,durationNeeded))slots.push({time:ts,masterId:m.id});}});
    const map=new Map();slots.sort((a,z)=>a.time.localeCompare(z.time)).forEach(x=>{if(!map.has(x.time))map.set(x.time,x)});return [...map.values()];
  }
  function stepTime(){
    const b=state.booking,slots=availableSlots();
    $('#booking-step').innerHTML=`<h3>${state.lang==='ru'?'Выберите время':state.lang==='hy'?'Ընտրեք ժամը':'Choose a time'}</h3><p class="step-lead">${safe(dateLabel(b.date,true))}. ${state.lang==='ru'?'Слоты учитывают длительность услуги и часы работы.':state.lang==='hy'?'Ժամերը հաշվի են առնում ծառայության տևողությունը և աշխատանքային գրաֆիկը։':'Slots account for service duration and working hours.'}</p>${slots.length?`<div class="time-grid">${slots.map(x=>{const m=byId(D.masters,x.masterId);return `<button type="button" class="time-option ${b.time===x.time&&b.resolvedMasterId===x.masterId?'selected':''}" data-time="${x.time}" data-master="${x.masterId}"><strong>${x.time}</strong>${b.masterId==='any'?`<small>${safe(m.name.split(' ')[0])}</small>`:''}</button>`}).join('')}</div>`:`<div class="no-slots">${state.lang==='ru'?'На эту дату свободных слотов нет. Вернитесь и выберите другой день.':state.lang==='hy'?'Այս օրվա համար ազատ ժամ չկա։ Ընտրեք այլ օր։':'No open slots remain on this date. Go back and choose another day.'}</div>`}`;
    $$('[data-time]').forEach(x=>x.addEventListener('click',()=>{b.time=x.dataset.time;b.resolvedMasterId=x.dataset.master;renderBooking()}));
  }
  function stepDetails(){
    const c=state.booking.client;
    $('#booking-step').innerHTML=`<h3>${state.lang==='ru'?'Куда отправить подтверждение?':state.lang==='hy'?'Որտե՞ղ ուղարկել հաստատումը։':'Your details'}</h3><p class="step-lead">${state.lang==='ru'?'В demo данные никуда не отправляются.':state.lang==='hy'?'Demo տարբերակում տվյալները ոչ մի տեղ չեն ուղարկվում։':'In this demo, details never leave your browser.'}</p><div class="details-grid"><label class="field" id="field-name"><span>Name *</span><input id="client-name" type="text" autocomplete="name" value="${safe(c.name)}"><small class="field-error">Required</small></label><label class="field" id="field-phone"><span>Phone *</span><input id="client-phone" type="tel" autocomplete="tel" value="${safe(c.phone)}" placeholder="+374"><small class="field-error">Required</small></label><label class="field full" id="field-email"><span>Email *</span><input id="client-email" type="email" autocomplete="email" value="${safe(c.email)}" placeholder="name@example.com"><small class="field-error">Valid email required</small></label><label class="field full"><span>Note</span><textarea id="client-note" rows="4" placeholder="Anything the studio should know">${safe(c.note)}</textarea></label><label class="check-field"><input id="client-policy" type="checkbox" ${c.policy?'checked':''}><span>${state.lang==='ru'?'Я понимаю demo-политику отмены: перенос минимум за 12 часов.':state.lang==='hy'?'Հասկանում եմ demo չեղարկման կանոնը՝ փոփոխություն առնվազն 12 ժամ առաջ։':'I understand the demo cancellation policy: reschedule at least 12 hours before the appointment.'}</span></label></div>`;
  }
  function validateDetails(){
    const b=state.booking;b.client.name=$('#client-name').value.trim();b.client.phone=$('#client-phone').value.trim();b.client.email=$('#client-email').value.trim();b.client.note=$('#client-note').value.trim();b.client.policy=$('#client-policy').checked;
    const validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.client.email);let ok=true;[['#field-name',!!b.client.name],['#field-phone',b.client.phone.length>=6],['#field-email',validEmail]].forEach(([sel,valid])=>{$(sel).classList.toggle('invalid',!valid);if(!valid)ok=false;});if(!b.client.policy){toast(state.lang==='ru'?'Подтвердите политику отмены.':state.lang==='hy'?'Հաստատեք չեղարկման կանոնը։':'Confirm the cancellation policy.');ok=false}return ok;
  }
  function confirmBooking(){const b=state.booking;b.confirmed=true;b.step=7;b.reference=`TVR-DEMO-${String(Date.now()).slice(-6)}`;try{localStorage.setItem('tavren_demo_booking',JSON.stringify(b))}catch(e){}renderBooking();}
  function stepConfirmation(){
    const b=state.booking,s=byId(D.services,b.serviceId),m=byId(D.masters,b.resolvedMasterId||b.masterId),l=byId(D.locations,b.locationId);document.body.classList.add('booking-done');
    $('#booking-step').innerHTML=`<div class="confirmation"><div class="confirmation-mark">✓</div><span class="micro-label">${safe(b.reference||'TAVREN-DEMO')}</span><h3>${state.lang==='ru'?'Demo-запись сохранена.':state.lang==='hy'?'Demo գրանցումը պահպանված է։':'Your demo appointment is saved.'}</h3><p class="step-lead">${state.lang==='ru'?'Это не настоящая запись. Никакие данные не были отправлены бизнесу или серверу.':state.lang==='hy'?'Սա իրական գրանցում չէ։ Տվյալները ոչ մի բիզնեսի կամ սերվերի չեն ուղարկվել։':'This is not a real booking. No data was sent to a business or server.'}</p><div class="confirmation-card"><div><span>Service</span><strong>${safe(tr(s.name))}</strong></div><div><span>Master</span><strong>${safe(m.name)}</strong></div><div><span>Location</span><strong>${safe(l.name)}</strong></div><div><span>Date & time</span><strong>${safe(dateLabel(b.date,true))} · ${safe(b.time)}</strong></div><div><span>Duration</span><strong>${duration(s)}</strong></div><div><span>Expected price</span><strong>${servicePrice(s)}</strong></div></div><div class="confirmation-actions"><button class="button button-dark" id="download-ics">Add to calendar</button><button class="button button-outline" id="copy-booking">Copy summary</button><button class="button button-outline" id="new-booking">New demo booking</button></div><p class="confirmation-note">Saved locally in this browser only. Clear browser storage to remove the demo confirmation.</p></div>`;
    $('#download-ics').addEventListener('click',downloadICS);$('#copy-booking').addEventListener('click',copyBooking);$('#new-booking').addEventListener('click',()=>{document.body.classList.remove('booking-done');state.booking=freshBooking();renderBooking()});
  }
  function bookingSummaryText(){const b=state.booking,s=byId(D.services,b.serviceId),m=byId(D.masters,b.resolvedMasterId||b.masterId),l=byId(D.locations,b.locationId);return `TAVREN DEMO APPOINTMENT\n${tr(s.name)}\n${m.name}\n${l.name}\n${dateLabel(b.date,true)} · ${b.time}\n${duration(s)} · ${servicePrice(s)}\nReference: ${b.reference}`;}
  function copyBooking(){navigator.clipboard?.writeText(bookingSummaryText()).then(()=>toast('Copied.')).catch(()=>toast('Copy unavailable in this browser.'));}
  function downloadICS(){const b=state.booking,s=byId(D.services,b.serviceId),m=byId(D.masters,b.resolvedMasterId||b.masterId),l=byId(D.locations,b.locationId),[y,mo,d]=b.date.split('-'),[h,mi]=b.time.split(':'),start=`${y}${mo}${d}T${h}${mi}00`,endDate=new Date(+y,+mo-1,+d,+h,+mi+s.durationMin),pad=n=>String(n).padStart(2,'0'),end=`${endDate.getFullYear()}${pad(endDate.getMonth()+1)}${pad(endDate.getDate())}T${pad(endDate.getHours())}${pad(endDate.getMinutes())}00`,ics=`BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//TAVREN Demo//EN\nBEGIN:VEVENT\nUID:${b.reference}@tavren-demo.example\nDTSTART:${start}\nDTEND:${end}\nSUMMARY:TAVREN Demo — ${tr(s.name)}\nDESCRIPTION:Fictional portfolio demo appointment with ${m.name}. No real reservation exists.\nLOCATION:${l.name} — Fictional demo location\nEND:VEVENT\nEND:VCALENDAR`;const blob=new Blob([ics],{type:'text/calendar'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='tavren-demo-appointment.ics';a.click();URL.revokeObjectURL(url);}

  // Gift
  const giftModal=$('#gift-modal');$('#open-gift').addEventListener('click',()=>openModal(giftModal));$$('[data-close-gift]').forEach(x=>x.addEventListener('click',()=>closeModal(giftModal)));
  $$('#gift-amounts button').forEach(b=>b.addEventListener('click',()=>{state.giftAmount=b.dataset.amount==='custom'?35000:Number(b.dataset.amount);$$('#gift-amounts button').forEach(x=>x.classList.toggle('active',x===b));updateGiftPreview()}));
  $('#gift-preview-btn').addEventListener('click',updateGiftPreview);
  function updateGiftPreview(){const n=$('#gift-recipient').value.trim(),m=$('#gift-message').value.trim();$('#gift-preview-value').textContent=money(state.giftAmount);$('#gift-preview-name').textContent=n?`For ${n}`:'For someone you choose.';$('#gift-preview-message').textContent=m||'Beauty, booked around you.';}

  function openModal(modal){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>modal.querySelector('button,input,[tabindex]:not([tabindex="-1"])')?.focus(),80)}
  function closeModal(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');if(!$('.modal.open'))document.body.classList.remove('modal-open')}
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(giftModal.classList.contains('open'))closeModal(giftModal);else if($('#work-modal').classList.contains('open'))closeWork();else if(bookingModal.classList.contains('open'))closeBooking();}});

  // Toast
  let toastTimer;function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2400)}

  // Reveal
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.1});$$('.reveal').forEach(el=>obs.observe(el));

  // Hero next slot from any service/master availability
  function updateHeroSlot(){const now=new Date();const h=now.getHours();const label=h<14?'Today · 14:30':'Tomorrow · 10:30';$('#hero-next-slot').textContent=label;}

  // Init
  renderServiceTabs();renderServices();updateFeatureFromCategory();renderWorkFilters();renderWork();renderMasters();renderLocations();renderReview();renderPackages();renderFaq();applyLocale();updateHeroSlot();updateGiftPreview();
})();
