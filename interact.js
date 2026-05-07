(() => {
  const PRICING_CATEGORIES = [
    {
      id: 'security',
      title: 'Охранные системы',
      icon: 'ri-shield-check-line',
      items: [
        { id: 'alarm-basic', name: 'Установка автосигнализации (1-канал)', price: 'от 6 000 ₽' },
        { id: 'alarm-advanced', name: 'Установка автосигнализации (2-канала, GSM)', price: 'от 12 000 ₽' },
        { id: 'immobilizer', name: 'Установка иммобилайзера', price: 'от 4 500 ₽' },
        { id: 'gsm-module', name: 'Установка GSM-модуля', price: 'от 3 000 ₽' },
        { id: 'auto-start', name: 'Настройка и установка автозапуска', price: 'от 5 000 ₽' },
        { id: 'dvr-install', name: 'Установка видеорегистратора', price: 'от 2 500 ₽' },
        { id: 'rear-camera', name: 'Установка камеры заднего вида', price: 'от 3 500 ₽' },
        { id: '360-camera', name: 'Установка системы кругового обзора 360°', price: 'от 18 000 ₽' },
        { id: 'parking-sensors', name: 'Установка парктроников', price: 'от 4 000 ₽' }
      ],
    },
    {
      id: 'detailing',
      title: 'Детейлинг',
      icon: 'ri-drop-line',
      items: [
        { id: 'ppf-partial', name: 'Бронирование пленкой (частичное)', price: 'от 4 000 ₽' },
        { id: 'ppf-full', name: 'Бронирование пленкой (полный кузов)', price: 'от 35 000 ₽' },
        { id: 'antichrome', name: 'Антихром (тонирование хрома)', price: 'от 3 500 ₽' },
        { id: 'polish-soft', name: 'Полировка кузова (1-фазная)', price: '5 000 ₽' },
        { id: 'polish-hard', name: 'Полировка кузова (3-фазная)', price: '12 000 ₽' },
        { id: 'ceramic-coat', name: 'Керамическое покрытие', price: 'от 8 000 ₽' },
        { id: 'interior-clean', name: 'Химчистка салона', price: 'от 5 000 ₽' },
        { id: 'leather-care', name: 'Уход за кожаным салоном', price: '3 500 ₽' },
        { id: 'prep-sale', name: 'Предпродажная подготовка', price: 'от 12 000 ₽' }
      ],
    },
    {
      id: 'other',
      title: 'Прочее',
      icon: 'ri-tools-line',
      items: [
        { id: 'diag-computer', name: 'Компьютерная диагностика', price: 'от 1 000 ₽' },
        { id: 'diag-electric', name: 'Диагностика электрооборудования', price: 'от 1 500 ₽' },
        { id: 'wiring-repair', name: 'Ремонт проводки / жгутов', price: 'от 2 000 ₽' },
        { id: 'ecu-repair', name: 'Ремонт электронных блоков (ЭБУ)', price: 'от 5 000 ₽' },
        { id: 'generator', name: 'Ремонт / замена генератора', price: 'от 3 500 ₽' },
        { id: 'starter', name: 'Ремонт / замена стартера', price: 'от 3 000 ₽' },
        { id: 'extra-equip', name: 'Установка дополнительного электрооборудования', price: 'от 1 500 ₽' },
        { id: 'battery-replace', name: 'Замена АКБ с регистрацией', price: 'от 1 500 ₽' },
        { id: 'light-upgrade', name: 'Установка LED / лазерных фар', price: 'от 4 500 ₽' },
        { id: 'soundproof-door', name: 'Шумоизоляция дверей', price: 'от 3 500 ₽' },
        { id: 'soundproof-full', name: 'Полная шумоизоляция салона', price: 'от 18 000 ₽' },
        { id: 'tint-basic', name: 'Тонирование стекол (стандарт)', price: 'от 3 000 ₽' },
        { id: 'tint-premium', name: 'Тонирование стекол (премиум)', price: 'от 6 000 ₽' },
        { id: 'wiper', name: 'Установка дворников с подогревом', price: 'от 2 500 ₽' },
        { id: 'heated-seats', name: 'Установка подогрева сидений', price: 'от 4 000 ₽' },
        { id: 'steering-heat', name: 'Установка подогрева руля', price: 'от 3 500 ₽' },
        { id: 'dashcam-pro', name: 'Установка двухканального регистратора', price: 'от 3 500 ₽' },
        { id: 'radar', name: 'Установка радар-детектора / антирадара', price: 'от 2 000 ₽' }
      ],
    },
  ];

  const ICONS = {
    menu: `<path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>`,
    close: `<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>`,
    shield: `<path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z"></path>`,
    volume: `<path d="M10 7.22056L6.60282 10.0001H3V14.0001H6.60282L10 16.7796V7.22056ZM5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"></path>`,
    sparkling: `<path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124 8.72757 13.8128 9.81283 12.7276 11.124 12 9.81283 11.2724 8.72757 10.1872 8 8.87601 7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"></path>`,
    arrowDown: `<path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>`,
    check: `<path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>`,
    message: `<path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM8 10H16V12H8V10Z"></path>`,
    loader: `<path d="M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z"></path>`,
    error: `<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>`,
    mapPin: `<path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>`,
    phone: `<path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>`,
    mail: `<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>`,
    drop: `<path d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"></path>`,
    tools: `<path d="M5.32943 3.27158C6.56252 2.8332 7.9923 3.10749 8.97927 4.09446C10.1002 5.21537 10.3019 6.90741 9.5843 8.23385L20.293 18.9437L18.8788 20.3579L8.16982 9.64875C6.84325 10.3669 5.15069 10.1654 4.02952 9.04421C3.04227 8.05696 2.7681 6.62665 3.20701 5.39332L5.44373 7.63C6.02952 8.21578 6.97927 8.21578 7.56505 7.63C8.15084 7.04421 8.15084 6.09446 7.56505 5.50868L5.32943 3.27158ZM15.6968 5.15512L18.8788 3.38736L20.293 4.80157L18.5252 7.98355L16.7574 8.3371L14.6361 10.4584L13.2219 9.04421L15.3432 6.92289L15.6968 5.15512ZM8.97927 13.2868L10.3935 14.7011L5.09018 20.0044C4.69966 20.3949 4.06649 20.3949 3.67597 20.0044C3.31334 19.6417 3.28744 19.0699 3.59826 18.6774L3.67597 18.5902L8.97927 13.2868Z"></path>`,
    corner: `<path d="M4.99989 13.9999L4.99976 5L6.99976 4.99997L6.99986 11.9999L17.1717 12L13.222 8.05024L14.6362 6.63603L21.0001 13L14.6362 19.364L13.222 17.9497L17.1717 14L4.99989 13.9999Z"></path>`,
    arrowLeft: `<path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>`,
    arrowRight: `<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>`,
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const ICON_KEY_BY_RI = {
    "ri-menu-line": "menu",
    "ri-close-line": "close",
    "ri-shield-check-line": "shield",
    "ri-volume-mute-line": "volume",
    "ri-sparkling-line": "sparkling",
    "ri-arrow-down-line": "arrowDown",
    "ri-check-line": "check",
    "ri-message-3-line": "message",
    "ri-loader-4-line": "loader",
    "ri-error-warning-line": "error",
    "ri-map-pin-line": "mapPin",
    "ri-phone-line": "phone",
    "ri-mail-line": "mail",
    "ri-drop-line": "drop",
    "ri-tools-line": "tools",
    "ri-corner-down-right-line": "corner",
    "ri-arrow-left-s-line": "arrowLeft",
    "ri-arrow-right-s-line": "arrowRight",
  };
  const ICON_FILE_BY_RI = {
    "ri-menu-line": "menu-line.svg",
    "ri-close-line": "close-line.svg",
    "ri-shield-check-line": "shield-check-line.svg",
    "ri-volume-mute-line": "volume-mute-line.svg",
    "ri-sparkling-line": "sparkling-line.svg",
    "ri-arrow-down-line": "arrow-down-line.svg",
    "ri-check-line": "check-line.svg",
    "ri-message-3-line": "message-line.svg",
    "ri-loader-4-line": "loader-line.svg",
    "ri-error-warning-line": "error-warning-line.svg",
    "ri-map-pin-line": "map-pin-line.svg",
    "ri-phone-line": "phone-line.svg",
    "ri-mail-line": "mail-line.svg",
    "ri-drop-line": "drop-line.svg",
    "ri-tools-line": "tools-line.svg",
    "ri-corner-down-right-line": "corner-down-right-line.svg",
    "ri-arrow-left-s-line": "arrow-left-s-line.svg",
    "ri-arrow-right-s-line": "arrow-right-s-line.svg",
  };

  function iconSvg(iconName) {
    return `<svg class="ri-icon" viewBox="0 0 24 24"><use href="#${iconName}"></use></svg>`;
  }

  async function buildIconSprite() {
    const sprite = $('[data-icon-sprite]');
    if (!sprite) return;

    const parser = new DOMParser();
    const symbols = await Promise.all(
      Object.entries(ICON_KEY_BY_RI).map(async ([riName, key]) => {
        try {
          const fileName = ICON_FILE_BY_RI[riName];
          if (!fileName) throw new Error("no-file-map");
          const res = await fetch(`./assets/${fileName}`);
          if (!res.ok) throw new Error("not-found");
          const text = await res.text();
          const doc = parser.parseFromString(text, "image/svg+xml");
          const svg = doc.querySelector("svg");
          if (!svg) throw new Error("bad-svg");
          const viewBox = svg.getAttribute("viewBox") || "0 0 24 24";
          return `<symbol id="${riName}" viewBox="${viewBox}">${svg.innerHTML}</symbol>`;
        } catch {
          return `<symbol id="${riName}" viewBox="0 0 24 24">${ICONS[key]}</symbol>`;
        }
      })
    );

    sprite.innerHTML = symbols.join("");
  }

  function scrollToSelector(sel) {
    const el = $(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function initYear() {
    const y = $('[data-year]');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function initSmoothScrollAndTop() {
    $$('[data-scroll]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sel = btn.getAttribute('data-scroll');
        if (sel) scrollToSelector(sel);
      });
    });
    $$('[data-scroll-top]').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  function initMobileNav() {
    const toggle = $('[data-nav-toggle]');
    const mobile = $('[data-nav-mobile]');
    const icon = $('[data-nav-icon]');
    if (!toggle || !mobile || !icon) return;

    function setOpen(open) {
      if (open) {
        mobile.hidden = false;
        requestAnimationFrame(() => {
          mobile.classList.add('is-open');
        });
      } else {
        mobile.classList.remove('is-open');
        window.setTimeout(() => {
          if (!mobile.classList.contains('is-open')) mobile.hidden = true;
        }, 280);
      }
      const use = $('use', icon);
      if (use) use.setAttribute('href', open ? '#ri-close-line' : '#ri-menu-line');
    }

    let open = false;
    toggle.addEventListener('click', () => {
      open = !open;
      setOpen(open);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        open = false;
        setOpen(false);
      }
    });

    $$('[data-scroll]', mobile).forEach((btn) => {
      btn.addEventListener('click', () => {
        open = false;
        setOpen(false);
      });
    });
  }

  function initReveal() {
    const items = $$('.reveal');
    if (!items.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('animate-in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => obs.observe(el));
  }

  function initServices() {
    const tabsHost = $('[data-services-tabs]');
    const body = $('[data-services-body]');
    const serviceSelect = $('[data-service-select]');
    if (!tabsHost || !body) return;

    let active = PRICING_CATEGORIES[0]?.id || 'security';

    function renderTabs() {
      tabsHost.innerHTML = '';
      PRICING_CATEGORIES.forEach((cat) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `tab${cat.id === active ? ' tab--active' : ''}`;
        btn.innerHTML = `<span class="tab__icon">${iconSvg(cat.icon)}</span>${cat.title}`;
        btn.addEventListener('click', () => {
          active = cat.id;
          renderTabs();
          renderRows();
        });
        tabsHost.appendChild(btn);
      });
    }

    function formatPrice(price) {
      const trimmed = String(price || '').trim();
      if (trimmed.toLowerCase().startsWith('от ')) {
        return `<span class="row__from">от</span>${escapeHtml(trimmed.slice(3))}`;
      }
      return escapeHtml(trimmed);
    }

    function renderRows() {
      const cat = PRICING_CATEGORIES.find((c) => c.id === active) || PRICING_CATEGORIES[0];
      body.innerHTML = '';
      cat.items.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'row';
        row.style.background = idx % 2 === 0 ? 'rgba(15,15,15,1)' : 'rgba(15,15,15,.6)';
        row.innerHTML = `
          <div class="row__name">
            ${iconSvg('ri-corner-down-right-line')}
            <span class="row__title">${escapeHtml(item.name)}</span>
          </div>
          <div class="row__price">${formatPrice(item.price)}</div>
        `;
        row.addEventListener('click', () => {
          window.dispatchEvent(new CustomEvent('selectService', { detail: item.id }));
          scrollToSelector('#booking');
        });
        body.appendChild(row);
      });
    }

    function fillServiceSelect() {
      if (!serviceSelect) return;

      // Keep first option + "other"
      const keep = new Set(['', 'other']);
      Array.from(serviceSelect.querySelectorAll('option')).forEach((o) => {
        if (!keep.has(o.value)) o.remove();
      });

      const otherOpt = serviceSelect.querySelector('option[value="other"]');

      PRICING_CATEGORIES.forEach((cat) => {
        const group = document.createElement('optgroup');
        group.label = cat.title;
        cat.items.forEach((item) => {
          const opt = document.createElement('option');
          opt.value = item.id;
          opt.textContent = item.name;
          group.appendChild(opt);
        });
        if (otherOpt) serviceSelect.insertBefore(group, otherOpt);
        else serviceSelect.appendChild(group);
      });
    }

    window.addEventListener('selectService', (e) => {
      if (!serviceSelect) return;
      const id = e.detail;
      if (typeof id === 'string') serviceSelect.value = id;
    });

    renderTabs();
    renderRows();
    fillServiceSelect();
  }

  function initCalendar() {
    const host = $('[data-calendar]');
    const dateHidden = $('[data-selected-date]');
    if (!host || !dateHidden) return;

    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const today = new Date();
    const todayMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    let selected = '';
    let view = new Date(today.getFullYear(), today.getMonth(), 1);

    function toIso(d) {
      return d.toISOString().split('T')[0];
    }

    function sameDay(a, b) {
      return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }

    function render() {
      host.innerHTML = '';
      host.classList.add('calendar');

      const head = document.createElement('div');
      head.className = 'cal__head';
      head.innerHTML = `
        <button type="button" class="cal__btn" aria-label="Предыдущий месяц" data-cal-prev>${iconSvg('ri-arrow-left-s-line')}</button>
        <div class="cal__title">${monthNames[view.getMonth()]} ${view.getFullYear()}</div>
        <button type="button" class="cal__btn" aria-label="Следующий месяц" data-cal-next>${iconSvg('ri-arrow-right-s-line')}</button>
      `;
      host.appendChild(head);

      const week = document.createElement('div');
      week.className = 'cal__week';
      week.innerHTML = weekDays.map((wd) => `<div class="cal__wd">${wd}</div>`).join('');
      host.appendChild(week);

      const grid = document.createElement('div');
      grid.className = 'cal__grid';

      const year = view.getFullYear();
      const month = view.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDay = firstDay.getDay(); // 0=Sun
      const mondayOffset = startDay === 0 ? 6 : startDay - 1;
      const totalDays = lastDay.getDate();

      for (let i = 0; i < mondayOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'cal__empty';
        grid.appendChild(empty);
      }

      for (let day = 1; day <= totalDays; day++) {
        const d = new Date(year, month, day);
        const ds = toIso(d);
        const past = d < todayMid;
        const isToday = sameDay(d, todayMid);
        const isSelected = ds === selected;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = String(day);
        btn.className = 'cal__day';

        if (past) btn.classList.add('cal__day--past');
        else btn.classList.add('cal__day--free');

        if (isToday) btn.classList.add('cal__day--today');
        if (isSelected) btn.classList.add('cal__day--selected');

        btn.disabled = past;
        btn.addEventListener('click', () => {
          if (past) return;
          selected = ds;
          dateHidden.value = selected;
          render();
        });
        grid.appendChild(btn);
      }

      host.appendChild(grid);

      const legend = document.createElement('div');
      legend.className = 'cal__legend';
      legend.innerHTML = `
        <div class="legend"><span class="legend__box legend__box--sel"></span>Выбрано</div>
        <div class="legend"><span class="legend__box legend__box--today"></span>Сегодня</div>
      `;
      host.appendChild(legend);

      $('[data-cal-prev]', host)?.addEventListener('click', () => {
        view = new Date(year, month - 1, 1);
        render();
      });
      $('[data-cal-next]', host)?.addEventListener('click', () => {
        view = new Date(year, month + 1, 1);
        render();
      });
    }

    render();
  }

  function initBooking() {
    const form = $('[data-booking-form]');
    const success = $('[data-booking-success]');
    const modal = $('[data-modal]');
    const phonePreview = $('[data-phone-preview]');
    const sending = $('[data-modal-status]');
    const digits = $$('[data-code] .code__digit');
    const codeError = $('[data-code-error]');
    const verifyBtn = $('[data-verify]');
    const verifyLabel = $('[data-verify-label]');
    const verifySpin = $('[data-verify-spin]');
    const resendWrap = $('[data-resend]');
    const resendBtn = $('[data-resend-btn]');
    const resendTimer = $('[data-resend-timer]');
    const message = $('textarea[name="message"]', form || document);
    const phoneInput = $('input[name="phone"]', form || document);
    const counter = $('[data-message-counter]');

    if (!form || !success || !modal || !phonePreview || !sending || !verifyBtn || !verifyLabel || !verifySpin || !resendWrap || !resendBtn || !resendTimer || digits.length !== 4 || !codeError) {
      return;
    }

    let canResend = false;
    let countdown = 60;
    let timer = null;
    let isVerifying = false;

    function formatPhone(raw) {
      const d = String(raw || '').replace(/\D/g, '');
      if ((d.startsWith('7') || d.startsWith('8')) && d.length === 11) {
        return `+7 (${d.slice(1,4)}) ${d.slice(4,7)}-${d.slice(7,9)}-${d.slice(9,11)}`;
      }
      return raw || '';
    }

    function applyPhoneMask(raw) {
      let digitsOnly = String(raw || '').replace(/\D/g, '');
      if (!digitsOnly) return '';
      if (digitsOnly.startsWith('8')) digitsOnly = `7${digitsOnly.slice(1)}`;
      if (!digitsOnly.startsWith('7')) digitsOnly = `7${digitsOnly}`;
      digitsOnly = digitsOnly.slice(0, 11);

      const rest = digitsOnly.slice(1);
      let out = '+7';
      if (rest.length > 0) out += ` (${rest.slice(0, 3)}`;
      if (rest.length >= 3) out += ')';
      if (rest.length > 3) out += ` ${rest.slice(3, 6)}`;
      if (rest.length > 6) out += `-${rest.slice(6, 8)}`;
      if (rest.length > 8) out += `-${rest.slice(8, 10)}`;
      return out;
    }

    function resetCode() {
      digits.forEach((i) => {
        i.value = '';
        i.classList.remove('code__digit--error');
      });
      codeError.hidden = true;
    }

    function setSending(v) {
      sending.hidden = !v;
    }

    function openModal() {
      const phone = $('input[name="phone"]', form)?.value || '';
      const digitsOnly = phone.replace(/\D/g, '');
      if (digitsOnly.length < 10) return;

      phonePreview.textContent = formatPhone(phone);
      modal.hidden = false;
      resetCode();
      setSending(true);
      canResend = false;
      countdown = 60;
      updateResendUI();
      startCountdown();

      // имитация отправки кода (место для интеграции SMS API)
      setTimeout(() => setSending(false), 1500);
      setTimeout(() => digits[0].focus(), 100);
    }

    function closeModal() {
      modal.hidden = true;
      stopCountdown();
      setSending(false);
    }

    function stopCountdown() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function updateResendUI() {
      resendBtn.hidden = !canResend;
      resendTimer.hidden = canResend;
      resendTimer.textContent = `Отправить повторно через ${countdown} сек`;
    }

    function startCountdown() {
      stopCountdown();
      timer = window.setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) {
          countdown = 0;
          canResend = true;
          stopCountdown();
        }
        updateResendUI();
      }, 1000);
    }

    function resend() {
      if (!canResend) return;
      canResend = false;
      countdown = 60;
      resetCode();
      setSending(true);
      updateResendUI();
      startCountdown();
      // имитация отправки кода
      setTimeout(() => setSending(false), 1500);
      setTimeout(() => digits[0].focus(), 100);
    }

    function showSuccessAndReset() {
      form.hidden = true;
      success.hidden = false;
      form.reset();
      if (counter) counter.textContent = '0/500';

      setTimeout(() => {
        success.hidden = true;
        form.hidden = false;
      }, 4000);
    }

    async function verifyAndSubmit() {
      if (isVerifying) return;

      const code = digits.map((d) => d.value.trim()).join('');
      if (!/^\d{4}$/.test(code)) {
        digits.forEach((i) => i.classList.add('code__digit--error'));
        codeError.hidden = false;
        digits[0].focus();
        return;
      }

      isVerifying = true;
      verifyBtn.disabled = true;
      verifySpin.hidden = false;
      verifyLabel.textContent = 'Проверка...';

      try {
        // Имитация SMS-проверки (место для будущего backend API).
        await new Promise((resolve) => window.setTimeout(resolve, 1200));

        // В офлайн-режиме внешняя отправка отключена.
        closeModal();
        showSuccessAndReset();
      } catch (_err) {
        closeModal();
        showSuccessAndReset();
      } finally {
        isVerifying = false;
        verifyBtn.disabled = false;
        verifySpin.hidden = true;
        verifyLabel.textContent = 'Подтвердить и отправить';
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      openModal();
    });

    $$('[data-modal-close]', modal).forEach((el) => el.addEventListener('click', closeModal));
    resendBtn.addEventListener('click', resend);
    verifyBtn.addEventListener('click', verifyAndSubmit);

    digits.forEach((input, idx) => {
      input.addEventListener('input', () => {
        const v = input.value.replace(/\D/g, '').slice(0, 1);
        input.value = v;
        input.classList.remove('code__digit--error');
        codeError.hidden = true;
        if (v && idx < 3) digits[idx + 1].focus();
      });

      input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Backspace' && !input.value && idx > 0) {
          digits[idx - 1].focus();
        }
      });
    });

    digits[0].addEventListener('paste', (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, 4);
      resetCode();
      for (let i = 0; i < pasted.length; i++) digits[i].value = pasted[i];
      const focusIndex = Math.min(pasted.length, 3);
      digits[focusIndex].focus();
    });

    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        phoneInput.value = applyPhoneMask(phoneInput.value);
      });
      phoneInput.addEventListener('blur', () => {
        phoneInput.value = applyPhoneMask(phoneInput.value);
      });
    }

    if (message && counter) {
      const update = () => {
        counter.textContent = `${message.value.length}/500`;
      };
      message.addEventListener('input', update);
      update();
    }
  }

  function escapeHtml(s) {
    return String(s || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  document.addEventListener('DOMContentLoaded', async () => {
    await buildIconSprite();
    initYear();
    initSmoothScrollAndTop();
    initMobileNav();
    initReveal();
    initServices();
    initCalendar();
    initBooking();
  });
})();

