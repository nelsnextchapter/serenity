/* ═══════════════════════════════════════════════════════
   ADD NEW MEDITATIONS HERE — copy and paste a new object
   into this array. Fields:
     name:  display name (string)
     emoji: single emoji (string)
     cat:   category — anxiety | sleep | morning | healing | focus | love
     color: CSS gradient for the thumbnail background
     dur:   duration in minutes (number)
     desc:  short description shown on the card
   Example:
   {name:'Ocean Drift',emoji:'🐚',cat:'sleep',
    color:'linear-gradient(135deg,#C0D8E8,#A0C0D8)',
    dur:20,desc:'Float into restful calm'}
═══════════════════════════════════════════════════════ */
const MEDITATIONS=[
  {name:'Morning Grounding',emoji:'🌅',cat:'morning',color:'linear-gradient(135deg,#F5E6D0,#E8D4C0)',dur:10,desc:'Begin the day with gentle presence'},
  {name:'Anxiety Relief',emoji:'🌊',cat:'anxiety',color:'linear-gradient(135deg,#D0E8E8,#C0D8E8)',dur:12,desc:'Dissolve tension and return to calm'},
  {name:'Deep Sleep',emoji:'🌙',cat:'sleep',sleepTab:true,color:'linear-gradient(135deg,#2A1A3A,#1A2A3A)',dur:25,desc:'Drift into peaceful slumber'},
  {name:'Emotional Healing',emoji:'🌸',cat:'healing',color:'linear-gradient(135deg,#F0D8E0,#E8D0D8)',dur:18,desc:'Hold yourself with tenderness'},
  {name:'Focus Clarity',emoji:'🔮',cat:'focus',color:'linear-gradient(135deg,#D8D0F0,#D0D8E8)',dur:8,desc:'Clear the mental fog gently'},
  {name:'Self-Love',emoji:'💛',cat:'love',color:'linear-gradient(135deg,#F5F0D0,#F0E8C8)',dur:15,desc:'Cultivate deep inner kindness'},
  {name:'Stress Reset',emoji:'🍃',cat:'anxiety',color:'linear-gradient(135deg,#D0E8D0,#C8E0C8)',dur:10,desc:'Release what you cannot control'},
  {name:'Nervous System Reset',emoji:'⚡',cat:'anxiety',color:'linear-gradient(135deg,#E8E0D0,#E0D8C8)',dur:20,desc:'Regulate and restore your body'},
  {name:'Confidence',emoji:'✨',cat:'love',color:'linear-gradient(135deg,#F5E8D0,#EDD0B8)',dur:12,desc:'Step into your fullest self'},
  {name:'Sleep Story',emoji:'⭐',cat:'sleep',sleepTab:true,color:'linear-gradient(135deg,#1A2030,#0A1020)',dur:30,desc:'A calming narrative into rest'},
  {name:'Mindful Breathing',emoji:'🫧',cat:'focus',color:'linear-gradient(135deg,#D8EEF5,#C8E4F0)',dur:5,desc:'Anchor to the present moment'},
  {name:'Burnout Recovery',emoji:'🕯️',cat:'healing',color:'linear-gradient(135deg,#F0E8D8,#E8DDD0)',dur:22,desc:'Restore what exhaustion depleted'},
  {name:'Body Scan',emoji:'🌊',cat:'sleep',sleepTab:true,color:'linear-gradient(135deg,#1A2030,#0A1020)',dur:15,desc:'Release each part of your body'},
  {name:'Gratitude Ritual',emoji:'📿',cat:'healing',sleepTab:true,color:'linear-gradient(135deg,#1E1228,#0A1520)',dur:10,desc:'Rest in what was good today'},
];

/* ═══════════════════════════════════════════════════════
   ADD NEW SOUND TILES HERE — copy and paste a new object.
   Fields:
     name:  display name (string)
     emoji: single emoji (string)
     id:    unique lowercase slug, no spaces (string)
   Then upload an audio file in Settings and assign it
   to your new slot using the "Sound slot" dropdown.
   Example: {name:'Whale Song',emoji:'🐋',id:'whale'}
═══════════════════════════════════════════════════════ */
const SOUNDS=[
  {name:'Rain',emoji:'🌧️',id:'rain'},{name:'Thunderstorm',emoji:'⛈️',id:'thunder'},
  {name:'Campfire',emoji:'🔥',id:'fire'},{name:'Ocean',emoji:'🌊',id:'ocean'},
  {name:'River',emoji:'💧',id:'river'},{name:'Forest',emoji:'🌿',id:'forest'},
  {name:'Birds',emoji:'🐦',id:'birds'},{name:'Café',emoji:'☕',id:'cafe'},
  {name:'Night Crickets',emoji:'🦗',id:'crickets'},{name:'White Noise',emoji:'〰️',id:'white'},
  {name:'Singing Bowls',emoji:'🪬',id:'bowls'},{name:'Wind Chimes',emoji:'🎐',id:'chimes'},
  {name:'Soft Piano',emoji:'🎹',id:'piano'},{name:'Pink Noise',emoji:'🌸',id:'pink'},
  {name:'Brown Noise',emoji:'🤎',id:'brown'},{name:'Wind',emoji:'💨',id:'wind'},
  /* ── Solfeggio & Healing Frequencies ── */
  {name:'174 Hz Grounding',emoji:'🔔',id:'hz174'},
  {name:'285 Hz Healing',emoji:'💚',id:'hz285'},
  {name:'396 Hz Release',emoji:'🌀',id:'hz396'},
  {name:'417 Hz Change',emoji:'🔄',id:'hz417'},
  {name:'528 Hz Transform',emoji:'✨',id:'hz528'},
  {name:'639 Hz Heart',emoji:'💛',id:'hz639'},
  {name:'741 Hz Intuition',emoji:'🔮',id:'hz741'},
  {name:'852 Hz Spiritual',emoji:'🌟',id:'hz852'},
  {name:'963 Hz Divine',emoji:'☀️',id:'hz963'},
  {name:'432 Hz Universal',emoji:'🎵',id:'hz432'},
  {name:'136 Hz Om',emoji:'🕉️',id:'hz136'},
  {name:'40 Hz Gamma',emoji:'⚡',id:'hz40'},
  {name:'Delta 2Hz Sleep',emoji:'😴',id:'bin_delta'},
  {name:'Theta 6Hz Meditate',emoji:'🧘',id:'bin_theta'},
  {name:'Alpha 10Hz Relax',emoji:'🫧',id:'bin_alpha'},
  {name:'Beta 18Hz Focus',emoji:'🎯',id:'bin_beta'},
  {name:'Gamma 40Hz Cognition',emoji:'🧠',id:'bin_gamma'},
  {name:'Schumann 7.83Hz',emoji:'🌍',id:'bin_schumann'},
  {name:'Tibetan Bowl 528',emoji:'🪘',id:'bowl528'},
  {name:'Soft Drone',emoji:'🎶',id:'drone_soft'},
  {name:'Sub Bass Drone',emoji:'🔉',id:'drone_sub'},
  {name:'Celestial Pad',emoji:'🌌',id:'pad_celestial'},
];

