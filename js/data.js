window.TAVREN_DATA = {
  brand: {
    name: 'TAVREN',
    descriptor: 'Beauty Studio',
    tagline: 'Beauty, booked around you.',
    founded: 2022,
    currency: 'AMD'
  },
  categories: [
    { id: 'hair', label: { en: 'Hair', ru: 'Волосы', hy: 'Մազեր' } },
    { id: 'nails', label: { en: 'Nails', ru: 'Ногти', hy: 'Եղունգներ' } },
    { id: 'brows-lashes', label: { en: 'Brows & Lashes', ru: 'Брови и ресницы', hy: 'Հոնքեր և թարթիչներ' } },
    { id: 'makeup', label: { en: 'Makeup', ru: 'Макияж', hy: 'Դիմահարդարում' } },
    { id: 'care', label: { en: 'Care', ru: 'Уход', hy: 'Խնամք' } }
  ],
  images: {
    hero: 'https://images.pexels.com/photos/20046793/pexels-photo-20046793.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroAlt: 'https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cascade: 'https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&w=1400',
    cascadeDetail: 'https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=1200',
    komitas: 'https://images.pexels.com/photos/7750090/pexels-photo-7750090.jpeg?auto=compress&cs=tinysrgb&w=1400',
    komitasDetail: 'https://images.pexels.com/photos/7750120/pexels-photo-7750120.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gift: 'https://images.pexels.com/photos/3736520/pexels-photo-3736520.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  masters: [
    {
      id: 'lilit-arakelyan', name: 'Lilit Arakelyan', role: { en: 'Senior Hair Stylist / Colorist', ru: 'Старший стилист / колорист', hy: 'Ավագ վարսահարդար / գունաբան' },
      shortRole: { en: 'Colorist', ru: 'Колорист', hy: 'Գունաբան' }, experience: 9,
      languages: ['HY', 'RU', 'EN'], image: 'https://images.pexels.com/photos/33867554/pexels-photo-33867554.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Balayage', 'Highlights', 'Dimensional color'],
      services: ['root-color','full-color','highlights','balayage','gloss-toner'],
      schedule: { 2:{location:'cascade',start:'10:00',end:'19:00'},3:{location:'cascade',start:'10:00',end:'19:00'},5:{location:'cascade',start:'10:00',end:'19:00'},6:{location:'komitas',start:'10:00',end:'19:00'} }
    },
    {
      id: 'mariam-vardanyan', name: 'Mariam Vardanyan', role: { en: 'Hair Stylist / Cut Specialist', ru: 'Стилист / специалист по стрижкам', hy: 'Վարսահարդար / սանրվածքի մասնագետ' },
      shortRole: { en: 'Cut Specialist', ru: 'Стрижки', hy: 'Սանրվածքներ' }, experience: 7,
      languages: ['HY', 'EN', 'RU'], image: 'https://images.pexels.com/photos/33867533/pexels-photo-33867533.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Precision cuts', 'Blow dry', 'Event styling'],
      services: ['haircut','haircut-styling','blow-dry-short','blow-dry-long','event-styling'],
      schedule: { 2:{location:'cascade',start:'10:00',end:'18:00'},3:{location:'cascade',start:'10:00',end:'18:00'},4:{location:'cascade',start:'10:00',end:'18:00'},5:{location:'cascade',start:'10:00',end:'18:00'},6:{location:'cascade',start:'10:00',end:'18:00'} }
    },
    {
      id: 'nare-petrosyan', name: 'Nare Petrosyan', role: { en: 'Hair Stylist / Treatment Specialist', ru: 'Стилист / специалист по уходу', hy: 'Վարսահարդար / խնամքի մասնագետ' },
      shortRole: { en: 'Hair Care', ru: 'Уход за волосами', hy: 'Մազերի խնամք' }, experience: 5,
      languages: ['HY', 'RU'], image: 'https://images.pexels.com/photos/33867522/pexels-photo-33867522.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Color refresh', 'Gloss', 'Hair & scalp care'],
      services: ['root-color','full-color','gloss-toner','repair-treatment','scalp-reset','blow-dry-short','blow-dry-long'],
      schedule: { 1:{location:'komitas',start:'11:00',end:'20:00'},2:{location:'komitas',start:'11:00',end:'20:00'},4:{location:'komitas',start:'11:00',end:'20:00'},5:{location:'komitas',start:'11:00',end:'20:00'},0:{location:'komitas',start:'11:00',end:'20:00'} }
    },
    {
      id: 'elina-hakobyan', name: 'Elina Hakobyan', role: { en: 'Senior Nail Artist', ru: 'Старший nail-мастер', hy: 'Ավագ եղունգների վարպետ' },
      shortRole: { en: 'Senior Nail Artist', ru: 'Nail-мастер', hy: 'Եղունգների վարպետ' }, experience: 8,
      languages: ['HY', 'RU', 'EN'], image: 'https://images.pexels.com/photos/33867543/pexels-photo-33867543.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Structured manicure', 'Strengthening', 'Minimal design'],
      services: ['classic-manicure','gel-manicure','gel-removal-manicure','nail-strengthening','minimal-design','classic-pedicure'],
      schedule: { 1:{location:'cascade',start:'10:00',end:'19:00'},2:{location:'cascade',start:'10:00',end:'19:00'},3:{location:'cascade',start:'10:00',end:'19:00'},4:{location:'cascade',start:'10:00',end:'19:00'},5:{location:'cascade',start:'10:00',end:'19:00'} }
    },
    {
      id: 'sofia-grigoryan', name: 'Sofia Grigoryan', role: { en: 'Nail Artist', ru: 'Nail-мастер', hy: 'Եղունգների վարպետ' },
      shortRole: { en: 'Nail Artist', ru: 'Nail-мастер', hy: 'Եղունգների վարպետ' }, experience: 4,
      languages: ['HY', 'RU'], image: 'https://images.pexels.com/photos/33867535/pexels-photo-33867535.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Gel manicure', 'Pedicure', 'Detailed nail design'],
      services: ['classic-manicure','gel-manicure','detailed-design','classic-pedicure','gel-pedicure'],
      schedule: { 3:{location:'komitas',start:'11:00',end:'20:00'},4:{location:'komitas',start:'11:00',end:'20:00'},5:{location:'komitas',start:'11:00',end:'20:00'},6:{location:'komitas',start:'11:00',end:'20:00'},0:{location:'komitas',start:'11:00',end:'20:00'} }
    },
    {
      id: 'anna-melikyan', name: 'Anna Melikyan', role: { en: 'Brow & Lash Artist', ru: 'Мастер бровей и ресниц', hy: 'Հոնքերի և թարթիչների վարպետ' },
      shortRole: { en: 'Brows & Lashes', ru: 'Брови и ресницы', hy: 'Հոնքեր և թարթիչներ' }, experience: 6,
      languages: ['HY', 'EN', 'RU'], image: 'https://images.pexels.com/photos/33867544/pexels-photo-33867544.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Brow shaping', 'Lamination', 'Lash lift'],
      services: ['brow-shaping','brow-shaping-tint','brow-lamination','brow-lamination-tint','lash-tint','lash-lift','lash-lift-tint'],
      schedule: { 1:{location:'cascade',start:'10:00',end:'19:00'},4:{location:'cascade',start:'10:00',end:'19:00'},5:{location:'cascade',start:'10:00',end:'19:00'},2:{location:'komitas',start:'10:00',end:'19:00'},6:{location:'komitas',start:'10:00',end:'19:00'} }
    },
    {
      id: 'eva-sargsyan', name: 'Eva Sargsyan', role: { en: 'Makeup Artist', ru: 'Визажист', hy: 'Դիմահարդար' },
      shortRole: { en: 'Makeup Artist', ru: 'Визажист', hy: 'Դիմահարդար' }, experience: 7,
      languages: ['HY', 'EN', 'RU'], image: 'https://images.pexels.com/photos/33867540/pexels-photo-33867540.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Natural makeup', 'Evening makeup', 'Bridal'],
      services: ['day-makeup','evening-makeup','event-makeup','bridal-makeup','bridal-trial'],
      schedule: { 4:{location:'komitas',start:'10:00',end:'19:00'},5:{location:'komitas',start:'10:00',end:'19:00'},6:{location:'komitas',start:'10:00',end:'19:00'},0:{location:'komitas',start:'10:00',end:'19:00'} }
    },
    {
      id: 'mane-avetisyan', name: 'Mane Avetisyan', role: { en: 'Skin & Care Specialist', ru: 'Специалист по уходу', hy: 'Մաշկի և խնամքի մասնագետ' },
      shortRole: { en: 'Care Specialist', ru: 'Специалист по уходу', hy: 'Խնամքի մասնագետ' }, experience: 6,
      languages: ['HY', 'RU', 'EN'], image: 'https://images.pexels.com/photos/33867520/pexels-photo-33867520.jpeg?auto=compress&cs=tinysrgb&w=900',
      specialties: ['Hydration', 'Calming care', 'Event skin prep'],
      services: ['hydration-facial','calm-restore-facial','express-skin-reset'],
      schedule: { 2:{location:'komitas',start:'11:00',end:'19:00'},3:{location:'komitas',start:'11:00',end:'19:00'},4:{location:'komitas',start:'11:00',end:'19:00'},5:{location:'komitas',start:'11:00',end:'19:00'},6:{location:'komitas',start:'11:00',end:'19:00'} }
    }
  ],
  services: [
    {id:'haircut',category:'hair',name:{en:'Signature Haircut',ru:'Фирменная стрижка',hy:'Ֆիրմային սանրվածք'},desc:{en:'Consultation-led cut finished for easy everyday styling.',ru:'Стрижка после короткой консультации с укладкой, которую легко повторить дома.',hy:'Կարճ խորհրդատվությամբ սանրվածք՝ առօրյա հեշտ ձևավորման համար։'},durationMin:60,priceFrom:14000,masters:['mariam-vardanyan'],locations:['cascade']},
    {id:'haircut-styling',category:'hair',name:{en:'Haircut + Styling',ru:'Стрижка + укладка',hy:'Սանրվածք + ձևավորում'},desc:{en:'Cut, shape and finished styling in one appointment.',ru:'Стрижка, форма и полноценная укладка за один визит.',hy:'Սանրվածք, ձև և ամբողջական ձևավորում մեկ այցով։'},durationMin:75,priceFrom:18000,masters:['mariam-vardanyan'],locations:['cascade']},
    {id:'blow-dry-short',category:'hair',name:{en:'Blow Dry — Short',ru:'Укладка — короткие волосы',hy:'Ֆենով ձևավորում — կարճ'},desc:{en:'Smooth or textured finish for short hair.',ru:'Гладкая или текстурная укладка для коротких волос.',hy:'Հարթ կամ տեքստուրային ձևավորում կարճ մազերի համար։'},durationMin:40,priceFrom:9000,masters:['mariam-vardanyan','nare-petrosyan'],locations:['cascade','komitas']},
    {id:'blow-dry-long',category:'hair',name:{en:'Blow Dry — Medium / Long',ru:'Укладка — средние / длинные',hy:'Ֆենով ձևավորում — միջին / երկար'},desc:{en:'Polished blow dry with shape and movement.',ru:'Аккуратная укладка с формой и естественным движением.',hy:'Կոկիկ ֆենային ձևավորում՝ ձևով և շարժմամբ։'},durationMin:55,priceFrom:12000,masters:['mariam-vardanyan','nare-petrosyan'],locations:['cascade','komitas']},
    {id:'event-styling',category:'hair',name:{en:'Event Styling',ru:'Вечерняя укладка',hy:'Միջոցառման ձևավորում'},desc:{en:'Event-ready styling built to last through the day or evening.',ru:'Стойкая укладка для мероприятия, рассчитанная на день или вечер.',hy:'Միջոցառման համար երկարատև ձևավորում։'},durationMin:75,priceFrom:18000,variable:true,masters:['mariam-vardanyan'],locations:['cascade']},
    {id:'root-color',category:'hair',name:{en:'Root Color',ru:'Окрашивание корней',hy:'Արմատների ներկում'},desc:{en:'Root refresh with consultation and finish.',ru:'Обновление цвета корней с консультацией и финишной укладкой.',hy:'Արմատների գույնի թարմացում՝ խորհրդատվությամբ։'},durationMin:120,priceFrom:24000,variable:true,masters:['lilit-arakelyan','nare-petrosyan'],locations:['cascade','komitas']},
    {id:'full-color',category:'hair',name:{en:'Full Color',ru:'Полное окрашивание',hy:'Ամբողջական ներկում'},desc:{en:'Single-process color planned around tone, length and density.',ru:'Полное окрашивание с учетом тона, длины и густоты.',hy:'Ամբողջական ներկում՝ ըստ երանգի, երկարության և խտության։'},durationMin:150,durationMax:210,priceFrom:32000,variable:true,masters:['lilit-arakelyan','nare-petrosyan'],locations:['cascade','komitas']},
    {id:'highlights',category:'hair',name:{en:'Highlights',ru:'Мелирование',hy:'Մելիրում'},desc:{en:'Dimensional lightness with placement tailored to the haircut.',ru:'Объёмное осветление с размещением прядей под форму стрижки.',hy:'Ծավալային բացեցում՝ սանրվածքին համապատասխան։'},durationMin:180,durationMax:240,priceFrom:38000,variable:true,masters:['lilit-arakelyan'],locations:['cascade','komitas']},
    {id:'balayage',category:'hair',name:{en:'Balayage',ru:'Балаяж',hy:'Բալայաժ'},desc:{en:'Soft dimensional color with a natural grow-out.',ru:'Мягкое многомерное окрашивание с естественным отрастанием.',hy:'Փափուկ բազմաշերտ գույն՝ բնական աճման էֆեկտով։'},durationMin:210,durationMax:270,priceFrom:42000,variable:true,masters:['lilit-arakelyan'],locations:['cascade','komitas']},
    {id:'gloss-toner',category:'hair',name:{en:'Gloss / Toner',ru:'Глоссинг / тонирование',hy:'Գլոս / տոնավորում'},desc:{en:'Refresh tone and shine without committing to a full color service.',ru:'Обновление оттенка и блеска без полного окрашивания.',hy:'Երանգի և փայլի թարմացում առանց ամբողջական ներկման։'},durationMin:75,priceFrom:18000,variable:true,masters:['lilit-arakelyan','nare-petrosyan'],locations:['cascade','komitas']},
    {id:'repair-treatment',category:'hair',name:{en:'Repair Treatment',ru:'Восстанавливающий уход',hy:'Վերականգնող խնամք'},desc:{en:'Focused repair for dry, processed or fragile hair.',ru:'Интенсивный уход для сухих, повреждённых или ослабленных волос.',hy:'Ինտենսիվ խնամք չոր կամ վնասված մազերի համար։'},durationMin:60,priceFrom:16000,masters:['nare-petrosyan'],locations:['komitas']},
    {id:'scalp-reset',category:'hair',name:{en:'Scalp Reset Treatment',ru:'Уход за кожей головы',hy:'Գլխամաշկի խնամք'},desc:{en:'Cleansing and balancing care for scalp comfort.',ru:'Очищающий и балансирующий уход для кожи головы.',hy:'Մաքրող և հավասարակշռող գլխամաշկի խնամք։'},durationMin:60,priceFrom:15000,masters:['nare-petrosyan'],locations:['komitas']},

    {id:'classic-manicure',category:'nails',name:{en:'Classic Manicure',ru:'Классический маникюр',hy:'Դասական մատնահարդարում'},desc:{en:'Shape, cuticle care and clean natural finish.',ru:'Форма, обработка кутикулы и аккуратный натуральный финиш.',hy:'Ձև, կուտիկուլայի խնամք և բնական ավարտ։'},durationMin:45,priceFrom:7000,masters:['elina-hakobyan','sofia-grigoryan'],locations:['cascade','komitas']},
    {id:'gel-manicure',category:'nails',name:{en:'Gel Manicure',ru:'Маникюр с гель-лаком',hy:'Գել լաքով մատնահարդարում'},desc:{en:'Full manicure with durable gel color.',ru:'Полный маникюр со стойким гель-покрытием.',hy:'Լիարժեք մատնահարդարում՝ կայուն գել ծածկույթով։'},durationMin:75,priceFrom:11000,masters:['elina-hakobyan','sofia-grigoryan'],locations:['cascade','komitas']},
    {id:'gel-removal-manicure',category:'nails',name:{en:'Gel Removal + Manicure',ru:'Снятие геля + маникюр',hy:'Գելի հեռացում + մատնահարդարում'},desc:{en:'Safe removal followed by shape and cuticle care.',ru:'Аккуратное снятие покрытия с последующей обработкой.',hy:'Անվտանգ հեռացում և հետագա խնամք։'},durationMin:75,priceFrom:10000,masters:['elina-hakobyan'],locations:['cascade']},
    {id:'nail-strengthening',category:'nails',name:{en:'Nail Strengthening',ru:'Укрепление ногтей',hy:'Եղունգների ամրացում'},desc:{en:'Structured reinforcement for natural nails.',ru:'Структурное укрепление натуральных ногтей.',hy:'Բնական եղունգների կառուցվածքային ամրացում։'},durationMin:90,priceFrom:14000,masters:['elina-hakobyan'],locations:['cascade']},
    {id:'minimal-design',category:'nails',name:{en:'Minimal Nail Design',ru:'Минималистичный дизайн',hy:'Մինիմալ դիզայն'},desc:{en:'Fine-line or subtle accents added to a manicure.',ru:'Тонкие линии или лаконичные акценты к маникюру.',hy:'Նուրբ գծեր կամ փոքր շեշտեր մատնահարդարման վրա։'},durationMin:60,priceFrom:9000,masters:['elina-hakobyan'],locations:['cascade']},
    {id:'detailed-design',category:'nails',name:{en:'Detailed Nail Design',ru:'Детальный nail-дизайн',hy:'Մանրամասն եղունգների դիզայն'},desc:{en:'More complex graphic or hand-painted detailing.',ru:'Более сложный графический или ручной дизайн.',hy:'Ավելի բարդ գրաֆիկական կամ ձեռքով նկարված դիզայն։'},durationMin:90,priceFrom:14000,variable:true,masters:['sofia-grigoryan'],locations:['komitas']},
    {id:'classic-pedicure',category:'nails',name:{en:'Classic Pedicure',ru:'Классический педикюр',hy:'Դասական պեդիկյուր'},desc:{en:'Nail and cuticle care with a clean finish.',ru:'Уход за ногтями и кутикулой с аккуратным финишем.',hy:'Եղունգների և կուտիկուլայի խնամք։'},durationMin:60,priceFrom:12000,masters:['elina-hakobyan','sofia-grigoryan'],locations:['cascade','komitas']},
    {id:'gel-pedicure',category:'nails',name:{en:'Gel Pedicure',ru:'Педикюр с гель-лаком',hy:'Գել լաքով պեդիկյուր'},desc:{en:'Full pedicure finished with durable gel color.',ru:'Полный педикюр со стойким гель-покрытием.',hy:'Լիարժեք պեդիկյուր՝ գել ծածկույթով։'},durationMin:90,priceFrom:16000,masters:['sofia-grigoryan'],locations:['komitas']},

    {id:'brow-shaping',category:'brows-lashes',name:{en:'Brow Shaping',ru:'Коррекция бровей',hy:'Հոնքերի ձևավորում'},desc:{en:'Shape refined around natural growth and facial balance.',ru:'Форма с учетом естественного роста и пропорций лица.',hy:'Ձևավորում՝ բնական աճին և դեմքի համամասնությանը համապատասխան։'},durationMin:30,priceFrom:6000,masters:['anna-melikyan'],locations:['cascade','komitas']},
    {id:'brow-shaping-tint',category:'brows-lashes',name:{en:'Brow Shaping + Tint',ru:'Коррекция + окрашивание бровей',hy:'Հոնքերի ձևավորում + ներկում'},desc:{en:'Shape plus soft tint adjusted to hair and skin tone.',ru:'Коррекция формы и мягкое окрашивание под тон волос и кожи.',hy:'Ձևավորում և մեղմ ներկում՝ ըստ մազերի ու մաշկի երանգի։'},durationMin:45,priceFrom:9000,masters:['anna-melikyan'],locations:['cascade','komitas']},
    {id:'brow-lamination',category:'brows-lashes',name:{en:'Brow Lamination',ru:'Ламинирование бровей',hy:'Հոնքերի լամինացիա'},desc:{en:'Direction and definition while keeping a natural finish.',ru:'Укладка и фиксация направления с естественным результатом.',hy:'Ուղղության ձևավորում և ֆիքսում՝ բնական արդյունքով։'},durationMin:60,priceFrom:13000,masters:['anna-melikyan'],locations:['cascade','komitas']},
    {id:'brow-lamination-tint',category:'brows-lashes',name:{en:'Brow Lamination + Tint',ru:'Ламинирование + окрашивание',hy:'Հոնքերի լամինացիա + ներկում'},desc:{en:'Lamination with tailored tint for a complete finish.',ru:'Ламинирование с индивидуально подобранным окрашиванием.',hy:'Լամինացիա՝ ընտրված ներկմամբ։'},durationMin:75,priceFrom:16000,masters:['anna-melikyan'],locations:['cascade','komitas']},
    {id:'lash-tint',category:'brows-lashes',name:{en:'Lash Tint',ru:'Окрашивание ресниц',hy:'Թարթիչների ներկում'},desc:{en:'Color enhancement for a darker natural lash line.',ru:'Окрашивание для более выразительной естественной линии ресниц.',hy:'Գույնի ուժեղացում՝ ավելի արտահայտիչ բնական թարթիչների համար։'},durationMin:30,priceFrom:6000,masters:['anna-melikyan'],locations:['cascade','komitas']},
    {id:'lash-lift',category:'brows-lashes',name:{en:'Lash Lift',ru:'Лифтинг ресниц',hy:'Թարթիչների լիֆթինգ'},desc:{en:'Natural lift and curl without extensions.',ru:'Естественный подъём и изгиб без наращивания.',hy:'Բնական բարձրացում և կորություն առանց երկարացման։'},durationMin:60,priceFrom:15000,masters:['anna-melikyan'],locations:['cascade','komitas']},
    {id:'lash-lift-tint',category:'brows-lashes',name:{en:'Lash Lift + Tint',ru:'Лифтинг + окрашивание ресниц',hy:'Թարթիչների լիֆթինգ + ներկում'},desc:{en:'Lift, curl and tint in one appointment.',ru:'Подъём, изгиб и окрашивание за один визит.',hy:'Բարձրացում, կորություն և ներկում մեկ այցով։'},durationMin:75,priceFrom:18000,masters:['anna-melikyan'],locations:['cascade','komitas']},

    {id:'day-makeup',category:'makeup',name:{en:'Natural / Day Makeup',ru:'Дневной макияж',hy:'Բնական / ցերեկային դիմահարդարում'},desc:{en:'Light, polished makeup designed for daylight.',ru:'Лёгкий аккуратный макияж для дневного света.',hy:'Թեթև և կոկիկ դիմահարդարում ցերեկային լույսի համար։'},durationMin:60,priceFrom:18000,masters:['eva-sargsyan'],locations:['komitas']},
    {id:'evening-makeup',category:'makeup',name:{en:'Evening Makeup',ru:'Вечерний макияж',hy:'Երեկոյան դիմահարդարում'},desc:{en:'Defined evening look balanced for your features.',ru:'Более выразительный вечерний образ с учетом черт лица.',hy:'Ավելի արտահայտիչ երեկոյան կերպար՝ ըստ դիմագծերի։'},durationMin:75,priceFrom:23000,masters:['eva-sargsyan'],locations:['komitas']},
    {id:'event-makeup',category:'makeup',name:{en:'Event Makeup',ru:'Макияж для мероприятия',hy:'Միջոցառման դիմահարդարում'},desc:{en:'Long-wear makeup planned for photography and event lighting.',ru:'Стойкий макияж с учетом фото и освещения мероприятия.',hy:'Երկարատև դիմահարդարում՝ լուսանկարի և միջոցառման լույսի համար։'},durationMin:90,priceFrom:27000,masters:['eva-sargsyan'],locations:['komitas']},
    {id:'bridal-makeup',category:'makeup',name:{en:'Bridal Makeup',ru:'Свадебный макияж',hy:'Հարսանեկան դիմահարդարում'},desc:{en:'Event-day bridal makeup planned from the trial and schedule.',ru:'Свадебный макияж в день события с учетом пробного образа.',hy:'Հարսանեկան օրվա դիմահարդարում՝ փորձնական կերպարի հիման վրա։'},durationMin:120,priceFrom:38000,variable:true,masters:['eva-sargsyan'],locations:['komitas']},
    {id:'bridal-trial',category:'makeup',name:{en:'Bridal Trial',ru:'Пробный свадебный макияж',hy:'Հարսանեկան փորձնական դիմահարդարում'},desc:{en:'A full trial to settle tone, finish and timing before the event.',ru:'Полная репетиция оттенков, финиша и времени до события.',hy:'Ամբողջական փորձ՝ երանգը, ավարտը և ժամանակը համաձայնեցնելու համար։'},durationMin:90,priceFrom:25000,masters:['eva-sargsyan'],locations:['komitas']},

    {id:'hydration-facial',category:'care',name:{en:'Hydration Facial',ru:'Увлажняющий уход',hy:'Խոնավեցնող դեմքի խնամք'},desc:{en:'Non-medical cosmetic hydration and barrier-support care.',ru:'Немедицинский косметический уход для увлажнения и поддержки барьера кожи.',hy:'Ոչ բժշկական խոնավեցնող կոսմետիկ խնամք։'},durationMin:60,priceFrom:19000,masters:['mane-avetisyan'],locations:['komitas']},
    {id:'calm-restore-facial',category:'care',name:{en:'Calm & Restore Facial',ru:'Успокаивающий уход',hy:'Հանգստացնող և վերականգնող խնամք'},desc:{en:'Gentle non-medical care focused on comfort and skin balance.',ru:'Мягкий немедицинский уход для комфорта и баланса кожи.',hy:'Մեղմ ոչ բժշկական խնամք՝ մաշկի հարմարավետության և հավասարակշռության համար։'},durationMin:60,priceFrom:21000,masters:['mane-avetisyan'],locations:['komitas']},
    {id:'express-skin-reset',category:'care',name:{en:'Express Skin Reset',ru:'Экспресс-уход',hy:'Էքսպրես մաշկի խնամք'},desc:{en:'Fast cosmetic refresh before an event or busy day.',ru:'Быстрый косметический уход перед событием или насыщенным днём.',hy:'Արագ կոսմետիկ թարմացում միջոցառումից առաջ։'},durationMin:35,priceFrom:13000,masters:['mane-avetisyan'],locations:['komitas']}
  ],
  locations: [
    {id:'cascade',name:'TAVREN Cascade',area:{en:'Cascade',ru:'Каскад',hy:'Կասկադ'},address:'18 Arven Lane · Demo location',phone:'+374 00 555 210',hours:'Mon–Sat 10:00–20:00 · Sun 11:00–18:00',image:'https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&w=1400',categories:['Hair','Nails','Brows & Lashes'],open:{0:['11:00','18:00'],1:['10:00','20:00'],2:['10:00','20:00'],3:['10:00','20:00'],4:['10:00','20:00'],5:['10:00','20:00'],6:['10:00','20:00']}},
    {id:'komitas',name:'TAVREN Komitas',area:{en:'Komitas',ru:'Комитас',hy:'Կոմիտաս'},address:'42 Nairi Court · Demo location',phone:'+374 00 555 240',hours:'Mon–Sat 10:00–20:00 · Sun 11:00–19:00',image:'https://images.pexels.com/photos/7750090/pexels-photo-7750090.jpeg?auto=compress&cs=tinysrgb&w=1400',categories:['Hair','Nails','Brows & Lashes','Makeup','Care'],open:{0:['11:00','19:00'],1:['10:00','20:00'],2:['10:00','20:00'],3:['10:00','20:00'],4:['10:00','20:00'],5:['10:00','20:00'],6:['10:00','20:00']}}
  ],
  portfolio: [
    {id:'soft-brunette-balayage',category:'hair',serviceId:'balayage',masterId:'lilit-arakelyan',title:'Soft brunette balayage',image:'https://images.pexels.com/photos/20046793/pexels-photo-20046793.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'warm-dimensional-blonde',category:'hair',serviceId:'highlights',masterId:'lilit-arakelyan',title:'Warm dimensional blonde',image:'https://images.pexels.com/photos/7440054/pexels-photo-7440054.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'precision-bob',category:'hair',serviceId:'haircut',masterId:'mariam-vardanyan',title:'Precision bob',image:'https://images.pexels.com/photos/15868761/pexels-photo-15868761.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'textured-cut',category:'hair',serviceId:'haircut-styling',masterId:'mariam-vardanyan',title:'Soft textured cut',image:'https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'brunette-gloss',category:'hair',serviceId:'gloss-toner',masterId:'nare-petrosyan',title:'Brunette gloss refresh',image:'https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'natural-manicure',category:'nails',serviceId:'gel-manicure',masterId:'elina-hakobyan',title:'Natural structured manicure',image:'https://images.pexels.com/photos/34930141/pexels-photo-34930141.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'fine-line-nails',category:'nails',serviceId:'minimal-design',masterId:'elina-hakobyan',title:'Fine-line neutral design',image:'https://images.pexels.com/photos/34930100/pexels-photo-34930100.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'graphic-nails',category:'nails',serviceId:'detailed-design',masterId:'sofia-grigoryan',title:'Graphic micro-design',image:'https://images.pexels.com/photos/34930165/pexels-photo-34930165.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'brow-lamination-result',category:'brows-lashes',serviceId:'brow-lamination',masterId:'anna-melikyan',title:'Natural brow definition',image:'https://images.pexels.com/photos/6135621/pexels-photo-6135621.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'lash-lift-result',category:'brows-lashes',serviceId:'lash-lift-tint',masterId:'anna-melikyan',title:'Soft lifted lashes',image:'https://images.pexels.com/photos/7479587/pexels-photo-7479587.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'natural-evening-makeup',category:'makeup',serviceId:'evening-makeup',masterId:'eva-sargsyan',title:'Natural evening makeup',image:'https://images.pexels.com/photos/9045564/pexels-photo-9045564.jpeg?auto=compress&cs=tinysrgb&w=1000'},
    {id:'event-makeup-result',category:'makeup',serviceId:'event-makeup',masterId:'eva-sargsyan',title:'Soft event makeup',image:'https://images.pexels.com/photos/5654208/pexels-photo-5654208.jpeg?auto=compress&cs=tinysrgb&w=1000'}
  ],
  reviews: [
    {name:'Ani M.',text:'I booked a haircut after looking through Mariam’s work. The consultation was short but specific, and the final length was exactly what we agreed on.',service:'Haircut'},
    {name:'Mariam K.',text:'I liked knowing the approximate balayage price before booking. Lilit explained what would change the final cost before starting.',service:'Balayage'},
    {name:'Claire D.',text:'I was visiting Yerevan and could book everything in English without calling. The appointment started on time and Anna explained every step.',service:'Brows'},
    {name:'Lusine A.',text:'Choosing a nail artist from actual work is much easier than asking through messages and waiting for examples.',service:'Nails'},
    {name:'Elena S.',text:'I booked makeup and styling for the same afternoon. The timings were coordinated, so I did not have to arrange two separate visits.',service:'Event'},
    {name:'Sona H.',text:'Nare recommended gloss instead of another full color appointment. It took less time and was closer to what I actually needed.',service:'Hair care'}
  ],
  packages: [
    {id:'event-ready',name:'Event Ready',items:'Hair Styling + Event Makeup',duration:'Approx. 2h 30m',price:43000,from:true},
    {id:'complete-event',name:'Complete Event',items:'Brow Shaping + Hair Styling + Event Makeup',duration:'Approx. 3h',price:49000,from:true},
    {id:'bridal-preparation',name:'Bridal Preparation',items:'Bridal Trial + Bridal Makeup + Event Styling',duration:'Trial + event date',price:81000,from:true},
    {id:'monthly-maintenance',name:'Monthly Maintenance',items:'Gel Manicure + Brow Shaping & Tint',duration:'Approx. 2h',price:20000,from:false}
  ],
  faq: [
    {q:'How do I choose a master?',a:'Each master profile shows specialization and selected work. Once you choose a service, booking only shows specialists who actually provide it.'},
    {q:'Are the prices final?',a:'Fixed-price services use the displayed rate. Services marked “from” depend on factors such as hair length, density, product use or correction. The expected price is confirmed before work begins.'},
    {q:'Can I change my appointment?',a:'Yes. In this demo policy, appointments can be rescheduled up to 12 hours before the scheduled time.'},
    {q:'What if I am late?',a:'Please contact the studio. Arrivals more than 15 minutes late may require a shorter service or rescheduling if the next client would be affected.'},
    {q:'Can I book several services together?',a:'Compatible appointments can be coordinated. Packages show common combinations; other combinations can be requested in the booking note.'},
    {q:'Can I choose any available master?',a:'Yes. Select “Any available master” to see the widest range of available times. The demo then assigns a compatible specialist to the slot.'},
    {q:'Which languages are available?',a:'The demo interface supports Armenian, English and Russian. Individual master cards show spoken languages.'},
    {q:'Can I book without creating an account?',a:'Yes. Guest booking only asks for contact information. The demo stores the confirmation locally in your browser and does not send data anywhere.'}
  ],
  demoBookings: [
    {masterId:'lilit-arakelyan',dayOffset:2,start:'11:00',duration:240},
    {masterId:'mariam-vardanyan',dayOffset:3,start:'13:00',duration:75},
    {masterId:'elina-hakobyan',dayOffset:4,start:'12:00',duration:90},
    {masterId:'anna-melikyan',dayOffset:1,start:'16:00',duration:75},
    {masterId:'eva-sargsyan',dayOffset:5,start:'14:00',duration:120}
  ]
};
