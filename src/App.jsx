import { useEffect, useState } from 'react'
import './App.css'
import {
  IconDownload, IconStar, IconSmartphone, IconPackage, IconLock, IconLink,
  IconHeart, IconHeartSolid, IconMusic, IconPause, IconPlay, IconSkipBack, IconSkipForward,
  IconHeadphones, IconSparkles, IconZap, IconShield, IconHome, IconSearch, IconLibrary,
  IconList, IconCheck, IconCheckCircle, IconArrowRight, IconCopy, IconGithub, IconDisc, IconWaves
} from './components/Icons.jsx'

const BASE = import.meta.env.BASE_URL
const APK_URL_GITHUB = 'https://github.com/gracesellemanaging-lab/K-Vibes/raw/main/K-vibes.apk'
const APK_URL_LOCAL = `${BASE}K-vibes.apk`
const APK_URL_RELEASE = 'https://github.com/gracesellemanaging-lab/K-Vibes/releases/tag/v1.0.0'
const GITHUB_REPO = 'https://github.com/gracesellemanaging-lab/K-Vibes'
const LOGO_URL = `${BASE}logo.png`
const ICON_URL = `${BASE}icon.png`

function useReveal(){
  useEffect(()=>{
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting){
        const d = e.target.dataset.delay || 0
        setTimeout(()=> e.target.classList.add('in'), Number(d))
      }
    }),{threshold:.12, rootMargin:'0px 0px -40px 0px'})
    els.forEach(el=>io.observe(el))
    return ()=>io.disconnect()
  },[])
}