/* Mood → recommended category */
const MOOD_TO_CAT={Peaceful:'healing',Anxious:'anxiety',Low:'healing',Inspired:'love',Tired:'sleep',Grateful:'love',Stressed:'anxiety',Glowing:'morning',Heavy:'healing',Calm:'focus'};
function timeOfDayCat(){const h=new Date().getHours();if(h>=5&&h<10)return'morning';if(h>=10&&h<14)return'focus';if(h>=14&&h<18)return'anxiety';if(h>=18&&h<21)return'healing';return'sleep';}
function getDailySuggestion(){const savedMood=localStorage.getItem('serenity_mood');let cat=timeOfDayCat(),reason='Based on your time of day';if(savedMood){try{const m=JSON.parse(savedMood);if(m.label&&MOOD_TO_CAT[m.label]){cat=MOOD_TO_CAT[m.label];reason=`Based on your mood: ${m.emoji} ${m.label}`;}}catch(e){}}const pool=MEDITATIONS.filter(m=>m.cat===cat);if(!pool.length)return{med:MEDITATIONS[0],reason:'Good place to start'};const med=pool[Math.floor(Date.now()/86400000)%pool.length];return{med,reason};}
const AFFIRMATIONS=["You are exactly where you need to be right now.","Your rest is sacred. Your peace is deserved.","You are allowed to take up space, to breathe, to be.","Softness is not weakness — it is your greatest strength.","You are worthy of gentleness, especially your own.","Every exhale releases what no longer serves you.","Your nervous system knows how to find its way home.","You are held, you are safe, you are enough.","Let the quiet fill all the spaces that noise has left.","Today, you gave what you could. That is beautiful.","You do not have to earn your rest.","In stillness, you remember who you truly are.","Peace is not something you chase — it is something you return to.","Your feelings are messengers, not monsters.","You are allowed to change your mind, your pace, your needs.","Being gentle with yourself is an act of courage.","You don’t need to be more productive. You need to breathe.","Rest is not laziness. It is how you remember yourself.","The way you talk to yourself matters. Choose tenderness.","You are more than what you produce or accomplish.","Healing is not linear, and that is okay.","Your body holds wisdom. Listen to it.","You are worthy of the love you give so freely to others.","Slow down. The world can wait while you breathe.","You are doing better than you know.","Every soft morning is a new invitation.","You deserve the same grace you offer everyone else.","Stillness is not empty — it is full of you.","Even in uncertainty, you are grounded.","Today is enough. You are enough."];
const REMINDERS=["Take a deep breath, slowly.","Relax your shoulders, soften your jaw.","Drink some water, sweet soul.","Unclench your hands. Let them rest.","You are safe in this moment.","Step away from the screen for a breath.","Stretch your neck gently. You carry so much.","Rest is productive. Rest is enough.","Dim the lights and slow down.","You don't have to rush."];
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const BREATH_TYPES=[
  {name:'Box Breathing',sub:'4-4-4-4',pattern:[4,4,4,4],labels:['Inhale','Hold','Exhale','Hold'],color:'rgba(200,213,192,0.9)'},
  {name:'4-7-8',sub:'Calming',pattern:[4,7,8,0],labels:['Inhale','Hold','Exhale',''],color:'rgba(212,204,223,0.9)'},
  {name:'Calm Breath',sub:'4-6',pattern:[4,0,6,0],labels:['Inhale','','Exhale',''],color:'rgba(184,200,216,0.9)'},
  {name:'Energizing',sub:'Quick',pattern:[2,0,2,1],labels:['Inhale','','Exhale','Pause'],color:'rgba(232,212,196,0.9)'},
  {name:'Sleep Breath',sub:'Slow',pattern:[4,0,8,0],labels:['Inhale','','Long Exhale',''],color:'rgba(180,168,200,0.9)'},
  {name:'Anxiety Reset',sub:'5-5-5',pattern:[5,0,5,5],labels:['Inhale','','Exhale','Pause'],color:'rgba(200,220,210,0.9)'},
];

/* STATE */
let globalNight=false,remindersEnabled=true;
let breathRunning=false,breathCycle=0,breathStep=0,breathTimer=null,selectedBreath=BREATH_TYPES[0];
let activeSounds={},soundTimerIv=null,sleepTimerIv=null,audioElements={};
let playerAudio=null,playerVolume=0.8;
let playerState={playing:false,progress:0,duration:600,track:null,loop:false,usingRealAudio:false};
let playerIv=null;
let editingEntryId=null,selectedMoodData=null,filterMoodVal='all',filterMonthVal='all';
let uploadedTracks=[],currentFilter='all';
let favorites=new Set(JSON.parse(localStorage.getItem('serenity_favs')||'[]'));
let medAudioMap=JSON.parse(localStorage.getItem('serenity_medmap')||'{}');

/* NIGHT MODE */
function getMed(name){return MEDITATIONS.find(m=>m.name===name)||MEDITATIONS[2];}
function setGlobalNight(on){globalNight=on;applyNight(on);const t=document.getElementById('nightToggle');if(t)t.checked=on;}
function applyNight(on){document.body.classList.toggle('night-mode',on);}

function showPage(page,fromSleep){
  document.querySelectorAll('[id^="page-"]').forEach(el=>el.classList.add('hidden'));
  const el=document.getElementById('page-'+page);el.classList.remove('hidden','fade-in');void el.offsetWidth;el.classList.add('fade-in');
  const pages=['home','meditate','breathe','sounds','mood','sleep'];
  document.querySelectorAll('.nav-tab').forEach((t,i)=>t.classList.toggle('active',pages[i]===page));
  if(page==='sleep'||fromSleep===true)applyNight(true);else applyNight(globalNight);
}
function goSleep(){showPage('sleep',false);}
function updateGreet(){const h=new Date().getHours();const g=h<12?'Good morning':h<17?'Good afternoon':h<21?'Good evening':'Good night';document.getElementById('timeGreet').textContent=`✦ ${g} ✦`;}

