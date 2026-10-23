/* Saqmol · página-anuncio: idioma ES/EN, capturas, WhatsApp, animaciones, galería y demo. */
(function () {
  document.documentElement.classList.add('js');
  const WA = '50258253416';
  // Idiomas con juego de capturas propio; los demás usan las capturas en español.
  const SHOT_LANGS = ['es'];
  const SHOTS_V = '202610224';   // súbelo al regenerar las capturas

  // ── Textos en inglés (el español está escrito en el HTML)
  const EN = {
    'meta.desc': 'Saqmol is the platform for poultry farms: daily records per house, sample weighings, feed conversion and heat stress for layers, broilers, hatchery and breeders, on desktop and mobile.',
    'skip': 'Skip to content', 'nav.aria': 'Main',
    'nav.features': 'Features', 'nav.gallery': 'Gallery', 'nav.demo': 'Demo', 'nav.manual': 'User guide', 'nav.editions': 'Editions', 'nav.faq': 'FAQ',
    'cta.demo': 'Get a demo', 'cta.try': 'Try it now', 'cta.whatsapp': 'Get a quote on WhatsApp', 'cta.whatsapp2': 'Message us on WhatsApp',
    'hero.eyebrow': 'New · Platform for poultry farms',
    'hero.title': 'Your poultry farm up to date, house by house.',
    'hero.sub': 'Saqmol brings together what today lives in notebooks, loose papers and messages: the daily record of every house, sample weighings, feed conversion and your birds’ heat stress. Breeders, hatchery, broilers and layers, on computers and phones.',
    'hero.maya': 'comes from <i>saqmo’l</i>, “egg” in K’iche’ Maya.',
    'specs.title': 'Spec sheet', 'specs.lines': 'production lines: breeders, hatchery, broilers and layers',
    'specs.roles': 'access levels: administration and farm representative',
    'specs.calc': 'values that calculate themselves: actual weight, % of target weight, feed conversion, heat stress and % hatch',
    'specs.units': 'weight units to weigh and to view: grams, kilograms and pounds',
    'specs.sample': 'birds per weighing sample, one by one', 'specs.iec': 'heat stress levels, from comfortable to critical',
    'specs.days': 'days back to catch up from the farm', 'specs.mobile': 'functional on mobile, inside the house',
    'feat.kicker': 'Standard equipment', 'feat.title': 'Everything a farm needs to know how its birds are doing.',
    'f1.tag': 'Daily record', 'f1.title': 'Each house’s day, in a single form.',
    'f1.text': 'Number of birds, age, mortality, feed intake, egg production and egg grading, or hatching eggs and chicks hatched at the hatchery. Saqmol already knows which flock is in the house and its genetic line, and it won’t let you record the same day twice.',
    'f1.b1': 'A form of its own for each production line', 'f1.b2': 'One record per house per day, no duplicates', 'f1.b3': 'Every correction asks for a reason and goes to the log',
    'f2.tag': 'Sample weighing', 'f2.title': 'Weigh bird by bird. Saqmol does the math.',
    'f2.text': 'Choose the house, the sample size and your scale’s unit. Type each weight and press Enter: the average, minimum, maximum, coefficient of variation and uniformity appear instantly. The average goes straight into that day’s record.',
    'f2.b1': 'In grams, kilograms or pounds, and shown in whichever you prefer', 'f2.b2': 'Uniformity and CV without a calculator', 'f2.b3': 'If it closes by accident, the half-done sample comes back',
    'f3.tag': 'Feed conversion', 'f3.title': 'Feed conversion, calculated at every weighing.',
    'f3.text': 'Saqmol adds up the feed the flock ate since the previous weighing and divides it by the kilos it gained. No side calculations or formulas: the figure is ready the same day you weigh, for every house and every flock.',
    'f3.b1': 'Kilos of feed over kilos gained, weighing to weighing', 'f3.b2': 'Feed is entered in quintals, as on the farm', 'f3.b3': 'Actual weight against your genetic line’s table',
    'f4.tag': 'Heat stress', 'f4.title': 'Every house’s heat, on a color map.',
    'f4.text': 'Enter temperature and humidity whenever you want: Saqmol calculates the heat stress index, tells you the level right away and keeps the time of every reading. The heat map shows which houses suffer and on which days.',
    'f4.b1': 'Comfortable, altered, marked stress or critical', 'f4.b2': 'Reading history with date and time', 'f4.b3': 'The day’s maximum goes into the house record',
    'f5.tag': 'Dashboard', 'f5.title': 'All production, at a glance.',
    'f5.text': 'Indicators, gauges and charts per production line, filtered by farm, section, house and dates, by day, week or month. Compare farms or houses, sort every table from A to Z and download the data or the charts.',
    'f5.b1': 'Comparison by farm or by house', 'f5.b2': 'Actual against table in every chart', 'f5.b3': 'Tables as CSV and charts as images',
    'f6.tag': 'Farms, houses and flocks', 'f6.title': 'Your farm, organized the way you run it.',
    'f6.text': 'Each farm sets up its sections, houses and flocks, with the profile of each production line. A house under renovation is deactivated without losing its history, and every flock carries its genetic line from day one.',
    'f6.b1': 'Sections, houses and flocks per production line', 'f6.b2': 'Deactivating doesn’t delete: history is kept', 'f6.b3': 'Origin, hatchery and vaccination profile per line',
    'f7.tag': 'Access and security', 'f7.title': 'Everyone sees their own. Every change is written down.',
    'f7.text': 'The administration creates every account and decides which farms each representative sees. No one gets in without their email and password, every change goes to the log with its author, time and reason, and the session closes itself when idle.',
    'f7.b1': 'Accounts created only by the administration', 'f7.b2': 'Change log with author, time and reason', 'f7.b3': 'Data integrity check',
    'alt.records': 'Daily layer records per house', 'alt.recordPhone': 'Daily record on a phone', 'alt.weigh': 'Weighing a sample of birds', 'alt.weighPhone': 'Sample weighing on a phone',
    'alt.fcr': 'Broiler weighings with feed conversion', 'alt.heat': 'Heat stress map per house', 'alt.heatPhone': 'Heat stress on a phone', 'alt.dash': 'Dashboard with indicators and charts',
    'alt.farm': 'A farm’s sections, houses and flocks', 'alt.farmPhone': 'The farm on a phone', 'alt.log': 'Change log with reasons',
    'gal.kicker': 'Gallery', 'gal.title': 'Take a look inside.', 'gal.prev': 'Previous', 'gal.next': 'Next', 'gal.aria': 'Saqmol screenshots', 'gal.hint': 'Swipe the images or use the arrows below.',
    'gal.c1': 'Layer dashboard for all farms', 'gal.c2': 'Broilers: weight, intake and conversion', 'gal.c3': 'The farm, on a phone', 'gal.c4': 'Daily layer record',
    'gal.c5': 'Temperature and humidity reading', 'gal.c6': 'The dashboard, on a phone', 'gal.c7': 'Hatchery: hatch percentage', 'gal.c8': 'Accounts and assigned farms', 'gal.c9': 'All the company’s farms',
    'demo.kicker': 'Test drive', 'demo.title': 'Try it now. No sign-up.',
    'demo.sub': 'A sample poultry company with 4 farms, 10 houses and three months of data. Switch between Administration, Farm manager, Two-farm representative and First sign-in from the bar at the top: record a day, weigh a sample or enter a temperature reading. Nothing you do is saved. The demo is in Spanish.',
    'demo.iframe': 'Saqmol interactive demo', 'demo.open': 'Open the demo full screen',
    'guide.kicker': 'User guide', 'guide.title': 'How it’s used, profile by profile.',
    'guide.text': 'What each access level sees, how to fill in every form field by field, what is stored in each table and what calculates itself. With screenshots of every screen. The guide is in Spanish.',
    'guide.cta': 'Read the guide (Spanish)',
    'guide.l1': 'Administration', 'guide.l1t': 'Farms, accounts, lists, security and all the data.',
    'guide.l2': 'Farm manager', 'guide.l2t': 'Their farm, houses, flocks and each day’s record.',
    'guide.l3': 'Representative of several farms', 'guide.l3t': 'Each farm separately, with a single login.',
    'guide.l4': 'First sign-in', 'guide.l4t': 'The temporary password and their own.',
    'ed.kicker': 'Editions', 'ed.title': 'Choose the edition that fits your farm.', 'ed.quote': 'Get a quote', 'ed.popular': 'Recommended',
    'ed.e1': 'Essential', 'ed.e1for': 'To leave the notebook behind from day one.', 'ed.e1b1': 'Daily record for one production line', 'ed.e1b2': 'Dashboard with indicators and charts',
    'ed.e1b3': 'Tables sortable A to Z and CSV download', 'ed.e1b4': 'Accounts for the administration and representatives',
    'ed.e2': 'Professional', 'ed.e2for': 'For farms that want to measure everything.', 'ed.e2b1': 'Everything in Essential', 'ed.e2b2': 'All 4 lines: breeders, hatchery, broilers and layers',
    'ed.e2b3': 'Sections, houses and flocks with their genetic line', 'ed.e2b4': 'Sample weighings and feed conversion', 'ed.e2b5': 'Heat stress with a heat map',
    'ed.e3': 'Tailored', 'ed.e3for': 'For companies with several farms or their own rules.', 'ed.e3b1': 'Everything in Professional', 'ed.e3b2': 'Several farms and representatives',
    'ed.e3b3': 'Fields and profiles made to measure', 'ed.e3b4': 'Migration of your current records', 'ed.e3b5': 'Training for your team',
    'ed.note': 'No one-size-fits-all packages: the price depends on the scope, and you get it in writing before we start.',
    'ind.kicker': 'Built for poultry', 'ind.title': 'From paper records to a farm that measures itself.',
    'ind.text': 'Saqmol was born from the forms farms already work with: each line’s origin profile, the production record, the genetic line’s weight table and the heat stress scale. The same fields, now on the phone of whoever is in the house and on the screen of whoever decides.',
    'ind.c1': 'Layer farms', 'ind.c2': 'Broiler farms', 'ind.c3': 'Hatcheries', 'ind.c4': 'Breeder farms', 'ind.c5': 'Companies with several farms', 'ind.c6': 'Technical advisors',
    'ind.b': 'Before', 'ind.b1': 'Records in notebooks, weighings on paper and feed conversion worked out by hand, days later.',
    'ind.a': 'With Saqmol', 'ind.a1': 'Every house records its day from a phone and the administration sees all farms right away.',
    'st.kicker': 'How to start', 'st.title': 'Three steps, with someone by your side.',
    'st.s1': 'Message us', 'st.s1t': 'Tell us how your farm keeps records today in a WhatsApp message. The first conversation is free.',
    'st.s2': 'We set it up', 'st.s2t': 'We load your farms, lines, sections, houses and flocks. You get scope, price and timeline in writing.',
    'st.s3': 'Your farm uses it', 'st.s3t': 'We train the administration and the farm managers, and support the first records.',
    'faq.kicker': 'FAQ', 'faq.title': 'What everyone asks.',
    'q1': 'Do we need to install anything?', 'a1': 'No. Saqmol runs in the browser on computers and phones. Everyone signs in with their email and password.',
    'q2': 'Who can see my farm’s data?', 'a2': 'Only the people the administration gave access to. Each representative sees only the farms assigned to them, one at a time. No one can create an account on their own, the session closes itself after 30 idle minutes and every change goes to the log with its author, time and reason.',
    'q3': 'Does it work on a phone, inside the house?', 'a3': 'Yes, fully: the farm manager records the day, weighs the sample and enters the temperature from their phone. An internet connection is needed to save.',
    'q4': 'Does it work if I have several farms?', 'a4': 'Yes. The administration sees and compares every farm; each farm works separately with its own sections, houses and flocks, and a representative can have more than one.',
    'q5': 'Can I weigh in pounds and view in kilos?', 'a5': 'Yes. Each sample is weighed in grams, kilograms or pounds, depending on your scale, and everyone chooses which unit to view weights in. Feed is entered in quintals.',
    'q6': 'Can we bring the records we already have?', 'a6': 'Yes. In the Tailored edition we move your current farms, flocks and records into Saqmol.',
    'q7': 'How much does it cost?', 'a7': 'It depends on the edition and what needs adapting. Message us and in the first conversation we give you a price range, free of charge.',
    'final.title': 'Let every house tell you how it’s doing.', 'final.text': 'Tell us how your farm keeps records today and we’ll show you Saqmol with your own lines and houses.',
    'ftr.by': 'A product of', 'ftr.rights': 'All rights reserved.', 'ftr.manual': 'User guide',
  };
  const TITLE = { es: 'Saqmol · Su granja avícola al día, nave por nave', en: 'Saqmol · Your poultry farm up to date, house by house' };
  const MSG = {
    es: { def: '¡Hola! Vi Saqmol y me gustaría saber más para nuestra granja.', esencial: '¡Hola! Me interesa la versión Esencial de Saqmol para nuestra granja.',
      profesional: '¡Hola! Me interesa la versión Profesional de Saqmol para nuestra granja.', medida: '¡Hola! Me interesa Saqmol a la medida de nuestra empresa avícola.' },
    en: { def: 'Hi! I saw Saqmol and would like to know more for our farm.', esencial: 'Hi! I am interested in the Saqmol Essential edition for our farm.',
      profesional: 'Hi! I am interested in the Saqmol Professional edition for our farm.', medida: 'Hi! I am interested in a tailored Saqmol for our poultry company.' },
  };

  // Guardar el español original para poder volver a él sin recargar
  const ES = {};
  document.querySelectorAll('[data-i18n]').forEach(el => { ES[el.dataset.i18n] = el.innerHTML; });
  const esAttr = (el, attr, key) => { if (!(key in ES)) ES[key] = el.getAttribute(attr); };
  document.querySelectorAll('[data-i18n-alt]').forEach(el => esAttr(el, 'alt', el.dataset.i18nAlt));
  document.querySelectorAll('[data-i18n-aria]').forEach(el => esAttr(el, 'aria-label', el.dataset.i18nAria));
  document.querySelectorAll('[data-i18n-title]').forEach(el => esAttr(el, 'title', el.dataset.i18nTitle));
  document.querySelectorAll('[data-i18n-content]').forEach(el => esAttr(el, 'content', el.dataset.i18nContent));

  function setLang(lang, save) {
    lang = lang === 'en' ? 'en' : 'es';
    const T = k => (lang === 'en' ? EN[k] : ES[k]) ?? ES[k];
    document.documentElement.lang = lang;
    document.title = TITLE[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = T(el.dataset.i18n); if (v != null) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => el.setAttribute('alt', T(el.dataset.i18nAlt)));
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', T(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-title]').forEach(el => el.setAttribute('title', T(el.dataset.i18nTitle)));
    document.querySelectorAll('[data-i18n-content]').forEach(el => el.setAttribute('content', T(el.dataset.i18nContent)));
    // Capturas en el idioma elegido (si existe ese juego)
    const shots = SHOT_LANGS.includes(lang) ? lang : 'es';
    document.querySelectorAll('img[data-shot]').forEach(img => { img.src = `img/shots/${shots}/${img.dataset.shot}.jpg?v=${SHOTS_V}`; });
    // WhatsApp con el mensaje ya escrito
    document.querySelectorAll('[data-wa]').forEach(a => {
      const m = MSG[lang][a.dataset.wa] || MSG[lang].def;
      a.href = `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
    });
    // Demo en el mismo idioma
    const f = document.getElementById('demoFrame'), o = document.getElementById('demoOpen');
    const demoUrl = lang === 'en' ? 'demo/?lang=en' : 'demo/';
    if (o) o.href = demoUrl;
    if (f) { f.dataset.src = demoUrl; if (f.src) f.src = demoUrl; }
    document.querySelectorAll('[data-lang]').forEach(b => { b.classList.toggle('on', b.dataset.lang === lang); b.setAttribute('aria-pressed', b.dataset.lang === lang); });
    if (save) try { localStorage.setItem('saqmol-lang', lang); } catch (e) {}
    const u = new URL(location.href);
    if (lang === 'en') u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
    history.replaceState(null, '', u.toString());
    if (window.SAQMOL_galMark) window.SAQMOL_galMark();
  }

  let lang = new URLSearchParams(location.search).get('lang');
  if (!lang) try { lang = localStorage.getItem('saqmol-lang'); } catch (e) {}
  if (!lang) lang = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
  setLang(lang, false);
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang, true)));

  // ── Aparición al hacer scroll
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });

  // ── Cabecera con borde al bajar
  const hdr = document.querySelector('.hdr');
  addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), { passive: true });

  // ── Galería: la imagen del centro es la activa; flechas, puntos y contador la siguen
  const track = document.getElementById('galTrack');
  const figs = [...track.querySelectorAll('figure')];
  const dots = document.getElementById('galDots');
  let cur = 0;
  figs.forEach((f, i) => {
    const d = document.createElement('button'); d.type = 'button'; d.className = 'dot';
    d.addEventListener('click', () => go(i)); dots.appendChild(d);
    f.addEventListener('click', () => { if (i !== cur) go(i); });
  });
  document.getElementById('galTot').textContent = figs.length;
  function go(i) {
    i = Math.max(0, Math.min(figs.length - 1, i));
    const f = figs[i];
    track.scrollTo({ left: f.offsetLeft - (track.clientWidth - f.offsetWidth) / 2, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  function mark() {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, dist = Infinity;
    figs.forEach((f, i) => { const d = Math.abs(f.offsetLeft + f.offsetWidth / 2 - mid); if (d < dist) { dist = d; best = i; } });
    cur = best;
    figs.forEach((f, i) => f.classList.toggle('on', i === cur));
    [...dots.children].forEach((d, i) => { d.classList.toggle('on', i === cur); d.setAttribute('aria-current', i === cur ? 'true' : 'false'); d.setAttribute('aria-label', (document.documentElement.lang === 'en' ? 'Go to image ' : 'Ir a la imagen ') + (i + 1)); });
    document.getElementById('galNum').textContent = cur + 1;
    document.querySelector('[data-gal="-1"]').disabled = cur === 0;
    document.querySelector('[data-gal="1"]').disabled = cur === figs.length - 1;
  }
  let raf = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(mark); }, { passive: true });
  addEventListener('resize', mark);
  document.querySelectorAll('[data-gal]').forEach(b => b.addEventListener('click', () => go(cur + Number(b.dataset.gal))));
  track.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(cur + (e.key === 'ArrowRight' ? 1 : -1)); } });
  window.SAQMOL_galMark = mark;
  mark();

  // ── La demo solo se carga cuando llega a la pantalla (la página abre rápido)
  const frame = document.getElementById('demoFrame');
  if (frame) new IntersectionObserver((es, ob) => es.forEach(e => { if (e.isIntersecting) { frame.src = frame.dataset.src; ob.disconnect(); } }), { rootMargin: '400px' }).observe(frame);

  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