export default function App(){
  const [menuOpen,setMenuOpen]=useState(false)
  const [toast,setToast]=useState('')
  const [openFaq,setOpenFaq]=useState(0)

  useReveal()

  const showToast = (msg)=>{
    setToast(msg)
    setTimeout(()=>setToast(''), 2600)
  }

  const handleDownload = (src='primary')=>{
    showToast('Starting download — check your downloads folder')
    const a = document.createElement('a')
    a.href = APK_URL_GITHUB
    a.download = 'K-vibes.apk'
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(()=>{
      fetch(APK_URL_LOCAL, {method:'HEAD'}).then(r=>{
        if(r.ok && src==='fallback') window.open(APK_URL_LOCAL,'_blank')
      }).catch(()=>{})
    },400)
  }

  const copyLink = async ()=>{
    try{ await navigator.clipboard.writeText(APK_URL_GITHUB); showToast('Download link copied to clipboard') }
    catch{ showToast(APK_URL_GITHUB) }
  }

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="brand" aria-label="K-VIBES home">
            <span className="brand-mark"><img src={LOGO_URL} alt="K-VIBES logo" onError={e=>e.currentTarget.style.display='none'} /></span>
            <span className="brand-name">K-<span>VIBES</span></span>
            <span className="badge-live" style={{marginLeft:6}}><span className="badge-dot"/> v1.0.0</span>
          </a>

          <div className={`nav-links ${menuOpen?'open':''}`}>
            <a href="#features" onClick={()=>setMenuOpen(false)}>Features</a>
            <a href="#preview" onClick={()=>setMenuOpen(false)}>Preview</a>
            <a href="#install" onClick={()=>setMenuOpen(false)}>How to install</a>
            <a href="#faq" onClick={()=>setMenuOpen(false)}>FAQ</a>
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="nav-github"><IconGithub width={16} height={16}/> GitHub</a>
            <button className="nav-cta" onClick={()=>handleDownload()}>
              <IconDownload width={16} height={16}/> Download APK
            </button>
          </div>

          <button className="hamburger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}/></svg>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg-blur" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal"><span className="eyebrow-dot"/><IconSparkles width={12} height={12}/> 100% OFFLINE • NO LOGIN • FREE</span>
            <h1 className="reveal" data-delay="80">
              Your <span style={{fontWeight:900}}>K-Pop</span>
              <span className="line2">universe.</span>
            </h1>
            <p className="hero-desc reveal" data-delay="160">
              The offline music player built for K-Pop fans. Play your phone&apos;s music anywhere — no internet, no ads, no limits. Heart your favorites, build playlists, and keep vibing.
            </p>

            <div className="hero-actions reveal" data-delay="240">
              <button className="btn-primary" onClick={()=>handleDownload()}>
                <IconDownload width={18} height={18}/> Download K-VIBES APK
                <span className="btn-badge">94 MB</span>
              </button>
              <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="btn-ghost">
                <IconStar width={16} height={16}/> View on GitHub
              </a>
            </div>

            <div className="hero-meta reveal" data-delay="320">
              <span className="meta-pill"><IconSmartphone width={14} height={14}/> Android 6+</span>
              <span className="meta-pill"><IconPackage width={14} height={14}/> 94 MB • v1.0.0</span>
              <span className="meta-pill"><IconShield width={14} height={14}/> No data collected</span>
              <button onClick={copyLink} className="meta-pill meta-pill-btn"><IconCopy width={13} height={13}/> Copy link</button>
            </div>

            <p className="hero-note reveal" data-delay="400">
              Direct APK • Tap → Allow “Install unknown apps” → Open • Works completely offline
            </p>
          </div>

          <div className="hero-visual">
            <div className="phone-wrap reveal" data-delay="120">
              <div className="phone-notch" />
              <div className="phone-glow" aria-hidden="true"/>
              <div className="phone-screen">
                <div className="phone-status"><span>9:41</span><span className="status-dots"><span/><span/><span/> <IconWaves width={14} height={14} style={{marginLeft:4}}/></span></div>
                <div className="mini-hero">
                  <span className="mini-hero-icon"><img src={LOGO_URL} alt="" onError={e=>e.currentTarget.style.display='none'} /></span>
                  <div>
                    <div style={{fontWeight:900, fontSize:13, lineHeight:1}}>K-VIBES</div>
                    <div style={{fontSize:11, opacity:.8}}>Your K-Pop universe</div>
                  </div>
                  <span className="mini-hero-heart"><IconHeartSolid width={14} height={14}/></span>
                </div>

                <div className="chip-row">
                  {['For You','Trending','New','Local'].map((c,i)=>(
                    <span key={c} className={`chip ${i===0?'chip-active':''}`}>{c}</span>
                  ))}
                </div>

                <div className="mini-song-list">
                  {[
                    {t:'Dynamite', a:'BTS • 3:19', c:'#E91E8C', icon: IconDisc},
                    {t:'How You Like That', a:'BLACKPINK • 3:01', c:'#8B5CF6', icon: IconMusic},
                    {t:'Next Level', a:'aespa • 3:41', c:'#FF6B2D', icon: IconHeadphones},
                    {t:'Love Dive', a:'IVE • 2:57', c:'#06B6D4', icon: IconWaves},
                  ].map(s=>(
                    <div key={s.t} className="mini-song">
                      <div className="mini-cover" style={{background:s.c}}><s.icon width={18} height={18} color="#fff"/></div>
                      <div className="mini-song-text">
                        <b>{s.t}</b><span>{s.a}</span>
                      </div>
                      <span className="mini-like"><IconHeartSolid width={13} height={13}/></span>
                    </div>
                  ))}
                </div>

                <div className="phone-mini-player">
                  <div className="mini-player-cover"><IconDisc width={20} height={20}/></div>
                  <div style={{flex:1}}>
                    <div className="mini-player-title">Dynamite — BTS</div>
                    <div className="mini-progress"><i className="mini-progress-bar"/></div>
                  </div>
                  <span className="mini-pause"><IconPause width={16} height={16}/></span>
                </div>
              </div>

              <div className="floating-card fc-1">
                <span className="fc-icon" style={{background:'linear-gradient(135deg,#E91E8C,#FF6BB5)'}}><IconHeartSolid width={16} height={16} color="#fff"/></span>
                <div><b>12 Liked Songs</b><small>synced offline</small></div>
              </div>
              <div className="floating-card fc-2">
                <span className="fc-icon" style={{background:'linear-gradient(135deg,#8B5CF6,#6366F1)'}}><IconWaves width={16} height={16} color="#fff"/></span>
                <div><b>Now Playing</b><small>BTS — Dynamite</small></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave" />
      </header>

      {/* STATS */}
      <div className="container stats reveal">
        <div className="stats-grid">
          <div className="stat"><strong>94 MB</strong><span>APK size</span></div>
          <div className="stat"><strong>Android 6+</strong><span>Works everywhere</span></div>
          <div className="stat"><strong>100% Offline</strong><span>No internet needed</span></div>
          <div className="stat"><strong>Free</strong><span>No ads • No login</span></div>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="kicker"><IconSparkles width={14} height={14}/> Features</span>
            <h2>Built for how you <span className="gradient-text">actually listen</span></h2>
            <p>Scan your device, heart what you love, and keep your K-Pop world at your fingertips — even on airplane mode.</p>
          </div>

          <div className="features">
            {[
              {icon: IconSmartphone, title:'Plays your phone’s music', desc:'Auto-scans local audio. No streaming, no buffering — instant playback from your device.', color:'linear-gradient(135deg,#E91E8C,#FF6BB5)', points:['Background playback','Media notification controls']},
              {icon: IconHeart, title:'Liked Songs & Playlists', desc:'Heart tracks, create custom playlists, manage everything offline with SQLite.', color:'linear-gradient(135deg,#8B5CF6,#6366F1)', points:['Create & rename playlists','Persistent across restarts']},
              {icon: IconHeadphones, title:'Background + Notification', desc:'Keep playing when you leave the app. Full notification controls, just like a real music app.', color:'linear-gradient(135deg,#FF6B2D,#FF9ECF)', points:['just_audio_background','Lock-screen controls']},
              {icon: IconSparkles, title:'K-Pop-first UI', desc:'Dark splash, pink gradients, glass cards, shimmer loaders — crafted for K-VIBES.', color:'linear-gradient(135deg,#06B6D4,#8B5CF6)', points:['Responsive • 60fps animations','Light theme with pink accents']},
              {icon: IconZap, title:'Fast & Light', desc:'Cold start in <1s. Cached songs show instantly while scanning in background.', color:'linear-gradient(135deg,#10B981,#06B6D4)', points:['Indexed local scan','No account required']},
              {icon: IconShield, title:'Private by design', desc:'No internet permission needed to play. Your music never leaves your phone.', color:'linear-gradient(135deg,#1A1A2E,#3D1060)', points:['Zero tracking','Works on airplane mode']},
            ].map((f,i)=>(
              <div key={f.title} className="feat reveal" data-delay={String(i*70)}>
                <div className="feat-icon" style={{background:f.color}}><f.icon width={20} height={20} color="#fff"/></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul>{f.points.map(p=><li key={p}><span className="feat-check"><IconCheck width={10} height={10}/></span> {p}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW */}
      <section id="preview" className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="preview reveal">
            <div className="preview-copy">
              <span className="kicker"><IconDisc width={14} height={14}/> Preview</span>
              <h3>Feels like a real <span className="gradient-text">music app</span>, because it is.</h3>
              <p>Home, Search, Library, Playlist detail, Now Playing — all polished with the same design system as the app.</p>
              <div className="check-grid">
                <div className="check"><i style={{background:'#E91E8C'}}><IconHeart width={14} height={14} color="#fff"/></i><div><b>Home & For You</b><span>Trending, New, Local chips</span></div></div>
                <div className="check"><i style={{background:'#8B5CF6'}}><IconSearch width={14} height={14} color="#fff"/></i><div><b>Search & Library</b><span>Filter pills & playlists</span></div></div>
                <div className="check"><i style={{background:'#FF6B2D'}}><IconPlay width={14} height={14} color="#fff"/></i><div><b>Now Playing</b><span>Artwork, slider, queue</span></div></div>
                <div className="check"><i style={{background:'#06B6D4'}}><IconList width={14} height={14} color="#fff"/></i><div><b>Mini Player</b><span>Sticky bottom bar</span></div></div>
              </div>
            </div>
            <div className="preview-phones">
              <div className="mini-phone reveal" data-delay="100">
                <div className="mini-phone-screen">
                  <div className="skel pink" />
                  <div className="skel" style={{width:'70%'}}/>
                  <div className="song-row"><i style={{background:'#E91E8C'}}><IconHome width={16} height={16} color="#fff"/></i><div className="song-row-text"><b>Home</b><span>For You • Trending</span></div></div>
                  <div className="song-row"><i style={{background:'#8B5CF6'}}><IconHeartSolid width={16} height={16} color="#fff"/></i><div className="song-row-text"><b>Library</b><span>Playlists • Liked</span></div></div>
                  <div className="song-row" style={{opacity:.6}}><i style={{background:'#FF6B2D'}}><IconSearch width={16} height={16} color="#fff"/></i><div className="song-row-text"><b>Search</b><span>Find any track</span></div></div>
                </div>
              </div>
              <div className="mini-phone lg reveal" data-delay="200">
                <div className="mini-phone-screen">
                  <div className="now-playing-art"><IconDisc width={36} height={36} color="#fff"/><span>K-VIBES<br/><small>Now Playing</small></span></div>
                  <div className="progress-track"><div className="progress-fill"/></div>
                  <div className="time-row"><span>1:42</span><span>3:19</span></div>
                  <div className="controls-row"><span className="ctrl-btn"><IconSkipBack width={18} height={18}/></span><span className="ctrl-play"><IconPause width={18} height={18} color="#fff"/></span><span className="ctrl-btn"><IconSkipForward width={18} height={18}/></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="install" className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="section-head reveal">
            <span className="kicker"><IconDownload width={14} height={14}/> How to install</span>
            <h2>3 taps to <span className="gradient-text">get started</span></h2>
            <p>Android only for now. iOS coming soon. No Play Store needed.</p>
          </div>
          <div className="steps">
            {[
              {n:1, title:'Download the APK', desc:<>Tap the pink download button. File is <b>94 MB</b> — works on Android 6 and above.</>, icon: IconDownload},
              {n:2, title:'Allow install', desc:<>Open the file → Allow <b>“Install unknown apps”</b> for your browser when prompted.</>, icon: IconShield},
              {n:3, title:'Open & play', desc:<>Launch K-VIBES → grant music permission → your library appears instantly.</>, icon: IconMusic},
            ].map((s,i)=>(
              <div key={s.n} className="step reveal" data-delay={String(i*90)}>
                <div className="step-num"><s.icon width={18} height={18}/></div>
                <div className="step-badge">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="tip-row reveal">
            <span className="tip-pill"><span className="tip-dot"/><IconShield width={12} height={12}/> Tip: If “Blocked by Play Protect”, tap <b>More details → Install anyway</b></span>
          </div>
        </div>
      </section>

      {/* CTA DOWNLOAD */}
      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="cta reveal">
            <div className="cta-glow" aria-hidden="true"/>
            <div className="cta-left">
              <h3>Download K-VIBES<br/>and vibe offline.</h3>
              <p>Free forever. No account. No ads. Just your music, beautifully organized. Perfect for commutes, flights, and late-night sessions.</p>
              <div className="cta-actions">
                <button className="btn-primary btn-primary-light" onClick={()=>handleDownload()}>
                  <IconDownload width={18} height={18}/> Download APK — 94 MB
                </button>
                <a href={APK_URL_RELEASE} target="_blank" rel="noreferrer" className="btn-ghost">View Release <IconArrowRight width={14} height={14}/></a>
              </div>
              <p className="cta-footnote">Verified build from GitHub Actions • v1.0.0+1 • <a href={GITHUB_REPO} target="_blank" rel="noreferrer">Source on GitHub <IconExternal width={10} height={10}/></a></p>
            </div>

            <div className="cta-card">
              <div className="cta-card-head">
                <span className="cta-icon"><img src={ICON_URL} alt="" onError={e=>e.currentTarget.style.display='none'} /></span>
                <div>
                  <strong>K-vibes.apk</strong>
                  <span className="cta-meta"><IconPackage width={12} height={12}/> 94.7 MB • Android 6+ • Offline-first</span>
                </div>
                <span className="badge-live"><span className="badge-dot"/> FREE</span>
              </div>
              <div className="sep"/>
              <ul className="cta-list">
                <li><span className="cta-check"><IconCheck width={10} height={10}/></span> Plays your local music instantly</li>
                <li><span className="cta-check"><IconCheck width={10} height={10}/></span> Liked songs & playlists saved offline</li>
                <li><span className="cta-check"><IconCheck width={10} height={10}/></span> Background playback with notification</li>
              </ul>
              <button className="btn-primary btn-block" onClick={()=>handleDownload()}><IconDownload width={16} height={16}/> Download now</button>
              <a href="#" onClick={e=>{e.preventDefault(); copyLink()}} className="muted-link"><IconCopy width={12} height={12}/> Copy download link</a>
              <a href={APK_URL_LOCAL} download className="muted-link" style={{marginTop:6}}><IconLink width={12} height={12}/> Try local file (/K-vibes.apk) if GitHub is slow</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="section-head reveal">
            <span className="kicker"><IconSearch width={14} height={14}/> FAQ</span>
            <h2>Got questions?</h2>
          </div>
          <div className="faq">
            {[
              {q:'Is K-VIBES really offline?', a:'Yes — 100%. It scans and plays audio already on your phone. No streaming, no internet required after install. Perfect for airplane mode.'},
              {q:'Is it free? Any ads or login?', a:'Completely free, no ads, no account. Open the app and your music is there.'},
              {q:'Why APK and not Play Store?', a:'We’re launching direct-download first for speed. Play Store is planned. APK installs in seconds — just allow “Install unknown apps” once.'},
              {q:'What Android version do I need?', a:'Android 6.0 (Marshmallow) and above. That covers ~99% of devices. File size is 94 MB.'},
              {q:'Where does it get music from?', a:'From your device storage (Downloads, Music folders). Grant the media permission on first launch and we’ll index everything automatically.'},
              {q:'Is my data safe?', a:'Yes. No servers, no tracking. Everything (likes, playlists) is stored locally in SQLite on your phone.'},
            ].map((f,i)=>(
              <div key={f.q} className={`faq-item ${openFaq===i?'open':''} reveal`} data-delay={String(i*40)}>
                <button className="faq-q" onClick={()=>setOpenFaq(openFaq===i ? -1 : i)}>
                  {f.q} <span className="faq-icon"><IconArrowRight width={14} height={14} style={{transform: openFaq===i ? 'rotate(90deg)' : 'rotate(0deg)', transition:'.2s'}}/></span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="brand-mark" style={{width:36, height:36}}><img src={LOGO_URL} alt="" onError={e=>e.currentTarget.style.display='none'} /></span>
            <div>
              K-VIBES <small>© {new Date().getFullYear()} gracesellemanaging-lab • Your K-Pop universe</small>
            </div>
          </div>
          <div className="footer-links">
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer"><IconGithub width={14} height={14}/> GitHub</a>
            <a href={APK_URL_RELEASE} target="_blank" rel="noreferrer">Releases</a>
            <a href={APK_URL_GITHUB}><IconDownload width={14} height={14}/> Direct APK</a>
            <span className="footer-made">Made with <IconHeartSolid width={12} height={12} color="#E91E8C"/> for K-Pop fans</span>
          </div>
        </div>
      </footer>

      <div className={`toast ${toast?'show':''}`}><span className="toast-icon"><IconCheckCircle width={16} height={16} color="#fff"/></span> {toast}</div>
    </>
  )
}

function IconExternal(props){
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M14 4h6v6"/><path d="M10 14L20 4"/><path d="M5 14v6h14V8" opacity=".7"/></svg>
}