/* MED GRID */
function buildMedGrid(filter){
  if(filter!==undefined)currentFilter=filter;
  const grid=document.getElementById('medGrid');grid.innerHTML='';
  const src=[...MEDITATIONS,...uploadedTracks.filter(t=>!t.soundSlot&&!t.medSlot)];
  let shown=src;
  if(currentFilter==='favorites')shown=src.filter(m=>favorites.has(m.name));
  else if(currentFilter!=='all')shown=src.filter(m=>m.cat===currentFilter);
  shown.forEach(m=>{
    const isFav=favorites.has(m.name);
    const hasAudio=!!(medAudioMap[m.name]||m.url);
    const d=document.createElement('div');d.className='med-card';
    d.innerHTML=`<div class="med-thumb" style="background:${m.color||'linear-gradient(135deg,rgba(200,213,192,.5),rgba(212,204,223,.5))'}">
      <span>${m.emoji||'🎵'}</span>
      ${isFav?'<span class="fav-badge">💛</span>':''}
      ${hasAudio?'<span style="position:absolute;bottom:.35rem;right:.5rem;font-size:.65rem;background:rgba(0,0,0,.25);color:white;padding:.1rem .4rem;border-radius:.5rem">▶ audio</span>':''}
    </div>
    <div class="med-info"><p class="med-cat">${m.cat||'custom'}</p><p class="med-name">${m.name}</p><p class="med-dur">${m.dur} min · ${m.desc||''}</p></div>`;
    d.onclick=()=>openMeditation(m);grid.appendChild(d);
  });
  if(!shown.length)grid.innerHTML='<p class="day-text" style="padding:1rem;font-family:Cormorant Garamond,serif;font-style:italic">Nothing here yet 🌸</p>';
}
function filterMed(cat,btn){document.querySelectorAll('#medFilters .breath-type').forEach(b=>b.classList.remove('active'));btn.classList.add('active');buildMedGrid(cat);}

/* PLAYER */
function openMeditation(m){
  stopPlayerAudio();
  playerState.track=m;playerState.duration=m.dur*60;playerState.progress=0;playerState.playing=false;playerState.usingRealAudio=false;
  clearInterval(playerIv);
  document.getElementById('playerEmoji').textContent=m.emoji||'🎵';
  document.getElementById('playerTitle').textContent=m.name;
  document.getElementById('playerCat').textContent=(m.cat||'custom').toUpperCase();
  document.getElementById('durEditInput').value=m.dur;
  document.getElementById('playerTotal').textContent=fmt(m.dur*60);
  document.getElementById('playerCurrent').textContent='0:00';
  document.getElementById('playerBar').style.width='0%';
  document.getElementById('playerArt').style.background=m.color||'linear-gradient(135deg,rgba(200,213,192,.8),rgba(212,204,223,.8))';
  document.getElementById('playBtn').textContent='▶';
  document.getElementById('durSavedMsg').style.display='none';
  document.getElementById('favBtn').textContent=favorites.has(m.name)?'💛 Favorited':'🤍 Favorite';
  document.getElementById('loopBtn').style.opacity=playerState.loop?'1':'0.5';
  // Find audio
  let audioUrl=null;
  if(medAudioMap[m.name]){const t=uploadedTracks.find(x=>x.id===medAudioMap[m.name]);if(t&&t.url)audioUrl=t.url;}
  else if(m.url)audioUrl=m.url;
  if(audioUrl){
    playerAudio=new Audio(audioUrl);
    playerAudio.loop=playerState.loop;playerAudio.volume=playerVolume;
    const pv=Math.round(playerVolume*100);
    document.getElementById('playerVolSlider').value=pv;
    document.getElementById('playerVolPct').textContent=pv+'%';
    playerAudio.addEventListener('loadedmetadata',()=>{
      const rd=Math.ceil(playerAudio.duration)||playerState.duration;
      playerState.duration=rd;
      document.getElementById('durEditInput').value=Math.ceil(rd/60);
      document.getElementById('playerTotal').textContent=fmt(rd);
      if(playerState.track)playerState.track.dur=Math.ceil(rd/60);
      buildMedGrid();
    });
    playerAudio.addEventListener('timeupdate',()=>{
      if(!playerState.usingRealAudio)return;
      const cur=Math.floor(playerAudio.currentTime),dur=Math.floor(playerAudio.duration)||playerState.duration;
      document.getElementById('playerBar').style.width=((cur/dur)*100)+'%';
      document.getElementById('playerCurrent').textContent=fmt(cur);
    });
    playerAudio.addEventListener('ended',()=>{if(!playerState.loop){playerState.playing=false;document.getElementById('playBtn').textContent='▶';}});
    playerState.usingRealAudio=true;
    document.getElementById('playerSubText').textContent='Audio ready · press play';
  }else{
    playerState.usingRealAudio=false;
    document.getElementById('playerSubText').textContent='Relax and breathe';
  }
  document.getElementById('playerOverlay').classList.remove('hidden');
}
function setPlayerVolume(val){
  playerVolume=parseInt(val)/100;
  document.getElementById('playerVolPct').textContent=val+'%';
  if(playerAudio)playerAudio.volume=playerVolume;
}
function stopPlayerAudio(){if(playerAudio){playerAudio.pause();playerAudio.currentTime=0;playerAudio=null;}clearInterval(playerIv);}
function togglePlay(){
  playerState.playing=!playerState.playing;
  document.getElementById('playBtn').textContent=playerState.playing?'⏸':'▶';
  if(playerState.usingRealAudio&&playerAudio){
    if(playerState.playing)playerAudio.play().catch(e=>console.warn(e));
    else playerAudio.pause();
  }else{
    if(playerState.playing){
      playerIv=setInterval(()=>{
        playerState.progress++;
        if(playerState.progress>=playerState.duration){if(playerState.loop)playerState.progress=0;else{playerState.playing=false;clearInterval(playerIv);document.getElementById('playBtn').textContent='▶';return;}}
        document.getElementById('playerBar').style.width=((playerState.progress/playerState.duration)*100)+'%';
        document.getElementById('playerCurrent').textContent=fmt(playerState.progress);
      },1000);
    }else clearInterval(playerIv);
  }
}
function savePlayerDur(){
  const val=Math.max(1,Math.min(180,parseInt(document.getElementById('durEditInput').value)||10));
  document.getElementById('durEditInput').value=val;
  playerState.duration=val*60;playerState.progress=0;
  document.getElementById('playerBar').style.width='0%';
  document.getElementById('playerCurrent').textContent='0:00';
  document.getElementById('playerTotal').textContent=fmt(val*60);
  if(playerState.track){playerState.track.dur=val;buildMedGrid();}
  const msg=document.getElementById('durSavedMsg');msg.style.display='inline';setTimeout(()=>msg.style.display='none',1800);
}
function fmt(sec){const m=Math.floor(sec/60),s=Math.floor(sec%60);return`${m}:${s.toString().padStart(2,'0')}`;}
function closePlayer(e){if(!e||e.target.id==='playerOverlay'){document.getElementById('playerOverlay').classList.add('hidden');playerState.playing=false;stopPlayerAudio();}}
function skipBack(){if(playerState.usingRealAudio&&playerAudio)playerAudio.currentTime=Math.max(0,playerAudio.currentTime-15);else playerState.progress=Math.max(0,playerState.progress-15);}
function skipFwd(){if(playerState.usingRealAudio&&playerAudio)playerAudio.currentTime=Math.min(playerAudio.duration||playerState.duration,playerAudio.currentTime+15);else playerState.progress=Math.min(playerState.duration-1,playerState.progress+15);}
function seekTrack(e){const r=e.currentTarget.getBoundingClientRect();const pct=(e.clientX-r.left)/r.width;if(playerState.usingRealAudio&&playerAudio)playerAudio.currentTime=pct*(playerAudio.duration||playerState.duration);else playerState.progress=Math.floor(pct*playerState.duration);}
function toggleFav(){const m=playerState.track;if(!m)return;if(favorites.has(m.name)){favorites.delete(m.name);document.getElementById('favBtn').textContent='🤍 Favorite';}else{favorites.add(m.name);document.getElementById('favBtn').textContent='💛 Favorited';}localStorage.setItem('serenity_favs',JSON.stringify([...favorites]));buildMedGrid();}
function toggleLoop(){playerState.loop=!playerState.loop;if(playerAudio)playerAudio.loop=playerState.loop;document.getElementById('loopBtn').style.opacity=playerState.loop?'1':'0.5';}

