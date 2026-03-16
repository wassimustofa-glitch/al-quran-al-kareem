/* ============================================================
   AL-QURAN AL-KAREEM - Complete Web Application
   Version: 3.0.0 | Author: Wassi
   ============================================================ */

(function() {
'use strict';

const API_BASE = 'https://api.alquran.cloud/v1';
const PRAYER_API = 'https://api.aladhan.com/v1';
const AUDIO_CDN = 'https://cdn.islamic.network/quran/audio/128';
const KAABA_LAT = 21.4225;
const KAABA_LNG = 39.8262;

const state = {
  currentPage: 'home',
  currentSurah: 1,
  sidebarOpen: false,
  theme: 'dark',
  accentColor: '#d4af37',
  settings: {
    showArabic: true, showEnglish: true, showBangla: true,
    englishTranslator: 'en.sahih', banglaTranslator: 'bn.bengali',
    arabicFontSize: 32, translationFontSize: 16,
    arabicFont: "'Scheherazade New', serif",
    reciter: 'ar.alafasy', playbackSpeed: 1, repeatMode: 'none',
    showAyahNumbers: true, autoScroll: true, bgPattern: true,
    animations: true, wordByWord: false, transliteration: false, readingMode: 'ayah'
  },
  audio: { playing: false, currentAudio: null, surah: null, ayah: null, volume: 0.8, muted: false, repeat: false },
  bookmarks: { ayahs: [], surahs: [], collections: [] },
  notes: [],
  readingPlan: null,
  readingHistory: [],
  statistics: { surahsRead: [], ayahsRead: 0, totalTimeSeconds: 0, dailyActivity: {}, streak: 0, lastReadDate: null },
  tasbih: { count: 0, target: 33, text: '\u0633\u064F\u0628\u0652\u062D\u064E\u0627\u0646\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u0650', totalToday: 0, sound: true, vibrate: false },
  cache: {},
  location: null,
  readingStartTime: null,
  // New state properties
  asmaSearch: '',
  asmaCategory: 'all',
  asmaMemorized: [],
  tafsirTopicsStudied: [],
  tafsirStudyNotes: {},
  prophetFilter: 'all',
  prophetSearch: '',
  prophetsRead: [],
  achievements: { unlocked: [], points: 0, level: 1 },
  collections: [],
  wordByWordActive: false,
  onboardingComplete: false,
  searchHistory: [],
  advancedSearchFilters: { surahRange: [1,114], revelationType: 'all', juz: 0 },
  readingPlanTemplates: null,
  dailyPlanProgress: {},
  planStreak: 0,
  contextMenuTarget: null,
  notifications: [],
  notificationPrefs: { dailyReminder: true, achievements: true, prayerTimes: false }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const debounce = (fn, ms=300) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

function formatTime(sec) { if (!sec||sec<0) return '0:00'; return Math.floor(sec/60)+':'+Math.floor(sec%60).toString().padStart(2,'0'); }
function formatHours(sec) { const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60); return h>0?h+'h '+m+'m':m+'m'; }

function getGlobalAyahNumber(surahNum, ayahNum) {
  let total = 0;
  for (let i = 0; i < surahNum - 1; i++) total += SURAH_DATA[i].numberOfAyahs;
  return total + ayahNum;
}

function showToast(message, type='info', duration=3000) {
  const container = $('#toastContainer');
  const icons = { success:'fa-check-circle', error:'fa-exclamation-circle', warning:'fa-exclamation-triangle', info:'fa-info-circle' };
  const toast = document.createElement('div');
  toast.className = 'toast toast-'+type;
  toast.innerHTML = '<i class="fas '+icons[type]+'"></i><span class="toast-message">'+message+'</span><button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>';
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, duration);
}

function saveState() {
  try { localStorage.setItem('quranApp', JSON.stringify({
    settings: state.settings, theme: state.theme, accentColor: state.accentColor,
    bookmarks: state.bookmarks, notes: state.notes, readingPlan: state.readingPlan,
    readingHistory: state.readingHistory, statistics: state.statistics,
    tasbih: { totalToday: state.tasbih.totalToday, sound: state.tasbih.sound, vibrate: state.tasbih.vibrate },
    location: state.location, currentSurah: state.currentSurah,
    asmaMemorized: state.asmaMemorized,
    tafsirTopicsStudied: state.tafsirTopicsStudied,
    tafsirStudyNotes: state.tafsirStudyNotes,
    prophetsRead: state.prophetsRead,
    achievements: state.achievements,
    collections: state.collections,
    onboardingComplete: state.onboardingComplete,
    searchHistory: state.searchHistory,
    dailyPlanProgress: state.dailyPlanProgress,
    planStreak: state.planStreak,
    notifications: state.notifications,
    notificationPrefs: state.notificationPrefs
  })); } catch(e) {}
}

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem('quranApp'));
    if (!s) return;
    if (s.settings) Object.assign(state.settings, s.settings);
    if (s.theme) state.theme = s.theme;
    if (s.accentColor) state.accentColor = s.accentColor;
    if (s.bookmarks) state.bookmarks = s.bookmarks;
    if (s.notes) state.notes = s.notes||[];
    if (s.readingPlan) state.readingPlan = s.readingPlan;
    if (s.readingHistory) state.readingHistory = s.readingHistory;
    if (s.statistics) Object.assign(state.statistics, s.statistics);
    if (s.tasbih) Object.assign(state.tasbih, s.tasbih);
    if (s.location) state.location = s.location;
    if (s.currentSurah) state.currentSurah = s.currentSurah;
    if (s.asmaMemorized) state.asmaMemorized = s.asmaMemorized;
    if (s.tafsirTopicsStudied) state.tafsirTopicsStudied = s.tafsirTopicsStudied;
    if (s.tafsirStudyNotes) state.tafsirStudyNotes = s.tafsirStudyNotes;
    if (s.prophetsRead) state.prophetsRead = s.prophetsRead;
    if (s.achievements) state.achievements = s.achievements;
    if (s.collections) state.collections = s.collections;
    if (s.onboardingComplete !== undefined) state.onboardingComplete = s.onboardingComplete;
    if (s.searchHistory) state.searchHistory = s.searchHistory;
    if (s.dailyPlanProgress) state.dailyPlanProgress = s.dailyPlanProgress;
    if (s.planStreak) state.planStreak = s.planStreak;
    if (s.notifications) state.notifications = s.notifications;
    if (s.notificationPrefs) state.notificationPrefs = s.notificationPrefs;
  } catch(e) {}
}

async function fetchAPI(url) {
  if (state.cache[url]) return state.cache[url];
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP '+res.status);
    const data = await res.json();
    state.cache[url] = data;
    return data;
  } catch(e) { console.error('API Error:', e); return null; }
}

/* ============================================================
   INIT - Application Entry Point
   ============================================================ */
function init() {
  loadState();
  applyTheme(state.theme);
  applyAccentColor(state.accentColor);
  applySettings();
  populateSidebar();
  populateSurahSelector();
  initNavigation();
  initHeader();
  initQuranReader();
  initSurahIndex();
  initJuzIndex();
  initSearch();
  initBookmarks();
  initNotes();
  initReadingPlan();
  initPrayerTimes();
  initQibla();
  initTasbih();
  initDuas();
  initCalendar();
  initStatistics();
  initSettings();
  initAudioPlayer();
  initKeyboardShortcuts();
  initBackToTop();
  // New feature inits
  initAsmaUlHusna();
  initTafsir();
  initProphets();
  initAchievements();
  initCollections();
  initWordByWord();
  initOnboarding();
  initAdvancedSearch();
  initReadingPlanTemplates();
  initEnhancedStatistics();
  initContextMenu();
  initTooltips();
  initNotifications();
  loadDailyVerse();
  updateProgress();
  updateLastRead();
  startLoading();
}

function startLoading() {
  const bar = $('#loadingProgress');
  const txt = $('#loadingText');
  const steps = [{p:20,t:'Loading resources...'},{p:50,t:'Preparing Quran data...'},{p:80,t:'Setting up features...'},{p:100,t:'Bismillah!'}];
  let i = 0;
  const iv = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(iv);
      setTimeout(() => { const ls=$('#loadingScreen'); ls.classList.add('fade-out'); setTimeout(()=>{ls.style.display='none';$('#app').classList.remove('hidden');},600); }, 400);
      return;
    }
    bar.style.width = steps[i].p+'%';
    txt.textContent = steps[i].t;
    i++;
  }, 400);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNavigation() {
  $$('.nav-item').forEach(item => item.addEventListener('click', () => navigateTo(item.dataset.page)));
  $$('.feature-item').forEach(item => item.addEventListener('click', () => navigateTo(item.dataset.page)));
  $('#startReadingBtn').addEventListener('click', () => { state.currentSurah=1; navigateTo('quran'); loadSurah(1); });
  $('#continueReadingBtn').addEventListener('click', () => { navigateTo('quran'); loadSurah(state.currentSurah||1); });
}

function navigateTo(page) {
  if (!page) return;
  if (state.currentPage==='quran' && page!=='quran' && state.readingStartTime) {
    state.statistics.totalTimeSeconds += Math.floor((Date.now()-state.readingStartTime)/1000);
    state.readingStartTime = null;
  }
  if (page==='quran' && !state.readingStartTime) state.readingStartTime = Date.now();

  state.currentPage = page;
  $$('.page-section').forEach(p => p.classList.remove('active'));
  const target = $('#page-'+page);
  if (target) target.classList.add('active');
  $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page===page));

  const titles = {
    home:'Al-Quran Al-Kareem', quran:'Read Quran', 'surah-index':'Surah Index',
    'juz-index':'Juz Index', search:'Search Quran', bookmarks:'Bookmarks', notes:'My Notes',
    'reading-plan':'Reading Plan', 'prayer-times':'Prayer Times', qibla:'Qibla Direction',
    tasbih:'Digital Tasbih', dua:'Daily Duas', calendar:'Islamic Calendar',
    statistics:'Statistics', settings:'Settings', about:'About',
    'asma-ul-husna':'Asma ul Husna', tafsir:'Tafsir & Study',
    prophets:'Prophets of Islam', achievements:'Achievements',
    collections:'My Collections', 'advanced-search':'Advanced Search'
  };
  $('#headerTitle h1').textContent = titles[page]||'Al-Quran Al-Kareem';
  if (window.innerWidth<=1024) closeSidebar();
  window.scrollTo({top:0,behavior:'smooth'});
  saveState();
}

/* ============================================================
   SIDEBAR
   ============================================================ */
function populateSidebar() {
  const container = $('#surahListScroll');
  container.innerHTML = '';
  SURAH_DATA.forEach(s => {
    const div = document.createElement('div');
    div.className = 'surah-list-item';
    div.dataset.surah = s.number;
    div.dataset.type = s.revelationType.toLowerCase();
    div.innerHTML = '<div class="surah-list-num">'+s.number+'</div><div class="surah-list-info"><div class="surah-list-en">'+s.englishName+'</div><div class="surah-list-meta">'+s.numberOfAyahs+' Ayahs \u2022 '+s.revelationType+'</div></div><div class="surah-list-ar">'+s.name+'</div>';
    div.addEventListener('click', () => { state.currentSurah=s.number; navigateTo('quran'); loadSurah(s.number); });
    container.appendChild(div);
  });

  $('#sidebarSearch').addEventListener('input', debounce(e => {
    const q = e.target.value.toLowerCase();
    $$('.surah-list-item').forEach(item => {
      const s = SURAH_DATA[item.dataset.surah-1];
      item.style.display = (!q||s.englishName.toLowerCase().includes(q)||s.name.includes(q)||item.dataset.surah===q||s.banglaName.includes(q)) ? '' : 'none';
    });
    $('#clearSidebarSearch').classList.toggle('hidden', !q);
  }));
  $('#clearSidebarSearch').addEventListener('click', () => { $('#sidebarSearch').value=''; $$('.surah-list-item').forEach(i=>i.style.display=''); $('#clearSidebarSearch').classList.add('hidden'); });
  $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    $$('.surah-list-item').forEach(item => item.style.display=(f==='all'||item.dataset.type===f)?'':'none');
  }));
  $('#menuBtn').addEventListener('click', toggleSidebar);
  $('#sidebarCloseBtn').addEventListener('click', closeSidebar);
  $('#sidebarOverlay').addEventListener('click', closeSidebar);
}

function toggleSidebar() { state.sidebarOpen=!state.sidebarOpen; $('.sidebar').classList.toggle('open',state.sidebarOpen); $('#sidebarOverlay').classList.toggle('active',state.sidebarOpen); }
function closeSidebar() { state.sidebarOpen=false; $('.sidebar').classList.remove('open'); $('#sidebarOverlay').classList.remove('active'); }

/* ============================================================
   HEADER
   ============================================================ */
function initHeader() {
  $('#themeToggleBtn').addEventListener('click', () => {
    const t=['dark','light','sepia','midnight','emerald','royal'];
    applyTheme(t[(t.indexOf(state.theme)+1)%t.length]);
  });
  $('#fontSizeBtn').addEventListener('click', e => { e.stopPropagation(); togglePanel('fontSizePanel'); });
  $('#arabicFontSize').addEventListener('input', e => { state.settings.arabicFontSize=+e.target.value; $('#arabicSizeValue').textContent=e.target.value+'px'; applyFontSettings(); saveState(); });
  $('#translationFontSize').addEventListener('input', e => { state.settings.translationFontSize=+e.target.value; $('#translationSizeValue').textContent=e.target.value+'px'; applyFontSettings(); saveState(); });
  $$('.size-btn').forEach(btn => btn.addEventListener('click', () => {
    const inp = btn.dataset.target==='arabic'?$('#arabicFontSize'):$('#translationFontSize');
    inp.value = Math.max(inp.min,Math.min(inp.max,+inp.value+(btn.classList.contains('plus')?2:-2)));
    inp.dispatchEvent(new Event('input'));
  }));
  $('#arabicFontSelect').addEventListener('change', e => { state.settings.arabicFont=e.target.value; applyFontSettings(); saveState(); });
  $('#resetFontBtn').addEventListener('click', () => {
    state.settings.arabicFontSize=32; state.settings.translationFontSize=16; state.settings.arabicFont="'Scheherazade New', serif";
    $('#arabicFontSize').value=32; $('#arabicSizeValue').textContent='32px';
    $('#translationFontSize').value=16; $('#translationSizeValue').textContent='16px';
    $('#arabicFontSelect').value="'Scheherazade New', serif";
    applyFontSettings(); saveState(); showToast('Font settings reset','success');
  });
  $('#languageBtn').addEventListener('click', e => { e.stopPropagation(); togglePanel('languagePanel'); });
  ['showArabic','showEnglish','showBangla'].forEach(id => $('#'+id).addEventListener('change', e => { state.settings[id]=e.target.checked; applyLanguageSettings(); saveState(); }));
  $('#englishTranslator').addEventListener('change', e => { state.settings.englishTranslator=e.target.value; loadSurah(state.currentSurah); saveState(); });
  $('#banglaTranslator').addEventListener('change', e => { state.settings.banglaTranslator=e.target.value; loadSurah(state.currentSurah); saveState(); });
  $('#notificationBtn').addEventListener('click', e => { e.stopPropagation(); togglePanel('notificationPanel'); });
  $('#clearAllNotif').addEventListener('click', () => { $('#notifList').innerHTML='<div class="empty-state"><p>No notifications</p></div>'; $('#notifBadge').style.display='none'; });
  $('#fullscreenBtn').addEventListener('click', toggleFullscreen);
  $('#headerSearchInput').addEventListener('focus', () => { navigateTo('search'); setTimeout(()=>$('#mainSearchInput').focus(),100); });
  document.addEventListener('click', () => $$('.dropdown-panel:not(.hidden)').forEach(p=>p.classList.add('hidden')));
  $$('.dropdown-panel').forEach(p => p.addEventListener('click', e=>e.stopPropagation()));
}

function togglePanel(id) { const p=$('#'+id); const h=p.classList.contains('hidden'); $$('.dropdown-panel').forEach(x=>x.classList.add('hidden')); if(h) p.classList.remove('hidden'); }
function toggleFullscreen() { if(!document.fullscreenElement){document.documentElement.requestFullscreen().catch(()=>{});$('#fullscreenBtn i').className='fas fa-compress';}else{document.exitFullscreen();$('#fullscreenBtn i').className='fas fa-expand';} }

/* ============================================================
   THEME & SETTINGS
   ============================================================ */
function applyTheme(theme) {
  state.theme = theme;
  document.body.className = theme!=='dark' ? theme+'-theme' : '';
  const icons={dark:'fa-moon',light:'fa-sun',sepia:'fa-book',midnight:'fa-star',emerald:'fa-leaf',royal:'fa-crown'};
  $('#themeToggleBtn i').className = 'fas '+(icons[theme]||'fa-moon');
  $$('.theme-btn').forEach(b=>b.classList.toggle('active',b.dataset.theme===theme));
  saveState();
}

function applyAccentColor(color) {
  state.accentColor = color;
  const r=parseInt(color.slice(1,3),16),g=parseInt(color.slice(3,5),16),b=parseInt(color.slice(5,7),16);
  const root = document.documentElement.style;
  root.setProperty('--color-accent',color);
  root.setProperty('--color-accent-rgb',r+','+g+','+b);
  root.setProperty('--color-accent-subtle','rgba('+r+','+g+','+b+',0.08)');
  root.setProperty('--border-accent','rgba('+r+','+g+','+b+',0.3)');
  root.setProperty('--shadow-accent','0 4px 15px rgba('+r+','+g+','+b+',0.2)');
  root.setProperty('--text-accent',color);
  $$('.color-btn').forEach(b=>b.classList.toggle('active',b.dataset.color===color));
  saveState();
}

function applySettings() {
  const s=state.settings;
  $('#showArabic').checked=s.showArabic; $('#showEnglish').checked=s.showEnglish; $('#showBangla').checked=s.showBangla;
  $('#englishTranslator').value=s.englishTranslator; $('#banglaTranslator').value=s.banglaTranslator;
  $('#arabicFontSize').value=s.arabicFontSize; $('#arabicSizeValue').textContent=s.arabicFontSize+'px';
  $('#translationFontSize').value=s.translationFontSize; $('#translationSizeValue').textContent=s.translationFontSize+'px';
  $('#arabicFontSelect').value=s.arabicFont; $('#reciterSelect').value=s.reciter;
  $('#playbackSpeed').value=s.playbackSpeed; $('#repeatMode').value=s.repeatMode;
  $('#ayahNumbersToggle').checked=s.showAyahNumbers; $('#autoScrollToggle').checked=s.autoScroll;
  $('#bgPatternToggle').checked=s.bgPattern; $('#animationsToggle').checked=s.animations;
  $('#wordByWordToggle').checked=s.wordByWord; $('#transliterationToggle').checked=s.transliteration;
  applyFontSettings(); applyLanguageSettings();
}

function applyFontSettings() {
  const r=document.documentElement.style;
  r.setProperty('--fs-arabic-lg',state.settings.arabicFontSize+'px');
  r.setProperty('--fs-translation',state.settings.translationFontSize+'px');
  r.setProperty('--font-arabic',state.settings.arabicFont);
}

function applyLanguageSettings() {
  $$('.ayah-arabic').forEach(el=>el.style.display=state.settings.showArabic?'':'none');
  $$('.ayah-translation').forEach(el=>el.style.display=state.settings.showEnglish?'':'none');
  $$('.ayah-bangla').forEach(el=>el.style.display=state.settings.showBangla?'':'none');
}

function populateSurahSelector() {
  const sel=$('#surahSelector'); sel.innerHTML='';
  SURAH_DATA.forEach(s => { const o=document.createElement('option'); o.value=s.number; o.textContent=s.number+'. '+s.englishName+' ('+s.name+')'; sel.appendChild(o); });
  sel.addEventListener('change', e => { state.currentSurah=+e.target.value; loadSurah(+e.target.value); });
}

/* ============================================================
   QURAN READER
   ============================================================ */
function initQuranReader() {
  $('#prevSurahBtn').addEventListener('click', () => loadSurah(Math.max(1,state.currentSurah-1)));
  $('#nextSurahBtn').addEventListener('click', () => loadSurah(Math.min(114,state.currentSurah+1)));
  $('#bottomPrevBtn').addEventListener('click', () => loadSurah(Math.max(1,state.currentSurah-1)));
  $('#bottomNextBtn').addEventListener('click', () => loadSurah(Math.min(114,state.currentSurah+1)));
  $('#scrollTopBtn').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  $('#playAllBtn').addEventListener('click', () => playAudio(state.currentSurah,1));
  $('#bookmarkSurahBtn').addEventListener('click', () => toggleSurahBookmark(state.currentSurah));
  $('#shareSurahBtn').addEventListener('click', () => shareSurah(state.currentSurah));
  $('#printSurahBtn').addEventListener('click', () => window.print());
  $$('.mode-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.mode-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    state.settings.readingMode=btn.dataset.mode; saveState();
  }));
}

async function loadSurah(num) {
  num = Math.max(1,Math.min(114,num));
  state.currentSurah = num;
  const surah = SURAH_DATA[num-1];
  $('#currentSurahArabic').textContent = surah.name;
  $('#currentSurahEnglish').textContent = surah.englishName;
  $('#currentSurahType').innerHTML = '<i class="fas '+(surah.revelationType==='Meccan'?'fa-kaaba':'fa-mosque')+'"></i> '+surah.revelationType;
  $('#currentSurahAyahs').textContent = surah.numberOfAyahs+' Ayahs';
  $('#currentSurahJuz').textContent = 'Juz '+surah.juz.join(', ');
  $('#bismillahDisplay').style.display = num===9?'none':'';
  $('#surahSelector').value = num;
  const prev=num>1?SURAH_DATA[num-2]:null, next=num<114?SURAH_DATA[num]:null;
  $('#prevSurahName').textContent = prev?prev.englishName:'--';
  $('#nextSurahName').textContent = next?next.englishName:'--';
  $('#bottomPrevBtn').style.visibility = prev?'visible':'hidden';
  $('#bottomNextBtn').style.visibility = next?'visible':'hidden';
  $('#bookmarkSurahBtn i').className = state.bookmarks.surahs.includes(num)?'fas fa-heart':'far fa-heart';

  const container = $('#ayahsContainer');
  container.innerHTML = '<div class="ayahs-loading"><div class="spinner"></div><p>Loading Ayahs...</p></div>';

  const editions = 'quran-uthmani,'+state.settings.englishTranslator+','+state.settings.banglaTranslator;
  const data = await fetchAPI(API_BASE+'/surah/'+num+'/editions/'+editions);

  if (!data || data.code !== 200) {
    container.innerHTML = '<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><h3>Failed to load</h3><p>Check your internet connection.</p><button class="hero-btn primary-btn" onclick="loadSurah('+num+')" style="margin-top:1rem"><i class="fas fa-redo"></i> Retry</button></div>';
    return;
  }

  const arabic=data.data[0].ayahs, english=data.data[1].ayahs, bangla=data.data[2].ayahs;
  container.innerHTML = '';

  arabic.forEach((a,idx) => {
    const ayahNum=a.numberInSurah, globalNum=a.number;
    const bk = state.bookmarks.ayahs.some(b=>b.surah===num&&b.ayah===ayahNum);
    const card = document.createElement('div');
    card.className='ayah-card'; card.id='ayah-'+ayahNum;
    card.innerHTML = '<div class="ayah-top"><div class="ayah-number"'+(state.settings.showAyahNumbers?'':' style="display:none"')+'>'+ayahNum+'</div><div class="ayah-actions">'
      +'<button class="ayah-action-btn play-ayah" data-s="'+num+'" data-a="'+ayahNum+'" title="Play"><i class="fas fa-play"></i></button>'
      +'<button class="ayah-action-btn bk-ayah'+(bk?' bookmarked':'')+'" data-s="'+num+'" data-a="'+ayahNum+'" title="Bookmark"><i class="'+(bk?'fas':'far')+' fa-heart"></i></button>'
      +'<button class="ayah-action-btn note-ayah" data-s="'+num+'" data-a="'+ayahNum+'" title="Note"><i class="fas fa-sticky-note"></i></button>'
      +'<button class="ayah-action-btn copy-ayah" data-i="'+idx+'" title="Copy"><i class="fas fa-copy"></i></button>'
      +'<button class="ayah-action-btn share-ayah" data-s="'+num+'" data-a="'+ayahNum+'" title="Share"><i class="fas fa-share-alt"></i></button>'
      +'<button class="ayah-action-btn collection-ayah" data-s="'+num+'" data-a="'+ayahNum+'" title="Add to Collection"><i class="fas fa-folder-plus"></i></button>'
      +'</div></div>'
      +'<div class="ayah-arabic"'+(state.settings.showArabic?'':' style="display:none"')+'>'+a.text+'</div>'
      +'<div class="ayah-translation"'+(state.settings.showEnglish?'':' style="display:none"')+'>'+english[idx].text+'</div>'
      +'<div class="ayah-bangla"'+(state.settings.showBangla?'':' style="display:none"')+'>'+bangla[idx].text+'</div>';
    container.appendChild(card);
  });

  container.querySelectorAll('.play-ayah').forEach(b=>b.addEventListener('click',()=>playAudio(+b.dataset.s,+b.dataset.a)));
  container.querySelectorAll('.bk-ayah').forEach(b=>b.addEventListener('click',()=>toggleAyahBookmark(+b.dataset.s,+b.dataset.a,b)));
  container.querySelectorAll('.note-ayah').forEach(b=>b.addEventListener('click',()=>openNoteModal(+b.dataset.s,+b.dataset.a)));
  container.querySelectorAll('.copy-ayah').forEach(b=>b.addEventListener('click',()=>{
    const i=+b.dataset.i;
    navigator.clipboard.writeText(arabic[i].text+'\n\n'+english[i].text+'\n\n'+bangla[i].text+'\n\n\u2014 '+surah.englishName+' '+arabic[i].numberInSurah).then(()=>showToast('Copied!','success'));
  }));
  container.querySelectorAll('.share-ayah').forEach(b=>b.addEventListener('click',()=>shareAyah(+b.dataset.s,+b.dataset.a)));
  container.querySelectorAll('.collection-ayah').forEach(b=>b.addEventListener('click',()=>showAddToCollectionModal(+b.dataset.s,+b.dataset.a)));

  addToHistory(num);
  if (!state.statistics.surahsRead.includes(num)) state.statistics.surahsRead.push(num);
  const today=new Date().toISOString().split('T')[0];
  state.statistics.dailyActivity[today]=(state.statistics.dailyActivity[today]||0)+1;
  state.statistics.lastReadDate=today;
  updateStreak(); saveState();
  checkAchievement('reader');
}

/* ============================================================
   BOOKMARKS
   ============================================================ */
function initBookmarks() {
  $$('.bookmark-tab').forEach(tab=>tab.addEventListener('click',()=>{
    $$('.bookmark-tab').forEach(t=>t.classList.remove('active')); tab.classList.add('active');
    renderBookmarks(tab.dataset.tab);
  }));
  $('#exportBookmarksBtn').addEventListener('click', exportBookmarks);
  renderBookmarks('ayahs');
}

function toggleAyahBookmark(surah,ayah,btn) {
  const idx=state.bookmarks.ayahs.findIndex(b=>b.surah===surah&&b.ayah===ayah);
  if (idx>=0) { state.bookmarks.ayahs.splice(idx,1); if(btn){btn.classList.remove('bookmarked');btn.querySelector('i').className='far fa-heart';} showToast('Bookmark removed','info'); }
  else { state.bookmarks.ayahs.push({surah,ayah,surahName:SURAH_DATA[surah-1].englishName,date:new Date().toISOString()}); if(btn){btn.classList.add('bookmarked');btn.querySelector('i').className='fas fa-heart';} showToast('Bookmarked!','success'); }
  saveState();
  checkAchievement('bookmarker');
}

function toggleSurahBookmark(surah) {
  const idx=state.bookmarks.surahs.indexOf(surah);
  if(idx>=0){state.bookmarks.surahs.splice(idx,1);$('#bookmarkSurahBtn i').className='far fa-heart';showToast('Removed','info');}
  else{state.bookmarks.surahs.push(surah);$('#bookmarkSurahBtn i').className='fas fa-heart';showToast('Bookmarked!','success');}
  saveState();
}

function renderBookmarks(tab='ayahs') {
  const c=$('#bookmarksContent');
  if(tab==='ayahs'){
    if(!state.bookmarks.ayahs.length){c.innerHTML='<div class="empty-state"><i class="fas fa-heart"></i><h3>No bookmarks yet</h3></div>';return;}
    c.innerHTML=state.bookmarks.ayahs.map((b,i)=>'<div class="bookmark-item"><div style="flex:1"><div style="font-weight:600;color:var(--color-accent);font-size:var(--fs-sm)">'+b.surahName+' - Ayah '+b.ayah+'</div><div style="font-size:var(--fs-xs);color:var(--text-muted)">'+new Date(b.date).toLocaleDateString()+'</div></div><button class="ayah-action-btn" onclick="state.currentSurah='+b.surah+';navigateTo(\'quran\');loadSurah('+b.surah+')"><i class="fas fa-arrow-right"></i></button><button class="ayah-action-btn" onclick="state.bookmarks.ayahs.splice('+i+',1);saveState();renderBookmarks(\'ayahs\')"><i class="fas fa-trash"></i></button></div>').join('');
  } else if(tab==='surahs'){
    if(!state.bookmarks.surahs.length){c.innerHTML='<div class="empty-state"><i class="fas fa-book"></i><h3>No surah bookmarks</h3></div>';return;}
    c.innerHTML=state.bookmarks.surahs.map((num,i)=>{const s=SURAH_DATA[num-1];return '<div class="bookmark-item"><div class="surah-list-num">'+num+'</div><div style="flex:1"><div style="font-weight:600">'+s.englishName+'</div></div><button class="ayah-action-btn" onclick="state.currentSurah='+num+';navigateTo(\'quran\');loadSurah('+num+')"><i class="fas fa-book-open"></i></button><button class="ayah-action-btn" onclick="state.bookmarks.surahs.splice('+i+',1);saveState();renderBookmarks(\'surahs\')"><i class="fas fa-trash"></i></button></div>';}).join('');
  } else { renderCollectionBookmarks(c); }
}

function renderCollectionBookmarks(container) {
  if (!state.collections.length) {
    container.innerHTML = '<div class="empty-state"><i class="fas fa-folder"></i><h3>No collections yet</h3><p>Create a collection from the Collections page</p><button class="hero-btn primary-btn" onclick="navigateTo(\'collections\')" style="margin-top:1rem"><i class="fas fa-plus"></i> Create Collection</button></div>';
    return;
  }
  container.innerHTML = state.collections.map((col, i) =>
    '<div class="bookmark-item"><div style="flex:1"><div style="font-weight:600;color:var(--color-accent)">' + col.name + '</div><div style="font-size:var(--fs-xs);color:var(--text-muted)">' + col.items.length + ' items</div></div><button class="ayah-action-btn" onclick="navigateTo(\'collections\')"><i class="fas fa-arrow-right"></i></button></div>'
  ).join('');
}

function exportBookmarks() {
  const blob=new Blob([JSON.stringify(state.bookmarks,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='quran-bookmarks.json'; a.click();
  showToast('Exported!','success');
}

/* ============================================================
   NOTES
   ============================================================ */
function initNotes() {
  $('#addNewNoteBtn').addEventListener('click',()=>openNoteModal());
  $('#noteModalClose').addEventListener('click',closeNoteModal);
  $('#noteModalCancel').addEventListener('click',closeNoteModal);
  $('#noteModalSave').addEventListener('click',saveNote);
  $('#notesSearchInput').addEventListener('input',debounce(renderNotes));
  renderNotes();
}

function openNoteModal(surah,ayah) {
  const m=$('#noteModal'); m.classList.remove('hidden');
  if(surah&&ayah){$('#noteRef').textContent=SURAH_DATA[surah-1].englishName+' - Ayah '+ayah;m.dataset.surah=surah;m.dataset.ayah=ayah;}
  else{$('#noteRef').textContent='General Note';delete m.dataset.surah;delete m.dataset.ayah;}
  $('#noteTextarea').value=''; $('#noteTagInput').value=''; $('#noteTextarea').focus();
}
function closeNoteModal(){$('#noteModal').classList.add('hidden');}

function saveNote() {
  const m=$('#noteModal'), text=$('#noteTextarea').value.trim();
  if(!text){showToast('Write something','warning');return;}
  const note={id:Date.now(),text,tags:$('#noteTagInput').value.split(',').map(t=>t.trim()).filter(Boolean),
    surah:m.dataset.surah?+m.dataset.surah:null,ayah:m.dataset.ayah?+m.dataset.ayah:null,date:new Date().toISOString()};
  if(note.surah) note.surahName=SURAH_DATA[note.surah-1].englishName;
  state.notes.push(note); saveState(); closeNoteModal(); renderNotes(); showToast('Note saved','success');
  checkAchievement('scholar');
}

function renderNotes() {
  const c=$('#notesList'), q=($('#notesSearchInput')?.value||'').toLowerCase();
  let notes=state.notes;
  if(q) notes=notes.filter(n=>n.text.toLowerCase().includes(q)||(n.surahName||'').toLowerCase().includes(q));
  if(!notes.length){c.innerHTML='<div class="empty-state"><i class="fas fa-sticky-note"></i><h3>No notes yet</h3></div>';return;}
  c.innerHTML=notes.map(n=>'<div class="note-item"><div class="note-item-ref">'+(n.surahName?n.surahName+' - Ayah '+n.ayah:'General Note')+'</div><div class="note-item-text">'+n.text+'</div>'+(n.tags.length?'<div class="note-item-tags">'+n.tags.map(t=>'<span class="note-tag">'+t+'</span>').join('')+'</div>':'')+'<div style="display:flex;gap:4px;margin-top:0.5rem"><button class="ayah-action-btn" onclick="state.notes.splice('+state.notes.indexOf(n)+',1);saveState();renderNotes()"><i class="fas fa-trash"></i></button><span style="flex:1"></span><span style="font-size:var(--fs-xs);color:var(--text-muted)">'+new Date(n.date).toLocaleDateString()+'</span></div></div>').join('');
}

/* ============================================================
   SURAH INDEX
   ============================================================ */
function initSurahIndex() {
  renderSurahIndex();
  $('#surahIndexSearch').addEventListener('input',debounce(renderSurahIndex));
  $$('.index-filter-btn').forEach(b=>b.addEventListener('click',()=>{$$('.index-filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderSurahIndex();}));
  $$('.view-btn').forEach(b=>b.addEventListener('click',()=>{$$('.view-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#surahIndexGrid').classList.toggle('list-view',b.dataset.view==='list');}));
  $('#surahSortSelect').addEventListener('change',renderSurahIndex);
}

function renderSurahIndex() {
  const q=($('#surahIndexSearch')?.value||'').toLowerCase();
  const filter=$('.index-filter-btn.active')?.dataset.filter||'all';
  const sort=$('#surahSortSelect')?.value||'number';
  let surahs=[...SURAH_DATA];
  if(q) surahs=surahs.filter(s=>s.englishName.toLowerCase().includes(q)||s.number.toString()===q||s.name.includes(q));
  if(filter!=='all') surahs=surahs.filter(s=>s.revelationType.toLowerCase()===filter);
  const fns={number:(a,b)=>a.number-b.number,name:(a,b)=>a.englishName.localeCompare(b.englishName),ayahs:(a,b)=>b.numberOfAyahs-a.numberOfAyahs,revelation:(a,b)=>a.revelationOrder-b.revelationOrder};
  surahs.sort(fns[sort]||fns.number);
  const g=$('#surahIndexGrid');
  g.innerHTML=surahs.map(s=>'<div class="surah-index-card" data-surah="'+s.number+'"><div class="surah-index-num">'+s.number+'</div><div class="surah-index-info"><div class="surah-index-en">'+s.englishName+'</div><div class="surah-index-meaning">'+s.englishNameTranslation+'</div><div class="surah-index-meta"><span class="badge-'+s.revelationType.toLowerCase()+'">'+s.revelationType+'</span><span>'+s.numberOfAyahs+' Ayahs</span></div></div><div class="surah-index-ar">'+s.name+'</div></div>').join('');
  g.querySelectorAll('.surah-index-card').forEach(c=>c.addEventListener('click',()=>{state.currentSurah=+c.dataset.surah;navigateTo('quran');loadSurah(+c.dataset.surah);}));
}

/* ============================================================
   JUZ INDEX
   ============================================================ */
function initJuzIndex() {
  if(typeof JUZ_DATA==='undefined') return;
  const g=$('#juzIndexGrid');
  g.innerHTML=JUZ_DATA.map(j=>{const st=SURAH_DATA[j.startSurah-1],en=SURAH_DATA[j.endSurah-1];
    return '<div class="juz-card" data-s="'+j.startSurah+'"><div class="juz-card-num">Juz '+j.number+'</div><div class="juz-card-name">'+(j.arabicName||'')+'</div><div style="font-weight:600;color:var(--text-heading);margin:4px 0">'+(j.englishName||'Juz '+j.number)+'</div><div class="juz-card-range">'+st.englishName+' '+j.startAyah+' \u2192 '+en.englishName+' '+j.endAyah+'</div></div>';}).join('');
  g.querySelectorAll('.juz-card').forEach(c=>c.addEventListener('click',()=>{state.currentSurah=+c.dataset.s;navigateTo('quran');loadSurah(+c.dataset.s);}));
}

/* ============================================================
   SEARCH
   ============================================================ */
function initSearch() {
  $('#searchSubmitBtn').addEventListener('click',performSearch);
  $('#mainSearchInput').addEventListener('keydown',e=>{if(e.key==='Enter')performSearch();});
}

async function performSearch() {
  const q=$('#mainSearchInput').value.trim(); if(!q) return;
  addToSearchHistory(q);
  const c=$('#searchResults');
  c.innerHTML='<div class="ayahs-loading"><div class="spinner"></div><p>Searching...</p></div>';
  const langs=[];
  if($('#searchInEnglish').checked) langs.push(state.settings.englishTranslator);
  if($('#searchInArabic').checked) langs.push('quran-uthmani');
  if($('#searchInBangla').checked) langs.push(state.settings.banglaTranslator);
  let results=[];
  for(const lang of langs){
    const data=await fetchAPI(API_BASE+'/search/'+encodeURIComponent(q)+'/all/'+lang);
    if(data&&data.code===200&&data.data.matches) results=results.concat(data.data.matches.map(m=>({surah:m.surah.number,surahName:m.surah.englishName,ayah:m.numberInSurah,text:m.text,edition:m.edition.identifier})));
  }
  const seen=new Set(); results=results.filter(r=>{const k=r.surah+':'+r.ayah;if(seen.has(k))return false;seen.add(k);return true;});
  if(!results.length){c.innerHTML='<div class="search-empty-state"><i class="fas fa-search"></i><h3>No results</h3></div>';return;}
  c.innerHTML='<div style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:1rem">'+results.length+' result(s)</div>'+results.slice(0,50).map(r=>'<div class="search-result-item" data-s="'+r.surah+'"><div class="search-result-ref">'+r.surahName+' - Ayah '+r.ayah+'</div><div class="'+(r.edition.includes('quran')?'search-result-arabic':'search-result-translation')+'">'+r.text+'</div></div>').join('');
  c.querySelectorAll('.search-result-item').forEach(i=>i.addEventListener('click',()=>{state.currentSurah=+i.dataset.s;navigateTo('quran');loadSurah(+i.dataset.s);}));
  checkAchievement('seeker');
}

/* ============================================================
   AUDIO PLAYER
   ============================================================ */
function initAudioPlayer() {
  $('#audioPlayPauseBtn').addEventListener('click',toggleAudioPlayback);
  $('#audioPrevBtn').addEventListener('click',()=>{if(state.audio.ayah>1)playAudio(state.audio.surah,state.audio.ayah-1);});
  $('#audioNextBtn').addEventListener('click',()=>{const max=SURAH_DATA[state.audio.surah-1].numberOfAyahs;if(state.audio.ayah<max)playAudio(state.audio.surah,state.audio.ayah+1);else if(state.audio.surah<114)playAudio(state.audio.surah+1,1);});
  $('#audioRepeatBtn').addEventListener('click',()=>{state.audio.repeat=!state.audio.repeat;$('#audioRepeatBtn').style.color=state.audio.repeat?'var(--color-accent)':'';});
  $('#audioVolume').addEventListener('input',e=>{state.audio.volume=e.target.value/100;if(state.audio.currentAudio)state.audio.currentAudio.volume=state.audio.volume;updateMuteIcon();});
  $('#audioMuteBtn').addEventListener('click',()=>{state.audio.muted=!state.audio.muted;if(state.audio.currentAudio)state.audio.currentAudio.volume=state.audio.muted?0:state.audio.volume;updateMuteIcon();});
  $('#audioCloseBtn').addEventListener('click',()=>stopAudio());
  $('#audioProgress').addEventListener('click',e=>{if(!state.audio.currentAudio)return;const r=e.currentTarget.getBoundingClientRect();state.audio.currentAudio.currentTime=(e.clientX-r.left)/r.width*state.audio.currentAudio.duration;});
}

function playAudio(surah,ayah) {
  stopAudio(false);
  state.audio.surah=surah; state.audio.ayah=ayah; state.audio.playing=true;
  const g=getGlobalAyahNumber(surah,ayah);
  const reciterMap={'ar.alafasy':'ar.alafasy','ar.abdulsamad':'ar.abdulsamad','ar.husary':'ar.husary','ar.minshawi':'ar.minshawi','ar.abdurrahmaansudais':'ar.abdurrahmaansudais','ar.shaatree':'ar.shaatree','ar.ahmedajamy':'ar.ahmedajamy','ar.maaboralward':'ar.mahermuaiqly'};
  const rec=reciterMap[state.settings.reciter]||'ar.alafasy';
  const audio=new Audio(AUDIO_CDN+'/'+rec+'/'+g+'.mp3');
  audio.volume=state.audio.muted?0:state.audio.volume;
  audio.playbackRate=state.settings.playbackSpeed;
  state.audio.currentAudio=audio;
  $('#audioSurahName').textContent=SURAH_DATA[surah-1].englishName;
  $('#audioAyahNum').textContent='Ayah '+ayah;
  $('#audioPlayerBar').classList.remove('hidden');
  $('#audioPlayPauseBtn i').className='fas fa-pause';
  $$('.ayah-card').forEach(c=>c.classList.remove('playing'));
  const pc=$('#ayah-'+ayah);
  if(pc){pc.classList.add('playing');if(state.settings.autoScroll)pc.scrollIntoView({behavior:'smooth',block:'center'});}
  audio.addEventListener('timeupdate',()=>{if(audio.duration){$('#audioProgressFill').style.width=(audio.currentTime/audio.duration*100)+'%';$('#audioCurrentTime').textContent=formatTime(audio.currentTime);$('#audioDuration').textContent=formatTime(audio.duration);}});
  audio.addEventListener('ended',()=>{$$('.ayah-card').forEach(c=>c.classList.remove('playing'));if(state.audio.repeat){playAudio(surah,ayah);}else{const max=SURAH_DATA[surah-1].numberOfAyahs;if(ayah<max)playAudio(surah,ayah+1);else{state.audio.playing=false;$('#audioPlayPauseBtn i').className='fas fa-play';}}});
  audio.addEventListener('error',()=>{showToast('Audio failed','error');state.audio.playing=false;$('#audioPlayPauseBtn i').className='fas fa-play';});
  audio.play().catch(()=>{});
  state.statistics.ayahsRead++; saveState();
  checkAchievement('listener');
}

function toggleAudioPlayback() {
  if(!state.audio.currentAudio) return;
  if(state.audio.playing){state.audio.currentAudio.pause();state.audio.playing=false;$('#audioPlayPauseBtn i').className='fas fa-play';}
  else{state.audio.currentAudio.play();state.audio.playing=true;$('#audioPlayPauseBtn i').className='fas fa-pause';}
}

function stopAudio(hide=true) {
  if(state.audio.currentAudio){state.audio.currentAudio.pause();state.audio.currentAudio=null;}
  state.audio.playing=false; $$('.ayah-card').forEach(c=>c.classList.remove('playing'));
  if(hide){$('#audioPlayerBar').classList.add('hidden');$('#audioProgressFill').style.width='0%';}
  $('#audioPlayPauseBtn i').className='fas fa-play';
}

function updateMuteIcon() { $('#audioMuteBtn i').className='fas '+(state.audio.muted?'fa-volume-mute':state.audio.volume<0.5?'fa-volume-down':'fa-volume-up'); }

/* ============================================================
   SHARE
   ============================================================ */
function shareAyah(surah,ayah) {
  const card=$('#ayah-'+ayah); if(!card) return;
  const ar=card.querySelector('.ayah-arabic')?.textContent||'';
  const en=card.querySelector('.ayah-translation')?.textContent||'';
  openShareModal(ar,en,SURAH_DATA[surah-1].englishName+' '+surah+':'+ayah);
}
function shareSurah(surah){const s=SURAH_DATA[surah-1];openShareModal('','Surah '+s.englishName+' ('+s.name+')',s.englishNameTranslation);}

function openShareModal(arabic,text,ref) {
  const m=$('#shareModal'); m.classList.remove('hidden');
  $('#sharePreview').innerHTML=(arabic?'<div style="font-family:var(--font-arabic);font-size:1.5rem;color:var(--text-arabic);direction:rtl;margin-bottom:0.5rem">'+arabic+'</div>':'')+'<div style="color:var(--text-translation)">'+text+'</div><div style="color:var(--color-accent);font-size:var(--fs-sm);margin-top:0.5rem">\u2014 '+ref+'</div>';
  const st=arabic+'\n\n'+text+'\n\n\u2014 '+ref;
  $('#shareWhatsapp').onclick=()=>window.open('https://wa.me/?text='+encodeURIComponent(st));
  $('#shareTwitter').onclick=()=>window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(st.substring(0,280)));
  $('#shareFacebook').onclick=()=>window.open('https://www.facebook.com/sharer/sharer.php?quote='+encodeURIComponent(st));
  $('#shareCopy').onclick=()=>{navigator.clipboard.writeText(st).then(()=>showToast('Copied!','success'));};
  $('#shareModalClose').onclick=()=>m.classList.add('hidden');
}

/* ============================================================
   READING PLAN
   ============================================================ */
function initReadingPlan() {
  $$('.plan-option').forEach(opt=>opt.addEventListener('click',()=>{
    let days; const p=opt.dataset.plan;
    if(p==='30days')days=30;else if(p==='60days')days=60;else if(p==='ramadan')days=30;else days=+prompt('Days?')||30;
    state.readingPlan={type:p,days,startDate:new Date().toISOString(),completed:0};
    saveState(); showToast(days+'-day plan started!','success'); renderReadingPlan();
  }));
  renderReadingPlan();
}

function renderReadingPlan() {
  if(!state.readingPlan){$('#planSetup').classList.remove('hidden');$('#planProgress').classList.add('hidden');return;}
  $('#planSetup').classList.add('hidden');$('#planProgress').classList.remove('hidden');
  const p=state.readingPlan, elapsed=Math.floor((Date.now()-new Date(p.startDate).getTime())/86400000);
  const pct=Math.min(100,Math.round(state.statistics.surahsRead.length/114*100));
  $('#planProgress').innerHTML='<div style="text-align:center;padding:2rem"><h3 style="color:var(--text-heading);margin-bottom:1rem">'+p.days+'-Day Plan</h3><div style="font-size:3rem;font-weight:800;color:var(--color-accent)">'+pct+'%</div><p style="color:var(--text-secondary)">Day '+(elapsed+1)+' of '+p.days+'</p><p style="color:var(--text-muted);font-size:var(--fs-sm)">'+state.statistics.surahsRead.length+'/114 surahs</p><button class="hero-btn secondary-btn" style="margin-top:1rem" onclick="state.readingPlan=null;saveState();renderReadingPlan()"><i class="fas fa-times"></i> Cancel</button></div>';
}

/* ============================================================
   PRAYER TIMES
   ============================================================ */
function initPrayerTimes() {
  $('#getLocationBtn').addEventListener('click',fetchPrayerTimes);
  if(state.location) fetchPrayerTimesForLocation(state.location.lat,state.location.lng);
}

function fetchPrayerTimes() {
  if(!navigator.geolocation){showToast('Geolocation not supported','error');return;}
  showToast('Detecting location...','info');
  navigator.geolocation.getCurrentPosition(pos=>{
    state.location={lat:pos.coords.latitude,lng:pos.coords.longitude}; saveState();
    fetchPrayerTimesForLocation(pos.coords.latitude,pos.coords.longitude);
  },()=>showToast('Location denied','error'));
}

async function fetchPrayerTimesForLocation(lat,lng) {
  const d=new Date(), data=await fetchAPI(PRAYER_API+'/timings/'+d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear()+'?latitude='+lat+'&longitude='+lng+'&method=2');
  if(!data||data.code!==200){showToast('Failed to fetch prayer times','error');return;}
  const t=data.data.timings;
  $('#fajrTime').textContent=t.Fajr; $('#sunriseTime').textContent=t.Sunrise;
  $('#dhuhrTime').textContent=t.Dhuhr; $('#asrTime').textContent=t.Asr;
  $('#maghribTime').textContent=t.Maghrib; $('#ishaTime').textContent=t.Isha;
  $('#locationName').textContent=data.data.meta.timezone||'Detected';
  updatePrayerCountdown(t); setInterval(()=>updatePrayerCountdown(t),1000);
}

function updatePrayerCountdown(t) {
  const now=new Date(), prayers=['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];
  let next=null, nextTime=null;
  for(const p of prayers){const[h,m]=t[p].split(':').map(Number);const d=new Date(now);d.setHours(h,m,0,0);if(d>now){next=p;nextTime=d;break;}}
  if(!next){const[h,m]=t.Fajr.split(':').map(Number);next='Fajr';nextTime=new Date(now);nextTime.setDate(nextTime.getDate()+1);nextTime.setHours(h,m,0,0);}
  const diff=Math.max(0,Math.floor((nextTime-now)/1000));
  $('#nextPrayerName').textContent=next;
  $('#nextPrayerCountdown').textContent=Math.floor(diff/3600)+':'+Math.floor(diff%3600/60).toString().padStart(2,'0')+':'+String(diff%60).padStart(2,'0');
}

/* ============================================================
   QIBLA
   ============================================================ */
function initQibla() {
  $('#getQiblaLocationBtn').addEventListener('click',()=>{
    if(!navigator.geolocation){showToast('Not supported','error');return;}
    navigator.geolocation.getCurrentPosition(pos=>{
      const a=calculateQibla(pos.coords.latitude,pos.coords.longitude);
      $('#qiblaAngle').textContent=Math.round(a)+'\u00B0';
      $('#compassNeedle').style.transform='translate(-50%,-50%) rotate('+a+'deg)';
      state.location={lat:pos.coords.latitude,lng:pos.coords.longitude}; saveState();
      showToast('Qibla found!','success');
    },()=>showToast('Location denied','error'));
  });
  if(state.location){const a=calculateQibla(state.location.lat,state.location.lng);$('#qiblaAngle').textContent=Math.round(a)+'\u00B0';$('#compassNeedle').style.transform='translate(-50%,-50%) rotate('+a+'deg)';}
}

function calculateQibla(lat,lng) {
  const r=Math.PI/180, lat1=lat*r, lng1=lng*r, lat2=KAABA_LAT*r, lng2=KAABA_LNG*r, dLng=lng2-lng1;
  return (Math.atan2(Math.sin(dLng)*Math.cos(lat2), Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLng))*180/Math.PI+360)%360;
}

/* ============================================================
   TASBIH
   ============================================================ */
function initTasbih() {
  const today=new Date().toISOString().split('T')[0];
  if(localStorage.getItem('tasbihDate')!==today){state.tasbih.totalToday=0;localStorage.setItem('tasbihDate',today);}

  $('#tasbihBtn').addEventListener('click',()=>{
    state.tasbih.count++; state.tasbih.totalToday++;
    $('#tasbihCount').textContent=state.tasbih.count;
    $('#tasbihTotalToday').textContent=state.tasbih.totalToday;
    $('#tasbihBtn').classList.add('pulse'); setTimeout(()=>$('#tasbihBtn').classList.remove('pulse'),300);
    if(state.tasbih.sound){try{const c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=800;g.gain.value=0.1;o.start();o.stop(c.currentTime+0.05);}catch(e){}}
    if(state.tasbih.vibrate&&navigator.vibrate) navigator.vibrate(30);
    if(state.tasbih.count>=state.tasbih.target) showToast('Target reached! MashaAllah!','success');
    saveState();
    checkAchievement('dhikr');
  });
  $('#tasbihResetBtn').addEventListener('click',()=>{state.tasbih.count=0;$('#tasbihCount').textContent='0';showToast('Reset','info');});
  $('#tasbihSoundToggle').addEventListener('click',()=>{state.tasbih.sound=!state.tasbih.sound;$('#tasbihSoundToggle').classList.toggle('active',state.tasbih.sound);saveState();});
  $('#tasbihVibrateToggle').addEventListener('click',()=>{state.tasbih.vibrate=!state.tasbih.vibrate;$('#tasbihVibrateToggle').classList.toggle('active',state.tasbih.vibrate);saveState();});
  $$('.tasbih-preset').forEach(p=>p.addEventListener('click',()=>{
    $$('.tasbih-preset').forEach(x=>x.classList.remove('active'));p.classList.add('active');
    state.tasbih.text=p.dataset.text;state.tasbih.target=+p.dataset.target;state.tasbih.count=0;
    $('#tasbihText').textContent=state.tasbih.text;$('#tasbihTarget').textContent=state.tasbih.target;$('#tasbihCount').textContent='0';
  }));
  $('#tasbihCount').textContent=state.tasbih.count;$('#tasbihTotalToday').textContent=state.tasbih.totalToday;
  if(state.tasbih.sound)$('#tasbihSoundToggle').classList.add('active');
  if(state.tasbih.vibrate)$('#tasbihVibrateToggle').classList.add('active');
}

/* ============================================================
   DUAS
   ============================================================ */
function initDuas() {
  if(typeof DUA_DATA==='undefined') return;
  renderDuas('all');
  $$('.dua-cat-btn').forEach(b=>b.addEventListener('click',()=>{$$('.dua-cat-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderDuas(b.dataset.cat);}));
}

function renderDuas(cat) {
  let duas=DUA_DATA; if(cat!=='all') duas=duas.filter(d=>d.category===cat);
  $('#duaList').innerHTML=duas.map(d=>'<div class="dua-card"><div class="dua-card-title">'+d.title+'</div><div class="dua-card-arabic">'+d.arabicText+'</div>'+(d.transliteration?'<div class="dua-card-transliteration">'+d.transliteration+'</div>':'')+'<div class="dua-card-english">'+d.englishTranslation+'</div><div class="dua-card-bangla">'+d.banglaTranslation+'</div><div class="dua-card-ref">'+d.reference+'</div></div>').join('');
}

/* ============================================================
   CALENDAR
   ============================================================ */
function initCalendar() {
  let cm=new Date().getMonth(), cy=new Date().getFullYear();
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const hijriMonths=['Muharram','Safar','Rabi al-Awwal','Rabi al-Thani','Jumada al-Ula','Jumada al-Thani','Rajab','Sha\'ban','Ramadan','Shawwal','Dhul Qi\'dah','Dhul Hijjah'];

  function render() {
    const first=new Date(cy,cm,1).getDay(), dim=new Date(cy,cm+1,0).getDate();
    $('#calGregorianMonth').textContent=months[cm]+' '+cy;
    const jd=Math.floor((new Date(cy,cm,15).getTime()/86400000)+2440587.5);
    const l=jd-1948440+10632, n=Math.floor((l-1)/10631), rem=l-10631*n+354;
    const j=Math.floor((10985-rem)/5316)*Math.floor(50*rem/17719)+Math.floor(rem/5670)*Math.floor(43*rem/15238);
    const remL=rem-Math.floor((30-j)/15)*Math.floor(17719*j/50)-Math.floor(j/16)*Math.floor(15238*j/43)+29;
    const hm=Math.floor(24*remL/709), hy=30*n+j-30;
    $('#calHijriMonth').textContent=hijriMonths[(hm-1)%12]+' '+hy+' AH';
    const g=$('#calendarGrid');
    const headers=g.querySelectorAll('.cal-day-header');
    g.innerHTML=''; headers.forEach(h=>g.appendChild(h));
    for(let i=0;i<first;i++){const e=document.createElement('div');e.className='cal-day other-month';g.appendChild(e);}
    const today=new Date();
    for(let d=1;d<=dim;d++){const c=document.createElement('div');c.className='cal-day';c.textContent=d;if(d===today.getDate()&&cm===today.getMonth()&&cy===today.getFullYear())c.classList.add('today');g.appendChild(c);}
    if(typeof ISLAMIC_EVENTS!=='undefined'){$('#eventsList').innerHTML=ISLAMIC_EVENTS.slice(0,5).map(e=>'<div class="event-item"><div class="event-dot"></div><div><div class="event-name">'+e.name+'</div><div class="event-date">'+(e.description||'')+'</div></div></div>').join('');}
  }
  $('#calPrevMonth').addEventListener('click',()=>{cm--;if(cm<0){cm=11;cy--;}render();});
  $('#calNextMonth').addEventListener('click',()=>{cm++;if(cm>11){cm=0;cy++;}render();});
  render();
}

/* ============================================================
   STATISTICS (original)
   ============================================================ */
function initStatistics() { updateStatisticsDisplay(); }

function updateStatisticsDisplay() {
  const s=state.statistics;
  $('#statTotalSurahs').textContent=s.surahsRead.length;
  $('#statTotalAyahs').textContent=s.ayahsRead;
  $('#statTotalTime').textContent=formatHours(s.totalTimeSeconds);
  $('#statStreak').textContent=s.streak;
  const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], wd={};
  days.forEach(d=>wd[d]=0);
  for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);wd[days[d.getDay()]]=s.dailyActivity[d.toISOString().split('T')[0]]||0;}
  const mx=Math.max(1,...Object.values(wd));
  $$('.chart-bar').forEach(b=>{b.querySelector('.bar-fill').style.height=Math.max(4,(wd[b.dataset.day]||0)/mx*100)+'%';});
  const hm=$('#readingHeatmap'); hm.innerHTML='';
  for(let i=29;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const k=d.toISOString().split('T')[0],v=s.dailyActivity[k]||0;const c=document.createElement('div');c.className='heatmap-cell';if(v>0)c.classList.add('level-'+Math.min(4,v));c.title=k+': '+v;hm.appendChild(c);}
}

function updateStreak() {
  let streak=0; const d=new Date();
  while(state.statistics.dailyActivity[d.toISOString().split('T')[0]]){streak++;d.setDate(d.getDate()-1);}
  state.statistics.streak=streak;
}

/* ============================================================
   SETTINGS
   ============================================================ */
function initSettings() {
  $$('.theme-btn').forEach(b=>b.addEventListener('click',()=>applyTheme(b.dataset.theme)));
  $$('.color-btn').forEach(b=>b.addEventListener('click',()=>applyAccentColor(b.dataset.color)));
  const toggles={bgPatternToggle:'bgPattern',animationsToggle:'animations',wordByWordToggle:'wordByWord',transliterationToggle:'transliteration',ayahNumbersToggle:'showAyahNumbers',autoScrollToggle:'autoScroll'};
  Object.entries(toggles).forEach(([id,key])=>$('#'+id).addEventListener('change',e=>{state.settings[key]=e.target.checked;saveState();}));
  $('#reciterSelect').addEventListener('change',e=>{state.settings.reciter=e.target.value;saveState();});
  $('#playbackSpeed').addEventListener('change',e=>{state.settings.playbackSpeed=+e.target.value;if(state.audio.currentAudio)state.audio.currentAudio.playbackRate=+e.target.value;saveState();});
  $('#repeatMode').addEventListener('change',e=>{state.settings.repeatMode=e.target.value;saveState();});
  $('#exportDataBtn').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify({bookmarks:state.bookmarks,notes:state.notes,statistics:state.statistics,settings:state.settings,collections:state.collections,achievements:state.achievements},null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='quran-app-data.json';a.click();showToast('Exported!','success');
  });
  $('#importDataBtn').addEventListener('click',()=>$('#importFileInput').click());
  $('#importFileInput').addEventListener('change',e=>{
    const f=e.target.files[0];if(!f)return;const r=new FileReader();
    r.onload=ev=>{try{const d=JSON.parse(ev.target.result);if(d.bookmarks)state.bookmarks=d.bookmarks;if(d.notes)state.notes=d.notes;if(d.statistics)Object.assign(state.statistics,d.statistics);if(d.settings)Object.assign(state.settings,d.settings);if(d.collections)state.collections=d.collections;if(d.achievements)state.achievements=d.achievements;saveState();applySettings();showToast('Imported!','success');}catch{showToast('Invalid file','error');}};
    r.readAsText(f);
  });
  $('#clearCacheBtn').addEventListener('click',()=>{state.cache={};showToast('Cache cleared','success');});
  $('#resetAllBtn').addEventListener('click',()=>{if(confirm('Reset all settings?')){localStorage.removeItem('quranApp');location.reload();}});
}

/* ============================================================
   DAILY VERSE & PROGRESS
   ============================================================ */
function loadDailyVerse() {
  if(typeof DAILY_VERSES==='undefined'||!DAILY_VERSES.length){$('#dailyVerseArabic').textContent='\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650';$('#dailyVerseEnglish').textContent='In the name of Allah, the Most Gracious, the Most Merciful.';$('#dailyVerseBangla').textContent='\u09AA\u09B0\u09AE \u0995\u09B0\u09C1\u09A3\u09BE\u09AE\u09AF\u09BC \u0985\u09A4\u09BF \u09A6\u09AF\u09BC\u09BE\u09B2\u09C1 \u0986\u09B2\u09CD\u09B2\u09BE\u09B9\u09B0 \u09A8\u09BE\u09AE\u09C7\u0964';$('#dailyVerseRef').textContent='Al-Fatiha 1:1';return;}
  const v=DAILY_VERSES[Math.floor(Math.random()*DAILY_VERSES.length)];
  $('#dailyVerseArabic').textContent=v.arabicText;$('#dailyVerseEnglish').textContent=v.englishText;$('#dailyVerseBangla').textContent=v.banglaText;
  $('#dailyVerseRef').textContent=SURAH_DATA[v.surah-1].englishName+' '+v.surah+':'+v.ayah;
  $('#refreshDailyVerse').onclick=loadDailyVerse;
}

function updateProgress() {
  const read=state.statistics.surahsRead.length, pct=Math.round(read/114*100);
  const circ=2*Math.PI*54, off=circ-(pct/100)*circ;
  const c=$('#progressCircle');if(c){c.style.strokeDasharray=circ;c.style.strokeDashoffset=off;}
  $('#progressPercent').textContent=pct+'%';$('#surahsRead').textContent=read;
  $('#ayahsRead').textContent=state.statistics.ayahsRead;$('#totalTime').textContent=formatHours(state.statistics.totalTimeSeconds);
  $('#currentStreak').textContent=state.statistics.streak;
}

function addToHistory(num) {
  const s=SURAH_DATA[num-1];
  state.readingHistory=state.readingHistory.filter(h=>h.surah!==num);
  state.readingHistory.unshift({surah:num,name:s.englishName,arabicName:s.name,date:new Date().toISOString()});
  if(state.readingHistory.length>20) state.readingHistory.pop();
  saveState(); updateLastRead();
}

function updateLastRead() {
  const c=$('#lastReadList');
  if(!state.readingHistory.length){c.innerHTML='<div class="empty-state"><i class="fas fa-book-open"></i><p>Start reading to see history</p></div>';return;}
  c.innerHTML=state.readingHistory.slice(0,5).map(h=>'<div class="last-read-item" onclick="state.currentSurah='+h.surah+';navigateTo(\'quran\');loadSurah('+h.surah+')"><div class="surah-list-num">'+h.surah+'</div><div style="flex:1"><div style="font-weight:600;font-size:var(--fs-sm)">'+h.name+'</div><div style="font-size:var(--fs-xs);color:var(--text-muted)">'+new Date(h.date).toLocaleDateString()+'</div></div><div class="surah-list-ar" style="font-size:0.9rem">'+h.arabicName+'</div></div>').join('');
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
    switch(e.key){
      case '?':$('#shortcutsModal').classList.remove('hidden');break;
      case 'Escape':$$('.modal-overlay:not(.hidden)').forEach(m=>m.classList.add('hidden'));$$('.dropdown-panel:not(.hidden)').forEach(p=>p.classList.add('hidden'));closeSidebar();hideContextMenu();break;
      case 'ArrowLeft':if(state.currentPage==='quran')loadSurah(Math.max(1,state.currentSurah-1));break;
      case 'ArrowRight':if(state.currentPage==='quran')loadSurah(Math.min(114,state.currentSurah+1));break;
      case ' ':if(state.currentPage==='quran'){e.preventDefault();toggleAudioPlayback();}break;
      case 'b':case 'B':if(state.currentPage==='quran')toggleSurahBookmark(state.currentSurah);break;
      case 'n':case 'N':if(state.currentPage==='quran')openNoteModal(state.currentSurah,1);break;
      case 'f':case 'F':toggleFullscreen();break;
      case 't':case 'T':$('#themeToggleBtn').click();break;
      case 'm':case 'M':toggleSidebar();break;
      case 's':case 'S':navigateTo('settings');break;
      case '[':if(state.audio.playing&&state.audio.ayah>1)playAudio(state.audio.surah,state.audio.ayah-1);break;
      case ']':if(state.audio.playing){const max=SURAH_DATA[state.audio.surah-1].numberOfAyahs;if(state.audio.ayah<max)playAudio(state.audio.surah,state.audio.ayah+1);}break;
    }
    if(e.ctrlKey&&e.key==='k'){e.preventDefault();navigateTo('search');setTimeout(()=>$('#mainSearchInput').focus(),100);}
  });
  $('#shortcutsModalClose').addEventListener('click',()=>$('#shortcutsModal').classList.add('hidden'));
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  window.addEventListener('scroll',()=>$('#backToTopBtn').classList.toggle('visible',window.scrollY>300));
  $('#backToTopBtn').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

$$('.quick-btn').forEach(b=>b.addEventListener('click',()=>{state.currentSurah=+b.dataset.surah;navigateTo('quran');loadSurah(+b.dataset.surah);}));

/* ============================================================
   1. ASMA UL HUSNA - 99 Names of Allah
   ============================================================ */

const ASMA_CATEGORIES = {
  all: 'All Names',
  mercy: 'Mercy & Compassion',
  power: 'Power & Majesty',
  knowledge: 'Knowledge & Wisdom',
  beauty: 'Beauty & Perfection',
  creation: 'Creation & Sustenance',
  justice: 'Justice & Judgment',
  protection: 'Protection & Care',
  uniqueness: 'Uniqueness & Oneness'
};

const ASMA_CATEGORY_MAP = {
  1: 'mercy', 2: 'mercy', 3: 'power', 4: 'beauty', 5: 'mercy',
  6: 'protection', 7: 'protection', 8: 'power', 9: 'power', 10: 'power',
  11: 'creation', 12: 'creation', 13: 'creation', 14: 'mercy', 15: 'power',
  16: 'mercy', 17: 'creation', 18: 'knowledge', 19: 'knowledge', 20: 'power',
  21: 'mercy', 22: 'justice', 23: 'power', 24: 'power', 25: 'justice',
  26: 'knowledge', 27: 'knowledge', 28: 'justice', 29: 'justice', 30: 'knowledge',
  31: 'knowledge', 32: 'mercy', 33: 'power', 34: 'mercy', 35: 'mercy',
  36: 'power', 37: 'power', 38: 'protection', 39: 'creation', 40: 'justice',
  41: 'beauty', 42: 'mercy', 43: 'protection', 44: 'mercy', 45: 'knowledge',
  46: 'knowledge', 47: 'mercy', 48: 'beauty', 49: 'power', 50: 'knowledge',
  51: 'uniqueness', 52: 'protection', 53: 'power', 54: 'power', 55: 'protection',
  56: 'beauty', 57: 'knowledge', 58: 'creation', 59: 'creation', 60: 'creation',
  61: 'power', 62: 'uniqueness', 63: 'uniqueness', 64: 'knowledge', 65: 'beauty',
  66: 'uniqueness', 67: 'uniqueness', 68: 'uniqueness', 69: 'power', 70: 'power',
  71: 'power', 72: 'knowledge', 73: 'uniqueness', 74: 'uniqueness', 75: 'uniqueness',
  76: 'uniqueness', 77: 'power', 78: 'power', 79: 'mercy', 80: 'mercy',
  81: 'justice', 82: 'mercy', 83: 'mercy', 84: 'power', 85: 'beauty',
  86: 'justice', 87: 'power', 88: 'uniqueness', 89: 'mercy', 90: 'protection',
  91: 'justice', 92: 'mercy', 93: 'beauty', 94: 'knowledge', 95: 'creation',
  96: 'uniqueness', 97: 'uniqueness', 98: 'knowledge', 99: 'beauty'
};

const ASMA_BENEFITS = {
  1: 'Reciting this name brings mercy and compassion into one\'s life. It softens the heart and increases empathy towards others.',
  2: 'Frequent recitation leads to Allah\'s special mercy and protection. It increases blessings in sustenance and health.',
  3: 'Reciting this name helps one recognize Allah\'s sovereignty and submit fully to His will. It brings contentment and peace.',
  4: 'This name purifies the heart and soul from spiritual ailments. Regular recitation cleanses one\'s intentions and actions.',
  5: 'Brings inner peace and tranquility. Reciting it during times of distress calms the heart and brings serenity.',
  6: 'Increases faith and security from fear. One who recites it regularly will be protected from worldly anxieties.',
  7: 'Provides divine protection and watchfulness. Reciting it helps in safeguarding one\'s faith and family.',
  8: 'Grants honor and respect among people. Reciting it brings dignity and removes humiliation.',
  9: 'Repairs what is broken in one\'s life. It helps overcome oppression and restores rights.',
  10: 'Removes arrogance from the heart and replaces it with true greatness through submission to Allah.',
  11: 'Helps in beginning new beneficial projects. Reciting it brings creativity and divine assistance in new endeavors.',
  12: 'Frees one from false accusations and brings clarity. Helps in creating new positive habits and leaving bad ones.',
  13: 'Improves one\'s character and outward appearance. Brings beauty in one\'s actions and dealings with others.',
  14: 'Reciting this name abundantly leads to forgiveness of sins. It opens the doors of repentance and divine pardon.',
  15: 'Gives strength to overcome challenges and enemies. It helps in gaining victory over one\'s nafs (ego).',
  16: 'Increases generosity in one\'s sustenance and blessings. Opens doors of provision from unexpected sources.',
  17: 'Ensures sustenance and provision. Reciting it regularly removes worry about livelihood.',
  18: 'Opens doors that seem closed. Reciting it helps in solving difficult problems and finding solutions.',
  19: 'Increases knowledge and understanding. Reciting it before studying enhances learning and memory.',
  20: 'Helps in controlling desires and spending wisely. Brings discipline in financial matters.',
  21: 'Opens the heart to receive blessings and good things. Removes tightness in the chest.',
  22: 'Brings humility and submission to Allah\'s will. Helps in accepting divine decree with patience.',
  23: 'Elevates one\'s status in this world and the next. Brings honor and raises one\'s spiritual rank.',
  24: 'Grants honor and respect. Reciting it helps in regaining lost dignity and self-respect.',
  25: 'Protects from those who wish to humiliate. Reminds one that true honor is only from Allah.',
  26: 'Ensures prayers are heard and answered. Reciting it helps in making effective dua.',
  27: 'Increases insight and spiritual vision. Helps in seeing the truth in matters and making wise decisions.',
  28: 'Brings justice in disputes and conflicts. Reciting it helps in fair decision-making.',
  29: 'Protects from injustice and oppression. Brings fairness in all dealings and transactions.',
  30: 'Reveals hidden blessings and subtle mercies. Reciting it helps in appreciating Allah\'s delicate care.',
  31: 'Increases awareness of Allah\'s presence. Helps in being mindful of one\'s actions and intentions.',
  32: 'Develops patience and forbearance. Reciting it helps in controlling anger and responding with kindness.',
  33: 'Brings awareness of Allah\'s magnificence. Increases awe and reverence in worship.',
  34: 'Opens wide the door of forgiveness. Reciting it brings hope in Allah\'s mercy even after grave sins.',
  35: 'Increases gratitude and appreciation. Reciting it ensures blessings continue and multiply.',
  36: 'Elevates one\'s spiritual aspirations. Helps in setting high goals in worship and character.',
  37: 'Brings awareness of Allah\'s greatness. Removes attachment to worldly grandeur.',
  38: 'Provides divine protection and preservation. Reciting it safeguards one\'s family, health, and faith.',
  39: 'Ensures provision and nourishment. Reciting it removes worry about food and sustenance.',
  40: 'Helps in accounting for one\'s deeds. Reciting it assists in self-evaluation and improvement.',
  41: 'Increases reverence and majesty in worship. Brings a sense of divine presence.',
  42: 'Develops generosity and noble character. Reciting it makes one generous in giving and forgiving.',
  43: 'Increases watchfulness over one\'s actions. Helps in being conscious of Allah\'s observation.',
  44: 'Ensures prayers and requests are responded to. Reciting it helps in receiving divine answers.',
  45: 'Expands one\'s heart and understanding. Removes narrowness in thinking and living.',
  46: 'Increases wisdom in decisions and actions. Reciting it helps in seeing the deeper meaning of events.',
  47: 'Fills the heart with divine love and affection. Reciting it increases love between people.',
  48: 'Brings a sense of divine glory and magnificence. Increases honor and nobility of character.',
  49: 'Strengthens faith in the resurrection and afterlife. Helps in preparing for the eternal life.',
  50: 'Increases truthfulness and honesty. Reciting it helps in being a reliable witness and truthful person.',
  51: 'Deepens one\'s connection with absolute truth. Removes doubts and confusion from the heart.',
  52: 'Increases trust in Allah and reliance on Him. Reciting it helps in delegating affairs to Allah.',
  53: 'Grants physical and spiritual strength. Reciting it helps in overcoming weakness and fatigue.',
  54: 'Brings firmness and stability in faith. Helps in remaining steadfast during trials and tribulations.',
  55: 'Strengthens the bond with Allah as a protective friend. Brings divine support and companionship.',
  56: 'Increases praiseworthy qualities. Reciting it helps in becoming deserving of praise through good deeds.',
  57: 'Helps in accounting for blessings and responsibilities. Increases awareness of what one has been given.',
  58: 'Brings new beginnings and fresh starts. Reciting it helps in initiating positive changes in life.',
  59: 'Renews faith and hope. Reciting it helps in recovery and restoration after loss or setback.',
  60: 'Brings vitality and energy to life. Reciting it revives a dead heart and renews spiritual energy.',
  61: 'Reminds of the temporary nature of this world. Helps in preparing for death and the afterlife.',
  62: 'Increases spiritual vitality and consciousness. Reciting it brings life to one\'s worship and connection with Allah.',
  63: 'Brings self-sufficiency through reliance on Allah. Reciting it helps in becoming independent of creation.',
  64: 'Helps in finding what is lost or needed. Reciting it assists in searching for truth and guidance.',
  65: 'Increases nobility and generosity of spirit. Brings honor in character and dealings.',
  66: 'Deepens understanding of tawheed (monotheism). Reciting it purifies the heart from all forms of shirk.',
  67: 'Strengthens belief in Allah\'s absolute oneness. Removes all attachments to false deities.',
  68: 'Brings self-sufficiency and independence from creation. Reciting it removes neediness from the heart.',
  69: 'Increases ability to accomplish tasks. Reciting it brings divine power to overcome challenges.',
  70: 'Maximizes one\'s potential and abilities. Reciting it helps in achieving full capacity in good deeds.',
  71: 'Helps in moving forward and making progress. Reciting it removes obstacles from one\'s path.',
  72: 'Develops patience with Allah\'s timing. Helps in understanding that delays may contain wisdom.',
  73: 'Reminds that Allah has no beginning. Strengthens faith in Allah\'s eternal existence.',
  74: 'Reminds that Allah is everlasting. Strengthens hope in the eternal meeting with Allah.',
  75: 'Increases awareness of Allah\'s manifest signs. Helps in recognizing divine presence in the visible world.',
  76: 'Deepens understanding of Allah\'s hidden wisdom. Helps in trusting what cannot be seen or understood.',
  77: 'Increases submission to divine governance. Helps in accepting Allah\'s management of all affairs.',
  78: 'Elevates aspirations and ambitions. Reciting it helps in seeking the highest levels of paradise.',
  79: 'Increases goodness and righteousness. Reciting it inspires acts of kindness and piety.',
  80: 'Opens the door of repentance. Reciting it helps in returning to Allah after every sin.',
  81: 'Protects from oppressors and wrong-doers. Reciting it brings divine justice against injustice.',
  82: 'Erases sins and past mistakes. Reciting it brings divine pardon and a fresh start.',
  83: 'Fills the heart with compassion and kindness. Reciting it increases gentleness in dealings with others.',
  84: 'Reminds of Allah\'s absolute sovereignty. Brings acceptance of divine decree in all matters.',
  85: 'Fills the heart with awe and gratitude. Reciting it increases appreciation for divine majesty and generosity.',
  86: 'Brings fairness and equity. Reciting it helps in treating all people justly and equally.',
  87: 'Unites hearts and communities. Reciting it helps in resolving conflicts and bringing people together.',
  88: 'Brings contentment and freedom from need. Reciting it helps in feeling rich even without material wealth.',
  89: 'Opens doors of wealth and provision. Reciting it helps in achieving financial stability and sufficiency.',
  90: 'Protects from harm and danger. Reciting it shields from physical and spiritual threats.',
  91: 'Reminds that trials come from Allah as tests. Helps in understanding the wisdom behind difficulties.',
  92: 'Brings benefit and advantage in all matters. Reciting it attracts goodness and beneficial outcomes.',
  93: 'Illuminates the heart with divine light. Reciting it removes darkness of ignorance and sin.',
  94: 'Provides guidance on the straight path. Reciting it helps in making right decisions and finding truth.',
  95: 'Inspires creativity and innovation. Reciting it helps in creating new and beautiful things.',
  96: 'Strengthens faith in eternal life. Reciting it shifts focus from temporary world to eternal rewards.',
  97: 'Reminds that all belongs to Allah. Helps in letting go of attachments and giving generously.',
  98: 'Provides guidance to the right path. Reciting it helps in finding direction when lost or confused.',
  99: 'Develops patience and perseverance. Reciting it helps in enduring hardships with grace and dignity.'
};

function initAsmaUlHusna() {
  if (typeof ASMA_UL_HUSNA === 'undefined') return;

  const page = $('#page-asma-ul-husna');
  if (!page) return;

  const memorized = state.asmaMemorized || [];

  const headerHTML = '<div class="asma-header">'
    + '<div class="asma-name-of-day">'
    + '<div class="name-of-day-label"><i class="fas fa-star"></i> Name of the Day</div>'
    + '<div id="nameOfDayContent"></div>'
    + '</div>'
    + '<div class="asma-stats-bar">'
    + '<div class="asma-stat"><span class="asma-stat-num" id="asmaTotal">99</span><span class="asma-stat-label">Total Names</span></div>'
    + '<div class="asma-stat"><span class="asma-stat-num" id="asmaMemorizedCount">' + memorized.length + '</span><span class="asma-stat-label">Memorized</span></div>'
    + '<div class="asma-stat"><span class="asma-stat-num" id="asmaProgress">' + Math.round(memorized.length/99*100) + '%</span><span class="asma-stat-label">Progress</span></div>'
    + '</div>'
    + '<div class="asma-controls">'
    + '<div class="asma-search-wrap"><input type="text" id="asmaSearchInput" class="asma-search" placeholder="Search names... (Arabic, English, Bangla)"><i class="fas fa-search asma-search-icon"></i></div>'
    + '<div class="asma-filters" id="asmaFilters"></div>'
    + '</div>'
    + '</div>';

  const gridHTML = '<div class="asma-grid" id="asmaGrid"></div>';
  const detailHTML = '<div class="modal-overlay hidden" id="asmaDetailModal"><div class="modal-content asma-detail-modal">'
    + '<button class="modal-close-btn" id="asmaDetailClose"><i class="fas fa-times"></i></button>'
    + '<div id="asmaDetailContent"></div>'
    + '</div></div>';

  page.innerHTML = headerHTML + gridHTML + detailHTML;

  const filtersContainer = $('#asmaFilters');
  Object.entries(ASMA_CATEGORIES).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = 'asma-filter-btn' + (key === 'all' ? ' active' : '');
    btn.dataset.cat = key;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      $$('.asma-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.asmaCategory = key;
      renderNames();
    });
    filtersContainer.appendChild(btn);
  });

  $('#asmaSearchInput').addEventListener('input', debounce(e => {
    state.asmaSearch = e.target.value.toLowerCase();
    renderNames();
  }));

  $('#asmaDetailClose').addEventListener('click', () => {
    $('#asmaDetailModal').classList.add('hidden');
  });

  renderNameOfDay();
  renderNames();
}

function renderNameOfDay() {
  if (typeof ASMA_UL_HUSNA === 'undefined') return;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const nameIndex = dayOfYear % 99;
  const name = ASMA_UL_HUSNA[nameIndex];
  const container = $('#nameOfDayContent');
  if (!container) return;

  container.innerHTML = '<div class="name-of-day-arabic">' + name.arabic + '</div>'
    + '<div class="name-of-day-translit">' + name.transliteration + '</div>'
    + '<div class="name-of-day-meaning">' + name.english + '</div>'
    + '<div class="name-of-day-bangla">' + name.bangla + '</div>';
}

function renderNames() {
  if (typeof ASMA_UL_HUSNA === 'undefined') return;
  const grid = $('#asmaGrid');
  if (!grid) return;

  let names = [...ASMA_UL_HUSNA];
  const q = state.asmaSearch;
  const cat = state.asmaCategory;

  if (q) {
    names = names.filter(n =>
      n.arabic.includes(q) ||
      n.transliteration.toLowerCase().includes(q) ||
      n.english.toLowerCase().includes(q) ||
      n.bangla.includes(q)
    );
  }

  if (cat !== 'all') {
    names = names.filter(n => ASMA_CATEGORY_MAP[n.number] === cat);
  }

  if (!names.length) {
    grid.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><h3>No names found</h3><p>Try a different search or category.</p></div>';
    return;
  }

  grid.innerHTML = names.map(n => {
    const isMemorized = state.asmaMemorized.includes(n.number);
    const category = ASMA_CATEGORY_MAP[n.number] || 'all';
    return '<div class="asma-card' + (isMemorized ? ' memorized' : '') + '" data-num="' + n.number + '">'
      + '<div class="asma-card-front">'
      + '<div class="asma-card-number">' + n.number + '</div>'
      + '<div class="asma-card-arabic">' + n.arabic + '</div>'
      + '<div class="asma-card-translit">' + n.transliteration + '</div>'
      + '<div class="asma-card-english">' + n.english + '</div>'
      + '<div class="asma-card-bangla">' + n.bangla + '</div>'
      + '<div class="asma-card-category"><span class="cat-badge cat-' + category + '">' + (ASMA_CATEGORIES[category] || '') + '</span></div>'
      + '<div class="asma-card-actions">'
      + '<button class="asma-action-btn asma-memorize-btn' + (isMemorized ? ' active' : '') + '" data-num="' + n.number + '" title="' + (isMemorized ? 'Memorized' : 'Mark as memorized') + '"><i class="fas fa-' + (isMemorized ? 'check-circle' : 'circle') + '"></i></button>'
      + '<button class="asma-action-btn asma-flip-btn" data-num="' + n.number + '" title="Show benefits"><i class="fas fa-sync-alt"></i></button>'
      + '<button class="asma-action-btn asma-detail-btn" data-num="' + n.number + '" title="Details"><i class="fas fa-info-circle"></i></button>'
      + '<button class="asma-action-btn asma-audio-btn" data-num="' + n.number + '" title="Listen"><i class="fas fa-volume-up"></i></button>'
      + '</div>'
      + '</div>'
      + '<div class="asma-card-back">'
      + '<div class="asma-card-number">' + n.number + '</div>'
      + '<div class="asma-back-title">' + n.transliteration + '</div>'
      + '<div class="asma-back-benefit">' + (ASMA_BENEFITS[n.number] || 'Reciting this blessed name brings one closer to Allah and increases spiritual awareness.') + '</div>'
      + '<button class="asma-action-btn asma-flip-back-btn" data-num="' + n.number + '"><i class="fas fa-undo"></i> Flip Back</button>'
      + '</div>'
      + '</div>';
  }).join('');

  grid.querySelectorAll('.asma-memorize-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const num = +btn.dataset.num;
      toggleAsmaMemorized(num);
    });
  });

  grid.querySelectorAll('.asma-flip-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      flipNameCard(+btn.dataset.num, true);
    });
  });

  grid.querySelectorAll('.asma-flip-back-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      flipNameCard(+btn.dataset.num, false);
    });
  });

  grid.querySelectorAll('.asma-detail-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      showNameDetail(+btn.dataset.num);
    });
  });

  grid.querySelectorAll('.asma-audio-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      showToast('Audio pronunciation coming soon', 'info');
    });
  });
}

function flipNameCard(num, toBack) {
  const card = document.querySelector('.asma-card[data-num="' + num + '"]');
  if (!card) return;
  if (toBack) {
    card.classList.add('flipped');
  } else {
    card.classList.remove('flipped');
  }
}

function toggleAsmaMemorized(num) {
  const idx = state.asmaMemorized.indexOf(num);
  if (idx >= 0) {
    state.asmaMemorized.splice(idx, 1);
    showToast('Removed from memorized', 'info');
  } else {
    state.asmaMemorized.push(num);
    showToast('Marked as memorized!', 'success');
    checkAchievement('asma_memorizer');
  }
  saveState();
  renderNames();
  updateAsmaStats();
}

function updateAsmaStats() {
  const el1 = $('#asmaMemorizedCount');
  const el2 = $('#asmaProgress');
  if (el1) el1.textContent = state.asmaMemorized.length;
  if (el2) el2.textContent = Math.round(state.asmaMemorized.length / 99 * 100) + '%';
}

function showNameDetail(num) {
  if (typeof ASMA_UL_HUSNA === 'undefined') return;
  const name = ASMA_UL_HUSNA.find(n => n.number === num);
  if (!name) return;

  const category = ASMA_CATEGORY_MAP[num] || 'all';
  const isMemorized = state.asmaMemorized.includes(num);
  const benefit = ASMA_BENEFITS[num] || 'Reciting this blessed name brings one closer to Allah.';

  const content = $('#asmaDetailContent');
  content.innerHTML = '<div class="asma-detail-header">'
    + '<div class="asma-detail-num">' + num + '</div>'
    + '<div class="asma-detail-arabic">' + name.arabic + '</div>'
    + '<div class="asma-detail-translit">' + name.transliteration + '</div>'
    + '</div>'
    + '<div class="asma-detail-body">'
    + '<div class="asma-detail-row"><span class="asma-detail-label">English:</span><span>' + name.english + '</span></div>'
    + '<div class="asma-detail-row"><span class="asma-detail-label">Bangla:</span><span>' + name.bangla + '</span></div>'
    + '<div class="asma-detail-row"><span class="asma-detail-label">Category:</span><span class="cat-badge cat-' + category + '">' + (ASMA_CATEGORIES[category] || 'General') + '</span></div>'
    + '<div class="asma-detail-row"><span class="asma-detail-label">Status:</span><span>' + (isMemorized ? '<i class="fas fa-check-circle" style="color:var(--color-accent)"></i> Memorized' : '<i class="far fa-circle"></i> Not memorized') + '</span></div>'
    + '<div class="asma-detail-section"><h4><i class="fas fa-heart"></i> Benefits & Virtues</h4><p>' + benefit + '</p></div>'
    + '<div class="asma-detail-section"><h4><i class="fas fa-lightbulb"></i> Reflection</h4><p>Understanding the name <strong>' + name.transliteration + '</strong> (' + name.english + ') deepens our connection with Allah. Reflect on how this attribute of Allah manifests in creation and in your daily life.</p></div>'
    + '<div class="asma-detail-actions">'
    + '<button class="hero-btn primary-btn" onclick="toggleAsmaMemorized(' + num + ');showNameDetail(' + num + ')"><i class="fas fa-' + (isMemorized ? 'times' : 'check') + '"></i> ' + (isMemorized ? 'Unmark Memorized' : 'Mark as Memorized') + '</button>'
    + '<button class="hero-btn secondary-btn" onclick="showToast(\'Audio coming soon\',\'info\')"><i class="fas fa-volume-up"></i> Listen</button>'
    + '</div>'
    + '</div>';

  $('#asmaDetailModal').classList.remove('hidden');
}

function searchNames(query) {
  state.asmaSearch = query.toLowerCase();
  renderNames();
}

function filterNames(category) {
  state.asmaCategory = category;
  renderNames();
}

/* ============================================================
   2. TAFSIR & STUDY PAGE
   ============================================================ */

const TAFSIR_TOPICS = [
  { id: 1, title: 'Tawheed (Oneness of Allah)', category: 'aqeedah', description: 'The fundamental concept of Islamic monotheism and the oneness of Allah in His lordship, worship, and names/attributes.', verses: [{surah:112,ayah:1},{surah:2,ayah:255},{surah:59,ayah:22},{surah:3,ayah:18},{surah:6,ayah:102}], icon: 'fa-mosque' },
  { id: 2, title: 'Salah (Prayer)', category: 'ibadah', description: 'The five daily prayers, their importance, and how the Quran describes this fundamental pillar of Islam.', verses: [{surah:2,ayah:43},{surah:29,ayah:45},{surah:20,ayah:14},{surah:4,ayah:103},{surah:11,ayah:114}], icon: 'fa-praying-hands' },
  { id: 3, title: 'Patience & Perseverance', category: 'akhlaq', description: 'How the Quran teaches patience (sabr) in the face of trials, and the immense rewards for those who persevere.', verses: [{surah:2,ayah:153},{surah:3,ayah:200},{surah:16,ayah:126},{surah:39,ayah:10},{surah:94,ayah:5}], icon: 'fa-mountain' },
  { id: 4, title: 'Justice & Fairness', category: 'muamalat', description: 'The Quranic emphasis on establishing justice in all affairs and treating people with equity.', verses: [{surah:4,ayah:135},{surah:5,ayah:8},{surah:16,ayah:90},{surah:49,ayah:9},{surah:57,ayah:25}], icon: 'fa-balance-scale' },
  { id: 5, title: 'Stories of the Prophets', category: 'qasas', description: 'Lessons from the stories of prophets mentioned in the Quran and what we can learn from their experiences.', verses: [{surah:12,ayah:111},{surah:11,ayah:120},{surah:21,ayah:87},{surah:28,ayah:7},{surah:37,ayah:75}], icon: 'fa-book-open' },
  { id: 6, title: 'Day of Judgment', category: 'aqeedah', description: 'The Quranic descriptions of the Day of Judgment, its signs, events, and the ultimate accountability.', verses: [{surah:99,ayah:1},{surah:82,ayah:1},{surah:81,ayah:1},{surah:56,ayah:1},{surah:101,ayah:1}], icon: 'fa-hourglass-end' },
  { id: 7, title: 'Paradise (Jannah)', category: 'aqeedah', description: 'Descriptions of Paradise in the Quran, its blessings, levels, and who will be admitted to it.', verses: [{surah:55,ayah:46},{surah:56,ayah:10},{surah:3,ayah:133},{surah:47,ayah:15},{surah:76,ayah:5}], icon: 'fa-tree' },
  { id: 8, title: 'Gratitude (Shukr)', category: 'akhlaq', description: 'The Quranic teachings on being grateful to Allah and how gratitude increases blessings.', verses: [{surah:14,ayah:7},{surah:2,ayah:152},{surah:31,ayah:12},{surah:16,ayah:114},{surah:27,ayah:40}], icon: 'fa-heart' },
  { id: 9, title: 'Family & Marriage', category: 'muamalat', description: 'Quranic guidance on family life, marriage relationships, and raising children with Islamic values.', verses: [{surah:30,ayah:21},{surah:4,ayah:19},{surah:25,ayah:74},{surah:66,ayah:6},{surah:2,ayah:228}], icon: 'fa-home' },
  { id: 10, title: 'Charity & Generosity', category: 'ibadah', description: 'The importance of giving in charity (sadaqah and zakah) and its spiritual and social benefits.', verses: [{surah:2,ayah:261},{surah:2,ayah:267},{surah:3,ayah:92},{surah:57,ayah:7},{surah:64,ayah:16}], icon: 'fa-hand-holding-heart' },
  { id: 11, title: 'Repentance (Tawbah)', category: 'ibadah', description: 'The door of repentance in Islam, how to return to Allah, and His infinite mercy towards those who repent.', verses: [{surah:39,ayah:53},{surah:3,ayah:135},{surah:4,ayah:17},{surah:25,ayah:70},{surah:66,ayah:8}], icon: 'fa-redo' },
  { id: 12, title: 'Knowledge & Learning', category: 'akhlaq', description: 'The Quranic emphasis on seeking knowledge, reflection, and the status of scholars in Islam.', verses: [{surah:96,ayah:1},{surah:20,ayah:114},{surah:39,ayah:9},{surah:58,ayah:11},{surah:35,ayah:28}], icon: 'fa-graduation-cap' },
  { id: 13, title: 'Trust in Allah (Tawakkul)', category: 'aqeedah', description: 'Relying on Allah while taking practical steps, and understanding divine decree (qadr).', verses: [{surah:3,ayah:159},{surah:65,ayah:3},{surah:8,ayah:2},{surah:14,ayah:12},{surah:33,ayah:3}], icon: 'fa-hands' },
  { id: 14, title: 'Social Ethics', category: 'muamalat', description: 'Quranic teachings on how to interact with others, avoid backbiting, and build a healthy community.', verses: [{surah:49,ayah:11},{surah:49,ayah:12},{surah:24,ayah:27},{surah:17,ayah:53},{surah:4,ayah:86}], icon: 'fa-users' },
  { id: 15, title: 'Nature & Creation', category: 'qasas', description: 'Quranic verses that point to the signs of Allah in nature and the perfection of creation.', verses: [{surah:3,ayah:190},{surah:51,ayah:20},{surah:88,ayah:17},{surah:16,ayah:68},{surah:55,ayah:5}], icon: 'fa-leaf' },
  { id: 16, title: 'Fasting (Sawm)', category: 'ibadah', description: 'The obligation of fasting in Ramadan and its spiritual, physical, and social benefits as described in the Quran.', verses: [{surah:2,ayah:183},{surah:2,ayah:184},{surah:2,ayah:185},{surah:2,ayah:187},{surah:97,ayah:1}], icon: 'fa-moon' },
  { id: 17, title: 'Supplication (Dua)', category: 'ibadah', description: 'The power of dua, etiquette of making supplication, and beautiful duas mentioned in the Quran.', verses: [{surah:2,ayah:186},{surah:40,ayah:60},{surah:25,ayah:77},{surah:7,ayah:55},{surah:3,ayah:8}], icon: 'fa-hands-helping' },
  { id: 18, title: 'Hellfire (Jahannam)', category: 'aqeedah', description: 'Quranic warnings about the punishment of the Hereafter and the descriptions of Hellfire.', verses: [{surah:104,ayah:4},{surah:67,ayah:6},{surah:22,ayah:19},{surah:74,ayah:26},{surah:2,ayah:24}], icon: 'fa-fire' },
  { id: 19, title: 'Brotherhood & Unity', category: 'muamalat', description: 'The Quranic concept of the Muslim ummah, brotherhood, and maintaining unity.', verses: [{surah:3,ayah:103},{surah:49,ayah:10},{surah:8,ayah:63},{surah:9,ayah:71},{surah:21,ayah:92}], icon: 'fa-handshake' },
  { id: 20, title: 'Remembrance of Allah (Dhikr)', category: 'ibadah', description: 'The importance of remembering Allah frequently and how dhikr brings peace to the heart.', verses: [{surah:13,ayah:28},{surah:33,ayah:41},{surah:2,ayah:152},{surah:87,ayah:15},{surah:18,ayah:24}], icon: 'fa-dharmachakra' }
];

const QURAN_FACTS = [
  'The Quran has 114 surahs, 6,236 verses, 77,430 words, and 323,015 letters.',
  'The longest surah is Al-Baqarah with 286 verses, and the shortest is Al-Kawthar with 3 verses.',
  'The word "Allah" appears 2,698 times in the Quran.',
  'The Quran was revealed over a period of approximately 23 years.',
  'Surah Al-Fatiha is recited at least 17 times daily in the five obligatory prayers.',
  'The Quran mentions 25 prophets by name.',
  'Prophet Musa (Moses) is the most frequently mentioned prophet with 136 mentions.',
  'The word "Iman" (faith) appears 45 times in the Quran.',
  'Surah Ar-Rahman is known as the "Bride of the Quran".',
  'The middle surah of the Quran is Surah Al-Hadid (57).',
  'Bismillah appears 114 times in the Quran (113 at the start of surahs + once in Surah An-Naml).',
  'The Quran was first compiled into book form during the caliphate of Abu Bakr (RA).',
  'Surah At-Tawbah is the only surah that does not begin with Bismillah.',
  'The Quran has 30 juz (parts) and 60 hizb (halves).',
  'The last surah revealed completely was Surah An-Nasr.',
  'The first verses revealed were the first five verses of Surah Al-Alaq.',
  'Ayatul Kursi (2:255) is called the greatest verse in the Quran.',
  'Surah Al-Mulk protects from the punishment of the grave.',
  'Reading Surah Al-Kahf on Friday brings light between two Fridays.',
  'The Quran challenges humanity to produce even one surah like it.'
];

const TAFSIR_CATEGORY_LABELS = {
  all: 'All Topics',
  aqeedah: 'Aqeedah (Belief)',
  ibadah: 'Ibadah (Worship)',
  akhlaq: 'Akhlaq (Character)',
  muamalat: 'Muamalat (Dealings)',
  qasas: 'Qasas (Stories)'
};

function initTafsir() {
  const page = $('#page-tafsir');
  if (!page) return;

  let currentFactIndex = 0;

  const html = '<div class="tafsir-container">'
    + '<div class="tafsir-facts-carousel">'
    + '<div class="facts-header"><i class="fas fa-lightbulb"></i> Quran Facts</div>'
    + '<div class="facts-content" id="factsContent">' + QURAN_FACTS[0] + '</div>'
    + '<div class="facts-nav"><button class="facts-nav-btn" id="factsPrev"><i class="fas fa-chevron-left"></i></button><span class="facts-counter" id="factsCounter">1/' + QURAN_FACTS.length + '</span><button class="facts-nav-btn" id="factsNext"><i class="fas fa-chevron-right"></i></button></div>'
    + '</div>'
    + '<div class="tafsir-study-stats">'
    + '<div class="study-stat"><span class="study-stat-num" id="topicsStudiedCount">' + (state.tafsirTopicsStudied || []).length + '</span><span class="study-stat-label">Topics Studied</span></div>'
    + '<div class="study-stat"><span class="study-stat-num" id="studyNotesCount">' + Object.keys(state.tafsirStudyNotes || {}).length + '</span><span class="study-stat-label">Study Notes</span></div>'
    + '<div class="study-stat"><span class="study-stat-num">' + TAFSIR_TOPICS.length + '</span><span class="study-stat-label">Total Topics</span></div>'
    + '</div>'
    + '<div class="tafsir-controls">'
    + '<input type="text" id="tafsirSearchInput" class="tafsir-search" placeholder="Search topics...">'
    + '<div class="tafsir-cat-filters" id="tafsirCatFilters"></div>'
    + '</div>'
    + '<div class="tafsir-topic-grid" id="tafsirTopicGrid"></div>'
    + '</div>'
    + '<div class="modal-overlay hidden" id="tafsirDetailModal"><div class="modal-content tafsir-detail-content">'
    + '<button class="modal-close-btn" id="tafsirDetailClose"><i class="fas fa-times"></i></button>'
    + '<div id="tafsirDetailBody"></div>'
    + '</div></div>';

  page.innerHTML = html;

  const catFilters = $('#tafsirCatFilters');
  Object.entries(TAFSIR_CATEGORY_LABELS).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = 'tafsir-cat-btn' + (key === 'all' ? ' active' : '');
    btn.dataset.cat = key;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      $$('.tafsir-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTopicList(key, ($('#tafsirSearchInput')?.value || '').toLowerCase());
    });
    catFilters.appendChild(btn);
  });

  $('#tafsirSearchInput').addEventListener('input', debounce(e => {
    const activeCat = $('.tafsir-cat-btn.active')?.dataset.cat || 'all';
    renderTopicList(activeCat, e.target.value.toLowerCase());
  }));

  $('#factsPrev').addEventListener('click', () => {
    currentFactIndex = (currentFactIndex - 1 + QURAN_FACTS.length) % QURAN_FACTS.length;
    $('#factsContent').textContent = QURAN_FACTS[currentFactIndex];
    $('#factsCounter').textContent = (currentFactIndex + 1) + '/' + QURAN_FACTS.length;
  });

  $('#factsNext').addEventListener('click', () => {
    currentFactIndex = (currentFactIndex + 1) % QURAN_FACTS.length;
    $('#factsContent').textContent = QURAN_FACTS[currentFactIndex];
    $('#factsCounter').textContent = (currentFactIndex + 1) + '/' + QURAN_FACTS.length;
  });

  $('#tafsirDetailClose').addEventListener('click', () => {
    $('#tafsirDetailModal').classList.add('hidden');
  });

  renderTopicList('all', '');
}

function renderTopicList(category, search) {
  const grid = $('#tafsirTopicGrid');
  if (!grid) return;

  let topics = [...TAFSIR_TOPICS];
  if (category !== 'all') topics = topics.filter(t => t.category === category);
  if (search) topics = topics.filter(t => t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search));

  if (!topics.length) {
    grid.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><h3>No topics found</h3></div>';
    return;
  }

  grid.innerHTML = topics.map(t => {
    const studied = (state.tafsirTopicsStudied || []).includes(t.id);
    const hasNotes = !!(state.tafsirStudyNotes || {})[t.id];
    return '<div class="tafsir-topic-card' + (studied ? ' studied' : '') + '" data-id="' + t.id + '">'
      + '<div class="topic-card-icon"><i class="fas ' + t.icon + '"></i></div>'
      + '<div class="topic-card-body">'
      + '<div class="topic-card-title">' + t.title + (studied ? ' <i class="fas fa-check-circle" style="color:var(--color-accent);font-size:0.8rem"></i>' : '') + '</div>'
      + '<div class="topic-card-desc">' + t.description.substring(0, 100) + '...</div>'
      + '<div class="topic-card-meta"><span class="topic-cat-badge">' + (TAFSIR_CATEGORY_LABELS[t.category] || t.category) + '</span><span>' + t.verses.length + ' verses</span>' + (hasNotes ? '<span><i class="fas fa-sticky-note"></i> Notes</span>' : '') + '</div>'
      + '</div>'
      + '</div>';
  }).join('');

  grid.querySelectorAll('.tafsir-topic-card').forEach(card => {
    card.addEventListener('click', () => loadTafsirTopic(+card.dataset.id));
  });
}

function loadTafsirTopic(topicId) {
  const topic = TAFSIR_TOPICS.find(t => t.id === topicId);
  if (!topic) return;

  if (!state.tafsirTopicsStudied.includes(topicId)) {
    state.tafsirTopicsStudied.push(topicId);
    saveState();
    const el = $('#topicsStudiedCount');
    if (el) el.textContent = state.tafsirTopicsStudied.length;
    checkAchievement('student');
  }

  const existingNotes = (state.tafsirStudyNotes || {})[topicId] || '';
  const studied = state.tafsirTopicsStudied.includes(topicId);

  const body = $('#tafsirDetailBody');
  body.innerHTML = '<div class="tafsir-detail-header">'
    + '<div class="tafsir-detail-icon"><i class="fas ' + topic.icon + '"></i></div>'
    + '<h2>' + topic.title + '</h2>'
    + '<span class="topic-cat-badge">' + (TAFSIR_CATEGORY_LABELS[topic.category] || '') + '</span>'
    + (studied ? '<span class="studied-badge"><i class="fas fa-check-circle"></i> Studied</span>' : '')
    + '</div>'
    + '<div class="tafsir-detail-desc">' + topic.description + '</div>'
    + '<div class="tafsir-detail-section">'
    + '<h3><i class="fas fa-quran"></i> Related Verses</h3>'
    + '<div class="tafsir-verses-list">'
    + topic.verses.map(v => {
      const sName = SURAH_DATA[v.surah - 1].englishName;
      return '<div class="tafsir-verse-item" data-s="' + v.surah + '" data-a="' + v.ayah + '">'
        + '<div class="verse-ref"><i class="fas fa-bookmark"></i> ' + sName + ' ' + v.surah + ':' + v.ayah + '</div>'
        + '<button class="hero-btn secondary-btn" style="padding:4px 12px;font-size:var(--fs-xs)" onclick="state.currentSurah=' + v.surah + ';navigateTo(\'quran\');loadSurah(' + v.surah + ')"><i class="fas fa-book-open"></i> Read</button>'
        + '</div>';
    }).join('')
    + '</div>'
    + '</div>'
    + '<div class="tafsir-detail-section">'
    + '<h3><i class="fas fa-link"></i> Cross References</h3>'
    + '<p class="cross-ref-note">These verses share thematic connections with the topic of <strong>' + topic.title + '</strong>. Studying them together provides deeper understanding.</p>'
    + '</div>'
    + '<div class="tafsir-detail-section">'
    + '<h3><i class="fas fa-sticky-note"></i> Study Notes</h3>'
    + '<textarea id="tafsirStudyNoteArea" class="tafsir-study-textarea" placeholder="Write your study notes here...">' + existingNotes + '</textarea>'
    + '<button class="hero-btn primary-btn" id="saveTafsirNote" style="margin-top:0.5rem"><i class="fas fa-save"></i> Save Notes</button>'
    + '</div>'
    + '<div class="tafsir-detail-section">'
    + '<h3><i class="fas fa-search"></i> Word Analysis</h3>'
    + '<p class="word-analysis-placeholder">Word-by-word analysis for this topic\'s key terms will be available in a future update. This feature will allow you to explore Arabic root words, morphological patterns, and semantic connections.</p>'
    + '</div>';

  $('#saveTafsirNote').addEventListener('click', () => {
    const noteText = $('#tafsirStudyNoteArea').value.trim();
    if (!state.tafsirStudyNotes) state.tafsirStudyNotes = {};
    state.tafsirStudyNotes[topicId] = noteText;
    saveState();
    showToast('Study notes saved!', 'success');
    const el = $('#studyNotesCount');
    if (el) el.textContent = Object.keys(state.tafsirStudyNotes).filter(k => state.tafsirStudyNotes[k]).length;
  });

  $('#tafsirDetailModal').classList.remove('hidden');
}

function renderStudyTools() {
  /* Placeholder for future word analysis tools */
}

function showCrossReferences(surah, ayah) {
  showToast('Cross-reference viewer coming soon', 'info');
}

function showWordAnalysis(word) {
  showToast('Word analysis coming soon', 'info');
}

/* ============================================================
   3. PROPHETS PAGE
   ============================================================ */

const PROPHETS_DETAIL_DATA = [
  { number: 1, era: 'beginning', title: 'Father of Humanity', story: 'Adam (AS) was the first human being and the first prophet. Allah created him from clay and breathed into him His spirit. He was taught the names of all things and was commanded to live in Paradise with his wife Hawwa (Eve). After being deceived by Shaytan into eating from the forbidden tree, they were sent to Earth. Adam repented sincerely and was forgiven by Allah.', miracles: ['Taught the names of all things by Allah', 'Angels were commanded to prostrate to him', 'Created from clay without parents'], lessons: ['The importance of repentance and seeking forgiveness', 'The danger of pride (as shown by Iblis)', 'Human beings are the best of creation when they obey Allah'] },
  { number: 2, era: 'early', title: 'The Patient Scholar', story: 'Idris (AS) is believed to be among the earliest prophets. He was known for his wisdom, patience, and devotion. He was the first to write with a pen and was raised to a high station by Allah. He taught his people about monotheism and righteous living.', miracles: ['Raised to a high station by Allah', 'First to use writing (pen)'], lessons: ['The importance of seeking knowledge', 'Patience in calling people to truth', 'The value of worship and devotion'] },
  { number: 3, era: 'early', title: 'The Preacher of 950 Years', story: 'Nuh (AS) was sent to a people who worshipped idols. He preached for 950 years but only a few believed. Allah commanded him to build an ark. When the great flood came, Nuh and the believers were saved while the disbelievers, including his own son, perished. After the flood, civilization was rebuilt from his followers.', miracles: ['Built the Ark by divine guidance', 'Survived the Great Flood', 'Preached for 950 years'], lessons: ['Persistence in da\'wah despite rejection', 'Faith transcends family ties', 'Allah\'s promise of salvation for believers'] },
  { number: 4, era: 'early', title: 'Messenger to the People of Ad', story: 'Hud (AS) was sent to the people of Ad, who lived in the Arabian Peninsula and were known for their strength and tall buildings. Despite their power, they worshipped idols. Hud called them to worship Allah alone, but they rejected him. Allah destroyed them with a violent wind that lasted seven nights and eight days.', miracles: ['Protected from the destructive wind', 'Warned his people of divine punishment'], lessons: ['Physical strength is nothing without faith', 'Arrogance leads to destruction', 'Allah gives time but does not forget'] },
  { number: 5, era: 'early', title: 'Messenger to the People of Thamud', story: 'Salih (AS) was sent to the Thamud people who carved houses in mountains. He brought them a miraculous she-camel as a sign from Allah. Despite warnings, they killed the camel. Allah destroyed them with a terrible earthquake and blast.', miracles: ['The miraculous she-camel came from a rock', 'Protected from the punishment that destroyed Thamud'], lessons: ['Rejecting clear signs has consequences', 'Defying Allah\'s commands brings destruction', 'Material prosperity does not guarantee guidance'] },
  { number: 6, era: 'early', title: 'The Friend of Allah (Khalilullah)', story: 'Ibrahim (AS) is one of the greatest prophets and is called Khalilullah (Friend of Allah). He broke the idols of his people and was thrown into a fire which became cool by Allah\'s command. He traveled extensively, built the Kaaba with his son Ismail, and was tested with the command to sacrifice his son. His unwavering faith is a model for all believers.', miracles: ['Survived being thrown into fire', 'Fire became cool and peaceful for him', 'Built the Kaaba', 'Birds came back to life in his demonstration of resurrection'], lessons: ['Complete submission to Allah\'s will', 'The importance of monotheism and rejecting idolatry', 'Willingness to sacrifice everything for Allah'] },
  { number: 7, era: 'early', title: 'Messenger to Sodom', story: 'Lut (AS) was the nephew of Ibrahim and was sent to the people of Sodom who engaged in unprecedented immoral behavior. Despite his continuous preaching, they rejected him. Angels came to destroy the city, and Lut was commanded to leave with his family at night. His wife, who sympathized with the people, was left behind and perished.', miracles: ['Protected by angels from the people of Sodom', 'Forewarned of the city\'s destruction'], lessons: ['Standing firm against societal immorality', 'Not compromising on divine commands', 'Consequences of widespread immorality'] },
  { number: 8, era: 'middle', title: 'Father of the Arabs', story: 'Ismail (AS) was the firstborn son of Ibrahim. As an infant, he and his mother Hajar were left in the desert of Makkah by divine command. The well of Zamzam sprang forth to save them. When grown, Ismail helped his father build the Kaaba. He was the one Ibrahim was commanded to sacrifice, and Allah ransomed him with a ram.', miracles: ['The well of Zamzam springing forth', 'Saved from sacrifice by divine intervention', 'Helped build the Kaaba'], lessons: ['Trust in Allah\'s provision even in harsh conditions', 'Obedience to parents and to Allah', 'The origin of the sacrifice during Eid al-Adha'] },
  { number: 9, era: 'middle', title: 'Son of Promise', story: 'Ishaq (AS) was the second son of Ibrahim, born to Sarah in their old age as a miracle from Allah. He continued the prophetic mission in the land of Canaan. Through his son Yaqub, the line of Israelite prophets continued.', miracles: ['Born to elderly parents as a miracle', 'Continued the prophetic lineage'], lessons: ['Allah\'s promises always come true', 'No blessing is impossible for Allah', 'The importance of maintaining faith across generations'] },
  { number: 10, era: 'middle', title: 'Father of the Twelve Tribes', story: 'Yaqub (AS), also known as Israel, was the son of Ishaq. He had twelve sons who became the founders of the Twelve Tribes of Israel. He endured great sorrow when his beloved son Yusuf was taken from him, yet maintained his trust in Allah for decades until they were reunited.', miracles: ['His eyesight was restored by Yusuf\'s shirt', 'Maintained unwavering faith despite decades of grief'], lessons: ['Beautiful patience (sabr jameel) in the face of loss', 'Never losing hope in Allah\'s mercy', 'The importance of family bonds'] },
  { number: 11, era: 'middle', title: 'The Most Beautiful Story', story: 'Yusuf (AS) is the subject of what the Quran calls "the most beautiful of stories." Thrown into a well by jealous brothers, sold into slavery in Egypt, falsely accused and imprisoned, he eventually rose to become the most powerful minister in Egypt. His story demonstrates how Allah\'s plan unfolds through apparent misfortune.', miracles: ['Interpretation of dreams', 'Extraordinary beauty', 'Rose from slavery to authority'], lessons: ['Allah\'s plan is always better than ours', 'Maintaining purity and integrity despite temptation', 'Forgiveness and reconciliation with those who wrong us'] },
  { number: 12, era: 'middle', title: 'The Epitome of Patience', story: 'Ayyub (AS) was a wealthy and righteous man who was tested with the loss of his health, wealth, and family. Despite years of severe illness and hardship, he never complained against Allah. When he finally made a brief supplication, Allah restored everything to him manifold.', miracles: ['Full restoration of health by striking the ground with his foot', 'All his wealth and family were restored doubled'], lessons: ['True patience means not complaining to anyone but Allah', 'Tests of this world are temporary', 'Allah rewards patience beyond measure'] },
  { number: 13, era: 'middle', title: 'Messenger to Madyan', story: 'Shu\'ayb (AS) was sent to the people of Madyan who cheated in trade and business dealings. He called them to honest practices and worship of Allah alone. When they rejected him and continued their corruption, Allah destroyed them with a mighty earthquake.', miracles: ['Protected from the earthquake that destroyed his people'], lessons: ['Honesty in business is a religious obligation', 'Economic corruption leads to societal destruction', 'Prophets practiced what they preached'] },
  { number: 14, era: 'middle', title: 'Kalimullah - The One Who Spoke with Allah', story: 'Musa (AS) is the most mentioned prophet in the Quran. Born during Pharaoh\'s persecution of the Israelites, he was saved as an infant by being placed in a basket on the Nile. Raised in Pharaoh\'s palace, he later fled to Midian, received prophethood at Mount Sinai, confronted Pharaoh with miracles, led the Exodus, parted the Red Sea, received the Torah, and guided the Children of Israel for decades.', miracles: ['Staff turning into a serpent', 'Parting of the Red Sea', 'The shining hand', 'Water from a rock', 'Received the Torah on Mount Sinai'], lessons: ['Standing up against tyranny', 'Trust in Allah when facing impossible odds', 'The importance of dawah even to the most arrogant'] },
  { number: 15, era: 'middle', title: 'The Helper of Musa', story: 'Harun (AS) was the elder brother of Musa and served as his helper and spokesperson. He was known for his eloquence and gentle nature. He helped Musa in conveying the message to Pharaoh and the Children of Israel.', miracles: ['Appointed as a prophet alongside Musa', 'Helped in the mission to Pharaoh'], lessons: ['The importance of teamwork in da\'wah', 'Gentleness and eloquence in conveying the message', 'Supporting others in righteous work'] },
  { number: 16, era: 'middle', title: 'The Steadfast', story: 'Dhul-Kifl (AS) is mentioned twice in the Quran among the righteous. He is described as being patient and righteous. Some scholars identify him with the biblical Ezekiel. He fulfilled his commitments and maintained his faith steadfastly.', miracles: ['Steadfastness in maintaining his covenant with Allah'], lessons: ['Keeping promises and commitments', 'Patience and righteousness in all circumstances'] },
  { number: 17, era: 'middle', title: 'The Singing Prophet', story: 'Dawud (AS) was given the kingdom of Israel and the Zabur (Psalms). He was known for his beautiful voice in praising Allah, which caused the mountains and birds to join in his praise. He defeated Jalut (Goliath) as a young man and was given wisdom and fair judgment.', miracles: ['Mountains and birds praised Allah with him', 'Iron was made soft in his hands', 'Defeated Goliath', 'Given the Zabur'], lessons: ['Combining worldly leadership with spiritual devotion', 'The power of praise and remembrance of Allah', 'Fair judgment and justice'] },
  { number: 18, era: 'middle', title: 'The Wise King', story: 'Sulaiman (AS) inherited Dawud\'s kingdom and was given unique powers. He could command the wind, understand the language of animals and birds, and had authority over the jinn. Despite his immense power and wealth, he remained grateful to Allah and used his gifts in His service.', miracles: ['Commanded the wind', 'Understood language of birds and animals', 'Authority over jinn', 'Immense kingdom and wisdom'], lessons: ['Gratitude for blessings regardless of how much one has', 'Using power and authority for justice', 'True wealth is in obedience to Allah'] },
  { number: 19, era: 'late', title: 'The Caller to Righteousness', story: 'Ilyas (AS) was sent to the people of Baalbek who worshipped the idol Baal. He called them to abandon idolatry and worship Allah alone. Despite facing rejection and threats, he continued his mission with courage and determination.', miracles: ['Steadfast preaching against idol worship'], lessons: ['Courage in standing against falsehood', 'Persistence in calling to truth'] },
  { number: 20, era: 'late', title: 'The Successor of Ilyas', story: 'Al-Yasa (AS) succeeded Ilyas as a prophet to the Children of Israel. He is mentioned in the Quran among the righteous and excellent ones. He continued the mission of calling people to worship Allah alone.', miracles: ['Continued the prophetic mission after Ilyas'], lessons: ['The importance of continuing righteous work', 'Excellence in worship and character'] },
  { number: 21, era: 'late', title: 'The Prophet of the Whale', story: 'Yunus (AS) was sent to the people of Nineveh. When they rejected his message, he left in anger without Allah\'s permission. He was swallowed by a great whale and in its belly called out to Allah with the famous dua: "La ilaha illa Anta, SubhanAka, inni kuntu min adh-dhalimin." Allah forgave him and his people eventually believed.', miracles: ['Survived inside a whale', 'His people were saved after believing'], lessons: ['Never give up on people', 'The power of sincere repentance', 'Patience is required even from prophets'] },
  { number: 22, era: 'late', title: 'Father of Yahya', story: 'Zakariya (AS) was the guardian of Maryam and a priest of the temple. Inspired by how Allah provided for Maryam miraculously, he prayed for a son despite his old age. Allah granted him Yahya as a gift and a sign of His power.', miracles: ['Given a son (Yahya) at extreme old age', 'Witnessed miracles in Maryam\'s chamber'], lessons: ['Never consider yourself too old or weak for Allah\'s blessings', 'The importance of sincere and persistent dua', 'Trust in Allah\'s ability to do anything'] },
  { number: 23, era: 'late', title: 'The Righteous Youth', story: 'Yahya (AS), known as John the Baptist, was given prophethood as a child. He was described as wise, compassionate, pure, and dutiful to his parents. He confirmed the coming of Isa (AS) and called people to righteousness and repentance.', miracles: ['Given wisdom as a child', 'Prophethood from a very young age'], lessons: ['Youth is not a barrier to wisdom and piety', 'Gentleness and compassion in character', 'Honoring and obeying parents'] },
  { number: 24, era: 'late', title: 'The Messiah (Al-Masih)', story: 'Isa (AS) was born miraculously to Maryam without a father. He spoke from the cradle, performed many miracles by Allah\'s permission including healing the blind and lepers, and raising the dead. He was given the Injeel (Gospel). The Quran states he was not crucified but was raised to heaven by Allah, and he will return before the Day of Judgment.', miracles: ['Born without a father', 'Spoke from the cradle', 'Healed the blind and lepers', 'Raised the dead', 'Created a bird from clay', 'Raised to heaven alive'], lessons: ['The miraculous power of Allah', 'Humility despite extraordinary gifts', 'The importance of following the true message, not innovations'] },
  { number: 25, era: 'final', title: 'The Seal of the Prophets (Khatam an-Nabiyyin)', story: 'Muhammad (SAW) is the final messenger of Allah, sent as a mercy to all of creation. Born in Makkah in 570 CE, he received the first revelation at age 40 in the Cave of Hira. He preached Islam for 23 years, faced severe persecution, migrated to Madinah, established the first Islamic state, and left behind the Quran and his Sunnah as guidance for all of humanity until the Day of Judgment.', miracles: ['The Quran - the greatest and lasting miracle', 'The Night Journey (Isra and Mi\'raj)', 'Splitting of the moon', 'Water flowing from his fingers', 'The Quran\'s preservation for over 1400 years'], lessons: ['Mercy and compassion for all creation', 'Perseverance through extreme hardship', 'The importance of following the Quran and Sunnah', 'Building a just and compassionate society'] }
];

function initProphets() {
  if (typeof PROPHETS_IN_QURAN === 'undefined') return;
  const page = $('#page-prophets');
  if (!page) return;

  const html = '<div class="prophets-container">'
    + '<div class="prophets-header">'
    + '<div class="prophets-stats">'
    + '<div class="prophet-stat"><span class="prophet-stat-num">25</span><span class="prophet-stat-label">Prophets Named</span></div>'
    + '<div class="prophet-stat"><span class="prophet-stat-num" id="prophetsReadCount">' + (state.prophetsRead || []).length + '</span><span class="prophet-stat-label">Stories Read</span></div>'
    + '<div class="prophet-stat"><span class="prophet-stat-num" id="prophetsProgress">' + Math.round((state.prophetsRead || []).length / 25 * 100) + '%</span><span class="prophet-stat-label">Progress</span></div>'
    + '</div>'
    + '<div class="prophets-controls">'
    + '<input type="text" id="prophetSearchInput" class="prophet-search" placeholder="Search prophets...">'
    + '<div class="prophet-era-filters" id="prophetEraFilters"></div>'
    + '</div>'
    + '</div>'
    + '<div class="prophets-timeline" id="prophetsTimeline"></div>'
    + '</div>'
    + '<div class="modal-overlay hidden" id="prophetDetailModal"><div class="modal-content prophet-detail-content">'
    + '<button class="modal-close-btn" id="prophetDetailClose"><i class="fas fa-times"></i></button>'
    + '<div id="prophetDetailBody"></div>'
    + '</div></div>';

  page.innerHTML = html;

  const eraLabels = { all: 'All Eras', beginning: 'Beginning', early: 'Early', middle: 'Middle', late: 'Late', final: 'Final' };
  const eraFilters = $('#prophetEraFilters');
  Object.entries(eraLabels).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = 'prophet-era-btn' + (key === 'all' ? ' active' : '');
    btn.dataset.era = key;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      $$('.prophet-era-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.prophetFilter = key;
      renderProphetTimeline();
    });
    eraFilters.appendChild(btn);
  });

  $('#prophetSearchInput').addEventListener('input', debounce(e => {
    state.prophetSearch = e.target.value.toLowerCase();
    renderProphetTimeline();
  }));

  $('#prophetDetailClose').addEventListener('click', () => {
    $('#prophetDetailModal').classList.add('hidden');
  });

  renderProphetTimeline();
}

function renderProphetTimeline() {
  if (typeof PROPHETS_IN_QURAN === 'undefined') return;
  const timeline = $('#prophetsTimeline');
  if (!timeline) return;

  let prophets = PROPHETS_IN_QURAN.map((p, idx) => {
    const detail = PROPHETS_DETAIL_DATA[idx] || {};
    return { ...p, ...detail };
  });

  if (state.prophetFilter !== 'all') {
    prophets = prophets.filter(p => p.era === state.prophetFilter);
  }

  if (state.prophetSearch) {
    prophets = prophets.filter(p =>
      p.english.toLowerCase().includes(state.prophetSearch) ||
      p.arabic.includes(state.prophetSearch) ||
      p.bangla.includes(state.prophetSearch) ||
      (p.title || '').toLowerCase().includes(state.prophetSearch)
    );
  }

  if (!prophets.length) {
    timeline.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><h3>No prophets found</h3></div>';
    return;
  }

  timeline.innerHTML = '<div class="timeline-line"></div>' + prophets.map((p, idx) => {
    const isRead = (state.prophetsRead || []).includes(p.number);
    const side = idx % 2 === 0 ? 'left' : 'right';
    const eraColors = { beginning: '#e74c3c', early: '#e67e22', middle: '#2ecc71', late: '#3498db', final: '#9b59b6' };
    const eraColor = eraColors[p.era] || 'var(--color-accent)';

    return '<div class="timeline-item timeline-' + side + '" data-num="' + p.number + '">'
      + '<div class="timeline-dot" style="background:' + eraColor + '">' + p.number + '</div>'
      + '<div class="timeline-card' + (isRead ? ' read' : '') + '">'
      + '<div class="timeline-card-header" style="border-left:3px solid ' + eraColor + '">'
      + '<div class="timeline-arabic">' + p.arabic + '</div>'
      + '<div class="timeline-name">' + p.english + '</div>'
      + '<div class="timeline-bangla">' + p.bangla + '</div>'
      + '</div>'
      + '<div class="timeline-card-body">'
      + (p.title ? '<div class="timeline-title">' + p.title + '</div>' : '')
      + '<div class="timeline-mentions"><i class="fas fa-quran"></i> Mentioned ' + p.mentionCount + ' times in ' + p.surahs.length + ' surahs</div>'
      + '<div class="timeline-era"><span class="era-badge" style="background:' + eraColor + '">' + (p.era || 'Unknown') + ' Era</span>' + (isRead ? ' <i class="fas fa-check-circle" style="color:var(--color-accent)"></i>' : '') + '</div>'
      + '</div>'
      + '<div class="timeline-card-footer">'
      + '<button class="hero-btn secondary-btn timeline-read-btn" data-num="' + p.number + '"><i class="fas fa-book-open"></i> Read Story</button>'
      + '</div>'
      + '</div>'
      + '</div>';
  }).join('');

  timeline.querySelectorAll('.timeline-read-btn').forEach(btn => {
    btn.addEventListener('click', () => showProphetDetail(+btn.dataset.num));
  });
}

function showProphetDetail(num) {
  if (typeof PROPHETS_IN_QURAN === 'undefined') return;
  const prophet = PROPHETS_IN_QURAN.find(p => p.number === num);
  const detail = PROPHETS_DETAIL_DATA.find(d => d.number === num);
  if (!prophet) return;

  if (!state.prophetsRead.includes(num)) {
    state.prophetsRead.push(num);
    saveState();
    const el1 = $('#prophetsReadCount');
    const el2 = $('#prophetsProgress');
    if (el1) el1.textContent = state.prophetsRead.length;
    if (el2) el2.textContent = Math.round(state.prophetsRead.length / 25 * 100) + '%';
    checkAchievement('historian');
  }

  const body = $('#prophetDetailBody');
  body.innerHTML = '<div class="prophet-detail-header">'
    + '<div class="prophet-detail-arabic">' + prophet.arabic + '</div>'
    + '<h2 class="prophet-detail-name">' + prophet.english + '</h2>'
    + '<div class="prophet-detail-bangla">' + prophet.bangla + '</div>'
    + (detail && detail.title ? '<div class="prophet-detail-title">' + detail.title + '</div>' : '')
    + '</div>'
    + '<div class="prophet-detail-stats">'
    + '<div class="pd-stat"><i class="fas fa-quran"></i> Mentioned ' + prophet.mentionCount + ' times</div>'
    + '<div class="pd-stat"><i class="fas fa-book"></i> In ' + prophet.surahs.length + ' surahs</div>'
    + '</div>'
    + (detail && detail.story ? '<div class="prophet-detail-section"><h3><i class="fas fa-scroll"></i> Story</h3><p>' + detail.story + '</p></div>' : '')
    + (detail && detail.miracles ? '<div class="prophet-detail-section"><h3><i class="fas fa-star"></i> Miracles</h3><ul>' + detail.miracles.map(m => '<li>' + m + '</li>').join('') + '</ul></div>' : '')
    + (detail && detail.lessons ? '<div class="prophet-detail-section"><h3><i class="fas fa-lightbulb"></i> Key Lessons</h3><ul>' + detail.lessons.map(l => '<li>' + l + '</li>').join('') + '</ul></div>' : '')
    + '<div class="prophet-detail-section"><h3><i class="fas fa-quran"></i> Referenced Surahs</h3><div class="prophet-surahs-grid">'
    + prophet.surahs.map(s => {
      const surah = SURAH_DATA[s - 1];
      return '<button class="prophet-surah-btn" onclick="state.currentSurah=' + s + ';navigateTo(\'quran\');loadSurah(' + s + ')">' + s + '. ' + surah.englishName + '</button>';
    }).join('')
    + '</div></div>';

  $('#prophetDetailModal').classList.remove('hidden');
}

function renderProphetCard(prophet) {
  /* Used internally by renderProphetTimeline */
}

function filterProphets(era) {
  state.prophetFilter = era;
  renderProphetTimeline();
}

/* ============================================================
   4. ACHIEVEMENTS PAGE
   ============================================================ */

const ACHIEVEMENTS_DATA = [
  { id: 'first_read', title: 'First Steps', description: 'Read your first surah', icon: 'fa-book-open', category: 'reading', points: 10, condition: function() { return state.statistics.surahsRead.length >= 1; } },
  { id: 'reader_10', title: 'Dedicated Reader', description: 'Read 10 different surahs', icon: 'fa-book-reader', category: 'reading', points: 50, condition: function() { return state.statistics.surahsRead.length >= 10; } },
  { id: 'reader_30', title: 'Juz Champion', description: 'Read 30 different surahs', icon: 'fa-trophy', category: 'reading', points: 100, condition: function() { return state.statistics.surahsRead.length >= 30; } },
  { id: 'reader_60', title: 'Halfway There', description: 'Read 57 surahs (half the Quran)', icon: 'fa-star-half-alt', category: 'reading', points: 200, condition: function() { return state.statistics.surahsRead.length >= 57; } },
  { id: 'reader_all', title: 'Khatm ul Quran', description: 'Read all 114 surahs', icon: 'fa-crown', category: 'reading', points: 500, condition: function() { return state.statistics.surahsRead.length >= 114; } },
  { id: 'bookmark_1', title: 'Bookworm', description: 'Bookmark your first ayah', icon: 'fa-heart', category: 'engagement', points: 10, condition: function() { return state.bookmarks.ayahs.length >= 1; } },
  { id: 'bookmark_10', title: 'Collector', description: 'Bookmark 10 ayahs', icon: 'fa-heart', category: 'engagement', points: 30, condition: function() { return state.bookmarks.ayahs.length >= 10; } },
  { id: 'bookmark_50', title: 'Treasure Hunter', description: 'Bookmark 50 ayahs', icon: 'fa-gem', category: 'engagement', points: 100, condition: function() { return state.bookmarks.ayahs.length >= 50; } },
  { id: 'note_1', title: 'Note Taker', description: 'Write your first note', icon: 'fa-sticky-note', category: 'engagement', points: 10, condition: function() { return state.notes.length >= 1; } },
  { id: 'note_10', title: 'Scholar', description: 'Write 10 notes', icon: 'fa-pen-fancy', category: 'engagement', points: 50, condition: function() { return state.notes.length >= 10; } },
  { id: 'note_25', title: 'Deep Thinker', description: 'Write 25 notes', icon: 'fa-brain', category: 'engagement', points: 100, condition: function() { return state.notes.length >= 25; } },
  { id: 'streak_3', title: 'Consistent', description: 'Maintain a 3-day reading streak', icon: 'fa-fire', category: 'streak', points: 30, condition: function() { return state.statistics.streak >= 3; } },
  { id: 'streak_7', title: 'Week Warrior', description: 'Maintain a 7-day reading streak', icon: 'fa-fire-alt', category: 'streak', points: 70, condition: function() { return state.statistics.streak >= 7; } },
  { id: 'streak_30', title: 'Monthly Master', description: 'Maintain a 30-day reading streak', icon: 'fa-meteor', category: 'streak', points: 300, condition: function() { return state.statistics.streak >= 30; } },
  { id: 'streak_100', title: 'Century Club', description: 'Maintain a 100-day reading streak', icon: 'fa-award', category: 'streak', points: 1000, condition: function() { return state.statistics.streak >= 100; } },
  { id: 'listen_1', title: 'First Listen', description: 'Listen to your first ayah', icon: 'fa-headphones', category: 'audio', points: 10, condition: function() { return state.statistics.ayahsRead >= 1; } },
  { id: 'listen_100', title: 'Audio Enthusiast', description: 'Listen to 100 ayahs', icon: 'fa-music', category: 'audio', points: 50, condition: function() { return state.statistics.ayahsRead >= 100; } },
  { id: 'listen_500', title: 'Devoted Listener', description: 'Listen to 500 ayahs', icon: 'fa-headphones-alt', category: 'audio', points: 200, condition: function() { return state.statistics.ayahsRead >= 500; } },
  { id: 'time_1h', title: 'One Hour', description: 'Spend 1 hour reading the Quran', icon: 'fa-clock', category: 'time', points: 30, condition: function() { return state.statistics.totalTimeSeconds >= 3600; } },
  { id: 'time_10h', title: 'Dedicated', description: 'Spend 10 hours reading', icon: 'fa-hourglass-half', category: 'time', points: 100, condition: function() { return state.statistics.totalTimeSeconds >= 36000; } },
  { id: 'time_100h', title: 'Hafiz Journey', description: 'Spend 100 hours with the Quran', icon: 'fa-hourglass', category: 'time', points: 500, condition: function() { return state.statistics.totalTimeSeconds >= 360000; } },
  { id: 'search_1', title: 'Seeker', description: 'Perform your first search', icon: 'fa-search', category: 'exploration', points: 10, condition: function() { return (state.searchHistory || []).length >= 1; } },
  { id: 'search_20', title: 'Researcher', description: 'Search 20 times', icon: 'fa-search-plus', category: 'exploration', points: 50, condition: function() { return (state.searchHistory || []).length >= 20; } },
  { id: 'asma_10', title: 'Name Learner', description: 'Memorize 10 Names of Allah', icon: 'fa-star', category: 'knowledge', points: 50, condition: function() { return (state.asmaMemorized || []).length >= 10; } },
  { id: 'asma_50', title: 'Name Scholar', description: 'Memorize 50 Names of Allah', icon: 'fa-star', category: 'knowledge', points: 200, condition: function() { return (state.asmaMemorized || []).length >= 50; } },
  { id: 'asma_99', title: 'All 99 Names', description: 'Memorize all 99 Names of Allah', icon: 'fa-crown', category: 'knowledge', points: 500, condition: function() { return (state.asmaMemorized || []).length >= 99; } },
  { id: 'topics_5', title: 'Student of Knowledge', description: 'Study 5 tafsir topics', icon: 'fa-graduation-cap', category: 'knowledge', points: 50, condition: function() { return (state.tafsirTopicsStudied || []).length >= 5; } },
  { id: 'topics_all', title: 'Topic Master', description: 'Study all tafsir topics', icon: 'fa-university', category: 'knowledge', points: 300, condition: function() { return (state.tafsirTopicsStudied || []).length >= TAFSIR_TOPICS.length; } },
  { id: 'prophets_5', title: 'Story Lover', description: 'Read 5 prophet stories', icon: 'fa-book', category: 'knowledge', points: 50, condition: function() { return (state.prophetsRead || []).length >= 5; } },
  { id: 'prophets_all', title: 'Historian', description: 'Read all 25 prophet stories', icon: 'fa-scroll', category: 'knowledge', points: 300, condition: function() { return (state.prophetsRead || []).length >= 25; } },
  { id: 'collection_1', title: 'Curator', description: 'Create your first collection', icon: 'fa-folder-plus', category: 'engagement', points: 20, condition: function() { return (state.collections || []).length >= 1; } },
  { id: 'collection_5', title: 'Organizer', description: 'Create 5 collections', icon: 'fa-layer-group', category: 'engagement', points: 75, condition: function() { return (state.collections || []).length >= 5; } },
  { id: 'dhikr_100', title: 'Remembrance', description: 'Complete 100 tasbih counts', icon: 'fa-dharmachakra', category: 'worship', points: 30, condition: function() { return state.tasbih.totalToday >= 100; } },
  { id: 'dhikr_1000', title: 'Devoted Worshipper', description: 'Complete 1000 tasbih counts total', icon: 'fa-pray', category: 'worship', points: 100, condition: function() { return state.tasbih.totalToday >= 1000; } },
  { id: 'explorer', title: 'Explorer', description: 'Visit every page of the app', icon: 'fa-compass', category: 'exploration', points: 50, condition: function() { return false; /* checked separately */ } },
  { id: 'night_reader', title: 'Night Reader', description: 'Read the Quran after midnight', icon: 'fa-moon', category: 'special', points: 30, condition: function() { const h = new Date().getHours(); return h >= 0 && h < 5 && state.statistics.surahsRead.length > 0; } },
  { id: 'friday_reader', title: 'Jummah Reader', description: 'Read Surah Al-Kahf on Friday', icon: 'fa-mosque', category: 'special', points: 50, condition: function() { return new Date().getDay() === 5 && state.statistics.surahsRead.includes(18); } }
];

const ACHIEVEMENT_CATEGORIES = {
  all: 'All',
  reading: 'Reading',
  engagement: 'Engagement',
  streak: 'Streaks',
  audio: 'Audio',
  time: 'Time',
  knowledge: 'Knowledge',
  worship: 'Worship',
  exploration: 'Exploration',
  special: 'Special'
};

function initAchievements() {
  const page = $('#page-achievements');
  if (!page) return;

  const html = '<div class="achievements-container">'
    + '<div class="achievements-header">'
    + '<div class="achievements-level-card">'
    + '<div class="level-badge" id="achievementLevelBadge">Lvl ' + calculateLevel() + '</div>'
    + '<div class="level-info">'
    + '<div class="level-title" id="achievementLevelTitle">' + getLevelTitle(calculateLevel()) + '</div>'
    + '<div class="level-points"><i class="fas fa-star"></i> <span id="achievementTotalPoints">' + state.achievements.points + '</span> points</div>'
    + '<div class="level-progress-bar"><div class="level-progress-fill" id="levelProgressFill"></div></div>'
    + '<div class="level-progress-text" id="levelProgressText"></div>'
    + '</div>'
    + '</div>'
    + '<div class="achievements-summary">'
    + '<div class="ach-summary-stat"><span class="ach-stat-num" id="achUnlockedCount">' + state.achievements.unlocked.length + '</span><span class="ach-stat-label">Unlocked</span></div>'
    + '<div class="ach-summary-stat"><span class="ach-stat-num">' + ACHIEVEMENTS_DATA.length + '</span><span class="ach-stat-label">Total</span></div>'
    + '<div class="ach-summary-stat"><span class="ach-stat-num" id="achPercentage">' + Math.round(state.achievements.unlocked.length / ACHIEVEMENTS_DATA.length * 100) + '%</span><span class="ach-stat-label">Complete</span></div>'
    + '</div>'
    + '</div>'
    + '<div class="achievements-filters" id="achievementFilters"></div>'
    + '<div class="achievements-grid" id="achievementsGrid"></div>'
    + '</div>';

  page.innerHTML = html;

  const filters = $('#achievementFilters');
  Object.entries(ACHIEVEMENT_CATEGORIES).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = 'ach-filter-btn' + (key === 'all' ? ' active' : '');
    btn.dataset.cat = key;
    btn.textContent = label;
    btn.addEventListener('click', () => {
      $$('.ach-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAchievements(key);
    });
    filters.appendChild(btn);
  });

  updateLevelDisplay();
  renderAchievements('all');
}

function calculateLevel() {
  const points = state.achievements.points || 0;
  if (points < 50) return 1;
  if (points < 150) return 2;
  if (points < 300) return 3;
  if (points < 500) return 4;
  if (points < 800) return 5;
  if (points < 1200) return 6;
  if (points < 1800) return 7;
  if (points < 2500) return 8;
  if (points < 3500) return 9;
  return 10;
}

function getLevelTitle(level) {
  const titles = {
    1: 'Beginner', 2: 'Student', 3: 'Learner', 4: 'Reader',
    5: 'Scholar', 6: 'Devoted', 7: 'Hafiz in Training', 8: 'Master',
    9: 'Guardian of Knowledge', 10: 'Imam of Learning'
  };
  return titles[level] || 'Beginner';
}

function getLevelThreshold(level) {
  const thresholds = [0, 50, 150, 300, 500, 800, 1200, 1800, 2500, 3500, 5000];
  return thresholds[level] || 5000;
}

function updateLevelDisplay() {
  const level = calculateLevel();
  const points = state.achievements.points || 0;
  const currentThreshold = getLevelThreshold(level - 1);
  const nextThreshold = getLevelThreshold(level);
  const progress = Math.min(100, Math.round((points - currentThreshold) / (nextThreshold - currentThreshold) * 100));

  const badge = $('#achievementLevelBadge');
  const title = $('#achievementLevelTitle');
  const fill = $('#levelProgressFill');
  const text = $('#levelProgressText');
  const pts = $('#achievementTotalPoints');

  if (badge) badge.textContent = 'Lvl ' + level;
  if (title) title.textContent = getLevelTitle(level);
  if (fill) fill.style.width = progress + '%';
  if (text) text.textContent = points + ' / ' + nextThreshold + ' points to next level';
  if (pts) pts.textContent = points;
}

function renderAchievements(category) {
  const grid = $('#achievementsGrid');
  if (!grid) return;

  let achievements = [...ACHIEVEMENTS_DATA];
  if (category !== 'all') achievements = achievements.filter(a => a.category === category);

  grid.innerHTML = achievements.map(a => {
    const unlocked = state.achievements.unlocked.includes(a.id);
    const canUnlock = a.condition();
    const progressPct = getAchievementProgress(a);

    return '<div class="achievement-card' + (unlocked ? ' unlocked' : '') + (canUnlock && !unlocked ? ' available' : '') + '" data-id="' + a.id + '">'
      + '<div class="ach-card-icon' + (unlocked ? ' ach-unlocked' : '') + '"><i class="fas ' + a.icon + '"></i></div>'
      + '<div class="ach-card-body">'
      + '<div class="ach-card-title">' + a.title + '</div>'
      + '<div class="ach-card-desc">' + a.description + '</div>'
      + '<div class="ach-card-points"><i class="fas fa-star"></i> ' + a.points + ' pts</div>'
      + (unlocked ? '<div class="ach-unlocked-badge"><i class="fas fa-check-circle"></i> Unlocked</div>' : '<div class="ach-progress-bar"><div class="ach-progress-fill" style="width:' + progressPct + '%"></div></div>')
      + '</div>'
      + (canUnlock && !unlocked ? '<button class="ach-claim-btn" data-id="' + a.id + '"><i class="fas fa-gift"></i> Claim</button>' : '')
      + '</div>';
  }).join('');

  grid.querySelectorAll('.ach-claim-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      unlockAchievement(btn.dataset.id);
    });
  });

  grid.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', () => showAchievementDetail(card.dataset.id));
  });
}

function getAchievementProgress(achievement) {
  switch (achievement.id) {
    case 'first_read': case 'reader_10': case 'reader_30': case 'reader_60': case 'reader_all':
      const maxSurahs = achievement.id === 'reader_all' ? 114 : achievement.id === 'reader_60' ? 57 : achievement.id === 'reader_30' ? 30 : achievement.id === 'reader_10' ? 10 : 1;
      return Math.min(100, Math.round(state.statistics.surahsRead.length / maxSurahs * 100));
    case 'bookmark_1': case 'bookmark_10': case 'bookmark_50':
      const maxBk = achievement.id === 'bookmark_50' ? 50 : achievement.id === 'bookmark_10' ? 10 : 1;
      return Math.min(100, Math.round(state.bookmarks.ayahs.length / maxBk * 100));
    case 'note_1': case 'note_10': case 'note_25':
      const maxNotes = achievement.id === 'note_25' ? 25 : achievement.id === 'note_10' ? 10 : 1;
      return Math.min(100, Math.round(state.notes.length / maxNotes * 100));
    case 'streak_3': case 'streak_7': case 'streak_30': case 'streak_100':
      const maxStreak = achievement.id === 'streak_100' ? 100 : achievement.id === 'streak_30' ? 30 : achievement.id === 'streak_7' ? 7 : 3;
      return Math.min(100, Math.round(state.statistics.streak / maxStreak * 100));
    case 'asma_10': case 'asma_50': case 'asma_99':
      const maxAsma = achievement.id === 'asma_99' ? 99 : achievement.id === 'asma_50' ? 50 : 10;
      return Math.min(100, Math.round((state.asmaMemorized || []).length / maxAsma * 100));
    default: return 0;
  }
}

function checkAchievement(trigger) {
  const triggerMap = {
    reader: ['first_read', 'reader_10', 'reader_30', 'reader_60', 'reader_all', 'night_reader', 'friday_reader'],
    bookmarker: ['bookmark_1', 'bookmark_10', 'bookmark_50'],
    scholar: ['note_1', 'note_10', 'note_25'],
    listener: ['listen_1', 'listen_100', 'listen_500'],
    seeker: ['search_1', 'search_20'],
    asma_memorizer: ['asma_10', 'asma_50', 'asma_99'],
    student: ['topics_5', 'topics_all'],
    historian: ['prophets_5', 'prophets_all'],
    dhikr: ['dhikr_100', 'dhikr_1000'],
    collection: ['collection_1', 'collection_5']
  };

  const toCheck = triggerMap[trigger] || [];
  toCheck.forEach(achId => {
    if (state.achievements.unlocked.includes(achId)) return;
    const ach = ACHIEVEMENTS_DATA.find(a => a.id === achId);
    if (ach && ach.condition()) {
      /* Auto-unlock for background achievements */
    }
  });
}

function unlockAchievement(achId) {
  if (state.achievements.unlocked.includes(achId)) return;
  const ach = ACHIEVEMENTS_DATA.find(a => a.id === achId);
  if (!ach) return;

  state.achievements.unlocked.push(achId);
  state.achievements.points += ach.points;
  state.achievements.level = calculateLevel();
  saveState();

  showAchievementCelebration(ach);
  updateLevelDisplay();
  renderAchievements($('.ach-filter-btn.active')?.dataset.cat || 'all');

  const el1 = $('#achUnlockedCount');
  const el2 = $('#achPercentage');
  if (el1) el1.textContent = state.achievements.unlocked.length;
  if (el2) el2.textContent = Math.round(state.achievements.unlocked.length / ACHIEVEMENTS_DATA.length * 100) + '%';

  addNotification('Achievement Unlocked: ' + ach.title, 'achievement', 'fa-trophy');
}

function showAchievementCelebration(ach) {
  showToast('Achievement Unlocked: ' + ach.title + ' (+' + ach.points + ' pts)', 'success', 5000);

  const celebration = document.createElement('div');
  celebration.className = 'achievement-celebration';
  celebration.innerHTML = '<div class="celebration-content">'
    + '<div class="celebration-icon"><i class="fas ' + ach.icon + '"></i></div>'
    + '<div class="celebration-title">Achievement Unlocked!</div>'
    + '<div class="celebration-name">' + ach.title + '</div>'
    + '<div class="celebration-points">+' + ach.points + ' points</div>'
    + '</div>';
  document.body.appendChild(celebration);

  setTimeout(() => {
    celebration.classList.add('celebration-fade');
    setTimeout(() => celebration.remove(), 500);
  }, 3000);
}

function showAchievementDetail(achId) {
  const ach = ACHIEVEMENTS_DATA.find(a => a.id === achId);
  if (!ach) return;
  const unlocked = state.achievements.unlocked.includes(achId);
  const progress = getAchievementProgress(ach);

  showToast(ach.title + ': ' + ach.description + (unlocked ? ' (Unlocked!)' : ' (' + progress + '% progress)'), unlocked ? 'success' : 'info', 4000);
}

/* ============================================================
   5. COLLECTIONS PAGE
   ============================================================ */

function initCollections() {
  const page = $('#page-collections');
  if (!page) return;

  if (!state.collections) state.collections = [];

  if (state.collections.length === 0) {
    state.collections = [
      { id: 'fav_' + Date.now(), name: 'Favorites', description: 'My favorite verses', icon: 'fa-heart', color: '#e74c3c', items: [], createdAt: new Date().toISOString(), isDefault: true },
      { id: 'mem_' + Date.now(), name: 'To Memorize', description: 'Verses I want to memorize', icon: 'fa-brain', color: '#3498db', items: [], createdAt: new Date().toISOString(), isDefault: true },
      { id: 'study_' + Date.now(), name: 'To Study', description: 'Verses to study in depth', icon: 'fa-graduation-cap', color: '#2ecc71', items: [], createdAt: new Date().toISOString(), isDefault: true }
    ];
    saveState();
  }

  renderCollectionsPage();
}

function renderCollectionsPage() {
  const page = $('#page-collections');
  if (!page) return;

  const html = '<div class="collections-container">'
    + '<div class="collections-header">'
    + '<h3 style="color:var(--text-heading);margin:0">My Collections</h3>'
    + '<div class="collections-actions">'
    + '<button class="hero-btn primary-btn" id="createCollectionBtn"><i class="fas fa-plus"></i> New Collection</button>'
    + '<button class="hero-btn secondary-btn" id="importCollectionBtn"><i class="fas fa-file-import"></i> Import</button>'
    + '<button class="hero-btn secondary-btn" id="exportAllCollectionsBtn"><i class="fas fa-file-export"></i> Export All</button>'
    + '</div>'
    + '</div>'
    + '<div class="collections-grid" id="collectionsGrid"></div>'
    + '</div>'
    + '<div class="modal-overlay hidden" id="collectionDetailModal"><div class="modal-content collection-detail-content">'
    + '<button class="modal-close-btn" id="collectionDetailClose"><i class="fas fa-times"></i></button>'
    + '<div id="collectionDetailBody"></div>'
    + '</div></div>'
    + '<div class="modal-overlay hidden" id="createCollectionModal"><div class="modal-content create-collection-content">'
    + '<button class="modal-close-btn" id="createCollectionClose"><i class="fas fa-times"></i></button>'
    + '<h3 style="color:var(--text-heading);margin-bottom:1rem">Create New Collection</h3>'
    + '<div class="form-group"><label>Name</label><input type="text" id="newCollectionName" class="form-input" placeholder="Collection name..."></div>'
    + '<div class="form-group"><label>Description</label><input type="text" id="newCollectionDesc" class="form-input" placeholder="Brief description..."></div>'
    + '<div class="form-group"><label>Icon</label><div class="icon-picker" id="collectionIconPicker"></div></div>'
    + '<div class="form-group"><label>Color</label><div class="color-picker" id="collectionColorPicker"></div></div>'
    + '<div style="display:flex;gap:0.5rem;margin-top:1rem">'
    + '<button class="hero-btn primary-btn" id="saveNewCollectionBtn"><i class="fas fa-save"></i> Create</button>'
    + '<button class="hero-btn secondary-btn" id="cancelNewCollectionBtn"><i class="fas fa-times"></i> Cancel</button>'
    + '</div>'
    + '</div></div>'
    + '<div class="modal-overlay hidden" id="addToCollectionModal"><div class="modal-content add-to-collection-content">'
    + '<button class="modal-close-btn" id="addToCollectionClose"><i class="fas fa-times"></i></button>'
    + '<h3 style="color:var(--text-heading);margin-bottom:1rem">Add to Collection</h3>'
    + '<div id="addToCollectionList"></div>'
    + '</div></div>';

  page.innerHTML = html;

  $('#createCollectionBtn').addEventListener('click', showCreateCollectionModal);
  $('#importCollectionBtn').addEventListener('click', importCollection);
  $('#exportAllCollectionsBtn').addEventListener('click', () => exportCollection('all'));
  $('#collectionDetailClose').addEventListener('click', () => $('#collectionDetailModal').classList.add('hidden'));
  $('#createCollectionClose').addEventListener('click', () => $('#createCollectionModal').classList.add('hidden'));
  $('#cancelNewCollectionBtn').addEventListener('click', () => $('#createCollectionModal').classList.add('hidden'));
  $('#addToCollectionClose').addEventListener('click', () => $('#addToCollectionModal').classList.add('hidden'));

  renderCollections();
}

function renderCollections() {
  const grid = $('#collectionsGrid');
  if (!grid) return;

  if (!state.collections.length) {
    grid.innerHTML = '<div class="empty-state"><i class="fas fa-folder-open"></i><h3>No collections yet</h3><p>Create your first collection to organize your favorite verses.</p></div>';
    return;
  }

  grid.innerHTML = state.collections.map((col, idx) => {
    return '<div class="collection-card" data-idx="' + idx + '" style="border-top:3px solid ' + (col.color || 'var(--color-accent)') + '">'
      + '<div class="collection-card-icon" style="color:' + (col.color || 'var(--color-accent)') + '"><i class="fas ' + (col.icon || 'fa-folder') + '"></i></div>'
      + '<div class="collection-card-body">'
      + '<div class="collection-card-name">' + col.name + '</div>'
      + '<div class="collection-card-desc">' + (col.description || '') + '</div>'
      + '<div class="collection-card-count">' + col.items.length + ' items</div>'
      + '</div>'
      + '<div class="collection-card-actions">'
      + '<button class="ayah-action-btn collection-view-btn" data-idx="' + idx + '" title="View"><i class="fas fa-eye"></i></button>'
      + '<button class="ayah-action-btn collection-share-btn" data-idx="' + idx + '" title="Share"><i class="fas fa-share-alt"></i></button>'
      + '<button class="ayah-action-btn collection-export-btn" data-idx="' + idx + '" title="Export"><i class="fas fa-download"></i></button>'
      + (!col.isDefault ? '<button class="ayah-action-btn collection-delete-btn" data-idx="' + idx + '" title="Delete"><i class="fas fa-trash"></i></button>' : '')
      + '</div>'
      + '</div>';
  }).join('');

  grid.querySelectorAll('.collection-view-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); showCollectionDetail(+btn.dataset.idx); });
  });
  grid.querySelectorAll('.collection-share-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); shareCollection(+btn.dataset.idx); });
  });
  grid.querySelectorAll('.collection-export-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); exportCollection(+btn.dataset.idx); });
  });
  grid.querySelectorAll('.collection-delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (confirm('Delete this collection?')) {
        state.collections.splice(+btn.dataset.idx, 1);
        saveState();
        renderCollections();
        showToast('Collection deleted', 'info');
      }
    });
  });

  grid.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('click', () => showCollectionDetail(+card.dataset.idx));
  });
}

function showCreateCollectionModal() {
  $('#createCollectionModal').classList.remove('hidden');
  $('#newCollectionName').value = '';
  $('#newCollectionDesc').value = '';

  const icons = ['fa-folder', 'fa-heart', 'fa-star', 'fa-bookmark', 'fa-brain', 'fa-graduation-cap', 'fa-book', 'fa-quran', 'fa-mosque', 'fa-pray', 'fa-moon', 'fa-sun', 'fa-leaf', 'fa-gem', 'fa-crown', 'fa-feather-alt'];
  const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#1abc9c', '#3498db', '#9b59b6', '#d4af37', '#e84393', '#00b894'];

  let selectedIcon = 'fa-folder';
  let selectedColor = '#d4af37';

  const iconPicker = $('#collectionIconPicker');
  iconPicker.innerHTML = icons.map(ic => '<button class="icon-pick-btn' + (ic === selectedIcon ? ' active' : '') + '" data-icon="' + ic + '"><i class="fas ' + ic + '"></i></button>').join('');
  iconPicker.querySelectorAll('.icon-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      iconPicker.querySelectorAll('.icon-pick-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedIcon = btn.dataset.icon;
    });
  });

  const colorPicker = $('#collectionColorPicker');
  colorPicker.innerHTML = colors.map(c => '<button class="color-pick-btn' + (c === selectedColor ? ' active' : '') + '" data-color="' + c + '" style="background:' + c + '"></button>').join('');
  colorPicker.querySelectorAll('.color-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      colorPicker.querySelectorAll('.color-pick-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedColor = btn.dataset.color;
    });
  });

  const saveBtn = $('#saveNewCollectionBtn');
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
  newSaveBtn.addEventListener('click', () => {
    const name = $('#newCollectionName').value.trim();
    if (!name) { showToast('Enter a name', 'warning'); return; }
    createCollection(name, $('#newCollectionDesc').value.trim(), selectedIcon, selectedColor);
    $('#createCollectionModal').classList.add('hidden');
  });
}

function createCollection(name, description, icon, color) {
  const col = {
    id: 'col_' + Date.now(),
    name: name,
    description: description || '',
    icon: icon || 'fa-folder',
    color: color || 'var(--color-accent)',
    items: [],
    createdAt: new Date().toISOString(),
    isDefault: false
  };
  state.collections.push(col);
  saveState();
  renderCollections();
  showToast('Collection created!', 'success');
  checkAchievement('collection');
}

function showAddToCollectionModal(surah, ayah) {
  const modal = $('#addToCollectionModal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const list = $('#addToCollectionList');
  if (!state.collections.length) {
    list.innerHTML = '<div class="empty-state"><p>No collections. Create one first.</p></div>';
    return;
  }

  list.innerHTML = state.collections.map((col, idx) => {
    const alreadyAdded = col.items.some(i => i.surah === surah && i.ayah === ayah);
    return '<div class="add-to-col-item" data-idx="' + idx + '">'
      + '<div class="add-to-col-icon" style="color:' + (col.color || 'var(--color-accent)') + '"><i class="fas ' + (col.icon || 'fa-folder') + '"></i></div>'
      + '<div class="add-to-col-info">'
      + '<div class="add-to-col-name">' + col.name + '</div>'
      + '<div class="add-to-col-count">' + col.items.length + ' items</div>'
      + '</div>'
      + (alreadyAdded
        ? '<span style="color:var(--color-accent);font-size:var(--fs-sm)"><i class="fas fa-check"></i> Added</span>'
        : '<button class="hero-btn primary-btn add-to-col-btn" data-idx="' + idx + '" data-s="' + surah + '" data-a="' + ayah + '" style="padding:4px 12px;font-size:var(--fs-xs)"><i class="fas fa-plus"></i> Add</button>')
      + '</div>';
  }).join('');

  list.querySelectorAll('.add-to-col-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCollection(+btn.dataset.idx, +btn.dataset.s, +btn.dataset.a);
      showAddToCollectionModal(surah, ayah);
    });
  });
}

function addToCollection(colIdx, surah, ayah) {
  const col = state.collections[colIdx];
  if (!col) return;
  if (col.items.some(i => i.surah === surah && i.ayah === ayah)) {
    showToast('Already in this collection', 'info');
    return;
  }
  col.items.push({
    surah: surah,
    ayah: ayah,
    surahName: SURAH_DATA[surah - 1].englishName,
    addedAt: new Date().toISOString()
  });
  saveState();
  showToast('Added to ' + col.name, 'success');
}

function removeFromCollection(colIdx, itemIdx) {
  const col = state.collections[colIdx];
  if (!col) return;
  col.items.splice(itemIdx, 1);
  saveState();
  showCollectionDetail(colIdx);
  showToast('Removed from collection', 'info');
}

function showCollectionDetail(colIdx) {
  const col = state.collections[colIdx];
  if (!col) return;

  const body = $('#collectionDetailBody');
  body.innerHTML = '<div class="col-detail-header" style="border-bottom:3px solid ' + (col.color || 'var(--color-accent)') + '">'
    + '<div class="col-detail-icon" style="color:' + (col.color || 'var(--color-accent)') + '"><i class="fas ' + (col.icon || 'fa-folder') + '"></i></div>'
    + '<h2>' + col.name + '</h2>'
    + '<p>' + (col.description || '') + '</p>'
    + '<div class="col-detail-meta">' + col.items.length + ' items &bull; Created ' + new Date(col.createdAt).toLocaleDateString() + '</div>'
    + '</div>'
    + '<div class="col-detail-items">'
    + (col.items.length === 0
      ? '<div class="empty-state"><i class="fas fa-folder-open"></i><p>No items yet. Add ayahs from the Quran reader.</p></div>'
      : col.items.map((item, i) =>
        '<div class="col-item">'
        + '<div class="col-item-ref"><i class="fas fa-quran"></i> ' + item.surahName + ' ' + item.surah + ':' + item.ayah + '</div>'
        + '<div class="col-item-actions">'
        + '<button class="ayah-action-btn" onclick="state.currentSurah=' + item.surah + ';navigateTo(\'quran\');loadSurah(' + item.surah + ')"><i class="fas fa-book-open"></i></button>'
        + '<button class="ayah-action-btn" onclick="removeFromCollection(' + colIdx + ',' + i + ')"><i class="fas fa-trash"></i></button>'
        + '</div>'
        + '</div>'
      ).join(''))
    + '</div>';

  $('#collectionDetailModal').classList.remove('hidden');
}

function shareCollection(colIdx) {
  const col = state.collections[colIdx];
  if (!col) return;
  let text = 'Collection: ' + col.name + '\n' + (col.description || '') + '\n\n';
  col.items.forEach((item, i) => {
    text += (i + 1) + '. ' + item.surahName + ' ' + item.surah + ':' + item.ayah + '\n';
  });
  text += '\n-- Shared from Al-Quran Al-Kareem App';
  navigator.clipboard.writeText(text).then(() => showToast('Collection copied to clipboard!', 'success'));
}

function exportCollection(indexOrAll) {
  let data;
  if (indexOrAll === 'all') {
    data = state.collections;
  } else {
    data = [state.collections[indexOrAll]];
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'quran-collections.json';
  a.click();
  showToast('Exported!', 'success');
}

function importCollection() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.addEventListener('change', e => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        const cols = Array.isArray(data) ? data : [data];
        cols.forEach(col => {
          if (col.name && col.items) {
            col.id = 'imp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
            col.isDefault = false;
            state.collections.push(col);
          }
        });
        saveState();
        renderCollections();
        showToast('Imported ' + cols.length + ' collection(s)!', 'success');
      } catch { showToast('Invalid file', 'error'); }
    };
    reader.readAsText(f);
  });
  input.click();
}

/* ============================================================
   6. WORD-BY-WORD MODE
   ============================================================ */

function initWordByWord() {
  /* Word-by-word mode is toggled from settings or reader toolbar */
}

function loadWordByWord(surah, ayah) {
  showToast('Word-by-word mode: Loading detailed analysis...', 'info');
  state.wordByWordActive = true;
  /* In a full implementation, this would fetch word-by-word data from an API */
}

function renderWordByWord(words) {
  /* Renders each Arabic word with translation underneath */
  const container = document.createElement('div');
  container.className = 'word-by-word-container';

  if (!words || !words.length) {
    container.innerHTML = '<p class="wbw-placeholder">Word-by-word analysis will be displayed here when available. Each Arabic word will be shown with its individual translation, root word, and grammatical information.</p>';
    return container;
  }

  words.forEach((word, idx) => {
    const wordEl = document.createElement('div');
    wordEl.className = 'wbw-word';
    wordEl.dataset.idx = idx;
    wordEl.innerHTML = '<div class="wbw-arabic">' + (word.arabic || '') + '</div>'
      + '<div class="wbw-transliteration">' + (word.transliteration || '') + '</div>'
      + '<div class="wbw-translation">' + (word.translation || '') + '</div>'
      + (word.grammar ? '<div class="wbw-grammar wbw-grammar-' + word.grammar + '">' + word.grammar + '</div>' : '');
    wordEl.addEventListener('click', () => showWordPopup(word, wordEl));
    container.appendChild(wordEl);
  });

  return container;
}

function showWordPopup(word, el) {
  const existing = document.querySelector('.wbw-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.className = 'wbw-popup';
  popup.innerHTML = '<div class="wbw-popup-header">'
    + '<div class="wbw-popup-arabic">' + (word.arabic || '') + '</div>'
    + '<button class="wbw-popup-close" onclick="this.closest(\'.wbw-popup\').remove()"><i class="fas fa-times"></i></button>'
    + '</div>'
    + '<div class="wbw-popup-body">'
    + '<div class="wbw-popup-row"><span>Transliteration:</span> ' + (word.transliteration || 'N/A') + '</div>'
    + '<div class="wbw-popup-row"><span>Translation:</span> ' + (word.translation || 'N/A') + '</div>'
    + '<div class="wbw-popup-row"><span>Root:</span> ' + (word.root || 'N/A') + '</div>'
    + '<div class="wbw-popup-row"><span>Morphology:</span> ' + (word.morphology || 'N/A') + '</div>'
    + '<div class="wbw-popup-row"><span>Grammar:</span> ' + (word.grammar || 'N/A') + '</div>'
    + '</div>';

  el.style.position = 'relative';
  el.appendChild(popup);
}

/* ============================================================
   7. ONBOARDING
   ============================================================ */

const ONBOARDING_STEPS = [
  {
    title: 'Assalamu Alaikum!',
    description: 'Welcome to Al-Quran Al-Kareem, your comprehensive Quran companion app. Let us give you a quick tour of the features.',
    icon: 'fa-quran',
    image: null
  },
  {
    title: 'Read the Quran',
    description: 'Access all 114 surahs with Arabic text, English translation, and Bangla translation. Navigate easily between surahs and ayahs.',
    icon: 'fa-book-open',
    image: null
  },
  {
    title: 'Listen & Learn',
    description: 'Listen to beautiful recitations from world-renowned reciters. Adjust playback speed and follow along with highlighted ayahs.',
    icon: 'fa-headphones',
    image: null
  },
  {
    title: 'Bookmark & Notes',
    description: 'Save your favorite verses, add personal notes, and organize them into collections for easy access later.',
    icon: 'fa-heart',
    image: null
  },
  {
    title: 'Study & Explore',
    description: 'Explore tafsir topics, learn the 99 Names of Allah, read stories of the prophets, and deepen your understanding.',
    icon: 'fa-graduation-cap',
    image: null
  },
  {
    title: 'Track Your Progress',
    description: 'Set reading plans, track your streaks, earn achievements, and view detailed statistics of your Quran journey.',
    icon: 'fa-chart-line',
    image: null
  },
  {
    title: 'Customize Your Experience',
    description: 'Choose from multiple themes, adjust font sizes, select your preferred reciters, and personalize every aspect of the app.',
    icon: 'fa-palette',
    image: null
  },
  {
    title: 'Choose Your Theme',
    description: 'Select a theme that suits your reading preference. You can always change this later in Settings.',
    icon: 'fa-moon',
    image: null,
    action: 'theme-select'
  },
  {
    title: 'Ready to Begin!',
    description: 'Bismillah! Your journey with the Quran starts now. May Allah bless your reading and grant you understanding.',
    icon: 'fa-star',
    image: null
  }
];

let onboardingStep = 0;

function initOnboarding() {
  if (state.onboardingComplete) return;
  /* Show onboarding after loading screen finishes */
  setTimeout(() => {
    if (!state.onboardingComplete) {
      showOnboarding();
    }
  }, 3000);
}

function showOnboarding() {
  onboardingStep = 0;
  const overlay = document.createElement('div');
  overlay.className = 'onboarding-overlay';
  overlay.id = 'onboardingOverlay';
  overlay.innerHTML = '<div class="onboarding-card" id="onboardingCard">'
    + '<div class="onboarding-progress" id="onboardingProgress"></div>'
    + '<div class="onboarding-content" id="onboardingContent"></div>'
    + '<div class="onboarding-nav">'
    + '<button class="onboarding-skip" id="onboardingSkip">Skip Tour</button>'
    + '<div class="onboarding-dots" id="onboardingDots"></div>'
    + '<button class="hero-btn primary-btn" id="onboardingNext"><span>Next</span> <i class="fas fa-arrow-right"></i></button>'
    + '</div>'
    + '</div>';
  document.body.appendChild(overlay);

  const dots = $('#onboardingDots');
  ONBOARDING_STEPS.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'onboarding-dot' + (i === 0 ? ' active' : '');
    dots.appendChild(dot);
  });

  $('#onboardingSkip').addEventListener('click', skipOnboarding);
  $('#onboardingNext').addEventListener('click', nextStep);

  renderOnboardingStep();
}

function renderOnboardingStep() {
  const step = ONBOARDING_STEPS[onboardingStep];
  if (!step) return;

  const content = $('#onboardingContent');
  const progress = $('#onboardingProgress');
  const nextBtn = $('#onboardingNext');

  if (progress) {
    progress.innerHTML = '<div class="onboarding-progress-fill" style="width:' + ((onboardingStep + 1) / ONBOARDING_STEPS.length * 100) + '%"></div>';
  }

  let extraHTML = '';
  if (step.action === 'theme-select') {
    extraHTML = '<div class="onboarding-theme-grid">'
      + ['dark', 'light', 'sepia', 'midnight', 'emerald', 'royal'].map(t =>
        '<button class="onboarding-theme-btn' + (state.theme === t ? ' active' : '') + '" data-theme="' + t + '">'
        + '<i class="fas ' + ({dark:'fa-moon',light:'fa-sun',sepia:'fa-book',midnight:'fa-star',emerald:'fa-leaf',royal:'fa-crown'}[t]) + '"></i>'
        + '<span>' + t.charAt(0).toUpperCase() + t.slice(1) + '</span>'
        + '</button>'
      ).join('')
      + '</div>';
  }

  content.innerHTML = '<div class="onboarding-icon"><i class="fas ' + step.icon + '"></i></div>'
    + '<h2 class="onboarding-title">' + step.title + '</h2>'
    + '<p class="onboarding-desc">' + step.description + '</p>'
    + extraHTML;

  if (step.action === 'theme-select') {
    content.querySelectorAll('.onboarding-theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        content.querySelectorAll('.onboarding-theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyTheme(btn.dataset.theme);
      });
    });
  }

  $$('.onboarding-dot').forEach((dot, i) => dot.classList.toggle('active', i === onboardingStep));

  if (onboardingStep === ONBOARDING_STEPS.length - 1) {
    nextBtn.innerHTML = '<i class="fas fa-check"></i> <span>Start Reading</span>';
  } else {
    nextBtn.innerHTML = '<span>Next</span> <i class="fas fa-arrow-right"></i>';
  }
}

function nextStep() {
  onboardingStep++;
  if (onboardingStep >= ONBOARDING_STEPS.length) {
    completeOnboarding();
    return;
  }
  renderOnboardingStep();
}

function skipOnboarding() {
  completeOnboarding();
}

function completeOnboarding() {
  state.onboardingComplete = true;
  saveState();
  const overlay = $('#onboardingOverlay');
  if (overlay) {
    overlay.classList.add('onboarding-fade-out');
    setTimeout(() => overlay.remove(), 500);
  }
  showToast('Welcome! Bismillah, let\'s begin.', 'success');
}

/* ============================================================
   8. ENHANCED / ADVANCED SEARCH
   ============================================================ */

function initAdvancedSearch() {
  const page = $('#page-advanced-search');
  if (!page) return;

  page.innerHTML = '<div class="advanced-search-container">'
    + '<div class="adv-search-header">'
    + '<h3 style="color:var(--text-heading)">Advanced Search</h3>'
    + '<p style="color:var(--text-muted);font-size:var(--fs-sm)">Search with filters for more precise results</p>'
    + '</div>'
    + '<div class="adv-search-form">'
    + '<div class="adv-search-input-wrap">'
    + '<input type="text" id="advSearchInput" class="adv-search-input" placeholder="Enter search query...">'
    + '<button class="hero-btn primary-btn" id="advSearchBtn"><i class="fas fa-search"></i> Search</button>'
    + '</div>'
    + '<div class="adv-search-filters">'
    + '<div class="adv-filter-group">'
    + '<label>Surah Range</label>'
    + '<div class="adv-range-inputs">'
    + '<input type="number" id="advSurahFrom" min="1" max="114" value="1" class="adv-range-input"> to '
    + '<input type="number" id="advSurahTo" min="1" max="114" value="114" class="adv-range-input">'
    + '</div>'
    + '</div>'
    + '<div class="adv-filter-group">'
    + '<label>Revelation Type</label>'
    + '<select id="advRevelationType" class="adv-filter-select">'
    + '<option value="all">All</option><option value="meccan">Meccan</option><option value="medinan">Medinan</option>'
    + '</select>'
    + '</div>'
    + '<div class="adv-filter-group">'
    + '<label>Juz</label>'
    + '<select id="advJuzFilter" class="adv-filter-select">'
    + '<option value="0">All Juz</option>'
    + Array.from({length:30}, (_,i) => '<option value="' + (i+1) + '">Juz ' + (i+1) + '</option>').join('')
    + '</select>'
    + '</div>'
    + '<div class="adv-filter-group">'
    + '<label>Search In</label>'
    + '<div class="adv-search-langs">'
    + '<label class="adv-lang-check"><input type="checkbox" id="advSearchArabic" checked> Arabic</label>'
    + '<label class="adv-lang-check"><input type="checkbox" id="advSearchEnglish" checked> English</label>'
    + '<label class="adv-lang-check"><input type="checkbox" id="advSearchBangla" checked> Bangla</label>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="adv-search-suggestions" id="advSearchSuggestions"></div>'
    + '<div class="adv-search-history" id="advSearchHistory"></div>'
    + '<div class="adv-search-results" id="advSearchResults"></div>'
    + '</div>';

  $('#advSearchBtn').addEventListener('click', searchWithFilters);
  $('#advSearchInput').addEventListener('keydown', e => { if (e.key === 'Enter') searchWithFilters(); });
  $('#advSearchInput').addEventListener('input', debounce(e => {
    renderSearchSuggestions(e.target.value);
  }, 200));
  $('#advSearchInput').addEventListener('focus', () => {
    renderSearchHistory();
  });

  renderSearchHistory();
}

async function searchWithFilters() {
  const query = ($('#advSearchInput')?.value || '').trim();
  if (!query) { showToast('Enter a search query', 'warning'); return; }

  addToSearchHistory(query);

  const fromSurah = +($('#advSurahFrom')?.value || 1);
  const toSurah = +($('#advSurahTo')?.value || 114);
  const revType = $('#advRevelationType')?.value || 'all';
  const juzFilter = +($('#advJuzFilter')?.value || 0);

  const results = $('#advSearchResults');
  results.innerHTML = '<div class="ayahs-loading"><div class="spinner"></div><p>Searching with filters...</p></div>';

  const langs = [];
  if ($('#advSearchArabic')?.checked) langs.push('quran-uthmani');
  if ($('#advSearchEnglish')?.checked) langs.push(state.settings.englishTranslator);
  if ($('#advSearchBangla')?.checked) langs.push(state.settings.banglaTranslator);

  if (!langs.length) { results.innerHTML = '<div class="empty-state"><p>Select at least one language</p></div>'; return; }

  let allResults = [];
  for (const lang of langs) {
    const data = await fetchAPI(API_BASE + '/search/' + encodeURIComponent(query) + '/all/' + lang);
    if (data && data.code === 200 && data.data.matches) {
      allResults = allResults.concat(data.data.matches.map(m => ({
        surah: m.surah.number,
        surahName: m.surah.englishName,
        ayah: m.numberInSurah,
        text: m.text,
        edition: m.edition.identifier,
        revelationType: SURAH_DATA[m.surah.number - 1].revelationType.toLowerCase(),
        juz: SURAH_DATA[m.surah.number - 1].juz
      })));
    }
  }

  const seen = new Set();
  allResults = allResults.filter(r => {
    const k = r.surah + ':' + r.ayah;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  allResults = allResults.filter(r => {
    if (r.surah < fromSurah || r.surah > toSurah) return false;
    if (revType !== 'all' && r.revelationType !== revType) return false;
    if (juzFilter > 0 && !r.juz.includes(juzFilter)) return false;
    return true;
  });

  if (!allResults.length) {
    results.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><h3>No results found</h3><p>Try broadening your filters or using different keywords.</p></div>';
    return;
  }

  results.innerHTML = '<div style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:1rem">'
    + allResults.length + ' result(s) found</div>'
    + allResults.slice(0, 100).map(r => {
      const highlighted = r.text.replace(new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
      return '<div class="search-result-item adv-result" data-s="' + r.surah + '">'
        + '<div class="search-result-ref">'
        + '<span>' + r.surahName + ' ' + r.surah + ':' + r.ayah + '</span>'
        + '<span class="result-meta">' + r.revelationType + ' | Juz ' + r.juz.join(',') + '</span>'
        + '</div>'
        + '<div class="search-result-text">' + highlighted + '</div>'
        + '</div>';
    }).join('');

  results.querySelectorAll('.adv-result').forEach(item => {
    item.addEventListener('click', () => {
      state.currentSurah = +item.dataset.s;
      navigateTo('quran');
      loadSurah(+item.dataset.s);
    });
  });

  checkAchievement('seeker');
}

function renderSearchSuggestions(query) {
  const container = $('#advSearchSuggestions');
  if (!container) return;
  if (!query || query.length < 2) { container.innerHTML = ''; return; }

  const q = query.toLowerCase();
  const suggestions = [];

  SURAH_DATA.forEach(s => {
    if (s.englishName.toLowerCase().includes(q) || s.englishNameTranslation.toLowerCase().includes(q)) {
      suggestions.push({ type: 'surah', text: s.englishName + ' - ' + s.englishNameTranslation, surah: s.number });
    }
  });

  if (typeof PROPHETS_IN_QURAN !== 'undefined') {
    PROPHETS_IN_QURAN.forEach(p => {
      if (p.english.toLowerCase().includes(q)) {
        suggestions.push({ type: 'prophet', text: 'Prophet ' + p.english, query: p.english });
      }
    });
  }

  const topicSuggestions = TAFSIR_TOPICS.filter(t => t.title.toLowerCase().includes(q));
  topicSuggestions.forEach(t => {
    suggestions.push({ type: 'topic', text: 'Topic: ' + t.title, query: t.title });
  });

  if (!suggestions.length) { container.innerHTML = ''; return; }

  container.innerHTML = '<div class="suggestions-list">'
    + suggestions.slice(0, 8).map(s => {
      const icon = s.type === 'surah' ? 'fa-book' : s.type === 'prophet' ? 'fa-user' : 'fa-tag';
      return '<div class="suggestion-item" data-query="' + (s.query || s.text) + '" data-surah="' + (s.surah || 0) + '">'
        + '<i class="fas ' + icon + '"></i> ' + s.text + '</div>';
    }).join('')
    + '</div>';

  container.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const surah = +item.dataset.surah;
      if (surah > 0) {
        state.currentSurah = surah;
        navigateTo('quran');
        loadSurah(surah);
      } else {
        $('#advSearchInput').value = item.dataset.query;
        container.innerHTML = '';
        searchWithFilters();
      }
    });
  });
}

function addToSearchHistory(query) {
  if (!query) return;
  state.searchHistory = state.searchHistory.filter(h => h !== query);
  state.searchHistory.unshift(query);
  if (state.searchHistory.length > 20) state.searchHistory.pop();
  saveState();
}

function renderSearchHistory() {
  const container = $('#advSearchHistory');
  if (!container) return;
  if (!state.searchHistory.length) { container.innerHTML = ''; return; }

  container.innerHTML = '<div class="search-history-header">'
    + '<span style="font-weight:600;color:var(--text-secondary);font-size:var(--fs-sm)"><i class="fas fa-history"></i> Recent Searches</span>'
    + '<button class="ayah-action-btn" onclick="state.searchHistory=[];saveState();renderSearchHistory()" title="Clear history"><i class="fas fa-trash"></i></button>'
    + '</div>'
    + '<div class="search-history-list">'
    + state.searchHistory.slice(0, 10).map(q =>
      '<button class="search-history-item" data-q="' + q + '"><i class="fas fa-search"></i> ' + q + '</button>'
    ).join('')
    + '</div>';

  container.querySelectorAll('.search-history-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = $('#advSearchInput');
      if (input) input.value = btn.dataset.q;
      searchWithFilters();
    });
  });
}

/* ============================================================
   9. READING PLAN TEMPLATES (EXPANDED)
   ============================================================ */

const READING_PLAN_TEMPLATES = [
  { id: 'beginner_30', name: '30-Day Beginner', description: 'Read short surahs daily, perfect for beginners.', days: 30, difficulty: 'easy', dailyTarget: '1-2 pages', icon: 'fa-seedling' },
  { id: 'moderate_30', name: '30-Day Khatm', description: 'Complete the entire Quran in 30 days (1 Juz per day).', days: 30, difficulty: 'moderate', dailyTarget: '1 Juz (~20 pages)', icon: 'fa-book' },
  { id: 'ramadan', name: 'Ramadan Special', description: 'Khatm during Ramadan with extra ibadah suggestions.', days: 30, difficulty: 'moderate', dailyTarget: '1 Juz + daily duas', icon: 'fa-moon' },
  { id: 'gentle_60', name: '60-Day Gentle', description: 'A relaxed pace to read the Quran over 2 months.', days: 60, difficulty: 'easy', dailyTarget: 'Half Juz (~10 pages)', icon: 'fa-feather-alt' },
  { id: 'study_90', name: '90-Day Study Plan', description: 'Read with tafsir and reflection. Quality over quantity.', days: 90, difficulty: 'moderate', dailyTarget: '5-10 verses with tafsir', icon: 'fa-graduation-cap' },
  { id: 'memorize', name: 'Juz Amma Memorization', description: 'Memorize Juz 30 (short surahs) over 30 days.', days: 30, difficulty: 'hard', dailyTarget: '1-2 surahs from Juz 30', icon: 'fa-brain' },
  { id: 'weekly', name: 'Weekly Reader', description: 'Read specific surahs on designated days of the week.', days: 7, difficulty: 'easy', dailyTarget: 'Selected surahs', icon: 'fa-calendar-week' },
  { id: 'custom', name: 'Custom Plan', description: 'Create your own reading plan with custom goals.', days: 0, difficulty: 'custom', dailyTarget: 'Your choice', icon: 'fa-cog' }
];

function initReadingPlanTemplates() {
  /* Templates are available on the reading plan page */
  const page = $('#page-reading-plan');
  if (!page) return;

  /* Enhance existing reading plan page with template selection */
  const templateSection = document.createElement('div');
  templateSection.className = 'plan-templates-section';
  templateSection.id = 'planTemplatesSection';

  templateSection.innerHTML = '<h3 style="color:var(--text-heading);margin-bottom:1rem"><i class="fas fa-clipboard-list"></i> Reading Plan Templates</h3>'
    + '<div class="plan-templates-grid">'
    + READING_PLAN_TEMPLATES.map(t =>
      '<div class="plan-template-card" data-id="' + t.id + '">'
      + '<div class="plan-template-icon"><i class="fas ' + t.icon + '"></i></div>'
      + '<div class="plan-template-body">'
      + '<div class="plan-template-name">' + t.name + '</div>'
      + '<div class="plan-template-desc">' + t.description + '</div>'
      + '<div class="plan-template-meta">'
      + (t.days > 0 ? '<span><i class="fas fa-calendar"></i> ' + t.days + ' days</span>' : '<span><i class="fas fa-cog"></i> Custom</span>')
      + '<span class="plan-difficulty plan-diff-' + t.difficulty + '">' + t.difficulty.charAt(0).toUpperCase() + t.difficulty.slice(1) + '</span>'
      + '<span><i class="fas fa-book-open"></i> ' + t.dailyTarget + '</span>'
      + '</div>'
      + '</div>'
      + '<button class="hero-btn primary-btn plan-template-select" data-id="' + t.id + '"><i class="fas fa-play"></i> Start</button>'
      + '</div>'
    ).join('')
    + '</div>'
    + '<div class="plan-calendar-section" id="planCalendarSection"></div>'
    + '<div class="plan-streak-section" id="planStreakSection"></div>';

  const existingContent = page.querySelector('#planSetup');
  if (existingContent) {
    existingContent.parentNode.insertBefore(templateSection, existingContent.nextSibling);
  } else {
    page.appendChild(templateSection);
  }

  templateSection.querySelectorAll('.plan-template-select').forEach(btn => {
    btn.addEventListener('click', () => selectPlanTemplate(btn.dataset.id));
  });

  renderPlanCalendar();
  calculatePlanStreak();
}

function selectPlanTemplate(templateId) {
  const template = READING_PLAN_TEMPLATES.find(t => t.id === templateId);
  if (!template) return;

  let days = template.days;
  if (templateId === 'custom') {
    days = +prompt('How many days for your plan?') || 30;
  }

  state.readingPlan = {
    type: templateId,
    name: template.name,
    days: days,
    startDate: new Date().toISOString(),
    completed: 0,
    dailyTarget: template.dailyTarget
  };
  saveState();
  showToast(template.name + ' started! (' + days + ' days)', 'success');
  renderReadingPlan();
  renderPlanCalendar();
}

function trackDailyProgress() {
  const today = new Date().toISOString().split('T')[0];
  if (!state.dailyPlanProgress[today]) {
    state.dailyPlanProgress[today] = { completed: true, surahs: [] };
  }
  if (state.currentSurah) {
    if (!state.dailyPlanProgress[today].surahs.includes(state.currentSurah)) {
      state.dailyPlanProgress[today].surahs.push(state.currentSurah);
    }
  }
  saveState();
  calculatePlanStreak();
}

function renderPlanCalendar() {
  const container = $('#planCalendarSection');
  if (!container) return;

  if (!state.readingPlan) {
    container.innerHTML = '';
    return;
  }

  const startDate = new Date(state.readingPlan.startDate);
  const days = state.readingPlan.days || 30;

  let calHTML = '<h4 style="color:var(--text-heading);margin:1rem 0"><i class="fas fa-calendar-alt"></i> Plan Calendar</h4>'
    + '<div class="plan-calendar-grid">';

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];
    const isToday = dateStr === new Date().toISOString().split('T')[0];
    const isCompleted = state.dailyPlanProgress[dateStr] && state.dailyPlanProgress[dateStr].completed;
    const isPast = date < new Date() && !isToday;

    calHTML += '<div class="plan-cal-day' + (isToday ? ' today' : '') + (isCompleted ? ' completed' : '') + (isPast && !isCompleted ? ' missed' : '') + '" title="Day ' + (i+1) + ': ' + dateStr + '">'
      + '<span class="plan-cal-num">' + (i + 1) + '</span>'
      + (isCompleted ? '<i class="fas fa-check"></i>' : '')
      + '</div>';
  }

  calHTML += '</div>';
  container.innerHTML = calHTML;
}

function calculatePlanStreak() {
  let streak = 0;
  const d = new Date();
  while (state.dailyPlanProgress[d.toISOString().split('T')[0]]) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  state.planStreak = streak;

  const container = $('#planStreakSection');
  if (!container) return;

  if (streak > 0) {
    container.innerHTML = '<div class="plan-streak-display">'
      + '<div class="streak-flames">' + (streak >= 7 ? '<i class="fas fa-fire"></i>' : '') + (streak >= 3 ? '<i class="fas fa-fire"></i>' : '') + '<i class="fas fa-fire"></i></div>'
      + '<div class="streak-count">' + streak + '</div>'
      + '<div class="streak-label">Day Streak</div>'
      + '</div>';
  } else {
    container.innerHTML = '';
  }
}

/* ============================================================
   10. ENHANCED STATISTICS
   ============================================================ */

function initEnhancedStatistics() {
  /* Enhanced statistics are rendered when the statistics page is visited */
}

function renderStatisticsCharts() {
  const s = state.statistics;
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekData = {};
  days.forEach(d => weekData[d] = 0);

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    weekData[days[d.getDay()]] = s.dailyActivity[d.toISOString().split('T')[0]] || 0;
  }

  const maxVal = Math.max(1, ...Object.values(weekData));
  let chartHTML = '<div class="enhanced-chart"><h4><i class="fas fa-chart-bar"></i> Weekly Activity</h4><div class="bar-chart">';
  Object.entries(weekData).forEach(([day, val]) => {
    const height = Math.max(4, (val / maxVal) * 100);
    chartHTML += '<div class="bar-col">'
      + '<div class="bar-value">' + val + '</div>'
      + '<div class="bar-fill-enhanced" style="height:' + height + '%"></div>'
      + '<div class="bar-label">' + day + '</div>'
      + '</div>';
  });
  chartHTML += '</div></div>';
  return chartHTML;
}

function renderReadingHeatmap() {
  const s = state.statistics;
  let html = '<div class="enhanced-heatmap"><h4><i class="fas fa-th"></i> Reading Heatmap (Last 90 Days)</h4><div class="heatmap-grid-enhanced">';

  for (let i = 89; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const k = d.toISOString().split('T')[0];
    const v = s.dailyActivity[k] || 0;
    const level = v === 0 ? 0 : v <= 2 ? 1 : v <= 5 ? 2 : v <= 10 ? 3 : 4;
    html += '<div class="heatmap-cell-enhanced level-' + level + '" title="' + k + ': ' + v + ' activities"></div>';
  }

  html += '</div><div class="heatmap-legend"><span>Less</span>';
  for (let l = 0; l <= 4; l++) {
    html += '<div class="heatmap-cell-enhanced level-' + l + '" style="width:12px;height:12px;display:inline-block"></div>';
  }
  html += '<span>More</span></div></div>';
  return html;
}

function renderMonthlyStats() {
  const s = state.statistics;
  const now = new Date();
  const months = [];

  for (let i = 5; i >= 0; i--) {
    const m = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthName = m.toLocaleDateString('en', { month: 'short', year: 'numeric' });
    let total = 0;
    const daysInMonth = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();

    for (let d = 1; d <= daysInMonth; d++) {
      const dateKey = new Date(m.getFullYear(), m.getMonth(), d).toISOString().split('T')[0];
      total += s.dailyActivity[dateKey] || 0;
    }

    months.push({ name: monthName, total: total });
  }

  const maxMonth = Math.max(1, ...months.map(m => m.total));

  let html = '<div class="monthly-stats"><h4><i class="fas fa-calendar-check"></i> Monthly Summary</h4><div class="monthly-grid">';
  months.forEach(m => {
    html += '<div class="monthly-card">'
      + '<div class="monthly-name">' + m.name + '</div>'
      + '<div class="monthly-bar"><div class="monthly-bar-fill" style="width:' + Math.max(4, m.total / maxMonth * 100) + '%"></div></div>'
      + '<div class="monthly-total">' + m.total + ' activities</div>'
      + '</div>';
  });
  html += '</div></div>';
  return html;
}

function exportStatistics() {
  const s = state.statistics;
  const data = {
    surahsRead: s.surahsRead.length,
    ayahsRead: s.ayahsRead,
    totalTime: formatHours(s.totalTimeSeconds),
    streak: s.streak,
    dailyActivity: s.dailyActivity,
    achievements: state.achievements,
    exportDate: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'quran-statistics.json';
  a.click();
  showToast('Statistics exported!', 'success');
}

/* ============================================================
   11. CONTEXT MENU
   ============================================================ */

function initContextMenu() {
  document.addEventListener('contextmenu', e => {
    const ayahCard = e.target.closest('.ayah-card');
    if (ayahCard && state.currentPage === 'quran') {
      e.preventDefault();
      const ayahNum = parseInt(ayahCard.id.replace('ayah-', ''));
      if (!isNaN(ayahNum)) {
        showContextMenu(e.clientX, e.clientY, state.currentSurah, ayahNum);
      }
    }
  });

  document.addEventListener('click', () => hideContextMenu());
  document.addEventListener('scroll', () => hideContextMenu());
}

function showContextMenu(x, y, surah, ayah) {
  hideContextMenu();

  const menu = document.createElement('div');
  menu.className = 'custom-context-menu';
  menu.id = 'customContextMenu';
  menu.setAttribute('role', 'menu');

  const items = [
    { icon: 'fa-copy', label: 'Copy Ayah', action: () => {
      const card = $('#ayah-' + ayah);
      if (card) {
        const ar = card.querySelector('.ayah-arabic')?.textContent || '';
        const en = card.querySelector('.ayah-translation')?.textContent || '';
        const bn = card.querySelector('.ayah-bangla')?.textContent || '';
        const ref = SURAH_DATA[surah-1].englishName + ' ' + surah + ':' + ayah;
        navigator.clipboard.writeText(ar + '\n\n' + en + '\n\n' + bn + '\n\n-- ' + ref).then(() => showToast('Copied!', 'success'));
      }
    }},
    { icon: 'fa-heart', label: 'Bookmark', action: () => toggleAyahBookmark(surah, ayah) },
    { icon: 'fa-sticky-note', label: 'Add Note', action: () => openNoteModal(surah, ayah) },
    { icon: 'fa-folder-plus', label: 'Add to Collection', action: () => showAddToCollectionModal(surah, ayah) },
    { icon: 'fa-share-alt', label: 'Share', action: () => shareAyah(surah, ayah) },
    { icon: 'fa-play', label: 'Play Audio', action: () => playAudio(surah, ayah) }
  ];

  menu.innerHTML = items.map(item =>
    '<button class="ctx-menu-item" role="menuitem">'
    + '<i class="fas ' + item.icon + '"></i> ' + item.label
    + '</button>'
  ).join('');

  document.body.appendChild(menu);

  const menuRect = menu.getBoundingClientRect();
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  if (x + menuRect.width > viewportW) x = viewportW - menuRect.width - 10;
  if (y + menuRect.height > viewportH) y = viewportH - menuRect.height - 10;
  if (x < 0) x = 10;
  if (y < 0) y = 10;

  menu.style.left = x + 'px';
  menu.style.top = y + 'px';

  menu.querySelectorAll('.ctx-menu-item').forEach((btn, idx) => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      items[idx].action();
      hideContextMenu();
    });
  });

  state.contextMenuTarget = { surah, ayah };
}

function hideContextMenu() {
  const menu = $('#customContextMenu');
  if (menu) menu.remove();
  state.contextMenuTarget = null;
}

/* ============================================================
   12. TOOLTIPS
   ============================================================ */

let tooltipTimeout = null;

function initTooltips() {
  document.addEventListener('mouseenter', e => {
    const target = e.target.closest('[data-tooltip]');
    if (target) {
      const text = target.getAttribute('data-tooltip');
      const delay = parseInt(target.getAttribute('data-tooltip-delay')) || 500;
      tooltipTimeout = setTimeout(() => showTooltip(target, text), delay);
    }
  }, true);

  document.addEventListener('mouseleave', e => {
    const target = e.target.closest('[data-tooltip]');
    if (target) {
      clearTimeout(tooltipTimeout);
      hideTooltip();
    }
  }, true);
}

function showTooltip(element, text) {
  hideTooltip();

  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.id = 'customTooltip';
  tooltip.textContent = text;
  document.body.appendChild(tooltip);

  const elRect = element.getBoundingClientRect();
  const ttRect = tooltip.getBoundingClientRect();
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  let left = elRect.left + (elRect.width - ttRect.width) / 2;
  let top = elRect.top - ttRect.height - 8;
  let position = 'top';

  if (top < 0) {
    top = elRect.bottom + 8;
    position = 'bottom';
  }

  if (left < 10) left = 10;
  if (left + ttRect.width > viewportW - 10) left = viewportW - ttRect.width - 10;

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
  tooltip.classList.add('tooltip-' + position);
  tooltip.classList.add('tooltip-visible');
}

function hideTooltip() {
  const tooltip = $('#customTooltip');
  if (tooltip) tooltip.remove();
}

/* ============================================================
   13. NOTIFICATION SYSTEM
   ============================================================ */

function initNotifications() {
  loadNotifications();
  scheduleDailyReminder();
}

function loadNotifications() {
  /* Load and render saved notifications */
  const list = $('#notifList');
  if (!list) return;

  if (!state.notifications.length) {
    addNotification('Welcome to Al-Quran Al-Kareem!', 'welcome', 'fa-star');
    return;
  }

  renderNotificationPanel();
}

function addNotification(message, type, icon) {
  const notif = {
    id: Date.now(),
    message: message,
    type: type || 'info',
    icon: icon || 'fa-bell',
    date: new Date().toISOString(),
    read: false
  };

  state.notifications.unshift(notif);
  if (state.notifications.length > 50) state.notifications.pop();
  saveState();
  renderNotificationPanel();
  updateNotificationBadge();
}

function renderNotificationPanel() {
  const list = $('#notifList');
  if (!list) return;

  if (!state.notifications.length) {
    list.innerHTML = '<div class="empty-state"><p>No notifications</p></div>';
    return;
  }

  list.innerHTML = state.notifications.slice(0, 20).map((n, i) =>
    '<div class="notif-item' + (n.read ? '' : ' unread') + '" data-idx="' + i + '">'
    + '<div class="notif-icon"><i class="fas ' + n.icon + '"></i></div>'
    + '<div class="notif-body">'
    + '<div class="notif-message">' + n.message + '</div>'
    + '<div class="notif-time">' + getRelativeTime(new Date(n.date)) + '</div>'
    + '</div>'
    + '</div>'
  ).join('');

  list.querySelectorAll('.notif-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = +item.dataset.idx;
      state.notifications[idx].read = true;
      saveState();
      renderNotificationPanel();
      updateNotificationBadge();
    });
  });
}

function updateNotificationBadge() {
  const unread = state.notifications.filter(n => !n.read).length;
  const badge = $('#notifBadge');
  if (badge) {
    badge.style.display = unread > 0 ? '' : 'none';
    badge.textContent = unread > 9 ? '9+' : unread;
  }
}

function getRelativeTime(date) {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
  return date.toLocaleDateString();
}

function scheduleDailyReminder() {
  if (!state.notificationPrefs.dailyReminder) return;

  /* Check every hour if it's time for a reminder */
  setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const today = now.toISOString().split('T')[0];
    const reminderKey = 'reminder_' + today;

    if (hour >= 8 && hour <= 10 && !localStorage.getItem(reminderKey)) {
      if (!state.statistics.dailyActivity[today]) {
        addNotification('Have you read the Quran today? Start your daily reading now!', 'reminder', 'fa-book-open');
        localStorage.setItem(reminderKey, '1');
      }
    }
  }, 3600000);
}

function scheduleNotification(message, delayMs, type, icon) {
  setTimeout(() => {
    addNotification(message, type || 'scheduled', icon || 'fa-bell');
  }, delayMs);
}

/* ============================================================
   14. TAJWEED RULES VIEWER
   ============================================================ */

const TAJWEED_RULE_DETAILS = [
  { id: 'ikhfa', name: 'Ikhfa (Concealment)', arabic: 'إخفاء', description: 'A sound between Izhar and Idgham, without tashdeed, while maintaining ghunnah. It occurs when Noon Sakinah or Tanween is followed by one of 15 specific letters.', letters: 'ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك', color: '#e74c3c', examples: ['مِن تَحْتِهَا', 'عِلْمٌ جَمّ', 'يَنصُرُكُم'], rules: 'The tongue does not touch the roof of the mouth completely. A nasal sound (ghunnah) accompanies the pronunciation for approximately 2 counts.' },
  { id: 'idgham_ghunnah', name: 'Idgham with Ghunnah', arabic: 'إدغام بغنة', description: 'Merging Noon Sakinah or Tanween into the following letter with a nasal sound. Occurs with letters Ya, Nun, Mim, Waw (يَنْمُو).', letters: 'ي ن م و', color: '#2ecc71', examples: ['مِن يَعْمَلُ', 'صِرَاطًا مُّسْتَقِيمًا'], rules: 'The Noon Sakinah or Tanween completely merges into the next letter. The ghunnah (nasal sound) lasts for 2 counts.' },
  { id: 'idgham_no_ghunnah', name: 'Idgham without Ghunnah', arabic: 'إدغام بلا غنة', description: 'Merging Noon Sakinah or Tanween into the following letter without nasal sound. Occurs with Lam and Ra.', letters: 'ل ر', color: '#3498db', examples: ['مِن رَّبِّهِمْ', 'هُدًى لِّلْمُتَّقِينَ'], rules: 'Complete merging without any nasal sound. The transition should be seamless and smooth.' },
  { id: 'izhar', name: 'Izhar (Clear Pronunciation)', arabic: 'إظهار', description: 'Pronouncing Noon Sakinah or Tanween clearly without ghunnah when followed by throat letters.', letters: 'ء هـ ع ح غ خ', color: '#f39c12', examples: ['مَنْ آمَنَ', 'عِلْمٌ حَقّ', 'مِنْ خَيْرٍ'], rules: 'The Noon Sakinah or Tanween is pronounced clearly and distinctly. No merging or concealment occurs. Each letter maintains its full sound.' },
  { id: 'iqlab', name: 'Iqlab (Conversion)', arabic: 'إقلاب', description: 'Converting Noon Sakinah or Tanween into Mim when followed by Ba.', letters: 'ب', color: '#9b59b6', examples: ['مِن بَعْدِ', 'سَمِيعٌ بَصِيرٌ', 'أَنبِئْهُم'], rules: 'The Noon sound changes to a Mim sound. A ghunnah of 2 counts accompanies this conversion. The lips come together as for Mim, not the teeth as for Noon.' },
  { id: 'qalqalah', name: 'Qalqalah (Echo)', arabic: 'قلقلة', description: 'A slight bouncing or echoing sound that occurs when pronouncing the Qalqalah letters in their sakin (non-voweled) state.', letters: 'ق ط ب ج د', color: '#e67e22', examples: ['يَخْلُقْ', 'أُحَدْ', 'لَهَبْ'], rules: 'Three levels: Minor (in the middle of a word), Medium (at the end of a word with continuation), Major (at the end of a verse when stopping). The echo should not create a new vowel sound.' },
  { id: 'ghunnah', name: 'Ghunnah (Nasalization)', arabic: 'غنة', description: 'A nasal sound that comes from the nose, lasting for approximately 2 counts. Present in Noon and Mim mushaddad.', letters: 'نّ مّ', color: '#1abc9c', examples: ['إِنَّ', 'ثُمَّ', 'مِنَّا'], rules: 'The ghunnah should last for exactly 2 counts (harakaat). It should be a smooth, continuous nasal sound without interruption.' },
  { id: 'madd', name: 'Madd (Prolongation)', arabic: 'مد', description: 'Extending the sound of a vowel letter. The base madd is 2 counts, and can be extended to 4, 5, or 6 counts depending on the type.', letters: 'ا و ي', color: '#d35400', examples: ['قَالَ', 'يَقُولُ', 'فِي'], rules: 'Natural Madd (2 counts), Connected Madd (4-5 counts), Separated Madd (4-5 counts), Necessary Madd (6 counts), Soft Madd (2-4-6 counts).' },
  { id: 'lam_shamsiyyah', name: 'Lam Shamsiyyah (Solar Lam)', arabic: 'لام شمسية', description: 'When the Lam of the definite article (Al) is assimilated into the following letter (one of the 14 solar letters).', letters: 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن', color: '#c0392b', examples: ['الشَّمْس', 'النَّاس', 'الرَّحْمَن'], rules: 'The Lam is not pronounced; instead, the following letter is pronounced with emphasis (tashdeed/shaddah).' },
  { id: 'lam_qamariyyah', name: 'Lam Qamariyyah (Lunar Lam)', arabic: 'لام قمرية', description: 'When the Lam of the definite article (Al) is clearly pronounced because it is followed by one of the 14 lunar letters.', letters: 'ا ب ج ح خ ع غ ف ق ك م و هـ ي', color: '#2980b9', examples: ['الْقَمَر', 'الْكِتَاب', 'الْحَمْد'], rules: 'The Lam is pronounced clearly and distinctly before the following letter. There is no assimilation.' }
];

function renderTajweedRules() {
  return '<div class="tajweed-section">'
    + '<h3><i class="fas fa-palette"></i> Tajweed Rules Reference</h3>'
    + '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:1rem">Understanding tajweed rules helps in reciting the Quran correctly.</p>'
    + '<div class="tajweed-rules-grid">'
    + TAJWEED_RULE_DETAILS.map(rule =>
      '<div class="tajweed-rule-card">'
      + '<div class="tajweed-rule-header" style="border-left:4px solid ' + rule.color + '">'
      + '<div class="tajweed-rule-name">' + rule.name + '</div>'
      + '<div class="tajweed-rule-arabic">' + rule.arabic + '</div>'
      + '</div>'
      + '<div class="tajweed-rule-body">'
      + '<p>' + rule.description + '</p>'
      + '<div class="tajweed-letters"><strong>Letters:</strong> <span class="tajweed-letter-list" style="color:' + rule.color + '">' + rule.letters + '</span></div>'
      + '<div class="tajweed-examples"><strong>Examples:</strong> ' + rule.examples.map(ex => '<span class="tajweed-example">' + ex + '</span>').join(' ') + '</div>'
      + '<div class="tajweed-rule-detail"><strong>Rule:</strong> ' + rule.rules + '</div>'
      + '</div>'
      + '</div>'
    ).join('')
    + '</div></div>';
}

/* ============================================================
   15. QURAN MEMORIZATION HELPER
   ============================================================ */

const MEMORIZATION_TIPS = [
  'Start with short surahs from Juz 30 and work your way to longer ones.',
  'Listen to the recitation repeatedly before attempting to memorize.',
  'Recite what you have memorized in your daily prayers to reinforce it.',
  'Set a consistent daily schedule for memorization, preferably after Fajr.',
  'Review previously memorized portions daily to prevent forgetting.',
  'Understand the meaning of what you are memorizing for deeper retention.',
  'Use the same mushaf (copy) consistently to help visual memory.',
  'Recite to a teacher or partner for accountability and error correction.',
  'Break longer verses into smaller phrases and memorize piece by piece.',
  'Make dua to Allah to make memorization easy and to preserve what you learn.',
  'Write out the verses by hand to engage multiple learning modalities.',
  'Connect new memorization with previously memorized portions for context.',
  'Take breaks when feeling overwhelmed. Quality over quantity.',
  'Create a quiet, distraction-free environment for memorization sessions.',
  'Review your memorization right before sleeping, as the brain consolidates during sleep.'
];

const MEMORIZATION_STAGES = [
  { level: 1, name: 'Beginner', surahs: 'Start with Surahs 112-114', description: 'Begin with the three shortest surahs to build confidence.' },
  { level: 2, name: 'Foundation', surahs: 'Surahs 103-114', description: 'Memorize all short surahs from Juz 30.' },
  { level: 3, name: 'Growing', surahs: 'Add Surahs 93-102', description: 'Continue with medium-length surahs from Juz 30.' },
  { level: 4, name: 'Intermediate', surahs: 'Complete Juz 30', description: 'Finish memorizing the entire 30th Juz.' },
  { level: 5, name: 'Advanced', surahs: 'Add Surahs 55, 56, 67', description: 'Memorize important surahs recommended in hadith.' },
  { level: 6, name: 'Dedicated', surahs: 'Juz 29 and beyond', description: 'Continue systematically through the Quran.' },
  { level: 7, name: 'Hafiz in Training', surahs: 'Working through all 30 Juz', description: 'Dedicated to completing the memorization of the entire Quran.' }
];

function renderMemorizationHelper() {
  const tipOfDay = MEMORIZATION_TIPS[new Date().getDate() % MEMORIZATION_TIPS.length];

  let html = '<div class="memorization-section">'
    + '<h3><i class="fas fa-brain"></i> Memorization Helper</h3>'
    + '<div class="mem-tip-of-day">'
    + '<div class="mem-tip-label"><i class="fas fa-lightbulb"></i> Tip of the Day</div>'
    + '<p>' + tipOfDay + '</p>'
    + '</div>'
    + '<div class="mem-stages">'
    + '<h4>Memorization Journey</h4>';

  MEMORIZATION_STAGES.forEach(stage => {
    html += '<div class="mem-stage">'
      + '<div class="mem-stage-level">' + stage.level + '</div>'
      + '<div class="mem-stage-body">'
      + '<div class="mem-stage-name">' + stage.name + '</div>'
      + '<div class="mem-stage-surahs">' + stage.surahs + '</div>'
      + '<div class="mem-stage-desc">' + stage.description + '</div>'
      + '</div>'
      + '</div>';
  });

  html += '</div>'
    + '<div class="mem-all-tips">'
    + '<h4>All Tips</h4>'
    + '<ul class="mem-tips-list">'
    + MEMORIZATION_TIPS.map(tip => '<li>' + tip + '</li>').join('')
    + '</ul>'
    + '</div>'
    + '</div>';

  return html;
}

/* ============================================================
   16. ISLAMIC KNOWLEDGE BASE
   ============================================================ */

const PILLARS_OF_ISLAM_DETAIL = [
  {
    name: 'Shahadah (Declaration of Faith)',
    arabic: 'الشهادة',
    description: 'The testimony that there is no god but Allah and that Muhammad (SAW) is His messenger. This is the foundation upon which all of Islam is built.',
    details: 'The Shahadah consists of two parts: "Ash-hadu an la ilaha ill-Allah" (I bear witness that there is no deity except Allah) and "wa ash-hadu anna Muhammadan Rasulullah" (and I bear witness that Muhammad is the Messenger of Allah). Sincerely declaring this with understanding and conviction is what makes a person a Muslim.',
    quranicRef: 'Surah 3:18 - "Allah bears witness that there is no deity except Him, and [so do] the angels and those of knowledge."',
    icon: 'fa-mosque'
  },
  {
    name: 'Salah (Five Daily Prayers)',
    arabic: 'الصلاة',
    description: 'The five daily prayers performed at specific times throughout the day. Salah is the direct connection between the servant and Allah.',
    details: 'The five prayers are: Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), and Isha (night). Each prayer involves specific movements including standing (qiyam), bowing (ruku), prostrating (sujood), and sitting (jalsa). The prayer begins with Takbir and includes recitation of Al-Fatiha.',
    quranicRef: 'Surah 2:43 - "And establish prayer and give zakah and bow with those who bow [in worship and obedience]."',
    icon: 'fa-praying-hands'
  },
  {
    name: 'Zakah (Obligatory Charity)',
    arabic: 'الزكاة',
    description: 'An obligatory form of charity calculated at 2.5% of qualifying wealth held for one lunar year. It purifies wealth and helps the community.',
    details: 'Zakah is due on savings that exceed the nisab threshold for one full lunar year. It is distributed to eight categories of recipients mentioned in Surah At-Tawbah: the poor, the needy, zakah collectors, those whose hearts are to be reconciled, freeing captives, those in debt, in the cause of Allah, and travelers.',
    quranicRef: 'Surah 9:60 - "Zakah expenditures are only for the poor and for the needy and for those employed to collect [zakah]..."',
    icon: 'fa-hand-holding-heart'
  },
  {
    name: 'Sawm (Fasting in Ramadan)',
    arabic: 'الصيام',
    description: 'Fasting during the month of Ramadan from dawn until sunset. It involves abstaining from food, drink, and other physical needs.',
    details: 'Fasting in Ramadan is obligatory for every adult, sane Muslim who is able to fast. It begins at Fajr (dawn) and ends at Maghrib (sunset). Beyond physical abstinence, fasting involves guarding the tongue, eyes, and heart from sin. The spiritual goals include developing taqwa (God-consciousness), patience, gratitude, and empathy for the less fortunate.',
    quranicRef: 'Surah 2:183 - "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."',
    icon: 'fa-moon'
  },
  {
    name: 'Hajj (Pilgrimage to Makkah)',
    arabic: 'الحج',
    description: 'The annual pilgrimage to the Holy Kaaba in Makkah, obligatory once in a lifetime for those who are physically and financially able.',
    details: 'Hajj takes place from the 8th to the 12th of Dhul Hijjah. It includes rituals such as wearing ihram, performing Tawaf (circumambulation of the Kaaba), running between Safa and Marwa (Sa\'i), standing at Arafah, spending the night at Muzdalifah, and stoning the pillars at Mina. Hajj symbolizes unity and equality before Allah.',
    quranicRef: 'Surah 3:97 - "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way."',
    icon: 'fa-kaaba'
  }
];

const ARTICLES_OF_FAITH_DETAIL = [
  {
    name: 'Belief in Allah',
    arabic: 'الإيمان بالله',
    description: 'Belief in the existence and oneness of Allah, His attributes, names, and lordship over all creation.',
    details: 'Tawheed (monotheism) is the cornerstone of Islamic faith. It encompasses three aspects: Tawheed ar-Rububiyyah (Lordship - Allah alone is the Creator, Sustainer, and Controller), Tawheed al-Uluhiyyah (Worship - Allah alone deserves worship), and Tawheed al-Asma was-Sifat (Names and Attributes - Allah\'s unique and perfect names and qualities).'
  },
  {
    name: 'Belief in the Angels',
    arabic: 'الإيمان بالملائكة',
    description: 'Belief in the existence of angels as creations of Allah made from light, who carry out His commands without disobedience.',
    details: 'Angels are created from light and do not have free will to disobey Allah. Notable angels include: Jibreel (Gabriel) - who brought revelation, Mikail (Michael) - who distributes provision, Israfil - who will blow the trumpet on the Day of Judgment, Azrael/Malak al-Mawt - the angel of death, Ridwan - keeper of Paradise, Malik - keeper of Hellfire, and Kiraman Katibin - the noble recorders who document our deeds.'
  },
  {
    name: 'Belief in the Books',
    arabic: 'الإيمان بالكتب',
    description: 'Belief in all divinely revealed scriptures in their original forms, including the Quran as the final and preserved revelation.',
    details: 'Muslims believe in the Suhuf (Scrolls) of Ibrahim, the Tawrat (Torah) given to Musa, the Zabur (Psalms) given to Dawud, the Injeel (Gospel) given to Isa, and the Quran given to Muhammad (SAW). The Quran is the final revelation, confirming what came before and superseding previous scriptures. It is the only scripture that Allah has guaranteed to preserve unchanged.'
  },
  {
    name: 'Belief in the Prophets',
    arabic: 'الإيمان بالرسل',
    description: 'Belief in all prophets sent by Allah as guides for humanity, from Adam (AS) to Muhammad (SAW).',
    details: 'Muslims believe in all prophets without discrimination. The Quran mentions 25 prophets by name, though many more were sent throughout history. All prophets brought the same fundamental message of monotheism (Tawheed). Muhammad (SAW) is the Seal of the Prophets, meaning no prophet will come after him.'
  },
  {
    name: 'Belief in the Day of Judgment',
    arabic: 'الإيمان باليوم الآخر',
    description: 'Belief in the Day when all creation will be resurrected and held accountable for their deeds.',
    details: 'This includes belief in: the signs of the Day of Judgment (both minor and major), death and the questioning in the grave, the resurrection of all beings, the gathering (Hashr), the accounting of deeds, the Scale (Mizan), the Bridge (Sirat), intercession (Shafa\'ah), Paradise (Jannah) and Hellfire (Jahannam). Every person will receive their book of deeds in their right or left hand.'
  },
  {
    name: 'Belief in Divine Decree (Qadr)',
    arabic: 'الإيمان بالقدر',
    description: 'Belief that everything that happens, good or bad, is by Allah\'s will and knowledge, while humans still have free will in their choices.',
    details: 'Qadr has four levels: Allah\'s Knowledge (He knows everything that was, is, and will be), The Writing (everything is recorded in Al-Lawh Al-Mahfuz), Allah\'s Will (nothing happens except by His permission), and Creation (Allah creates all things and actions). Belief in Qadr does not negate human free will or responsibility. Muslims strive and make choices while trusting Allah\'s ultimate plan.'
  }
];

function renderIslamicKnowledge() {
  let html = '<div class="islamic-knowledge-section">';

  html += '<h3><i class="fas fa-pillar"></i> Five Pillars of Islam</h3>'
    + '<div class="pillars-grid">';
  PILLARS_OF_ISLAM_DETAIL.forEach(p => {
    html += '<div class="pillar-card">'
      + '<div class="pillar-icon"><i class="fas ' + p.icon + '"></i></div>'
      + '<div class="pillar-body">'
      + '<h4>' + p.name + '</h4>'
      + '<div class="pillar-arabic">' + p.arabic + '</div>'
      + '<p>' + p.description + '</p>'
      + '<div class="pillar-details">' + p.details + '</div>'
      + '<div class="pillar-ref"><i class="fas fa-quran"></i> ' + p.quranicRef + '</div>'
      + '</div>'
      + '</div>';
  });
  html += '</div>';

  html += '<h3 style="margin-top:2rem"><i class="fas fa-heart"></i> Six Articles of Faith</h3>'
    + '<div class="faith-grid">';
  ARTICLES_OF_FAITH_DETAIL.forEach((a, idx) => {
    html += '<div class="faith-card">'
      + '<div class="faith-num">' + (idx + 1) + '</div>'
      + '<div class="faith-body">'
      + '<h4>' + a.name + '</h4>'
      + '<div class="faith-arabic">' + a.arabic + '</div>'
      + '<p>' + a.description + '</p>'
      + '<div class="faith-details">' + a.details + '</div>'
      + '</div>'
      + '</div>';
  });
  html += '</div></div>';

  return html;
}

/* ============================================================
   17. DAILY TRACKER & HABITS
   ============================================================ */

const DAILY_WORSHIP_ITEMS = [
  { id: 'fajr', name: 'Fajr Prayer', icon: 'fa-sun', category: 'salah' },
  { id: 'dhuhr', name: 'Dhuhr Prayer', icon: 'fa-sun', category: 'salah' },
  { id: 'asr', name: 'Asr Prayer', icon: 'fa-cloud-sun', category: 'salah' },
  { id: 'maghrib', name: 'Maghrib Prayer', icon: 'fa-cloud-moon', category: 'salah' },
  { id: 'isha', name: 'Isha Prayer', icon: 'fa-moon', category: 'salah' },
  { id: 'quran', name: 'Read Quran', icon: 'fa-quran', category: 'ibadah' },
  { id: 'morning_adhkar', name: 'Morning Adhkar', icon: 'fa-sunrise', category: 'dhikr' },
  { id: 'evening_adhkar', name: 'Evening Adhkar', icon: 'fa-sunset', category: 'dhikr' },
  { id: 'tahajjud', name: 'Tahajjud Prayer', icon: 'fa-star', category: 'optional' },
  { id: 'dhuha', name: 'Duha Prayer', icon: 'fa-sun', category: 'optional' },
  { id: 'sadaqah', name: 'Give Sadaqah', icon: 'fa-hand-holding-heart', category: 'ibadah' },
  { id: 'fast', name: 'Voluntary Fast', icon: 'fa-utensils', category: 'optional' }
];

function renderDailyTracker() {
  const today = new Date().toISOString().split('T')[0];
  const tracked = JSON.parse(localStorage.getItem('dailyTracker_' + today) || '{}');

  let html = '<div class="daily-tracker-section">'
    + '<h3><i class="fas fa-tasks"></i> Daily Worship Tracker</h3>'
    + '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:1rem">' + new Date().toLocaleDateString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + '</p>'
    + '<div class="tracker-progress">'
    + '<div class="tracker-progress-bar"><div class="tracker-progress-fill" id="trackerProgressFill" style="width:' + getTrackerProgress(tracked) + '%"></div></div>'
    + '<span class="tracker-progress-text">' + getTrackerProgress(tracked) + '% Complete</span>'
    + '</div>'
    + '<div class="tracker-grid">';

  DAILY_WORSHIP_ITEMS.forEach(item => {
    const done = tracked[item.id] || false;
    html += '<div class="tracker-item' + (done ? ' tracked-done' : '') + '" data-id="' + item.id + '">'
      + '<div class="tracker-check"><i class="fas ' + (done ? 'fa-check-circle' : 'fa-circle') + '"></i></div>'
      + '<div class="tracker-icon"><i class="fas ' + item.icon + '"></i></div>'
      + '<div class="tracker-name">' + item.name + '</div>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

function getTrackerProgress(tracked) {
  const total = DAILY_WORSHIP_ITEMS.length;
  const done = Object.values(tracked).filter(v => v).length;
  return Math.round(done / total * 100);
}

function toggleDailyTrackerItem(itemId) {
  const today = new Date().toISOString().split('T')[0];
  const tracked = JSON.parse(localStorage.getItem('dailyTracker_' + today) || '{}');
  tracked[itemId] = !tracked[itemId];
  localStorage.setItem('dailyTracker_' + today, JSON.stringify(tracked));
}

/* ============================================================
   18. SHARE CARD GENERATOR
   ============================================================ */

function generateShareCard(arabic, translation, reference) {
  const card = document.createElement('div');
  card.className = 'share-card-generator';
  card.innerHTML = '<div class="share-card-preview" id="shareCardPreview">'
    + '<div class="share-card-bg">'
    + '<div class="share-card-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>'
    + '<div class="share-card-arabic">' + arabic + '</div>'
    + '<div class="share-card-divider"></div>'
    + '<div class="share-card-translation">' + translation + '</div>'
    + '<div class="share-card-ref">' + reference + '</div>'
    + '<div class="share-card-footer">Al-Quran Al-Kareem</div>'
    + '</div>'
    + '</div>'
    + '<div class="share-card-styles">'
    + '<h4>Card Style</h4>'
    + '<div class="share-style-options">'
    + '<button class="share-style-btn active" data-style="classic">Classic</button>'
    + '<button class="share-style-btn" data-style="modern">Modern</button>'
    + '<button class="share-style-btn" data-style="minimal">Minimal</button>'
    + '<button class="share-style-btn" data-style="elegant">Elegant</button>'
    + '</div>'
    + '</div>'
    + '<div class="share-card-actions">'
    + '<button class="hero-btn primary-btn" onclick="copyShareCardText()"><i class="fas fa-copy"></i> Copy Text</button>'
    + '</div>';

  return card;
}

function copyShareCardText() {
  const preview = $('#shareCardPreview');
  if (!preview) return;
  const arabic = preview.querySelector('.share-card-arabic')?.textContent || '';
  const translation = preview.querySelector('.share-card-translation')?.textContent || '';
  const ref = preview.querySelector('.share-card-ref')?.textContent || '';
  const text = arabic + '\n\n' + translation + '\n\n-- ' + ref;
  navigator.clipboard.writeText(text).then(() => showToast('Card text copied!', 'success'));
}

/* ============================================================
   19. FAVORITE RECITERS & AUDIO PREFERENCES
   ============================================================ */

const RECITER_DETAILS = [
  { id: 'ar.alafasy', name: 'Mishary Rashid Alafasy', country: 'Kuwait', style: 'Murattal', description: 'Known for his melodious and emotional recitation. One of the most popular reciters worldwide.', isPopular: true },
  { id: 'ar.abdulsamad', name: 'Abdul Samad', country: 'Egypt', style: 'Murattal', description: 'Classic Egyptian recitation style with beautiful tajweed.', isPopular: true },
  { id: 'ar.husary', name: 'Mahmoud Khalil Al-Husary', country: 'Egypt', style: 'Murattal/Mujawwad', description: 'Widely considered one of the greatest reciters of all time. Known for precise tajweed.', isPopular: true },
  { id: 'ar.minshawi', name: 'Mohamed Siddiq Al-Minshawi', country: 'Egypt', style: 'Mujawwad', description: 'Renowned for his unique and deeply moving recitation style.', isPopular: true },
  { id: 'ar.abdurrahmaansudais', name: 'Abdur-Rahman as-Sudais', country: 'Saudi Arabia', style: 'Murattal', description: 'Imam of the Grand Mosque in Makkah. Powerful and authoritative recitation.', isPopular: true },
  { id: 'ar.shaatree', name: 'Abu Bakr Al Shatri', country: 'Saudi Arabia', style: 'Murattal', description: 'Former Imam of the Grand Mosque with a distinctive melodious voice.', isPopular: true },
  { id: 'ar.ahmedajamy', name: 'Ahmed ibn Ali al-Ajamy', country: 'Saudi Arabia', style: 'Murattal', description: 'Clear and measured recitation, popular for learning and memorization.', isPopular: false },
  { id: 'ar.maaboralward', name: 'Maher Al Muaiqly', country: 'Saudi Arabia', style: 'Murattal', description: 'Current Imam of the Grand Mosque with a warm and inviting recitation.', isPopular: true }
];

function renderReciterProfiles() {
  let html = '<div class="reciter-profiles">'
    + '<h3><i class="fas fa-headphones"></i> Reciter Profiles</h3>'
    + '<div class="reciter-grid">';

  RECITER_DETAILS.forEach(r => {
    const isSelected = state.settings.reciter === r.id;
    html += '<div class="reciter-card' + (isSelected ? ' selected' : '') + '" data-id="' + r.id + '">'
      + '<div class="reciter-avatar"><i class="fas fa-user-circle"></i></div>'
      + '<div class="reciter-info">'
      + '<div class="reciter-name">' + r.name + (r.isPopular ? ' <i class="fas fa-star" style="color:gold;font-size:0.7rem"></i>' : '') + '</div>'
      + '<div class="reciter-country"><i class="fas fa-map-marker-alt"></i> ' + r.country + '</div>'
      + '<div class="reciter-style">' + r.style + '</div>'
      + '<div class="reciter-desc">' + r.description + '</div>'
      + '</div>'
      + (isSelected ? '<div class="reciter-selected-badge"><i class="fas fa-check-circle"></i> Selected</div>' : '<button class="hero-btn secondary-btn reciter-select-btn" data-id="' + r.id + '" style="padding:4px 12px;font-size:var(--fs-xs)">Select</button>')
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

/* ============================================================
   20. QURAN CHALLENGE / QUIZ MODE
   ============================================================ */

const QUIZ_QUESTIONS = [
  { q: 'How many surahs are in the Quran?', options: ['110', '112', '114', '116'], answer: 2 },
  { q: 'Which surah is known as "The Opening"?', options: ['Al-Baqarah', 'Al-Fatiha', 'Al-Ikhlas', 'An-Nas'], answer: 1 },
  { q: 'Which is the longest surah in the Quran?', options: ['Al-Imran', 'An-Nisa', 'Al-Baqarah', 'Al-Maidah'], answer: 2 },
  { q: 'Which prophet is mentioned most in the Quran?', options: ['Ibrahim (AS)', 'Isa (AS)', 'Musa (AS)', 'Muhammad (SAW)'], answer: 2 },
  { q: 'Which surah does not begin with Bismillah?', options: ['Al-Anfal', 'At-Tawbah', 'Al-Mulk', 'Al-Qalam'], answer: 1 },
  { q: 'How many Juz (parts) does the Quran have?', options: ['20', '25', '30', '35'], answer: 2 },
  { q: 'Ayatul Kursi is in which surah?', options: ['Al-Baqarah', 'Al-Imran', 'An-Nisa', 'Al-Maidah'], answer: 0 },
  { q: 'Which surah is called "The Heart of the Quran"?', options: ['Ar-Rahman', 'Ya-Sin', 'Al-Mulk', 'Al-Kahf'], answer: 1 },
  { q: 'How many times does the word "Bismillah" appear in the Quran?', options: ['112', '113', '114', '115'], answer: 2 },
  { q: 'Which surah is recommended to read on Fridays?', options: ['Al-Baqarah', 'Al-Kahf', 'Ya-Sin', 'Ar-Rahman'], answer: 1 },
  { q: 'The first revelation was from which surah?', options: ['Al-Fatiha', 'Al-Baqarah', 'Al-Alaq', 'Al-Muzzammil'], answer: 2 },
  { q: 'How many prostrations (sajdah) are in the Quran?', options: ['10', '14', '15', '18'], answer: 2 },
  { q: 'Which surah mentions honey as a healing?', options: ['Al-Baqarah', 'An-Nahl', 'An-Nur', 'Al-Ankabut'], answer: 1 },
  { q: 'The "Verse of the Throne" is Ayah number:', options: ['254', '255', '256', '257'], answer: 1 },
  { q: 'Which animal is mentioned in the name of Surah 2?', options: ['Camel', 'Horse', 'Cow', 'Sheep'], answer: 2 },
  { q: 'Which prophet had the miracle of speaking from the cradle?', options: ['Musa (AS)', 'Isa (AS)', 'Yahya (AS)', 'Yusuf (AS)'], answer: 1 },
  { q: 'How many names of Allah are mentioned in the hadith?', options: ['77', '89', '99', '100'], answer: 2 },
  { q: 'Which surah is equal to one-third of the Quran?', options: ['Al-Fatiha', 'Al-Kafirun', 'Al-Ikhlas', 'An-Nas'], answer: 2 },
  { q: 'Which city is mentioned as the "Mother of Cities" in the Quran?', options: ['Madinah', 'Makkah', 'Jerusalem', 'Damascus'], answer: 1 },
  { q: 'Which surah begins with "Alif Lam Mim"?', options: ['Al-Fatiha', 'Al-Baqarah', 'Al-Ikhlas', 'An-Nas'], answer: 1 }
];

function renderQuizMode() {
  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function getQuizHTML() {
    const q = QUIZ_QUESTIONS[currentQuestion];
    return '<div class="quiz-container">'
      + '<div class="quiz-header">'
      + '<h3><i class="fas fa-question-circle"></i> Quran Knowledge Quiz</h3>'
      + '<div class="quiz-progress">Question ' + (currentQuestion + 1) + ' of ' + QUIZ_QUESTIONS.length + '</div>'
      + '<div class="quiz-score">Score: ' + score + '/' + QUIZ_QUESTIONS.length + '</div>'
      + '</div>'
      + '<div class="quiz-question">' + q.q + '</div>'
      + '<div class="quiz-options">'
      + q.options.map((opt, idx) =>
        '<button class="quiz-option" data-idx="' + idx + '">'
        + '<span class="quiz-option-letter">' + String.fromCharCode(65 + idx) + '</span>'
        + '<span class="quiz-option-text">' + opt + '</span>'
        + '</button>'
      ).join('')
      + '</div>'
      + '<div class="quiz-feedback" id="quizFeedback"></div>'
      + '<div class="quiz-nav">'
      + (currentQuestion < QUIZ_QUESTIONS.length - 1
        ? '<button class="hero-btn primary-btn" id="quizNextBtn" style="display:none"><i class="fas fa-arrow-right"></i> Next Question</button>'
        : '<button class="hero-btn primary-btn" id="quizFinishBtn" style="display:none"><i class="fas fa-flag-checkered"></i> See Results</button>')
      + '</div>'
      + '</div>';
  }

  return getQuizHTML();
}

/* ============================================================
   21. READING HISTORY DETAILED VIEW
   ============================================================ */

function renderDetailedHistory() {
  let html = '<div class="detailed-history">'
    + '<h3><i class="fas fa-history"></i> Reading History</h3>';

  if (!state.readingHistory.length) {
    html += '<div class="empty-state"><i class="fas fa-book-open"></i><h3>No reading history yet</h3><p>Start reading to build your history.</p></div>';
  } else {
    const grouped = {};
    state.readingHistory.forEach(h => {
      const date = new Date(h.date).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' });
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(h);
    });

    Object.entries(grouped).forEach(([date, items]) => {
      html += '<div class="history-date-group">'
        + '<div class="history-date-header">' + date + '</div>'
        + '<div class="history-items">';
      items.forEach(h => {
        html += '<div class="history-item">'
          + '<div class="history-item-num">' + h.surah + '</div>'
          + '<div class="history-item-body">'
          + '<div class="history-item-name">' + h.name + '</div>'
          + '<div class="history-item-arabic">' + h.arabicName + '</div>'
          + '<div class="history-item-time">' + new Date(h.date).toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' }) + '</div>'
          + '</div>'
          + '<button class="ayah-action-btn" onclick="state.currentSurah=' + h.surah + ';navigateTo(\'quran\');loadSurah(' + h.surah + ')"><i class="fas fa-book-open"></i></button>'
          + '</div>';
      });
      html += '</div></div>';
    });
  }

  html += '</div>';
  return html;
}

/* ============================================================
   22. APP INFO & ABOUT PAGE CONTENT
   ============================================================ */

function renderAboutPage() {
  return '<div class="about-container">'
    + '<div class="about-hero">'
    + '<div class="about-icon"><i class="fas fa-quran"></i></div>'
    + '<h2>Al-Quran Al-Kareem</h2>'
    + '<p class="about-version">Version 3.0.0</p>'
    + '<p class="about-tagline">Your Complete Quran Companion</p>'
    + '</div>'
    + '<div class="about-features">'
    + '<h3>Features</h3>'
    + '<div class="about-feature-grid">'
    + [
      { icon: 'fa-book-open', title: 'Complete Quran', desc: 'All 114 surahs with Arabic, English, and Bangla translations' },
      { icon: 'fa-headphones', title: 'Audio Recitation', desc: 'Multiple world-class reciters with playback controls' },
      { icon: 'fa-search', title: 'Advanced Search', desc: 'Search across multiple translations with filters' },
      { icon: 'fa-heart', title: 'Bookmarks & Notes', desc: 'Save favorite verses and add personal reflections' },
      { icon: 'fa-folder', title: 'Collections', desc: 'Organize verses into custom themed collections' },
      { icon: 'fa-star', title: '99 Names', desc: 'Learn and memorize the 99 beautiful names of Allah' },
      { icon: 'fa-scroll', title: 'Prophet Stories', desc: 'Read about all 25 prophets mentioned in the Quran' },
      { icon: 'fa-graduation-cap', title: 'Tafsir Study', desc: 'Explore topics and deepen your understanding' },
      { icon: 'fa-trophy', title: 'Achievements', desc: 'Earn points and unlock achievements as you learn' },
      { icon: 'fa-chart-line', title: 'Statistics', desc: 'Track your reading progress and streaks' },
      { icon: 'fa-calendar', title: 'Reading Plans', desc: 'Choose from multiple templates or create your own' },
      { icon: 'fa-clock', title: 'Prayer Times', desc: 'Accurate prayer times based on your location' },
      { icon: 'fa-compass', title: 'Qibla Direction', desc: 'Find the direction of the Kaaba from anywhere' },
      { icon: 'fa-dharmachakra', title: 'Digital Tasbih', desc: 'Count your dhikr with sounds and vibration' },
      { icon: 'fa-palette', title: 'Themes', desc: 'Six beautiful themes to customize your experience' },
      { icon: 'fa-keyboard', title: 'Keyboard Shortcuts', desc: 'Navigate quickly with keyboard shortcuts' }
    ].map(f =>
      '<div class="about-feature-card"><div class="about-feature-icon"><i class="fas ' + f.icon + '"></i></div><div class="about-feature-title">' + f.title + '</div><div class="about-feature-desc">' + f.desc + '</div></div>'
    ).join('')
    + '</div>'
    + '</div>'
    + '<div class="about-credits">'
    + '<h3>Credits & Sources</h3>'
    + '<p>Quran text and translations from <strong>Al Quran Cloud API</strong></p>'
    + '<p>Prayer times from <strong>Aladhan API</strong></p>'
    + '<p>Audio recitations from <strong>Islamic Network CDN</strong></p>'
    + '<p>Built with love for the Ummah</p>'
    + '</div>'
    + '<div class="about-footer">'
    + '<p>Made with <i class="fas fa-heart" style="color:var(--color-accent)"></i> by Wassi</p>'
    + '<p style="font-size:var(--fs-xs);color:var(--text-muted);margin-top:0.5rem">All praise is due to Allah, Lord of all the worlds</p>'
    + '</div>'
    + '</div>';
}

/* ============================================================
   23. UTILITY FUNCTIONS
   ============================================================ */

function getIslamicDate() {
  const jd = Math.floor((Date.now() / 86400000) + 2440587.5);
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const rem = l - 10631 * n + 354;
  const j = Math.floor((10985 - rem) / 5316) * Math.floor(50 * rem / 17719) + Math.floor(rem / 5670) * Math.floor(43 * rem / 15238);
  const remL = rem - Math.floor((30 - j) / 15) * Math.floor(17719 * j / 50) - Math.floor(j / 16) * Math.floor(15238 * j / 43) + 29;
  const hm = Math.floor(24 * remL / 709);
  const hd = remL - Math.floor(709 * hm / 24);
  const hy = 30 * n + j - 30;
  const hijriMonths = ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Ula', 'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhul Qi\'dah', 'Dhul Hijjah'];
  return { day: hd, month: hm, monthName: hijriMonths[(hm - 1) % 12], year: hy };
}

function arabicNumeral(num) {
  const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(num).split('').map(d => arabicNums[+d] || d).join('');
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return String(num);
}

function getRandomVerse() {
  if (typeof DAILY_VERSES === 'undefined' || !DAILY_VERSES.length) return null;
  return DAILY_VERSES[Math.floor(Math.random() * DAILY_VERSES.length)];
}

function getSurahCompletion() {
  return {
    total: 114,
    read: state.statistics.surahsRead.length,
    percentage: Math.round(state.statistics.surahsRead.length / 114 * 100),
    meccanRead: state.statistics.surahsRead.filter(s => SURAH_DATA[s - 1].revelationType === 'Meccan').length,
    medinanRead: state.statistics.surahsRead.filter(s => SURAH_DATA[s - 1].revelationType === 'Medinan').length,
    juzCompleted: getJuzCompletion()
  };
}

function getJuzCompletion() {
  if (typeof JUZ_DATA === 'undefined') return 0;
  let completed = 0;
  JUZ_DATA.forEach(j => {
    let allRead = true;
    for (let s = j.startSurah; s <= j.endSurah; s++) {
      if (!state.statistics.surahsRead.includes(s)) {
        allRead = false;
        break;
      }
    }
    if (allRead) completed++;
  });
  return completed;
}

function getTotalAyahCount() {
  return SURAH_DATA.reduce((sum, s) => sum + s.numberOfAyahs, 0);
}

function getReadingSpeed() {
  const time = state.statistics.totalTimeSeconds;
  const surahs = state.statistics.surahsRead.length;
  if (time === 0 || surahs === 0) return 'N/A';
  const avgMinutes = Math.round(time / surahs / 60);
  return avgMinutes + ' min/surah';
}

function getDaysSinceFirstRead() {
  const activity = state.statistics.dailyActivity;
  const dates = Object.keys(activity).sort();
  if (!dates.length) return 0;
  const first = new Date(dates[0]);
  return Math.floor((Date.now() - first.getTime()) / 86400000);
}

function getMostReadSurahs(limit) {
  const counts = {};
  state.readingHistory.forEach(h => {
    counts[h.surah] = (counts[h.surah] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([s, c]) => ({ surah: +s, count: c, name: SURAH_DATA[+s - 1].englishName }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit || 5);
}

function getWeeklyGoalProgress() {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  let weeklyCount = 0;
  for (let d = new Date(startOfWeek); d <= now; d.setDate(d.getDate() + 1)) {
    const key = d.toISOString().split('T')[0];
    weeklyCount += state.statistics.dailyActivity[key] || 0;
  }
  return weeklyCount;
}

function generateDailyDhikrReminder() {
  if (typeof COMMON_DHIKR === 'undefined' || !COMMON_DHIKR.length) return null;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return COMMON_DHIKR[dayOfYear % COMMON_DHIKR.length];
}

function getAppStats() {
  return {
    surahsRead: state.statistics.surahsRead.length,
    ayahsListened: state.statistics.ayahsRead,
    totalTime: formatHours(state.statistics.totalTimeSeconds),
    streak: state.statistics.streak,
    bookmarks: state.bookmarks.ayahs.length,
    notes: state.notes.length,
    collections: state.collections.length,
    achievementsUnlocked: state.achievements.unlocked.length,
    achievementsTotal: ACHIEVEMENTS_DATA.length,
    level: calculateLevel(),
    levelTitle: getLevelTitle(calculateLevel()),
    points: state.achievements.points,
    asmaMemorized: state.asmaMemorized.length,
    topicsStudied: state.tafsirTopicsStudied.length,
    prophetsRead: state.prophetsRead.length,
    readingSpeed: getReadingSpeed(),
    daysSinceStart: getDaysSinceFirstRead(),
    mostReadSurahs: getMostReadSurahs(3),
    weeklyActivity: getWeeklyGoalProgress()
  };
}

/* ============================================================
   GLOBAL WINDOW EXPORTS & DOM READY
   ============================================================ */

/* ============================================================
   24. SURAH COMPARISON VIEW
   ============================================================ */

function renderSurahComparison(surah1, surah2) {
  if (!surah1 || !surah2) return '';
  const s1 = SURAH_DATA[surah1 - 1];
  const s2 = SURAH_DATA[surah2 - 1];
  if (!s1 || !s2) return '';

  return '<div class="comparison-container">'
    + '<h3><i class="fas fa-columns"></i> Surah Comparison</h3>'
    + '<div class="comparison-grid">'
    + '<div class="comparison-card">'
    + '<div class="comp-num">' + s1.number + '</div>'
    + '<div class="comp-name">' + s1.englishName + '</div>'
    + '<div class="comp-arabic">' + s1.name + '</div>'
    + '<div class="comp-meaning">' + s1.englishNameTranslation + '</div>'
    + '<div class="comp-stats">'
    + '<div class="comp-stat"><span>Ayahs:</span> ' + s1.numberOfAyahs + '</div>'
    + '<div class="comp-stat"><span>Revelation:</span> ' + s1.revelationType + '</div>'
    + '<div class="comp-stat"><span>Revelation Order:</span> ' + s1.revelationOrder + '</div>'
    + '<div class="comp-stat"><span>Juz:</span> ' + s1.juz.join(', ') + '</div>'
    + '<div class="comp-stat"><span>Rukus:</span> ' + s1.rukus + '</div>'
    + '<div class="comp-stat"><span>Sajdas:</span> ' + (s1.sajdas ? 'Yes' : 'No') + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="comparison-vs">VS</div>'
    + '<div class="comparison-card">'
    + '<div class="comp-num">' + s2.number + '</div>'
    + '<div class="comp-name">' + s2.englishName + '</div>'
    + '<div class="comp-arabic">' + s2.name + '</div>'
    + '<div class="comp-meaning">' + s2.englishNameTranslation + '</div>'
    + '<div class="comp-stats">'
    + '<div class="comp-stat"><span>Ayahs:</span> ' + s2.numberOfAyahs + '</div>'
    + '<div class="comp-stat"><span>Revelation:</span> ' + s2.revelationType + '</div>'
    + '<div class="comp-stat"><span>Revelation Order:</span> ' + s2.revelationOrder + '</div>'
    + '<div class="comp-stat"><span>Juz:</span> ' + s2.juz.join(', ') + '</div>'
    + '<div class="comp-stat"><span>Rukus:</span> ' + s2.rukus + '</div>'
    + '<div class="comp-stat"><span>Sajdas:</span> ' + (s2.sajdas ? 'Yes' : 'No') + '</div>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</div>';
}

/* ============================================================
   25. QURAN PROGRESS MAP
   ============================================================ */

function renderProgressMap() {
  let html = '<div class="progress-map">'
    + '<h3><i class="fas fa-map"></i> Quran Progress Map</h3>'
    + '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:1rem">Track which surahs you have read across all 30 Juz</p>'
    + '<div class="progress-map-legend">'
    + '<span class="map-legend-item"><span class="map-cell-sample map-read"></span> Read</span>'
    + '<span class="map-legend-item"><span class="map-cell-sample map-unread"></span> Not Read</span>'
    + '<span class="map-legend-item"><span class="map-cell-sample map-bookmarked"></span> Bookmarked</span>'
    + '</div>';

  if (typeof JUZ_DATA !== 'undefined') {
    JUZ_DATA.forEach(j => {
      html += '<div class="progress-juz-row">'
        + '<div class="progress-juz-label">Juz ' + j.number + '</div>'
        + '<div class="progress-juz-cells">';

      for (let s = j.startSurah; s <= j.endSurah; s++) {
        const surah = SURAH_DATA[s - 1];
        const isRead = state.statistics.surahsRead.includes(s);
        const isBookmarked = state.bookmarks.surahs.includes(s);
        const cellClass = isBookmarked ? 'map-bookmarked' : isRead ? 'map-read' : 'map-unread';

        html += '<div class="progress-map-cell ' + cellClass + '" title="' + s + '. ' + surah.englishName + (isRead ? ' (Read)' : ' (Not read)') + '" data-surah="' + s + '">'
          + s
          + '</div>';
      }

      html += '</div></div>';
    });
  } else {
    for (let s = 1; s <= 114; s++) {
      const surah = SURAH_DATA[s - 1];
      const isRead = state.statistics.surahsRead.includes(s);
      const isBookmarked = state.bookmarks.surahs.includes(s);
      const cellClass = isBookmarked ? 'map-bookmarked' : isRead ? 'map-read' : 'map-unread';

      html += '<div class="progress-map-cell ' + cellClass + '" title="' + s + '. ' + surah.englishName + '" data-surah="' + s + '">'
        + s
        + '</div>';
    }
  }

  html += '</div>';
  return html;
}

/* ============================================================
   26. SURAH RECOMMENDATION ENGINE
   ============================================================ */

function getSurahRecommendations() {
  const recommendations = [];
  const read = state.statistics.surahsRead;
  const history = state.readingHistory;

  /* Recommend based on what hasn't been read */
  const unread = SURAH_DATA.filter(s => !read.includes(s.number));
  if (unread.length > 0) {
    const random = unread[Math.floor(Math.random() * unread.length)];
    recommendations.push({
      surah: random.number,
      name: random.englishName,
      arabicName: random.name,
      reason: 'You haven\'t read this surah yet',
      icon: 'fa-book'
    });
  }

  /* Recommend popular surahs */
  const popularSurahs = [1, 2, 18, 36, 55, 56, 67, 112];
  const unreadPopular = popularSurahs.filter(s => !read.includes(s));
  if (unreadPopular.length > 0) {
    const s = SURAH_DATA[unreadPopular[0] - 1];
    recommendations.push({
      surah: s.number,
      name: s.englishName,
      arabicName: s.name,
      reason: 'Popular and highly recommended surah',
      icon: 'fa-star'
    });
  }

  /* Recommend based on day of week */
  const dayRecs = { 0: 67, 1: 2, 2: 3, 3: 36, 4: 55, 5: 18, 6: 56 };
  const todayRec = dayRecs[new Date().getDay()];
  if (todayRec) {
    const s = SURAH_DATA[todayRec - 1];
    recommendations.push({
      surah: s.number,
      name: s.englishName,
      arabicName: s.name,
      reason: 'Recommended for today (' + new Date().toLocaleDateString('en', { weekday: 'long' }) + ')',
      icon: 'fa-calendar-day'
    });
  }

  /* Continue from last read */
  if (history.length > 0) {
    const lastRead = history[0].surah;
    if (lastRead < 114) {
      const next = SURAH_DATA[lastRead];
      recommendations.push({
        surah: next.number,
        name: next.englishName,
        arabicName: next.name,
        reason: 'Continue from where you left off',
        icon: 'fa-forward'
      });
    }
  }

  /* Short surah for quick read */
  const shortSurahs = SURAH_DATA.filter(s => s.numberOfAyahs <= 10).sort(() => Math.random() - 0.5);
  if (shortSurahs.length > 0) {
    recommendations.push({
      surah: shortSurahs[0].number,
      name: shortSurahs[0].englishName,
      arabicName: shortSurahs[0].name,
      reason: 'Quick read (' + shortSurahs[0].numberOfAyahs + ' ayahs)',
      icon: 'fa-bolt'
    });
  }

  return recommendations.slice(0, 5);
}

function renderRecommendations() {
  const recs = getSurahRecommendations();
  if (!recs.length) return '';

  let html = '<div class="recommendations-section">'
    + '<h3><i class="fas fa-magic"></i> Recommended for You</h3>'
    + '<div class="rec-grid">';

  recs.forEach(r => {
    html += '<div class="rec-card" data-surah="' + r.surah + '">'
      + '<div class="rec-icon"><i class="fas ' + r.icon + '"></i></div>'
      + '<div class="rec-body">'
      + '<div class="rec-name">' + r.surah + '. ' + r.name + '</div>'
      + '<div class="rec-arabic">' + r.arabicName + '</div>'
      + '<div class="rec-reason">' + r.reason + '</div>'
      + '</div>'
      + '<button class="hero-btn primary-btn rec-read-btn" data-surah="' + r.surah + '" style="padding:4px 12px;font-size:var(--fs-xs)"><i class="fas fa-book-open"></i> Read</button>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

/* ============================================================
   27. THEME PREVIEW HELPERS
   ============================================================ */

const THEME_DESCRIPTIONS = {
  dark: { name: 'Dark', description: 'Easy on the eyes for night reading. Gold accents on a deep dark background.', icon: 'fa-moon', gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
  light: { name: 'Light', description: 'Clean and bright for daytime reading. High contrast for readability.', icon: 'fa-sun', gradient: 'linear-gradient(135deg, #ffffff, #f0f0f0)' },
  sepia: { name: 'Sepia', description: 'Warm tones that mimic the look of aged paper. Gentle on the eyes.', icon: 'fa-book', gradient: 'linear-gradient(135deg, #f5e6d3, #ebd7c2)' },
  midnight: { name: 'Midnight', description: 'Deep blue tones for a calm, focused reading experience.', icon: 'fa-star', gradient: 'linear-gradient(135deg, #0a0a2e, #1a1a4e)' },
  emerald: { name: 'Emerald', description: 'Soothing green tones inspired by Islamic heritage and nature.', icon: 'fa-leaf', gradient: 'linear-gradient(135deg, #0a2e1a, #1a4e2a)' },
  royal: { name: 'Royal', description: 'Rich purple and gold for a majestic reading experience.', icon: 'fa-crown', gradient: 'linear-gradient(135deg, #2e0a2e, #4e1a4e)' }
};

function renderThemePreview() {
  let html = '<div class="theme-preview-section">'
    + '<h3><i class="fas fa-palette"></i> Theme Gallery</h3>'
    + '<div class="theme-preview-grid">';

  Object.entries(THEME_DESCRIPTIONS).forEach(([key, theme]) => {
    const isActive = state.theme === key;
    html += '<div class="theme-preview-card' + (isActive ? ' active' : '') + '" data-theme="' + key + '">'
      + '<div class="theme-preview-swatch" style="background:' + theme.gradient + '">'
      + '<i class="fas ' + theme.icon + '"></i>'
      + '</div>'
      + '<div class="theme-preview-body">'
      + '<div class="theme-preview-name">' + theme.name + (isActive ? ' <i class="fas fa-check-circle" style="color:var(--color-accent)"></i>' : '') + '</div>'
      + '<div class="theme-preview-desc">' + theme.description + '</div>'
      + '</div>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

/* ============================================================
   28. ACCESSIBILITY HELPERS
   ============================================================ */

function initAccessibility() {
  /* Set ARIA labels for key interactive elements */
  const menuBtn = $('#menuBtn');
  if (menuBtn) menuBtn.setAttribute('aria-label', 'Toggle sidebar menu');

  const themeBtn = $('#themeToggleBtn');
  if (themeBtn) themeBtn.setAttribute('aria-label', 'Change theme');

  const fullscreenBtn = $('#fullscreenBtn');
  if (fullscreenBtn) fullscreenBtn.setAttribute('aria-label', 'Toggle fullscreen');

  /* Announce page changes to screen readers */
  const announcer = document.createElement('div');
  announcer.id = 'srAnnouncer';
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)';
  document.body.appendChild(announcer);
}

function announceToScreenReader(message) {
  const announcer = $('#srAnnouncer');
  if (announcer) {
    announcer.textContent = '';
    setTimeout(() => { announcer.textContent = message; }, 100);
  }
}

/* ============================================================
   29. DATA VALIDATION & INTEGRITY
   ============================================================ */

function validateState() {
  /* Ensure state integrity after loading */
  if (!Array.isArray(state.bookmarks.ayahs)) state.bookmarks.ayahs = [];
  if (!Array.isArray(state.bookmarks.surahs)) state.bookmarks.surahs = [];
  if (!Array.isArray(state.notes)) state.notes = [];
  if (!Array.isArray(state.readingHistory)) state.readingHistory = [];
  if (!Array.isArray(state.statistics.surahsRead)) state.statistics.surahsRead = [];
  if (!state.statistics.dailyActivity) state.statistics.dailyActivity = {};
  if (!Array.isArray(state.asmaMemorized)) state.asmaMemorized = [];
  if (!Array.isArray(state.tafsirTopicsStudied)) state.tafsirTopicsStudied = [];
  if (!state.tafsirStudyNotes) state.tafsirStudyNotes = {};
  if (!Array.isArray(state.prophetsRead)) state.prophetsRead = [];
  if (!state.achievements) state.achievements = { unlocked: [], points: 0, level: 1 };
  if (!Array.isArray(state.achievements.unlocked)) state.achievements.unlocked = [];
  if (!Array.isArray(state.collections)) state.collections = [];
  if (!Array.isArray(state.searchHistory)) state.searchHistory = [];
  if (!state.dailyPlanProgress) state.dailyPlanProgress = {};
  if (!Array.isArray(state.notifications)) state.notifications = [];

  /* Validate surah numbers are in range */
  state.bookmarks.surahs = state.bookmarks.surahs.filter(s => s >= 1 && s <= 114);
  state.statistics.surahsRead = state.statistics.surahsRead.filter(s => s >= 1 && s <= 114);

  /* Remove duplicate entries */
  state.statistics.surahsRead = [...new Set(state.statistics.surahsRead)];
  state.bookmarks.surahs = [...new Set(state.bookmarks.surahs)];
  state.asmaMemorized = [...new Set(state.asmaMemorized)];
  state.tafsirTopicsStudied = [...new Set(state.tafsirTopicsStudied)];
  state.prophetsRead = [...new Set(state.prophetsRead)];
  state.achievements.unlocked = [...new Set(state.achievements.unlocked)];

  /* Cap values */
  if (state.currentSurah < 1) state.currentSurah = 1;
  if (state.currentSurah > 114) state.currentSurah = 114;
  if (state.statistics.ayahsRead < 0) state.statistics.ayahsRead = 0;
  if (state.statistics.totalTimeSeconds < 0) state.statistics.totalTimeSeconds = 0;
  if (state.statistics.streak < 0) state.statistics.streak = 0;
  if (state.achievements.points < 0) state.achievements.points = 0;
}

/* ============================================================
   30. PERFORMANCE MONITORING
   ============================================================ */

function measurePerformance(label, fn) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log('[Performance] ' + label + ': ' + (end - start).toFixed(2) + 'ms');
  return result;
}

function getStorageUsage() {
  let totalSize = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += localStorage[key].length * 2;
    }
  }
  return {
    bytes: totalSize,
    kb: (totalSize / 1024).toFixed(2) + ' KB',
    mb: (totalSize / 1024 / 1024).toFixed(4) + ' MB',
    percentage: ((totalSize / (5 * 1024 * 1024)) * 100).toFixed(2) + '%'
  };
}

function cleanupOldData() {
  /* Remove daily activity entries older than 1 year */
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const cutoffDate = oneYearAgo.toISOString().split('T')[0];

  Object.keys(state.statistics.dailyActivity).forEach(date => {
    if (date < cutoffDate) {
      delete state.statistics.dailyActivity[date];
    }
  });

  /* Limit reading history to 50 entries */
  if (state.readingHistory.length > 50) {
    state.readingHistory = state.readingHistory.slice(0, 50);
  }

  /* Limit notifications to 50 */
  if (state.notifications.length > 50) {
    state.notifications = state.notifications.slice(0, 50);
  }

  /* Limit search history to 30 */
  if (state.searchHistory.length > 30) {
    state.searchHistory = state.searchHistory.slice(0, 30);
  }

  saveState();
}

/* ============================================================
   31. KEYBOARD NAVIGATION HELPERS
   ============================================================ */

function initKeyboardNav() {
  /* Tab trapping for modals */
  document.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;

    const activeModal = document.querySelector('.modal-overlay:not(.hidden)');
    if (!activeModal) return;

    const focusable = activeModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ============================================================
   32. OFFLINE DETECTION
   ============================================================ */

function initOfflineDetection() {
  window.addEventListener('online', () => {
    showToast('You are back online', 'success');
    document.body.classList.remove('offline');
  });

  window.addEventListener('offline', () => {
    showToast('You are offline. Some features may not work.', 'warning', 5000);
    document.body.classList.add('offline');
  });

  if (!navigator.onLine) {
    document.body.classList.add('offline');
  }
}

/* ============================================================
   33. THEME SCHEDULER
   ============================================================ */

function getAutoTheme() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'light';
  if (hour >= 12 && hour < 17) return 'sepia';
  if (hour >= 17 && hour < 20) return 'emerald';
  return 'dark';
}

function initAutoTheme() {
  /* Auto theme based on time of day (if enabled) */
  const autoThemeEnabled = localStorage.getItem('autoTheme') === 'true';
  if (autoThemeEnabled) {
    applyTheme(getAutoTheme());
    setInterval(() => {
      if (localStorage.getItem('autoTheme') === 'true') {
        const newTheme = getAutoTheme();
        if (state.theme !== newTheme) {
          applyTheme(newTheme);
        }
      }
    }, 300000); /* Check every 5 minutes */
  }
}

/* ============================================================
   34. SCROLL POSITION MEMORY
   ============================================================ */

const scrollPositions = {};

function saveScrollPosition(page) {
  scrollPositions[page] = window.scrollY;
}

function restoreScrollPosition(page) {
  if (scrollPositions[page]) {
    setTimeout(() => window.scrollTo(0, scrollPositions[page]), 100);
  }
}

/* ============================================================
   35. RANDOM VERSE GENERATOR
   ============================================================ */

function getRandomVerseFromSurah(surahNum) {
  const surah = SURAH_DATA[surahNum - 1];
  if (!surah) return null;
  const randomAyah = Math.floor(Math.random() * surah.numberOfAyahs) + 1;
  return { surah: surahNum, ayah: randomAyah, surahName: surah.englishName };
}

function getRandomSurahForReading() {
  const unread = [];
  for (let i = 1; i <= 114; i++) {
    if (!state.statistics.surahsRead.includes(i)) unread.push(i);
  }
  if (unread.length === 0) return Math.floor(Math.random() * 114) + 1;
  return unread[Math.floor(Math.random() * unread.length)];
}

/* ============================================================
   36. SURAH METADATA HELPERS
   ============================================================ */

function getSurahsByRevelationType(type) {
  return SURAH_DATA.filter(s => s.revelationType.toLowerCase() === type.toLowerCase());
}

function getSurahsByJuz(juzNum) {
  return SURAH_DATA.filter(s => s.juz.includes(juzNum));
}

function getSurahsByAyahCount(min, max) {
  return SURAH_DATA.filter(s => s.numberOfAyahs >= min && s.numberOfAyahs <= max);
}

function getLongestSurahs(limit) {
  return [...SURAH_DATA].sort((a, b) => b.numberOfAyahs - a.numberOfAyahs).slice(0, limit || 10);
}

function getShortestSurahs(limit) {
  return [...SURAH_DATA].sort((a, b) => a.numberOfAyahs - b.numberOfAyahs).slice(0, limit || 10);
}

function getSurahsByRevelationOrder() {
  return [...SURAH_DATA].sort((a, b) => a.revelationOrder - b.revelationOrder);
}

function getSurahsWithSajdah() {
  return SURAH_DATA.filter(s => s.sajdas);
}

function getQuranOverview() {
  const totalAyahs = SURAH_DATA.reduce((sum, s) => sum + s.numberOfAyahs, 0);
  const meccan = SURAH_DATA.filter(s => s.revelationType === 'Meccan').length;
  const medinan = SURAH_DATA.filter(s => s.revelationType === 'Medinan').length;
  const sajdaSurahs = SURAH_DATA.filter(s => s.sajdas).length;
  const avgAyahs = Math.round(totalAyahs / 114);

  return {
    totalSurahs: 114,
    totalAyahs: totalAyahs,
    totalJuz: 30,
    meccanSurahs: meccan,
    medinanSurahs: medinan,
    sajdaSurahs: sajdaSurahs,
    avgAyahsPerSurah: avgAyahs,
    longestSurah: { name: 'Al-Baqarah', number: 2, ayahs: 286 },
    shortestSurah: { name: 'Al-Kawthar', number: 108, ayahs: 3 },
    firstRevealed: { name: 'Al-Alaq', number: 96 },
    lastRevealed: { name: 'An-Nasr', number: 110 }
  };
}

/* ============================================================
   37. EVENT BUS (Simple Pub/Sub)
   ============================================================ */

const eventBus = {
  events: {},
  on: function(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  off: function(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  },
  emit: function(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(cb => cb(data));
  }
};

/* Register core events */
eventBus.on('surah:loaded', function(surahNum) {
  trackDailyProgress();
});

eventBus.on('achievement:unlocked', function(achId) {
  const ach = ACHIEVEMENTS_DATA.find(a => a.id === achId);
  if (ach) {
    addNotification('Achievement: ' + ach.title + ' (+' + ach.points + ' pts)', 'achievement', 'fa-trophy');
  }
});

eventBus.on('bookmark:added', function(data) {
  addNotification('Bookmarked ' + data.surahName + ' ' + data.surah + ':' + data.ayah, 'bookmark', 'fa-heart');
});

eventBus.on('collection:created', function(name) {
  addNotification('New collection created: ' + name, 'collection', 'fa-folder-plus');
});

eventBus.on('plan:started', function(planName) {
  addNotification('Reading plan started: ' + planName, 'plan', 'fa-calendar');
});

eventBus.on('streak:milestone', function(days) {
  addNotification('Streak milestone: ' + days + ' days! MashaAllah!', 'streak', 'fa-fire');
});

/* ============================================================
   38. LAZY LOADING HELPER
   ============================================================ */

function lazyInit(pageId, initFn) {
  let initialized = false;
  return function() {
    if (!initialized && state.currentPage === pageId) {
      initFn();
      initialized = true;
    }
  };
}

/* ============================================================
   39. FEATURE FLAGS
   ============================================================ */

const FEATURES = {
  wordByWord: { enabled: false, label: 'Word-by-Word Mode', description: 'Show translation for each Arabic word individually' },
  tajweedHighlight: { enabled: false, label: 'Tajweed Highlighting', description: 'Color-code Arabic text based on tajweed rules' },
  autoTheme: { enabled: false, label: 'Auto Theme', description: 'Automatically change theme based on time of day' },
  quizMode: { enabled: true, label: 'Quiz Mode', description: 'Test your Quran knowledge with quizzes' },
  dailyTracker: { enabled: true, label: 'Daily Tracker', description: 'Track your daily worship activities' },
  recommendations: { enabled: true, label: 'Smart Recommendations', description: 'Get personalized surah recommendations' },
  shareCards: { enabled: true, label: 'Share Cards', description: 'Generate beautiful verse cards for sharing' },
  offlineMode: { enabled: false, label: 'Offline Mode', description: 'Cache content for offline reading (experimental)' }
};

function isFeatureEnabled(featureId) {
  return FEATURES[featureId] && FEATURES[featureId].enabled;
}

function toggleFeature(featureId) {
  if (FEATURES[featureId]) {
    FEATURES[featureId].enabled = !FEATURES[featureId].enabled;
    showToast(FEATURES[featureId].label + ' ' + (FEATURES[featureId].enabled ? 'enabled' : 'disabled'), 'info');
  }
}

function renderFeatureFlags() {
  let html = '<div class="feature-flags-section">'
    + '<h3><i class="fas fa-flask"></i> Experimental Features</h3>'
    + '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:1rem">Toggle experimental features on or off</p>'
    + '<div class="feature-flags-list">';

  Object.entries(FEATURES).forEach(([id, feature]) => {
    html += '<div class="feature-flag-item">'
      + '<div class="ff-body">'
      + '<div class="ff-label">' + feature.label + '</div>'
      + '<div class="ff-desc">' + feature.description + '</div>'
      + '</div>'
      + '<label class="toggle-switch"><input type="checkbox" class="ff-toggle" data-feature="' + id + '"' + (feature.enabled ? ' checked' : '') + '><span class="toggle-slider"></span></label>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

/* ============================================================
   40. DEBUG & DEVELOPMENT TOOLS
   ============================================================ */

function getDebugInfo() {
  return {
    appVersion: '3.0.0',
    stateSize: JSON.stringify(state).length + ' bytes',
    storageUsage: getStorageUsage(),
    cacheEntries: Object.keys(state.cache).length,
    loadedData: {
      surahData: typeof SURAH_DATA !== 'undefined',
      juzData: typeof JUZ_DATA !== 'undefined',
      duaData: typeof DUA_DATA !== 'undefined',
      asmaData: typeof ASMA_UL_HUSNA !== 'undefined',
      prophetsData: typeof PROPHETS_IN_QURAN !== 'undefined',
      dailyVerses: typeof DAILY_VERSES !== 'undefined',
      islamicEvents: typeof ISLAMIC_EVENTS !== 'undefined'
    },
    currentPage: state.currentPage,
    currentSurah: state.currentSurah,
    theme: state.theme,
    audioPlaying: state.audio.playing,
    onboardingComplete: state.onboardingComplete,
    totalFeatures: Object.keys(FEATURES).length,
    enabledFeatures: Object.values(FEATURES).filter(f => f.enabled).length,
    browser: navigator.userAgent,
    screenSize: window.innerWidth + 'x' + window.innerHeight,
    online: navigator.onLine,
    language: navigator.language
  };
}

function logDebugInfo() {
  const info = getDebugInfo();
  console.group('[Al-Quran App] Debug Info');
  Object.entries(info).forEach(([key, val]) => {
    if (typeof val === 'object') {
      console.log(key + ':', val);
    } else {
      console.log(key + ':', val);
    }
  });
  console.groupEnd();
}

/* ============================================================
   41. COMPREHENSIVE DUA MANAGER
   ============================================================ */

const DUA_CATEGORIES_DETAIL = {
  morning: { name: 'Morning Adhkar', icon: 'fa-sun', description: 'Supplications to recite after Fajr prayer', time: 'After Fajr' },
  evening: { name: 'Evening Adhkar', icon: 'fa-moon', description: 'Supplications to recite after Asr prayer', time: 'After Asr' },
  prayer: { name: 'Prayer Duas', icon: 'fa-praying-hands', description: 'Supplications recited during and after prayers', time: 'During Salah' },
  travel: { name: 'Travel Duas', icon: 'fa-plane', description: 'Supplications for safe and blessed journeys', time: 'When traveling' },
  food: { name: 'Food Duas', icon: 'fa-utensils', description: 'Supplications before and after eating', time: 'Mealtimes' },
  sleep: { name: 'Sleep Duas', icon: 'fa-bed', description: 'Supplications before sleeping and upon waking', time: 'Bedtime' },
  protection: { name: 'Protection Duas', icon: 'fa-shield-alt', description: 'Supplications seeking Allah\'s protection', time: 'Anytime' },
  forgiveness: { name: 'Forgiveness Duas', icon: 'fa-hands', description: 'Supplications seeking forgiveness and mercy', time: 'Anytime' },
  guidance: { name: 'Guidance Duas', icon: 'fa-compass', description: 'Supplications asking for guidance and wisdom', time: 'Anytime' },
  general: { name: 'General Duas', icon: 'fa-star', description: 'Various beneficial supplications for daily life', time: 'Anytime' }
};

const QURANIC_DUAS = [
  {
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar',
    english: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.',
    bangla: 'হে আমাদের প্রভু! আমাদেরকে দুনিয়াতে কল্যাণ দাও এবং আখিরাতেও কল্যাণ দাও এবং আমাদেরকে জাহান্নামের আযাব থেকে রক্ষা কর।',
    reference: 'Surah Al-Baqarah 2:201',
    category: 'general'
  },
  {
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
    transliteration: 'Rabbish-rahli sadri wa yassirli amri wahlul uqdatan min lisani yafqahu qawli',
    english: 'My Lord, expand for me my breast, ease for me my task, and untie the knot from my tongue that they may understand my speech.',
    bangla: 'হে আমার প্রভু! আমার বক্ষ প্রশস্ত করে দাও, আমার কাজ সহজ করে দাও এবং আমার জিহবার জড়তা দূর করে দাও যাতে তারা আমার কথা বুঝতে পারে।',
    reference: 'Surah Ta-Ha 20:25-28',
    category: 'guidance'
  },
  {
    arabic: 'رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا',
    transliteration: 'Rabbana la tu\'akhidhna in nasina aw akhta\'na',
    english: 'Our Lord, do not impose blame upon us if we have forgotten or erred.',
    bangla: 'হে আমাদের প্রভু! আমাদের ধরবেন না যদি আমরা ভুলে যাই কিংবা ভুল করি।',
    reference: 'Surah Al-Baqarah 2:286',
    category: 'forgiveness'
  },
  {
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    transliteration: 'Rabbi zidni ilma',
    english: 'My Lord, increase me in knowledge.',
    bangla: 'হে আমার প্রভু! আমার জ্ঞান বৃদ্ধি করুন।',
    reference: 'Surah Ta-Ha 20:114',
    category: 'guidance'
  },
  {
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    transliteration: 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yunin waj\'alna lil-muttaqina imama',
    english: 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us a leader for the righteous.',
    bangla: 'হে আমাদের প্রভু! আমাদের স্ত্রী ও সন্তানদের মধ্য থেকে আমাদের চক্ষু শীতলকারী দান কর এবং আমাদেরকে মুত্তাকীদের নেতা বানাও।',
    reference: 'Surah Al-Furqan 25:74',
    category: 'general'
  },
  {
    arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    transliteration: 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasireen',
    english: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
    bangla: 'হে আমাদের প্রভু! আমরা নিজেদের উপর জুলুম করেছি। যদি তুমি আমাদের ক্ষমা না কর ও দয়া না কর তাহলে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হয়ে যাব।',
    reference: 'Surah Al-A\'raf 7:23',
    category: 'forgiveness'
  },
  {
    arabic: 'لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    transliteration: 'La ilaha illa Anta, Subhanaka, inni kuntu minaz-zalimin',
    english: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
    bangla: 'তুমি ছাড়া কোনো ইলাহ নেই, তুমি পবিত্র, নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত।',
    reference: 'Surah Al-Anbiya 21:87',
    category: 'protection'
  },
  {
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    transliteration: 'Hasbunallahu wa ni\'mal-wakeel',
    english: 'Sufficient for us is Allah, and He is the best Disposer of affairs.',
    bangla: 'আল্লাহই আমাদের জন্য যথেষ্ট এবং তিনিই উত্তম কর্মবিধায়ক।',
    reference: 'Surah Aal-E-Imran 3:173',
    category: 'protection'
  },
  {
    arabic: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ',
    transliteration: 'Rabbi awzi\'ni an ashkura ni\'matakal-lati an\'amta \'alayya wa \'ala walidayya wa an a\'mala salihan tardahu',
    english: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve.',
    bangla: 'হে আমার প্রভু! আমাকে সামর্থ্য দাও যেন আমি তোমার সেই নেয়ামতের শুকরিয়া আদায় করতে পারি যা তুমি আমাকে ও আমার পিতামাতাকে দান করেছ।',
    reference: 'Surah An-Naml 27:19',
    category: 'general'
  },
  {
    arabic: 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    transliteration: 'Rabbana-ghfirli wa liwalidayya wa lil-mu\'minina yawma yaqumul-hisab',
    english: 'Our Lord, forgive me and my parents and the believers the Day the account is established.',
    bangla: 'হে আমাদের প্রভু! আমাকে, আমার পিতামাতাকে ও সকল মুমিনকে ক্ষমা কর যেদিন হিসাব কায়েম হবে।',
    reference: 'Surah Ibrahim 14:41',
    category: 'forgiveness'
  },
  {
    arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Rabbana taqabbal minna innaka Antas-Sami\'ul-\'Alim',
    english: 'Our Lord, accept this from us. Indeed You are the Hearing, the Knowing.',
    bangla: 'হে আমাদের প্রভু! আমাদের থেকে কবুল করুন। নিশ্চয়ই তুমি সর্বশ্রোতা, সর্বজ্ঞ।',
    reference: 'Surah Al-Baqarah 2:127',
    category: 'prayer'
  },
  {
    arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
    transliteration: 'Rabbij-\'alni muqimas-salati wa min dhurriyyati Rabbana wa taqabbal du\'a',
    english: 'My Lord, make me an establisher of prayer, and many from my descendants. Our Lord, and accept my supplication.',
    bangla: 'হে আমার প্রভু! আমাকে নামায কায়েমকারী বানাও এবং আমার বংশধরদেরও। হে আমাদের প্রভু! আমার দোয়া কবুল কর।',
    reference: 'Surah Ibrahim 14:40',
    category: 'prayer'
  }
];

function renderQuranicDuas() {
  let html = '<div class="quranic-duas-section">'
    + '<h3><i class="fas fa-hands"></i> Quranic Supplications</h3>'
    + '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:1rem">Beautiful duas directly from the Quran</p>'
    + '<div class="quranic-duas-grid">';

  QURANIC_DUAS.forEach((dua, idx) => {
    html += '<div class="quranic-dua-card">'
      + '<div class="qd-number">' + (idx + 1) + '</div>'
      + '<div class="qd-arabic">' + dua.arabic + '</div>'
      + '<div class="qd-transliteration">' + dua.transliteration + '</div>'
      + '<div class="qd-english">' + dua.english + '</div>'
      + '<div class="qd-bangla">' + dua.bangla + '</div>'
      + '<div class="qd-footer">'
      + '<span class="qd-ref"><i class="fas fa-quran"></i> ' + dua.reference + '</span>'
      + '<span class="qd-cat"><i class="fas ' + (DUA_CATEGORIES_DETAIL[dua.category]?.icon || 'fa-star') + '"></i> ' + (DUA_CATEGORIES_DETAIL[dua.category]?.name || dua.category) + '</span>'
      + '</div>'
      + '<div class="qd-actions">'
      + '<button class="ayah-action-btn" title="Copy" onclick="navigator.clipboard.writeText(\'' + dua.arabic.replace(/'/g, "\\'") + '\\n' + dua.transliteration.replace(/'/g, "\\'") + '\\n' + dua.english.replace(/'/g, "\\'") + '\\n-- ' + dua.reference.replace(/'/g, "\\'") + '\').then(function(){showToast(\'Copied!\',\'success\')})"><i class="fas fa-copy"></i></button>'
      + '</div>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

/* ============================================================
   42. ISLAMIC MONTHS & SPECIAL DAYS TRACKER
   ============================================================ */

const SPECIAL_ISLAMIC_DAYS = [
  { month: 1, day: 1, name: 'Islamic New Year', description: 'First day of Muharram, beginning of the Islamic calendar year.', importance: 'major' },
  { month: 1, day: 10, name: 'Day of Ashura', description: 'The 10th of Muharram, a day of fasting commemorating the deliverance of Musa (AS).', importance: 'major' },
  { month: 3, day: 12, name: 'Mawlid an-Nabi', description: 'Birthday of Prophet Muhammad (SAW) according to the majority opinion.', importance: 'major' },
  { month: 7, day: 27, name: 'Isra and Mi\'raj', description: 'The Night Journey and Ascension of Prophet Muhammad (SAW).', importance: 'major' },
  { month: 8, day: 15, name: 'Shab-e-Barat', description: 'The Night of Forgiveness, 15th of Sha\'ban.', importance: 'moderate' },
  { month: 9, day: 1, name: 'First Day of Ramadan', description: 'Beginning of the blessed month of fasting.', importance: 'major' },
  { month: 9, day: 21, name: 'Laylatul Qadr (Odd Night)', description: 'The Night of Power, better than a thousand months. Seek it in the last 10 odd nights.', importance: 'major' },
  { month: 9, day: 23, name: 'Laylatul Qadr (Odd Night)', description: 'One of the likely nights for Laylatul Qadr.', importance: 'major' },
  { month: 9, day: 25, name: 'Laylatul Qadr (Odd Night)', description: 'One of the likely nights for Laylatul Qadr.', importance: 'major' },
  { month: 9, day: 27, name: 'Laylatul Qadr (Most Likely)', description: 'Most commonly observed night for Laylatul Qadr.', importance: 'major' },
  { month: 9, day: 29, name: 'Laylatul Qadr (Odd Night)', description: 'One of the likely nights for Laylatul Qadr.', importance: 'major' },
  { month: 10, day: 1, name: 'Eid ul-Fitr', description: 'The Festival of Breaking the Fast, celebrating the end of Ramadan.', importance: 'major' },
  { month: 12, day: 8, name: 'Day of Tarwiyah', description: 'Pilgrims proceed to Mina, the beginning of Hajj rituals.', importance: 'moderate' },
  { month: 12, day: 9, name: 'Day of Arafah', description: 'Standing at Arafah, the most important day of Hajj. Fasting is highly recommended for non-pilgrims.', importance: 'major' },
  { month: 12, day: 10, name: 'Eid ul-Adha', description: 'The Festival of Sacrifice, commemorating Ibrahim\'s willingness to sacrifice his son.', importance: 'major' },
  { month: 12, day: 11, name: 'Days of Tashreeq', description: 'Days of eating, drinking, and remembering Allah (11-13 Dhul Hijjah).', importance: 'moderate' }
];

function renderSpecialDays() {
  const islamicDate = getIslamicDate();

  let html = '<div class="special-days-section">'
    + '<h3><i class="fas fa-calendar-star"></i> Special Islamic Days</h3>'
    + '<p style="color:var(--text-muted);font-size:var(--fs-sm);margin-bottom:0.5rem">Current Islamic Date: ' + islamicDate.day + ' ' + islamicDate.monthName + ' ' + islamicDate.year + ' AH</p>';

  /* Find upcoming special days */
  const currentMonth = islamicDate.month;
  const currentDay = islamicDate.day;

  const upcoming = SPECIAL_ISLAMIC_DAYS.filter(d => {
    if (d.month > currentMonth) return true;
    if (d.month === currentMonth && d.day >= currentDay) return true;
    return false;
  }).slice(0, 5);

  const past = SPECIAL_ISLAMIC_DAYS.filter(d => {
    if (d.month < currentMonth) return true;
    if (d.month === currentMonth && d.day < currentDay) return true;
    return false;
  });

  if (upcoming.length > 0) {
    html += '<h4 style="margin:1rem 0 0.5rem;color:var(--text-heading)">Upcoming</h4>'
      + '<div class="special-days-list">';
    upcoming.forEach(d => {
      const hijriMonths = ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Ula', 'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhul Qi\'dah', 'Dhul Hijjah'];
      html += '<div class="special-day-item special-' + d.importance + '">'
        + '<div class="special-day-date">' + d.day + ' ' + hijriMonths[d.month - 1] + '</div>'
        + '<div class="special-day-body">'
        + '<div class="special-day-name">' + d.name + '</div>'
        + '<div class="special-day-desc">' + d.description + '</div>'
        + '</div>'
        + '</div>';
    });
    html += '</div>';
  }

  html += '<h4 style="margin:1rem 0 0.5rem;color:var(--text-heading)">All Special Days</h4>'
    + '<div class="special-days-list">';
  SPECIAL_ISLAMIC_DAYS.forEach(d => {
    const hijriMonths = ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Ula', 'Jumada al-Thani', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhul Qi\'dah', 'Dhul Hijjah'];
    html += '<div class="special-day-item special-' + d.importance + '">'
      + '<div class="special-day-date">' + d.day + ' ' + hijriMonths[d.month - 1] + '</div>'
      + '<div class="special-day-body">'
      + '<div class="special-day-name">' + d.name + '</div>'
      + '<div class="special-day-desc">' + d.description + '</div>'
      + '</div>'
      + '</div>';
  });
  html += '</div></div>';

  return html;
}

/* ============================================================
   43. DHIKR COLLECTION HELPER
   ============================================================ */

function getDhikrForTime() {
  const hour = new Date().getHours();
  let context = 'general';
  if (hour >= 4 && hour < 7) context = 'morning';
  else if (hour >= 7 && hour < 12) context = 'forenoon';
  else if (hour >= 12 && hour < 15) context = 'afternoon';
  else if (hour >= 15 && hour < 18) context = 'evening';
  else if (hour >= 18 && hour < 21) context = 'night';
  else context = 'late_night';

  const contextDhikr = {
    morning: { text: 'SubhanAllah wa bihamdihi', arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', meaning: 'Glory and praise be to Allah', count: 100 },
    forenoon: { text: 'La hawla wa la quwwata illa billah', arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', meaning: 'There is no power nor strength except with Allah', count: 10 },
    afternoon: { text: 'Astaghfirullah', arabic: 'أَسْتَغْفِرُ اللَّهَ', meaning: 'I seek forgiveness from Allah', count: 100 },
    evening: { text: 'SubhanAllah', arabic: 'سُبْحَانَ اللَّهِ', meaning: 'Glory be to Allah', count: 33 },
    night: { text: 'Alhamdulillah', arabic: 'الْحَمْدُ لِلَّهِ', meaning: 'All praise is due to Allah', count: 33 },
    late_night: { text: 'Allahu Akbar', arabic: 'اللَّهُ أَكْبَرُ', meaning: 'Allah is the Greatest', count: 34 },
    general: { text: 'La ilaha illallah', arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ', meaning: 'There is no deity except Allah', count: 100 }
  };

  return contextDhikr[context] || contextDhikr.general;
}

function renderDhikrWidget() {
  const dhikr = getDhikrForTime();
  return '<div class="dhikr-widget">'
    + '<div class="dhikr-widget-header"><i class="fas fa-dharmachakra"></i> Dhikr of the Moment</div>'
    + '<div class="dhikr-widget-arabic">' + dhikr.arabic + '</div>'
    + '<div class="dhikr-widget-text">' + dhikr.text + '</div>'
    + '<div class="dhikr-widget-meaning">' + dhikr.meaning + '</div>'
    + '<div class="dhikr-widget-count">Recommended: ' + dhikr.count + ' times</div>'
    + '</div>';
}

/* ============================================================
   44. APP SUMMARY DASHBOARD HELPER
   ============================================================ */

function renderDashboardSummary() {
  const stats = getAppStats();
  const islamicDate = getIslamicDate();
  const dhikr = getDhikrForTime();

  let html = '<div class="dashboard-summary">';

  html += '<div class="dash-islamic-date">'
    + '<i class="fas fa-calendar-alt"></i> '
    + islamicDate.day + ' ' + islamicDate.monthName + ' ' + islamicDate.year + ' AH'
    + '</div>';

  html += '<div class="dash-stats-row">'
    + '<div class="dash-stat"><div class="dash-stat-value">' + stats.surahsRead + '/114</div><div class="dash-stat-label">Surahs Read</div></div>'
    + '<div class="dash-stat"><div class="dash-stat-value">' + stats.streak + '</div><div class="dash-stat-label">Day Streak</div></div>'
    + '<div class="dash-stat"><div class="dash-stat-value">' + stats.totalTime + '</div><div class="dash-stat-label">Total Time</div></div>'
    + '<div class="dash-stat"><div class="dash-stat-value">Lvl ' + stats.level + '</div><div class="dash-stat-label">' + stats.levelTitle + '</div></div>'
    + '</div>';

  html += '<div class="dash-achievements-preview">'
    + '<span><i class="fas fa-trophy"></i> ' + stats.achievementsUnlocked + '/' + stats.achievementsTotal + ' achievements</span>'
    + '<span><i class="fas fa-star"></i> ' + stats.points + ' points</span>'
    + '</div>';

  html += '</div>';
  return html;
}

/* ============================================================
   45. PRAYER TIMES ESTIMATION ENGINE
   ============================================================ */

const PRAYER_CALCULATION_METHODS = {
  MWL:       { fajrAngle: 18.0, ishaAngle: 17.0,  name: 'Muslim World League' },
  ISNA:      { fajrAngle: 15.0, ishaAngle: 15.0,  name: 'ISNA (North America)' },
  Egypt:     { fajrAngle: 19.5, ishaAngle: 17.5,  name: 'Egyptian General Authority' },
  Makkah:    { fajrAngle: 18.5, ishaAngle: 90,     name: 'Umm al-Qura (Makkah)', ishaMinutes: 90 },
  Karachi:   { fajrAngle: 18.0, ishaAngle: 18.0,  name: 'University of Islamic Sciences, Karachi' },
  Tehran:    { fajrAngle: 17.7, ishaAngle: 14.0,  name: 'Institute of Geophysics, Tehran' },
  Jafari:    { fajrAngle: 16.0, ishaAngle: 14.0,  name: 'Shia Ithna Ashari (Jafari)' },
  Singapore: { fajrAngle: 20.0, ishaAngle: 18.0,  name: 'MUIS (Singapore)' },
  France:    { fajrAngle: 12.0, ishaAngle: 12.0,  name: 'Union des Organisations Islamiques de France' },
  Turkey:    { fajrAngle: 18.0, ishaAngle: 17.0,  name: 'Diyanet Isleri Baskanligi (Turkey)' },
  Russia:    { fajrAngle: 16.0, ishaAngle: 15.0,  name: 'Spiritual Administration of Muslims of Russia' },
  Gulf:      { fajrAngle: 19.5, ishaAngle: 90,     name: 'Gulf Region', ishaMinutes: 90 },
};

function toRadians(deg) { return (deg * Math.PI) / 180; }
function toDegrees(rad) { return (rad * 180) / Math.PI; }

function sunPosition(jd) {
  var D = jd - 2451545.0;
  var g = (357.529 + 0.98560028 * D) % 360;
  var q = (280.459 + 0.98564736 * D) % 360;
  var L = (q + 1.915 * Math.sin(toRadians(g)) + 0.020 * Math.sin(toRadians(2 * g))) % 360;
  var e = 23.439 - 0.00000036 * D;
  var RA = toDegrees(Math.atan2(Math.cos(toRadians(e)) * Math.sin(toRadians(L)), Math.cos(toRadians(L)))) / 15;
  var dec = toDegrees(Math.asin(Math.sin(toRadians(e)) * Math.sin(toRadians(L))));
  var EqT = q / 15 - RA;
  if (EqT > 12) EqT -= 24;
  if (EqT < -12) EqT += 24;
  return { declination: dec, equation: EqT };
}

function julianDate(year, month, day) {
  if (month <= 2) { year -= 1; month += 12; }
  var A = Math.floor(year / 100);
  var B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
}

function computePrayerTimes(date, latitude, longitude, timezone, method) {
  method = method || 'MWL';
  var calc = PRAYER_CALCULATION_METHODS[method] || PRAYER_CALCULATION_METHODS.MWL;
  var year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
  var jd = julianDate(year, month, day);
  var sun = sunPosition(jd + 0.5);
  var decl = sun.declination, eqt = sun.equation;

  function asrTime(t, factor) {
    var d = toDegrees(Math.atan(1 / (factor + Math.tan(toRadians(Math.abs(latitude - decl))))));
    return computeMidDay(t) + timeAngle(d);
  }

  function computeMidDay(t) {
    return 12 + timezone - longitude / 15 - eqt;
  }

  function timeAngle(angle) {
    var cosA = (-Math.sin(toRadians(angle)) - Math.sin(toRadians(latitude)) * Math.sin(toRadians(decl)))
             / (Math.cos(toRadians(latitude)) * Math.cos(toRadians(decl)));
    if (cosA < -1) cosA = -1;
    if (cosA > 1) cosA = 1;
    return toDegrees(Math.acos(cosA)) / 15;
  }

  var midday = computeMidDay(12);
  var sunrise = midday - timeAngle(0.8333);
  var sunset = midday + timeAngle(0.8333);

  var fajr = midday - timeAngle(calc.fajrAngle);
  var dhuhr = midday + 1 / 60;
  var asr = asrTime(13, 1);
  var maghrib = sunset + 3 / 60;
  var isha;
  if (calc.ishaMinutes) {
    isha = maghrib + calc.ishaMinutes / 60;
  } else {
    isha = midday + timeAngle(calc.ishaAngle);
    if (isNaN(isha)) isha = maghrib + 1.5;
  }

  function formatTime(t) {
    if (isNaN(t)) return '--:--';
    t = t % 24;
    if (t < 0) t += 24;
    var h = Math.floor(t);
    var m = Math.round((t - h) * 60);
    if (m >= 60) { h++; m -= 60; }
    var period = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ' ' + period;
  }

  return {
    fajr:    formatTime(fajr),
    sunrise: formatTime(sunrise),
    dhuhr:   formatTime(dhuhr),
    asr:     formatTime(asr),
    maghrib: formatTime(maghrib),
    isha:    formatTime(isha),
    method:  calc.name
  };
}

function renderPrayerTimesWidget(lat, lng, tz, method) {
  var times = computePrayerTimes(new Date(), lat, lng, tz, method);
  var prayers = [
    { name: 'Fajr',    icon: 'fa-cloud-moon',  time: times.fajr,    arabic: '\u0627\u0644\u0641\u062C\u0631' },
    { name: 'Sunrise', icon: 'fa-sun',          time: times.sunrise, arabic: '\u0627\u0644\u0634\u0631\u0648\u0642' },
    { name: 'Dhuhr',   icon: 'fa-sun',          time: times.dhuhr,   arabic: '\u0627\u0644\u0638\u0647\u0631' },
    { name: 'Asr',     icon: 'fa-cloud-sun',    time: times.asr,     arabic: '\u0627\u0644\u0639\u0635\u0631' },
    { name: 'Maghrib', icon: 'fa-sunset',       time: times.maghrib, arabic: '\u0627\u0644\u0645\u063A\u0631\u0628' },
    { name: 'Isha',    icon: 'fa-moon',         time: times.isha,    arabic: '\u0627\u0644\u0639\u0634\u0627\u0621' },
  ];

  var html = '<div class="prayer-times-widget">'
    + '<h3><i class="fas fa-mosque"></i> Prayer Times</h3>'
    + '<p class="prayer-method">Calculation: ' + times.method + '</p>'
    + '<div class="prayer-grid">';

  prayers.forEach(function(p) {
    var now = new Date();
    var currentHours = now.getHours() + now.getMinutes() / 60;
    html += '<div class="prayer-card">'
      + '<div class="prayer-icon"><i class="fas ' + p.icon + '"></i></div>'
      + '<div class="prayer-name">' + p.name + '</div>'
      + '<div class="prayer-arabic">' + p.arabic + '</div>'
      + '<div class="prayer-time">' + p.time + '</div>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

function renderPrayerMethodSelector() {
  var html = '<div class="prayer-method-selector">'
    + '<label for="prayer-method-select"><i class="fas fa-calculator"></i> Calculation Method:</label>'
    + '<select id="prayer-method-select" onchange="updatePrayerMethod(this.value)">';
  Object.keys(PRAYER_CALCULATION_METHODS).forEach(function(key) {
    var selected = (state.prayerMethod || 'MWL') === key ? ' selected' : '';
    html += '<option value="' + key + '"' + selected + '>' + PRAYER_CALCULATION_METHODS[key].name + '</option>';
  });
  html += '</select></div>';
  return html;
}

function updatePrayerMethod(method) {
  state.prayerMethod = method;
  saveState();
  showToast('Prayer calculation method updated to ' + PRAYER_CALCULATION_METHODS[method].name);
}

/* ============================================================
   46. ARABIC TRANSLITERATION GUIDE
   ============================================================ */

var ARABIC_LETTERS = [
  { arabic: '\u0627', name: 'Alif',       transliteration: 'a/aa',   ipa: '/\u0294/, /a\u02D0/',  type: 'vowel',     position: 1 },
  { arabic: '\u0628', name: 'Ba',         transliteration: 'b',      ipa: '/b/',                  type: 'consonant', position: 2 },
  { arabic: '\u062A', name: 'Ta',         transliteration: 't',      ipa: '/t/',                  type: 'consonant', position: 3 },
  { arabic: '\u062B', name: 'Tha',        transliteration: 'th',     ipa: '/\u03B8/',             type: 'consonant', position: 4 },
  { arabic: '\u062C', name: 'Jim',        transliteration: 'j',      ipa: '/d\u0361\u0292/',      type: 'consonant', position: 5 },
  { arabic: '\u062D', name: 'Ha',         transliteration: 'h',      ipa: '/\u0127/',             type: 'consonant', position: 6 },
  { arabic: '\u062E', name: 'Kha',        transliteration: 'kh',     ipa: '/x/',                  type: 'consonant', position: 7 },
  { arabic: '\u062F', name: 'Dal',        transliteration: 'd',      ipa: '/d/',                  type: 'consonant', position: 8 },
  { arabic: '\u0630', name: 'Dhal',       transliteration: 'dh',     ipa: '/\u00F0/',             type: 'consonant', position: 9 },
  { arabic: '\u0631', name: 'Ra',         transliteration: 'r',      ipa: '/r/',                  type: 'consonant', position: 10 },
  { arabic: '\u0632', name: 'Zay',        transliteration: 'z',      ipa: '/z/',                  type: 'consonant', position: 11 },
  { arabic: '\u0633', name: 'Sin',        transliteration: 's',      ipa: '/s/',                  type: 'consonant', position: 12 },
  { arabic: '\u0634', name: 'Shin',       transliteration: 'sh',     ipa: '/\u0283/',             type: 'consonant', position: 13 },
  { arabic: '\u0635', name: 'Sad',        transliteration: 's',      ipa: '/s\u02E0/',            type: 'emphatic',  position: 14 },
  { arabic: '\u0636', name: 'Dad',        transliteration: 'd',      ipa: '/d\u02E0/',            type: 'emphatic',  position: 15 },
  { arabic: '\u0637', name: 'Ta',         transliteration: 't',      ipa: '/t\u02E0/',            type: 'emphatic',  position: 16 },
  { arabic: '\u0638', name: 'Dha',        transliteration: 'dh',     ipa: '/\u00F0\u02E0/',       type: 'emphatic',  position: 17 },
  { arabic: '\u0639', name: 'Ain',        transliteration: '\'',     ipa: '/\u0295/',             type: 'consonant', position: 18 },
  { arabic: '\u063A', name: 'Ghain',      transliteration: 'gh',     ipa: '/\u0263/',             type: 'consonant', position: 19 },
  { arabic: '\u0641', name: 'Fa',         transliteration: 'f',      ipa: '/f/',                  type: 'consonant', position: 20 },
  { arabic: '\u0642', name: 'Qaf',        transliteration: 'q',      ipa: '/q/',                  type: 'consonant', position: 21 },
  { arabic: '\u0643', name: 'Kaf',        transliteration: 'k',      ipa: '/k/',                  type: 'consonant', position: 22 },
  { arabic: '\u0644', name: 'Lam',        transliteration: 'l',      ipa: '/l/',                  type: 'consonant', position: 23 },
  { arabic: '\u0645', name: 'Mim',        transliteration: 'm',      ipa: '/m/',                  type: 'consonant', position: 24 },
  { arabic: '\u0646', name: 'Nun',        transliteration: 'n',      ipa: '/n/',                  type: 'consonant', position: 25 },
  { arabic: '\u0647', name: 'Ha',         transliteration: 'h',      ipa: '/h/',                  type: 'consonant', position: 26 },
  { arabic: '\u0648', name: 'Waw',        transliteration: 'w/uu',   ipa: '/w/, /u\u02D0/',       type: 'vowel',     position: 27 },
  { arabic: '\u064A', name: 'Ya',         transliteration: 'y/ii',   ipa: '/j/, /i\u02D0/',       type: 'vowel',     position: 28 },
];

var ARABIC_DIACRITICS = [
  { mark: '\u064E', name: 'Fathah',    sound: 'a',   description: 'Short "a" vowel above the letter' },
  { mark: '\u064F', name: 'Dammah',    sound: 'u',   description: 'Short "u" vowel above the letter' },
  { mark: '\u0650', name: 'Kasrah',    sound: 'i',   description: 'Short "i" vowel below the letter' },
  { mark: '\u0651', name: 'Shaddah',   sound: '(x2)', description: 'Doubles/emphasizes the consonant' },
  { mark: '\u0652', name: 'Sukun',     sound: '',    description: 'No vowel after the consonant' },
  { mark: '\u064B', name: 'Tanwin Fathah', sound: 'an', description: 'Nasalized "an" at end of word' },
  { mark: '\u064C', name: 'Tanwin Dammah', sound: 'un', description: 'Nasalized "un" at end of word' },
  { mark: '\u064D', name: 'Tanwin Kasrah', sound: 'in', description: 'Nasalized "in" at end of word' },
  { mark: '\u0670', name: 'Superscript Alif', sound: 'aa', description: 'Long "a" written as dagger alif' },
  { mark: '\u0657', name: 'Inverted Dammah', sound: 'u', description: 'Alternate dammah used in some traditions' },
];

function renderArabicAlphabetGuide(filterType) {
  var letters = ARABIC_LETTERS;
  if (filterType && filterType !== 'all') {
    letters = letters.filter(function(l) { return l.type === filterType; });
  }

  var html = '<div class="arabic-guide">'
    + '<h3><i class="fas fa-language"></i> Arabic Alphabet Guide</h3>'
    + '<div class="arabic-filter-bar">'
    + '<button class="arabic-filter-btn' + (!filterType || filterType === 'all' ? ' active' : '') + '" onclick="renderArabicGuideFiltered(\'all\')">All</button>'
    + '<button class="arabic-filter-btn' + (filterType === 'consonant' ? ' active' : '') + '" onclick="renderArabicGuideFiltered(\'consonant\')">Consonants</button>'
    + '<button class="arabic-filter-btn' + (filterType === 'vowel' ? ' active' : '') + '" onclick="renderArabicGuideFiltered(\'vowel\')">Vowels</button>'
    + '<button class="arabic-filter-btn' + (filterType === 'emphatic' ? ' active' : '') + '" onclick="renderArabicGuideFiltered(\'emphatic\')">Emphatics</button>'
    + '</div>'
    + '<div class="arabic-letter-grid">';

  letters.forEach(function(l) {
    html += '<div class="arabic-letter-card" data-type="' + l.type + '">'
      + '<div class="letter-arabic">' + l.arabic + '</div>'
      + '<div class="letter-name">' + l.name + '</div>'
      + '<div class="letter-translit">' + l.transliteration + '</div>'
      + '<div class="letter-ipa">' + l.ipa + '</div>'
      + '<div class="letter-type-badge letter-type-' + l.type + '">' + l.type + '</div>'
      + '</div>';
  });

  html += '</div>';

  html += '<h3 class="mt-2"><i class="fas fa-pen-nib"></i> Diacritical Marks (Tashkeel)</h3>'
    + '<div class="diacritics-grid">';
  ARABIC_DIACRITICS.forEach(function(d) {
    html += '<div class="diacritic-card">'
      + '<div class="diacritic-mark">\u0628' + d.mark + '</div>'
      + '<div class="diacritic-name">' + d.name + '</div>'
      + '<div class="diacritic-sound">Sound: ' + (d.sound || 'none') + '</div>'
      + '<div class="diacritic-desc">' + d.description + '</div>'
      + '</div>';
  });
  html += '</div></div>';
  return html;
}

function renderArabicGuideFiltered(type) {
  var container = document.getElementById('arabic-guide-container');
  if (container) {
    container.innerHTML = renderArabicAlphabetGuide(type);
  }
}

/* ============================================================
   47. QURANIC VOCABULARY FREQUENCY TRACKER
   ============================================================ */

var QURAN_COMMON_WORDS = [
  { arabic: '\u0627\u0644\u0644\u0647', transliteration: 'Allah', english: 'God/Allah', frequency: 2699, category: 'divine' },
  { arabic: '\u0631\u0628', transliteration: 'Rabb', english: 'Lord/Sustainer', frequency: 975, category: 'divine' },
  { arabic: '\u0642\u0627\u0644', transliteration: 'Qaala', english: 'He said', frequency: 1722, category: 'verb' },
  { arabic: '\u0643\u0627\u0646', transliteration: 'Kaana', english: 'He was/It was', frequency: 1390, category: 'verb' },
  { arabic: '\u0627\u0644\u0630\u064A\u0646', transliteration: 'Alladhina', english: 'Those who', frequency: 1464, category: 'pronoun' },
  { arabic: '\u0644\u0627', transliteration: 'Laa', english: 'No/Not', frequency: 1738, category: 'particle' },
  { arabic: '\u0645\u0627', transliteration: 'Maa', english: 'What/That which', frequency: 2377, category: 'pronoun' },
  { arabic: '\u0625\u0644\u0627', transliteration: 'Illa', english: 'Except', frequency: 663, category: 'particle' },
  { arabic: '\u0639\u0644\u0649', transliteration: 'Ala', english: 'Upon/On', frequency: 1445, category: 'preposition' },
  { arabic: '\u0623\u0646', transliteration: 'An', english: 'That/To', frequency: 1592, category: 'particle' },
  { arabic: '\u0625\u0646', transliteration: 'Inna', english: 'Indeed/Verily', frequency: 1688, category: 'particle' },
  { arabic: '\u064A\u0648\u0645', transliteration: 'Yawm', english: 'Day', frequency: 475, category: 'noun' },
  { arabic: '\u0623\u0631\u0636', transliteration: 'Ard', english: 'Earth/Land', frequency: 461, category: 'noun' },
  { arabic: '\u0633\u0645\u0627\u0621', transliteration: 'Samaa', english: 'Sky/Heaven', frequency: 310, category: 'noun' },
  { arabic: '\u0646\u0627\u0633', transliteration: 'Naas', english: 'People/Mankind', frequency: 241, category: 'noun' },
  { arabic: '\u0639\u0644\u0645', transliteration: 'Ilm', english: 'Knowledge', frequency: 105, category: 'noun' },
  { arabic: '\u0642\u0644\u0628', transliteration: 'Qalb', english: 'Heart', frequency: 168, category: 'noun' },
  { arabic: '\u0646\u0648\u0631', transliteration: 'Noor', english: 'Light', frequency: 49, category: 'noun' },
  { arabic: '\u062D\u0642', transliteration: 'Haqq', english: 'Truth/Right', frequency: 287, category: 'noun' },
  { arabic: '\u0639\u0630\u0627\u0628', transliteration: 'Adhaab', english: 'Punishment/Torment', frequency: 373, category: 'noun' },
  { arabic: '\u0631\u062D\u0645\u0629', transliteration: 'Rahmah', english: 'Mercy', frequency: 114, category: 'noun' },
  { arabic: '\u0622\u0645\u0646', transliteration: 'Aamana', english: 'He believed', frequency: 811, category: 'verb' },
  { arabic: '\u0639\u0645\u0644', transliteration: 'Amila', english: 'He did/worked', frequency: 360, category: 'verb' },
  { arabic: '\u062C\u0639\u0644', transliteration: 'Jaala', english: 'He made/placed', frequency: 346, category: 'verb' },
  { arabic: '\u0639\u0644\u0645', transliteration: 'Alima', english: 'He knew', frequency: 382, category: 'verb' },
  { arabic: '\u0623\u062A\u0649', transliteration: 'Ataa', english: 'He came/brought', frequency: 549, category: 'verb' },
  { arabic: '\u0631\u0623\u0649', transliteration: 'Raa', english: 'He saw', frequency: 328, category: 'verb' },
  { arabic: '\u0623\u062E\u0630', transliteration: 'Akhadha', english: 'He took', frequency: 273, category: 'verb' },
  { arabic: '\u062C\u0646\u0629', transliteration: 'Jannah', english: 'Paradise/Garden', frequency: 147, category: 'noun' },
  { arabic: '\u0646\u0627\u0631', transliteration: 'Naar', english: 'Fire/Hellfire', frequency: 194, category: 'noun' },
];

function renderVocabularyTracker(categoryFilter, sortBy) {
  var words = QURAN_COMMON_WORDS.slice();
  if (categoryFilter && categoryFilter !== 'all') {
    words = words.filter(function(w) { return w.category === categoryFilter; });
  }

  sortBy = sortBy || 'frequency';
  if (sortBy === 'frequency') {
    words.sort(function(a, b) { return b.frequency - a.frequency; });
  } else if (sortBy === 'alphabetical') {
    words.sort(function(a, b) { return a.transliteration.localeCompare(b.transliteration); });
  }

  var learnedWords = state.learnedVocabulary || [];

  var html = '<div class="vocab-tracker">'
    + '<h3><i class="fas fa-book-reader"></i> Quranic Vocabulary Tracker</h3>'
    + '<p class="vocab-subtitle">Learn the most frequently occurring words in the Quran</p>'
    + '<div class="vocab-stats-bar">'
    + '<span class="vocab-stat"><i class="fas fa-check-circle"></i> Learned: ' + learnedWords.length + '/' + QURAN_COMMON_WORDS.length + '</span>'
    + '<span class="vocab-stat"><i class="fas fa-percentage"></i> Progress: ' + Math.round(learnedWords.length / QURAN_COMMON_WORDS.length * 100) + '%</span>'
    + '</div>'
    + '<div class="vocab-controls">'
    + '<div class="vocab-filter">'
    + '<label>Category:</label>'
    + '<select onchange="filterVocabulary(this.value)">'
    + '<option value="all"' + (!categoryFilter || categoryFilter === 'all' ? ' selected' : '') + '>All</option>'
    + '<option value="divine"' + (categoryFilter === 'divine' ? ' selected' : '') + '>Divine Names</option>'
    + '<option value="noun"' + (categoryFilter === 'noun' ? ' selected' : '') + '>Nouns</option>'
    + '<option value="verb"' + (categoryFilter === 'verb' ? ' selected' : '') + '>Verbs</option>'
    + '<option value="particle"' + (categoryFilter === 'particle' ? ' selected' : '') + '>Particles</option>'
    + '<option value="pronoun"' + (categoryFilter === 'pronoun' ? ' selected' : '') + '>Pronouns</option>'
    + '<option value="preposition"' + (categoryFilter === 'preposition' ? ' selected' : '') + '>Prepositions</option>'
    + '</select></div>'
    + '<div class="vocab-sort">'
    + '<label>Sort:</label>'
    + '<select onchange="sortVocabulary(this.value)">'
    + '<option value="frequency"' + (sortBy === 'frequency' ? ' selected' : '') + '>By Frequency</option>'
    + '<option value="alphabetical"' + (sortBy === 'alphabetical' ? ' selected' : '') + '>Alphabetical</option>'
    + '</select></div>'
    + '</div>'
    + '<div class="vocab-grid">';

  words.forEach(function(w) {
    var isLearned = learnedWords.indexOf(w.transliteration) > -1;
    html += '<div class="vocab-card' + (isLearned ? ' vocab-learned' : '') + '">'
      + '<div class="vocab-arabic">' + w.arabic + '</div>'
      + '<div class="vocab-translit">' + w.transliteration + '</div>'
      + '<div class="vocab-english">' + w.english + '</div>'
      + '<div class="vocab-freq"><i class="fas fa-chart-bar"></i> ' + w.frequency + 'x</div>'
      + '<div class="vocab-cat-badge vocab-cat-' + w.category + '">' + w.category + '</div>'
      + '<button class="vocab-learn-btn' + (isLearned ? ' learned' : '') + '" onclick="toggleLearnedWord(\'' + w.transliteration + '\')">'
      + '<i class="fas ' + (isLearned ? 'fa-check-circle' : 'fa-circle') + '"></i> '
      + (isLearned ? 'Learned' : 'Mark Learned')
      + '</button>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

function toggleLearnedWord(transliteration) {
  if (!state.learnedVocabulary) state.learnedVocabulary = [];
  var idx = state.learnedVocabulary.indexOf(transliteration);
  if (idx > -1) {
    state.learnedVocabulary.splice(idx, 1);
    showToast('Word removed from learned list');
  } else {
    state.learnedVocabulary.push(transliteration);
    showToast('Word marked as learned! (' + state.learnedVocabulary.length + '/' + QURAN_COMMON_WORDS.length + ')');
    checkAchievement('vocabulary');
  }
  saveState();
}

function filterVocabulary(category) {
  var container = document.getElementById('vocab-tracker-container');
  if (container) {
    container.innerHTML = renderVocabularyTracker(category, state.vocabSortBy || 'frequency');
  }
}

function sortVocabulary(sortBy) {
  state.vocabSortBy = sortBy;
  var container = document.getElementById('vocab-tracker-container');
  if (container) {
    container.innerHTML = renderVocabularyTracker(state.vocabCategoryFilter || 'all', sortBy);
  }
}

/* ============================================================
   48. NIGHT/DAY MODE AUTO-SWITCH
   ============================================================ */

function initAutoThemeSwitch() {
  if (!state.autoThemeEnabled) return;

  var checkInterval = 60000;
  function checkAndSwitch() {
    if (!state.autoThemeEnabled) return;
    var hour = new Date().getHours();
    var nightStart = state.nightModeStart || 19;
    var nightEnd = state.nightModeEnd || 6;
    var isNightTime = (hour >= nightStart || hour < nightEnd);
    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    var shouldBeNight = isNightTime;

    if (shouldBeNight && currentTheme !== 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      state.theme = 'dark';
      saveState();
      showToast('Switched to dark mode (auto)');
    } else if (!shouldBeNight && currentTheme !== 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      state.theme = 'light';
      saveState();
      showToast('Switched to light mode (auto)');
    }
  }

  checkAndSwitch();
  setInterval(checkAndSwitch, checkInterval);
}

function renderAutoThemeSettings() {
  var html = '<div class="auto-theme-settings">'
    + '<h4><i class="fas fa-adjust"></i> Auto Theme Switch</h4>'
    + '<div class="setting-row">'
    + '<label>Enable Auto Switch:</label>'
    + '<input type="checkbox" id="auto-theme-toggle"'
    + (state.autoThemeEnabled ? ' checked' : '')
    + ' onchange="toggleAutoTheme(this.checked)">'
    + '</div>'
    + '<div class="setting-row">'
    + '<label>Night Mode Starts (hour):</label>'
    + '<input type="number" min="0" max="23" value="' + (state.nightModeStart || 19)
    + '" onchange="updateNightStart(this.value)">'
    + '</div>'
    + '<div class="setting-row">'
    + '<label>Night Mode Ends (hour):</label>'
    + '<input type="number" min="0" max="23" value="' + (state.nightModeEnd || 6)
    + '" onchange="updateNightEnd(this.value)">'
    + '</div>'
    + '</div>';
  return html;
}

function toggleAutoTheme(enabled) {
  state.autoThemeEnabled = enabled;
  saveState();
  if (enabled) {
    initAutoThemeSwitch();
    showToast('Auto theme switch enabled');
  } else {
    showToast('Auto theme switch disabled');
  }
}

function updateNightStart(hour) {
  state.nightModeStart = parseInt(hour, 10);
  saveState();
}

function updateNightEnd(hour) {
  state.nightModeEnd = parseInt(hour, 10);
  saveState();
}

/* ============================================================
   49. SURAH GROUPING BY THEME
   ============================================================ */

var SURAH_THEMES = {
  tawhid: {
    name: 'Tawhid (Monotheism)',
    icon: 'fa-star',
    description: 'Surahs emphasizing the oneness of Allah',
    surahs: [1, 2, 6, 7, 10, 11, 12, 13, 14, 15, 16, 20, 21, 23, 25, 37, 51, 52, 112],
  },
  stories: {
    name: 'Stories of Prophets',
    icon: 'fa-book-open',
    description: 'Surahs containing stories of past prophets and nations',
    surahs: [2, 3, 5, 6, 7, 10, 11, 12, 14, 15, 18, 19, 20, 21, 26, 27, 28, 29, 37, 38, 54, 71],
  },
  legislation: {
    name: 'Islamic Law & Guidance',
    icon: 'fa-gavel',
    description: 'Surahs with legal rulings and practical guidance',
    surahs: [2, 3, 4, 5, 8, 9, 22, 24, 33, 47, 48, 49, 58, 60, 65, 66],
  },
  afterlife: {
    name: 'Day of Judgment & Afterlife',
    icon: 'fa-cloud',
    description: 'Surahs about resurrection, judgment, paradise and hellfire',
    surahs: [6, 18, 20, 36, 39, 50, 56, 67, 69, 70, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 88, 99, 100, 101],
  },
  worship: {
    name: 'Worship & Devotion',
    icon: 'fa-pray',
    description: 'Surahs focusing on prayer, remembrance and devotion to Allah',
    surahs: [1, 17, 20, 29, 32, 50, 51, 73, 87, 96, 108, 110],
  },
  nature: {
    name: 'Signs in Nature',
    icon: 'fa-leaf',
    description: 'Surahs pointing to natural phenomena as signs of Allah',
    surahs: [6, 10, 13, 16, 27, 30, 31, 35, 36, 41, 45, 55, 67, 78, 86, 88, 91],
  },
  ethics: {
    name: 'Ethics & Character',
    icon: 'fa-heart',
    description: 'Surahs emphasizing good character, justice, and social ethics',
    surahs: [2, 3, 4, 16, 17, 25, 31, 42, 49, 59, 90, 103, 107],
  },
  protection: {
    name: 'Protection & Refuge',
    icon: 'fa-shield-alt',
    description: 'Surahs seeking protection from evil and harm',
    surahs: [113, 114, 112, 109, 2],
  },
};

function renderSurahThemeGroups(selectedTheme) {
  var html = '<div class="surah-themes">'
    + '<h3><i class="fas fa-layer-group"></i> Surahs by Theme</h3>'
    + '<p class="theme-subtitle">Explore surahs organized by their primary themes</p>'
    + '<div class="theme-tabs">';

  var themeKeys = Object.keys(SURAH_THEMES);
  themeKeys.forEach(function(key) {
    var theme = SURAH_THEMES[key];
    html += '<button class="theme-tab' + (selectedTheme === key ? ' active' : '') + '"'
      + ' onclick="selectSurahTheme(\'' + key + '\')">'
      + '<i class="fas ' + theme.icon + '"></i> ' + theme.name
      + ' <span class="theme-count">(' + theme.surahs.length + ')</span>'
      + '</button>';
  });

  html += '</div>';

  if (selectedTheme && SURAH_THEMES[selectedTheme]) {
    var theme = SURAH_THEMES[selectedTheme];
    html += '<div class="theme-detail">'
      + '<h4><i class="fas ' + theme.icon + '"></i> ' + theme.name + '</h4>'
      + '<p>' + theme.description + '</p>'
      + '<div class="theme-surah-grid">';

    theme.surahs.forEach(function(num) {
      var s = typeof SURAH_DATA !== 'undefined' ? SURAH_DATA[num - 1] : null;
      if (s) {
        html += '<div class="theme-surah-card" onclick="loadSurah(' + num + ')">'
          + '<div class="ts-num">' + num + '</div>'
          + '<div class="ts-info">'
          + '<div class="ts-name">' + s.englishName + '</div>'
          + '<div class="ts-arabic">' + s.name + '</div>'
          + '<div class="ts-meaning">' + s.englishNameTranslation + '</div>'
          + '<div class="ts-meta">' + s.numberOfAyahs + ' ayahs &bull; ' + s.revelationType + '</div>'
          + '</div>'
          + '</div>';
      }
    });

    html += '</div></div>';
  } else {
    html += '<div class="theme-placeholder">'
      + '<i class="fas fa-hand-pointer"></i>'
      + '<p>Select a theme above to see related surahs</p>'
      + '</div>';
  }

  html += '</div>';
  return html;
}

function selectSurahTheme(theme) {
  var container = document.getElementById('surah-themes-container');
  if (container) {
    container.innerHTML = renderSurahThemeGroups(theme);
  }
}

/* ============================================================
   50. SESSION ANALYTICS
   ============================================================ */

function initSessionAnalytics() {
  if (!state.sessionHistory) state.sessionHistory = [];

  var session = {
    id: Date.now(),
    startTime: new Date().toISOString(),
    endTime: null,
    pagesVisited: [],
    surahsRead: [],
    searchesPerformed: 0,
    bookmarksAdded: 0,
    notesAdded: 0,
    duration: 0,
  };

  state.currentSession = session;

  window.addEventListener('beforeunload', function() {
    if (state.currentSession) {
      state.currentSession.endTime = new Date().toISOString();
      state.currentSession.duration = Date.now() - state.currentSession.id;
      state.sessionHistory.push(state.currentSession);
      if (state.sessionHistory.length > 100) {
        state.sessionHistory = state.sessionHistory.slice(-100);
      }
      saveState();
    }
  });
}

function trackSessionEvent(eventType, data) {
  if (!state.currentSession) return;
  switch (eventType) {
    case 'page':
      if (state.currentSession.pagesVisited.indexOf(data) === -1) {
        state.currentSession.pagesVisited.push(data);
      }
      break;
    case 'surah':
      if (state.currentSession.surahsRead.indexOf(data) === -1) {
        state.currentSession.surahsRead.push(data);
      }
      break;
    case 'search':
      state.currentSession.searchesPerformed++;
      break;
    case 'bookmark':
      state.currentSession.bookmarksAdded++;
      break;
    case 'note':
      state.currentSession.notesAdded++;
      break;
  }
}

function renderSessionHistory() {
  var sessions = (state.sessionHistory || []).slice().reverse().slice(0, 20);
  var html = '<div class="session-history">'
    + '<h3><i class="fas fa-history"></i> Session History</h3>'
    + '<p>Your recent reading sessions</p>';

  if (sessions.length === 0) {
    html += '<div class="empty-state"><i class="fas fa-clock"></i><p>No session history yet</p></div>';
  } else {
    html += '<div class="session-list">';
    sessions.forEach(function(s, i) {
      var durationMin = Math.round((s.duration || 0) / 60000);
      var date = new Date(s.startTime).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      html += '<div class="session-item">'
        + '<div class="session-date"><i class="fas fa-calendar"></i> ' + date + '</div>'
        + '<div class="session-stats">'
        + '<span><i class="fas fa-clock"></i> ' + durationMin + ' min</span>'
        + '<span><i class="fas fa-file-alt"></i> ' + (s.pagesVisited ? s.pagesVisited.length : 0) + ' pages</span>'
        + '<span><i class="fas fa-quran"></i> ' + (s.surahsRead ? s.surahsRead.length : 0) + ' surahs</span>'
        + '<span><i class="fas fa-search"></i> ' + (s.searchesPerformed || 0) + ' searches</span>'
        + '</div>'
        + '</div>';
    });
    html += '</div>';

    var totalSessions = state.sessionHistory.length;
    var totalDuration = state.sessionHistory.reduce(function(sum, s) { return sum + (s.duration || 0); }, 0);
    var avgDuration = totalSessions > 0 ? Math.round(totalDuration / totalSessions / 60000) : 0;
    var totalSurahsRead = state.sessionHistory.reduce(function(sum, s) {
      return sum + (s.surahsRead ? s.surahsRead.length : 0);
    }, 0);

    html += '<div class="session-summary">'
      + '<h4>Summary</h4>'
      + '<div class="summary-grid">'
      + '<div class="summary-card"><div class="summary-num">' + totalSessions + '</div><div class="summary-label">Total Sessions</div></div>'
      + '<div class="summary-card"><div class="summary-num">' + avgDuration + ' min</div><div class="summary-label">Avg Duration</div></div>'
      + '<div class="summary-card"><div class="summary-num">' + totalSurahsRead + '</div><div class="summary-label">Surahs Read</div></div>'
      + '<div class="summary-card"><div class="summary-num">' + Math.round(totalDuration / 3600000) + ' hrs</div><div class="summary-label">Total Time</div></div>'
      + '</div></div>';
  }

  html += '</div>';
  return html;
}

/* ============================================================
   GLOBAL WINDOW EXPORTS & DOM READY
   ============================================================ */

window.state = state;
window.saveState = saveState;
window.renderBookmarks = renderBookmarks;
window.renderNotes = renderNotes;
window.renderReadingPlan = renderReadingPlan;
window.showToast = showToast;
window.toggleAsmaMemorized = toggleAsmaMemorized;
window.showNameDetail = showNameDetail;
window.removeFromCollection = removeFromCollection;
window.showAddToCollectionModal = showAddToCollectionModal;
window.renderSearchHistory = renderSearchHistory;
window.exportStatistics = exportStatistics;
window.hideContextMenu = hideContextMenu;
window.renderArabicGuideFiltered = renderArabicGuideFiltered;
window.filterVocabulary = filterVocabulary;
window.sortVocabulary = sortVocabulary;
window.toggleLearnedWord = toggleLearnedWord;
window.toggleAutoTheme = toggleAutoTheme;
window.updateNightStart = updateNightStart;
window.updateNightEnd = updateNightEnd;
window.updatePrayerMethod = updatePrayerMethod;
window.selectSurahTheme = selectSurahTheme;
window.computePrayerTimes = computePrayerTimes;
window.renderPrayerTimesWidget = renderPrayerTimesWidget;
window.renderArabicAlphabetGuide = renderArabicAlphabetGuide;
window.renderVocabularyTracker = renderVocabularyTracker;
window.renderSurahThemeGroups = renderSurahThemeGroups;
window.renderSessionHistory = renderSessionHistory;
window.trackSessionEvent = trackSessionEvent;
window.navigateTo = navigateTo;
window.setTheme = applyTheme;

document.addEventListener('DOMContentLoaded', init);

/* ============================================================
   FIREBASE SERVER CONTROL INTEGRATION
   ============================================================ */
(function initServerControl() {
    if (typeof firebase === 'undefined') return;

    const fbConfig = {
        apiKey: "AIzaSyCo_Ct7zfmOX3m-10spK3kLreZnBM09GQc",
        authDomain: "chatapp-81ebf.firebaseapp.com",
        databaseURL: "https://chatapp-81ebf-default-rtdb.firebaseio.com",
        projectId: "chatapp-81ebf",
        storageBucket: "chatapp-81ebf.firebasestorage.app"
    };

    let fbApp;
    try {
        fbApp = firebase.app();
    } catch (e) {
        fbApp = firebase.initializeApp(fbConfig);
    }
    const db = firebase.database();
    const adminRef = db.ref('quran-admin');

    // --- Visitor Tracking ---
    let visitorId = localStorage.getItem('quran-visitor-id');
    if (!visitorId) {
        visitorId = 'v_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
        localStorage.setItem('quran-visitor-id', visitorId);
    }

    function getBrowserName() {
        const ua = navigator.userAgent;
        if (ua.includes('Firefox')) return 'Firefox';
        if (ua.includes('Edg')) return 'Edge';
        if (ua.includes('Chrome')) return 'Chrome';
        if (ua.includes('Safari')) return 'Safari';
        return 'Other';
    }

    function trackVisitor() {
        const vRef = db.ref('quran-admin/analytics/visitors/' + visitorId);
        const data = {
            lastSeen: Date.now(),
            page: state.currentPage || 'home',
            device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
            browser: getBrowserName(),
            online: true
        };
        vRef.update(data);
        vRef.child('online').onDisconnect().set(false);
        vRef.child('lastSeen').onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);

        // Daily visitor count
        const today = new Date().toISOString().split('T')[0];
        db.ref('quran-admin/analytics/dailyVisitors/' + today).transaction(c => (c || 0) + 1);
    }

    // Track page navigations
    const origNavigateTo = window.navigateTo;
    if (typeof origNavigateTo === 'function') {
        window.navigateTo = function(page) {
            origNavigateTo(page);
            // Update page in Firebase
            db.ref('quran-admin/analytics/visitors/' + visitorId + '/page').set(page);
            db.ref('quran-admin/analytics/visitors/' + visitorId + '/lastSeen').set(Date.now());
            // Track page views
            db.ref('quran-admin/analytics/pageViews/' + page).transaction(c => (c || 0) + 1);
        };
    }

    // --- Broadcast Listener ---
    let broadcastDismissed = null;

    adminRef.child('broadcast/current').on('value', snap => {
        const data = snap.val();
        const overlay = document.getElementById('serverBroadcastOverlay');
        if (!overlay) return;

        if (data && data.active && data.timestamp !== broadcastDismissed) {
            const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', alert: '🚨', emergency: '🔴' };
            document.getElementById('serverBroadcastIcon').textContent = icons[data.type] || 'ℹ️';
            document.getElementById('serverBroadcastTitle').textContent = data.title || 'Server Message';
            document.getElementById('serverBroadcastMsg').textContent = data.message || '';
            overlay.setAttribute('data-type', data.type || 'info');
            overlay.style.display = 'flex';

            // Auto-dismiss
            if (data.duration && data.duration > 0) {
                setTimeout(() => { overlay.style.display = 'none'; }, data.duration * 1000);
            }
        } else {
            overlay.style.display = 'none';
        }
    });

    window.dismissBroadcast = function() {
        const overlay = document.getElementById('serverBroadcastOverlay');
        if (overlay) overlay.style.display = 'none';
        adminRef.child('broadcast/current').once('value').then(s => {
            if (s.val()) broadcastDismissed = s.val().timestamp;
        });
    };

    // --- Announcement Banner Listener ---
    let announcementDismissedTs = null;

    adminRef.child('announcement').on('value', snap => {
        const data = snap.val();
        const banner = document.getElementById('serverAnnouncementBanner');
        if (!banner) return;

        if (data && data.active && data.text && data.timestamp !== announcementDismissedTs) {
            document.getElementById('serverAnnouncementText').textContent = data.text;
            banner.setAttribute('data-type', data.type || 'info');
            const link = document.getElementById('serverAnnouncementLink');
            if (data.link) { link.href = data.link; link.style.display = 'inline'; }
            else { link.style.display = 'none'; }
            banner.style.display = 'flex';
        } else {
            banner.style.display = 'none';
        }
    });

    window.dismissAnnouncement = function() {
        const banner = document.getElementById('serverAnnouncementBanner');
        if (banner) banner.style.display = 'none';
        adminRef.child('announcement').once('value').then(s => {
            if (s.val()) announcementDismissedTs = s.val().timestamp;
        });
    };

    // --- Maintenance Mode Listener ---
    adminRef.child('maintenance').on('value', snap => {
        const data = snap.val();
        const screen = document.getElementById('maintenanceScreen');
        if (!screen) return;

        if (data && data.active) {
            document.getElementById('maintenanceMsg').textContent = data.message || 'We\'re performing some updates. Please check back shortly!';
            const eta = document.getElementById('maintenanceEta');
            eta.textContent = data.estimatedTime ? 'Estimated time: ' + data.estimatedTime : '';
            screen.style.display = 'flex';
        } else {
            screen.style.display = 'none';
        }
    });

    // --- Theme Override Listener ---
    adminRef.child('siteControls/themeOverride').on('value', snap => {
        const theme = snap.val();
        if (theme && typeof window.setTheme === 'function') {
            window.setTheme(theme);
        }
    });

    // --- Force Refresh Listener ---
    let lastRefreshTs = Date.now();
    adminRef.child('forceRefresh').on('value', snap => {
        const ts = snap.val();
        if (ts && ts > lastRefreshTs) {
            lastRefreshTs = ts;
            location.reload();
        }
    });

    // --- Site Controls Listener ---
    adminRef.child('siteControls').on('value', snap => {
        const data = snap.val() || {};

        // Visitor counter widget
        let widget = document.getElementById('visitorCounterWidget');
        if (data.showVisitorCount) {
            if (!widget) {
                widget = document.createElement('div');
                widget.id = 'visitorCounterWidget';
                widget.className = 'visitor-counter-widget';
                widget.innerHTML = '<span class="vc-dot"></span> <span id="visitorCountNum">0</span> online';
                document.body.appendChild(widget);
            }
            adminRef.child('analytics/visitors').on('value', vs => {
                const count = Object.values(vs.val() || {}).filter(v => v.online).length;
                const el = document.getElementById('visitorCountNum');
                if (el) el.textContent = count;
            });
        } else if (widget) {
            widget.remove();
        }
    });

    // --- Init tracking after DOM ready ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackVisitor);
    } else {
        trackVisitor();
    }
})();

})();