/* BREATHWORK */
function buildBreathTypes(){const c=document.getElementById('breathTypes');BREATH_TYPES.forEach((b,i)=>{const btn=document.createElement('button');btn.className='breath-type'+(i===0?' active':'');btn.textContent=`${b.name} · ${b.sub}`;btn.onclick=()=>{document.querySelectorAll('#breathTypes .breath-type').forEach(x=>x.classList.remove('active'));btn.classList.add('active');selectedBreath=b;if(breathRunning)stopBreath();document.getElementById('breathPhase').textContent=b.name;document.getElementById('breathCount').textContent='—';document.getElementById('breathInst').textContent='Press begin to start';};c.appendChild(btn);});}
function toggleBreath(){breathRunning?stopBreath():startBreath();}
function startBreath(){breathRunning=true;breathCycle=0;breathStep=0;document.getElementById('breathBtn').textContent='Pause Practice';runBreathStep();}
function stopBreath(){breathRunning=false;clearTimeout(breathTimer);document.getElementById('breathBtn').textContent='Begin Practice';document.getElementById('breathPhase').textContent='Paused';document.getElementById('breathCount').textContent='—';animateOrb(1);}
function runBreathStep(){if(!breathRunning)return;const dur=selectedBreath.pattern[breathStep];if(dur===0){breathStep=(breathStep+1)%4;if(breathStep===0)breathCycle++;runBreathStep();return;}const phase=selectedBreath.labels[breathStep];document.getElementById('breathPhase').textContent=phase;document.getElementById('breathInst').textContent=breathCycle>0?`Cycle ${breathCycle+1} · Stay with the rhythm`:'Find your rhythm, stay gentle';document.getElementById('breathCycles').textContent=breathCycle>0?`✦ ${breathCycle} complete`:'';animateOrb(breathStep===0?1.38:breathStep===2?0.82:1.08,selectedBreath.color,dur);let c=dur;document.getElementById('breathCount').textContent=c;document.getElementById('orbText').textContent=phase;const tick=setInterval(()=>{c--;document.getElementById('breathCount').textContent=Math.max(0,c);if(c<=0)clearInterval(tick);},1000);breathTimer=setTimeout(()=>{clearInterval(tick);breathStep=(breathStep+1)%4;if(breathStep===0)breathCycle++;runBreathStep();},dur*1000);}
function animateOrb(scale,color,dur){const o=document.getElementById('breathOrb');o.style.transition=`transform ${dur||.5}s ease-in-out,background ${dur||.5}s ease-in-out,box-shadow ${dur||.5}s ease-in-out`;o.style.transform=`scale(${scale})`;if(color){o.style.background=`radial-gradient(circle,${color},rgba(212,204,223,.5))`;o.style.boxShadow=scale>1.2?`0 0 60px ${color.replace('.9','.5')},0 0 120px ${color.replace('.9','.15')}`:`0 0 20px ${color.replace('.9','.25')}`;}}

/* SOUNDS */
function buildSoundGrid(){
  const grid=document.getElementById('soundGrid');
  // Group sounds into sections for visual clarity
  const sections=[
    {label:'Nature & Ambient',ids:['rain','thunder','fire','ocean','river','forest','birds','cafe','crickets','wind','piano']},
    {label:'Noise & Tones',ids:['white','pink','brown','bowls','chimes','bowl528','drone_soft','drone_sub','pad_celestial']},
    {label:'Solfeggio Frequencies',ids:['hz174','hz285','hz396','hz417','hz528','hz639','hz741','hz852','hz963','hz432','hz136','hz40']},
    {label:'Binaural Beats',ids:['bin_delta','bin_theta','bin_alpha','bin_beta','bin_gamma','bin_schumann']},
  ];
  // Build a lookup map
  const soundMap={};SOUNDS.forEach(s=>soundMap[s.id]=s);
  sections.forEach(sec=>{
    // Section header
    const hdr=document.createElement('div');
    hdr.style.cssText='grid-column:1/-1;font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--text-light);padding:.5rem 0 .25rem;border-top:1px solid rgba(184,154,122,.12);margin-top:.25rem;transition:color .8s';
    hdr.className='sound-section-hdr';
    hdr.textContent=sec.label;
    grid.appendChild(hdr);
    // Tiles for this section
    sec.ids.forEach(id=>{
      const s=soundMap[id];
      if(!s)return;
      const d=document.createElement('div');d.className='sound-tile';d.id='sound-'+s.id;
      d.innerHTML=`<span class="sound-icon">${s.emoji}</span><p class="sound-name">${s.name}</p><div class="sound-controls"><input type="range" class="sound-vol" min="0" max="100" value="50" oninput="updateVol('${s.id}',this.value)"><button class="sound-restart" title="Restart from beginning" onclick="restartSound(event,'${s.id}')">↺</button></div>`;
      d.onclick=e=>{if(e.target.tagName==='INPUT'||e.target.tagName==='BUTTON')return;toggleSound(s.id,d);};
      grid.appendChild(d);
    });
  });
}
function toggleSound(id,el){if(activeSounds[id]){delete activeSounds[id];el.classList.remove('active');el.querySelector('.sound-vol').style.display='none';if(audioElements[id])audioElements[id].pause();}else{activeSounds[id]=50;el.classList.add('active');el.querySelector('.sound-vol').style.display='block';const track=uploadedTracks.find(t=>t.soundSlot===id);if(track&&track.url){if(!audioElements[id]){audioElements[id]=new Audio(track.url);audioElements[id].loop=true;}audioElements[id].volume=0.5;audioElements[id].play().catch(()=>{});}}document.getElementById('activeCount').textContent=`${Object.keys(activeSounds).length} sounds active`;}
function restartSound(e,id){
  e.stopPropagation();
  if(audioElements[id]){audioElements[id].currentTime=0;if(activeSounds[id])audioElements[id].play().catch(()=>{});}
}
function updateVol(id,v){activeSounds[id]=parseInt(v);if(audioElements[id])audioElements[id].volume=parseInt(v)/100;}
function clearSounds(){activeSounds={};Object.values(audioElements).forEach(a=>a.pause());document.querySelectorAll('.sound-tile').forEach(t=>{t.classList.remove('active');t.querySelector('.sound-vol').style.display='none';});document.getElementById('activeCount').textContent='0 sounds active';}
function randomPreset(){clearSounds();const p=[[0,2,3],[1,2,8],[4,5,6],[9,11,12],[3,8,11],[0,4,7]];p[Math.floor(Math.random()*p.length)].forEach(i=>{const s=SOUNDS[i];const el=document.getElementById('sound-'+s.id);if(el)toggleSound(s.id,el);});}
function setTimer(mins){clearInterval(soundTimerIv);if(!mins){document.getElementById('timerDisplay').textContent='';return;}let rem=mins*60;document.getElementById('timerDisplay').textContent=fmt(rem);soundTimerIv=setInterval(()=>{rem--;document.getElementById('timerDisplay').textContent=fmt(rem);if(rem<=0){clearInterval(soundTimerIv);clearSounds();document.getElementById('timerDisplay').textContent='';}},1000);}

/* MOOD */
function selectMood(btn,emoji,label){document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');selectedMoodData={emoji,label};document.getElementById('moodSelectedLabel').textContent=`Selected: ${emoji} ${label}`;document.getElementById('homeMoodEmoji').textContent=emoji;document.getElementById('homeMoodText').textContent=label;localStorage.setItem('serenity_mood',JSON.stringify({emoji,label}));buildSuggestionCard();}

/* JOURNAL */
function saveEntry(){const text=document.getElementById('journalEntry').value.trim();const aff=AFFIRMATIONS[Math.floor(Math.random()*AFFIRMATIONS.length)];document.getElementById('affirmationText').textContent=aff;document.getElementById('moodAffirmation').style.display='block';if(editingEntryId){const entries=loadEntries();const idx=entries.findIndex(e=>e.id===editingEntryId);if(idx>-1){entries[idx].text=text;if(selectedMoodData){entries[idx].mood=selectedMoodData.label;entries[idx].emoji=selectedMoodData.emoji;}entries[idx].editedAt=new Date().toISOString();}saveEntries(entries);cancelEdit();}else{if(!text&&!selectedMoodData)return;const entry={id:Date.now().toString(),text,mood:selectedMoodData?.label||'',emoji:selectedMoodData?.emoji||'',createdAt:new Date().toISOString()};const entries=loadEntries();entries.unshift(entry);saveEntries(entries);document.getElementById('journalEntry').value='';selectedMoodData=null;document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));document.getElementById('moodSelectedLabel').textContent='';}buildStreaks();renderEntries();}
function cancelEdit(){editingEntryId=null;document.getElementById('journalEntry').value='';document.getElementById('editingLabel').textContent='';document.getElementById('cancelEditBtn').style.display='none';selectedMoodData=null;document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));}
function editEntry(id){const e=loadEntries().find(x=>x.id===id);if(!e)return;editingEntryId=id;document.getElementById('journalEntry').value=e.text;document.getElementById('editingLabel').textContent='✏️ Editing entry';document.getElementById('cancelEditBtn').style.display='inline-block';if(e.mood){selectedMoodData={emoji:e.emoji,label:e.mood};document.querySelectorAll('.mood-btn').forEach(b=>{if(b.textContent.includes(e.mood))b.classList.add('selected');});}window.scrollTo({top:0,behavior:'smooth'});}
function deleteEntry(id){document.querySelectorAll('.delete-confirm.show').forEach(el=>{if(el.dataset.id!==id)el.classList.remove('show');});const el=document.getElementById('del-confirm-'+id);if(el)el.classList.toggle('show');}
function confirmDelete(id){saveEntries(loadEntries().filter(e=>e.id!==id));renderEntries();buildStreaks();}
function cancelDelete(id){const el=document.getElementById('del-confirm-'+id);if(el)el.classList.remove('show');}
function loadEntries(){try{return JSON.parse(localStorage.getItem('serenity_entries')||'[]');}catch{return[];}}
function saveEntries(e){localStorage.setItem('serenity_entries',JSON.stringify(e));}
function escHtml(t){const d=document.createElement('div');d.textContent=t;return d.innerHTML;}
function renderEntries(){const all=loadEntries();buildMoodChips(all);buildMonthChips(all);let filtered=[...all];if(filterMoodVal!=='all')filtered=filtered.filter(e=>e.mood===filterMoodVal);if(filterMonthVal!=='all')filtered=filtered.filter(e=>{const d=new Date(e.createdAt);return`${d.getFullYear()}-${d.getMonth()}`===filterMonthVal;});if(document.getElementById('sortSelect').value==='oldest')filtered.reverse();const list=document.getElementById('entriesList');if(!filtered.length){list.innerHTML='<div class="empty-state"><p>No reflections here yet. Your words will live gently in this space. 🌸</p></div>';return;}list.innerHTML='';filtered.forEach(e=>{const d=new Date(e.createdAt);const ds=d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});const ts=d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});const card=document.createElement('div');card.className='entry-card';card.innerHTML=`<div class="entry-header"><div class="entry-meta">${e.emoji&&e.mood?`<span class="entry-mood-badge">${e.emoji} ${e.mood}</span>`:''}<span class="entry-date">${ds} · ${ts}${e.editedAt?' · edited':''}</span></div><div class="entry-actions"><button class="entry-btn" onclick="editEntry('${e.id}')">✏️ Edit</button><button class="entry-btn" style="color:#A86060" onclick="deleteEntry('${e.id}')">✕ Delete</button></div></div>${e.text?`<p class="entry-text">${escHtml(e.text)}</p>`:`<p class="entry-text" style="opacity:.5;font-style:italic">Mood check-in only.</p>`}<div class="delete-confirm" id="del-confirm-${e.id}" data-id="${e.id}"><span style="font-size:.78rem;font-family:Cormorant Garamond,serif;font-style:italic;color:var(--text-mid)">Remove this reflection forever?</span><button style="background:#A85050;border:none;border-radius:1rem;padding:.25rem .85rem;font-size:.72rem;color:white;cursor:pointer;margin-left:.5rem" onclick="confirmDelete('${e.id}')">Yes, delete</button><button style="background:none;border:1px solid rgba(184,154,122,.3);border-radius:1rem;padding:.25rem .75rem;font-size:.72rem;color:var(--text-light);cursor:pointer;margin-left:.3rem" onclick="cancelDelete('${e.id}')">Keep it</button></div>`;list.appendChild(card);});}
function mkChip(label,active,cb){const b=document.createElement('button');b.className='filter-chip'+(active?' active':'');b.textContent=label;b.onclick=cb;return b;}
function buildMoodChips(entries){const moods=[...new Set(entries.map(e=>e.mood).filter(Boolean))];const bar=document.getElementById('moodFilterBar');bar.innerHTML='<span class="day-text" style="font-size:.72rem;align-self:center">Mood:</span>';bar.appendChild(mkChip('All',filterMoodVal==='all',()=>{filterMoodVal='all';renderEntries();}));moods.forEach(m=>{const emoji=entries.find(e=>e.mood===m)?.emoji||'';bar.appendChild(mkChip(`${emoji} ${m}`,filterMoodVal===m,()=>{filterMoodVal=m;renderEntries();}));});}
function buildMonthChips(entries){const months=[...new Set(entries.map(e=>{const d=new Date(e.createdAt);return`${d.getFullYear()}-${d.getMonth()}`;}).filter(Boolean))];const bar=document.getElementById('monthFilterBar');bar.innerHTML='<span class="day-text" style="font-size:.72rem;align-self:center">Month:</span>';bar.appendChild(mkChip('All',filterMonthVal==='all',()=>{filterMonthVal='all';renderEntries();}));months.forEach(key=>{const[y,mo]=key.split('-');bar.appendChild(mkChip(`${MONTHS[+mo]} ${y}`,filterMonthVal===key,()=>{filterMonthVal=key;renderEntries();}));});}

/* STREAKS */
function buildStreaks(){const entries=loadEntries();const today=new Date();['streakRow','moodHistory'].forEach(id=>{const row=document.getElementById(id);if(!row)return;row.innerHTML='';['S','M','T','W','T','F','S'].forEach((d,i)=>{const dd=new Date(today);dd.setDate(today.getDate()-(today.getDay()-i));const has=entries.some(e=>new Date(e.createdAt).toDateString()===dd.toDateString());const el=document.createElement('div');el.className='streak-day'+(has?' done':'');el.textContent=d;el.title=dd.toDateString();row.appendChild(el);});});}

/* SLEEP */
function buildSleepStars(){const c=document.getElementById('sleepStars');for(let i=0;i<60;i++){const s=document.createElement('div');s.className='star-s';s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;animation-duration:${2+Math.random()*4}s;animation-delay:${Math.random()*5}s`;c.appendChild(s);}}
function buildStarField(){const sf=document.getElementById('starField');for(let i=0;i<80;i++){const s=document.createElement('div');s.className='star-f';const sz=.5+Math.random()*2;s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${2+Math.random()*5}s;animation-delay:${Math.random()*6}s`;sf.appendChild(s);}}
function setSleepTimer(mins){clearInterval(sleepTimerIv);if(!mins){document.getElementById('sleepTimer').textContent='—';return;}let rem=mins*60;document.getElementById('sleepTimer').textContent=fmt(rem);sleepTimerIv=setInterval(()=>{rem--;document.getElementById('sleepTimer').textContent=fmt(rem);if(rem<=0){clearInterval(sleepTimerIv);document.getElementById('sleepTimer').textContent='—';}},1000);}

/* UPLOAD */
function openSettings(){document.getElementById('settingsOverlay').classList.remove('hidden');renderUploadedList();}
function closeSettings(){document.getElementById('settingsOverlay').classList.add('hidden');}
function closeSettingsClick(e){if(e.target.id==='settingsOverlay')closeSettings();}
function handleUpload(ev){
  Array.from(ev.target.files).forEach(file=>{
    const url=URL.createObjectURL(file);
    const name=file.name.replace(/\.[^.]+$/,'');
    const track={id:Date.now()+'_'+Math.random().toString(36).slice(2),name,emoji:'🎵',soundSlot:'',medSlot:'',cat:'focus',color:'linear-gradient(135deg,rgba(200,213,192,.5),rgba(212,204,223,.5))',dur:10,desc:'Your uploaded audio',url};
    const audio=new Audio(url);
    audio.addEventListener('loadedmetadata',()=>{
      track.dur=Math.ceil(audio.duration/60)||1;
      const lower=name.toLowerCase();
      for(const s of SOUNDS){if(lower.includes(s.id)||lower.includes(s.name.toLowerCase())){track.soundSlot=s.id;break;}}
      uploadedTracks.push(track);saveMeta();renderUploadedList();buildMedGrid();
    });
    audio.addEventListener('error',()=>{uploadedTracks.push(track);saveMeta();renderUploadedList();buildMedGrid();});
  });
  ev.target.value='';
}
function saveMeta(){try{localStorage.setItem('serenity_uploads_meta',JSON.stringify(uploadedTracks.map(t=>({id:t.id,name:t.name,dur:t.dur,cat:t.cat,emoji:t.emoji,soundSlot:t.soundSlot||'',medSlot:t.medSlot||''}))));}catch(e){}localStorage.setItem('serenity_medmap',JSON.stringify(medAudioMap));}
function assignSoundSlot(id,slot){const t=uploadedTracks.find(x=>x.id===id);if(!t)return;if(t.soundSlot&&audioElements[t.soundSlot]){audioElements[t.soundSlot].pause();delete audioElements[t.soundSlot];}t.soundSlot=slot;if(slot&&activeSounds[slot]&&t.url){audioElements[slot]=new Audio(t.url);audioElements[slot].loop=true;audioElements[slot].volume=(activeSounds[slot]||50)/100;audioElements[slot].play().catch(()=>{});}saveMeta();buildMedGrid();}
function assignMedSlot(id,medName){const t=uploadedTracks.find(x=>x.id===id);if(!t)return;if(t.medSlot)delete medAudioMap[t.medSlot];t.medSlot=medName;if(medName)medAudioMap[medName]=id;saveMeta();buildMedGrid();}
function updateTrackDur(id,val){const t=uploadedTracks.find(x=>x.id===id);if(t)t.dur=Math.max(1,parseInt(val)||1);}
function saveTrackMeta(id){saveMeta();buildMedGrid();const msg=document.getElementById('saved-'+id);if(msg){msg.style.display='inline';setTimeout(()=>msg.style.display='none',1800);}}
function removeTrack(id){const t=uploadedTracks.find(x=>x.id===id);if(t?.soundSlot&&audioElements[t.soundSlot]){audioElements[t.soundSlot].pause();delete audioElements[t.soundSlot];}if(t?.medSlot)delete medAudioMap[t.medSlot];uploadedTracks=uploadedTracks.filter(x=>x.id!==id);saveMeta();renderUploadedList();buildMedGrid();}
function renderUploadedList(){
  const list=document.getElementById('uploadedList');
  if(!uploadedTracks.length){list.innerHTML='<p style="font-size:.78rem;color:var(--text-light);text-align:center;padding:.5rem">No custom audio uploaded yet</p>';return;}
  list.innerHTML='';
  uploadedTracks.forEach(t=>{
    const soundOpts=SOUNDS.map(s=>`<option value="${s.id}"${t.soundSlot===s.id?' selected':''}>${s.emoji} ${s.name}</option>`).join('');
    const alarmSlotOpts=['Soft Chimes','Ocean Waves','Birdsong','Singing Bowl','Soft Piano'].map(a=>`<option value="alarm:${a}"${t.medSlot==='alarm:'+a?' selected':''}>⏰ Alarm: ${a}</option>`).join('');
    const medOpts=MEDITATIONS.map(m=>`<option value="${m.name}"${t.medSlot===m.name?' selected':''}>${m.emoji} ${m.name}</option>`).join('')+alarmSlotOpts;
    const row=document.createElement('div');row.className='uploaded-track';
    row.innerHTML=`<span style="flex:1;min-width:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.8rem" title="${t.name}">${t.name}</span>
    <select class="track-cat-sel" title="Sound tile" onchange="assignSoundSlot('${t.id}',this.value)"><option value="">🔇 Sound…</option>${soundOpts}</select>
    <select class="track-slot-sel" title="Meditation" onchange="assignMedSlot('${t.id}',this.value)"><option value="">🧘 Meditation…</option>${medOpts}</select>
    <input class="track-dur-input" type="number" min="1" max="180" value="${t.dur}" onchange="updateTrackDur('${t.id}',this.value)" title="Duration (min)">
    <span style="font-size:.7rem;color:var(--text-light)">min</span>
    <button class="save-track-btn" onclick="saveTrackMeta('${t.id}')">Save</button>
    <span class="track-saved-msg" id="saved-${t.id}">✓</span>
    <button style="background:none;border:none;cursor:pointer;font-size:.9rem;color:#A86060;flex-shrink:0" onclick="removeTrack('${t.id}')">✕</button>`;
    list.appendChild(row);
  });
}

/* REMINDERS */
function setupReminders(){setInterval(()=>{if(remindersEnabled)showReminder(REMINDERS[Math.floor(Math.random()*REMINDERS.length)]);},90000);setTimeout(()=>{if(remindersEnabled)showReminder(REMINDERS[0]);},10000);}
function showReminder(msg){document.getElementById('reminderText').textContent=msg;const b=document.getElementById('reminderBanner');b.classList.remove('hidden');setTimeout(()=>b.classList.add('hidden'),5500);}
function dismissReminder(){document.getElementById('reminderBanner').classList.add('hidden');}

/* PARTICLES */
function buildParticles(){const bg=document.querySelector('.ambient-bg');for(let i=0;i<18;i++){const p=document.createElement('div');p.className='particle';const sz=2+Math.random()*3.5;p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${90+Math.random()*15}%;background:${['rgba(184,154,122,.55)','rgba(200,213,192,.75)','rgba(212,204,223,.75)','rgba(232,212,204,.65)'][Math.floor(Math.random()*4)]};animation-duration:${16+Math.random()*24}s;animation-delay:${Math.random()*20}s`;bg.appendChild(p);}}

/* INIT */
function getDailyAffirmation(){const dayIndex=Math.floor(Date.now()/86400000);const hourShift=Math.floor(new Date().getHours()/6);return AFFIRMATIONS[(dayIndex+hourShift)%AFFIRMATIONS.length];}
function buildSuggestionCard(){const{med,reason}=getDailySuggestion();const card=document.getElementById('suggestionCard');card.innerHTML=`<span style="font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;color:var(--bronze);margin-bottom:.3rem;display:block;opacity:.8">${reason}</span><div style="display:flex;gap:1rem;padding:.75rem 0;align-items:center"><div style="font-size:2rem;flex-shrink:0">${med.emoji}</div><div><p class="med-cat">${med.cat}</p><p class="med-name" style="font-size:1.05rem">${med.name} · ${med.dur} min</p><p class="med-dur" style="margin-top:.2rem">${med.desc}</p></div></div>`;card.onclick=()=>openMeditation(med);}

/* ── ALARM SOUNDS ──
   ALARM_SOUNDS maps each select option to a tone generator.
   To add a real audio file for "Soft Chimes" or any other option,
   upload it in Settings and assign to the matching alarm slot.
   Keys must match the <option> text values in the alarm select. */
const ALARM_SOUND_FREQS={
  'Soft Chimes':[523,659,784,1047],
  'Ocean Waves':[220,277,330],
  'Birdsong':[880,1100,1320,1760],
  'Singing Bowl':[432,432.7],
  'Soft Piano':[261,329,392,523],
};
let alarmTimeout=null,alarmAC=null;
/* medAudioMap reused for alarm slots — alarm slot keys: 'alarm:Soft Chimes' etc. */

function scheduleAlarm(){
  clearAlarm();
  const timeInput=document.getElementById('alarmTime').value;
  if(!timeInput)return;
  const [hh,mm]=timeInput.split(':').map(Number);
  const now=new Date();
  const alarm=new Date(now.getFullYear(),now.getMonth(),now.getDate(),hh,mm,0,0);
  if(alarm<=now)alarm.setDate(alarm.getDate()+1); // next day if already passed
  const ms=alarm-now;
  const label=timeInput+' with '+document.getElementById('alarmSound').value;
  document.getElementById('alarmStatus').textContent='Alarm set for '+alarm.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+' — '+document.getElementById('alarmSound').value;
  alarmTimeout=setTimeout(()=>fireAlarm(),ms);
}

function clearAlarm(){
  if(alarmTimeout){clearTimeout(alarmTimeout);alarmTimeout=null;}
  stopAlarmAudio();
}

function fireAlarm(){
  const soundName=document.getElementById('alarmSound').value;
  const alarmKey='alarm:'+soundName;
  // Check if user uploaded audio for this alarm sound
  const uploadedId=medAudioMap[alarmKey];
  if(uploadedId){
    const track=uploadedTracks.find(t=>t.id===uploadedId);
    if(track&&track.url){
      const a=new Audio(track.url);a.volume=0.8;
      a.play().catch(()=>{});
      alarmAC=a;
      document.getElementById('alarmStatus').textContent='⏰ Alarm ringing — '+soundName+' · Click Cancel to dismiss';
      return;
    }
  }
  // Fallback: synthesized tones
  playAlarmTones(ALARM_SOUND_FREQS[soundName]||[523,659,784]);
  document.getElementById('alarmStatus').textContent='⏰ Alarm ringing — '+soundName+' (synthesized) · Click Cancel to dismiss';
}

function playAlarmTones(freqs){
  const ctx=new (window.AudioContext||window.webkitAudioContext)();
  alarmAC=ctx;
  let t=ctx.currentTime;
  for(let rep=0;rep<6;rep++){
    freqs.forEach((f,i)=>{
      const o=ctx.createOscillator();const g=ctx.createGain();
      o.frequency.value=f;o.type='sine';
      g.gain.setValueAtTime(0,t+i*0.18);
      g.gain.linearRampToValueAtTime(0.4,t+i*0.18+0.05);
      g.gain.linearRampToValueAtTime(0,t+i*0.18+0.35);
      o.connect(g);g.connect(ctx.destination);
      o.start(t+i*0.18);o.stop(t+i*0.18+0.4);
    });
    t+=freqs.length*0.18+0.6;
  }
}

function stopAlarmAudio(){
  if(alarmAC){
    if(alarmAC instanceof Audio)alarmAC.pause();
    else{try{alarmAC.close();}catch(e){}}
    alarmAC=null;
  }
  document.getElementById('alarmStatus').textContent='';
}


/* ─────────────────────────────────────────────────────────────
   buildSleepGrid — auto-generates Sleep tab cards from MEDITATIONS.
   Any entry with sleepTab:true appears here.
   To add a new sleep meditation to the Sleep tab:
     1. Add it to the MEDITATIONS array in script.js
     2. Set sleepTab:true in that entry
   The two fixed link cards (Sleep Breathing, Night Sounds) are
   always appended at the end.
───────────────────────────────────────────────────────────── */

function filterSleepGrid(filter,btn){
  document.querySelectorAll('.sleep-filter-btn').forEach(b=>{
    b.style.background='rgba(237,232,248,0.08)';
    b.style.borderColor='rgba(237,232,248,0.22)';
    b.style.color='var(--nt2)';
  });
  btn.style.background='rgba(237,232,248,0.22)';
  btn.style.borderColor='rgba(237,232,248,0.55)';
  btn.style.color='var(--nt)';
  const grid=document.getElementById('sleepGrid');
  if(!grid)return;
  grid.innerHTML='';
  const sleepMeds=MEDITATIONS.filter(m=>m.sleepTab);
  const shown=filter==='favorites'?sleepMeds.filter(m=>favorites.has(m.name)):sleepMeds;
  shown.forEach(m=>{
    const d=document.createElement('div');d.className='sleep-card';
    d.innerHTML=`<div class="sleep-card-icon">${m.emoji}${favorites.has(m.name)?'<span style="font-size:.7rem;position:absolute;top:.2rem;right:.2rem">💛</span>':''}</div><div class="sleep-card-name">${m.name}</div>`;
    d.style.position='relative';
    d.onclick=()=>openMeditation(m);
    grid.appendChild(d);
  });
  if(filter==='favorites'&&shown.length===0){
    const e=document.createElement('div');
    e.style.cssText="grid-column:1/-1;text-align:center;padding:1rem;font-size:.85rem;color:var(--nt2);font-family:Cormorant Garamond,serif;font-style:italic";
    e.textContent='No favorites yet — open a sleep meditation and tap 💛 Favorite';
    grid.appendChild(e);
  }
  if(filter==='all'){
    const links=[{icon:'🫧',name:'Sleep Breathing',fn:()=>showPage('breathe',true)},{icon:'🎵',name:'Night Sounds',fn:()=>showPage('sounds',true)}];
    links.forEach(l=>{const d=document.createElement('div');d.className='sleep-card';d.innerHTML=`<div class="sleep-card-icon">${l.icon}</div><div class="sleep-card-name">${l.name}</div>`;d.onclick=l.fn;grid.appendChild(d);});
  }
}

function buildSleepGrid(){
  const grid=document.getElementById('sleepGrid');
  if(!grid)return;
  grid.innerHTML='';
  // Meditation cards — any entry with sleepTab:true
  MEDITATIONS.filter(m=>m.sleepTab).forEach(m=>{
    const d=document.createElement('div');
    d.className='sleep-card';
    d.innerHTML=`<div class="sleep-card-icon">${m.emoji}</div><div class="sleep-card-name">${m.name}</div>`;
    d.onclick=()=>openMeditation(m);
    grid.appendChild(d);
  });
  // Fixed link cards — always present
  const links=[
    {icon:'🫧',name:'Sleep Breathing',fn:()=>showPage('breathe',true)},
    {icon:'🎵',name:'Night Sounds',   fn:()=>showPage('sounds',true)},
  ];
  links.forEach(l=>{
    const d=document.createElement('div');
    d.className='sleep-card';
    d.innerHTML=`<div class="sleep-card-icon">${l.icon}</div><div class="sleep-card-name">${l.name}</div>`;
    d.onclick=l.fn;
    grid.appendChild(d);
  });
}

function init(){
  buildMedGrid();buildBreathTypes();buildSoundGrid();buildSleepGrid();buildSleepStars();buildStarField();buildParticles();buildStreaks();updateGreet();
  document.getElementById('dailyAffirmation').textContent=`"${getDailyAffirmation()}"`;
  buildSuggestionCard();
  try{const m=JSON.parse(localStorage.getItem('serenity_mood'));if(m){document.getElementById('homeMoodEmoji').textContent=m.emoji;document.getElementById('homeMoodText').textContent=m.label;}}catch(e){}
  renderEntries();setupReminders();setInterval(updateGreet,60000);
}
init();
