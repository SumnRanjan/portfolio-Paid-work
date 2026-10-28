import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Palette,
  Newspaper,
  Film,
  Menu,
  X,
  Send,
  Linkedin,
  Instagram,
  Play,
  Aperture,
  ScanLine,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Photography",
    category: "Photography",
    description: "Capturing real frames through the lens.",
    image: "/image.webp",
    number: "01",
    tag: "STILLS / LIGHT",
    link: "https://drive.google.com/drive/folders/1Ta8wA97TBMt9Pbm_ppppDSvxuLrgN-zw?usp=drive_link",
  },
  {
    title: "Edited Videos",
    category: "Video Editing",
    description: "Art is in what you leave out.",
    image: "/video.webp",
    number: "02",
    tag: "CUT / RHYTHM",
    link: "https://drive.google.com/drive/folders/1u1NqIT3hmE2OK0_Q0ex3PelYsjyQfL6f?usp=drive_link",
  },
  {
    title: "Production",
    category: "Filmmaking",
    description: "Scripted by life. Created by me.",
    image: "/prod.webp",
    number: "03",
    tag: "SCENE / ACTION",
    link: "https://www.youtube.com/@NARRATIVECINEMA-y8p",
  },
  {
    title: "Designing",
    category: "Design",
    description: "Giving shape to ideas.",
    image: "/degine.webp",
    number: "04",
    tag: "FORM / FEELING",
    link: "https://drive.google.com/drive/folders/1SKtXxlG-9imXPkFOXhDlJCI1uw35rEFO?usp=drive_link",
  },
];
const toolGroups = [
  {
    title: "Video Production",
    items: ["DaVinci Resolve", "Adobe After Effects"],
    number: "01",
    icon: <Clapperboard />,
  },
  {
    title: "Design & Visuals",
    items: ["Adobe Photoshop", "Canva"],
    number: "02",
    icon: <Palette />,
  },
  {
    title: "Newsroom Systems",
    items: ["iNews", "Octopus Software"],
    number: "03",
    icon: <Newspaper />,
  },
];
function App() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filters = [
    "All",
    "Photography",
    "Video Editing",
    "Filmmaking",
    "Design",
  ];
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <div className="site">
      <div className="film-grain" aria-hidden="true" />
      <header className="nav">
        <a className="logo" href="#home">
          AS<span>✳</span>
          <small>ARYAN SINGH / FILM & STORY</small>
        </a>
        <div className="nav-right">
          <span className="availability">
            <i /> AVAILABLE FOR COLLABORATION
          </span>
          <button className="menu-btn" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
            <span>{menu ? "Close" : "Menu"}</span>
          </button>
        </div>
      </header>
      {menu && (
        <nav className="overlay">
          <button className="overlay-close" onClick={() => setMenu(false)}>
            <X /> Close
          </button>
          {[
            ["The opening", "#home"],
            ["Selected work", "#work"],
            ["Tools & software", "#tools"],
            ["Contact", "#contact"],
          ].map(([n, h]) => (
            <a key={n} href={h} onClick={() => setMenu(false)}>
              {n}
              <ArrowUpRight />
            </a>
          ))}
          <small>FILMMAKING · CAMERA · EDITING </small>
        </nav>
      )}
      <main>
        <section className="hero" id="home">
          <div className="curtain curtain-left" />
          <div className="curtain curtain-right" />
          <div className="hero-meta">
            <span>AN INDEPENDENT CREATIVE PORTFOLIO</span>
            <span>LIGHTS · CAMERA · STORY</span>
          </div>
          <div className="marquee-mark">PRESENTING</div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow">
                <span>✦</span> EVERY FRAME HAS A STORY
              </p>
              <h1>
                <span className="name-first">Aryan</span>
                <span className="name-last">
                  <em>Singh</em>
                  <b className="hero-dot">.</b>
                </span>
              </h1>
              <div className="role-line">
                FILMMAKING <i /> DOP <i /> VIDEO EDITING
              </div>
              <p className="hero-description">
                A visual storyteller drawn to the craft of filmmaking — from the
                first idea and camera frame to the final cut.
              </p>
              <a className="ticket-button" href="#work">
                EXPLORE THE PORTFOLIO <ArrowDown size={15} />
              </a>
            </div>
            <div
              className="hero-art"
              aria-label="Cinematic film set with a camera lens, clapperboard and film-strip stills"
            >
              <div className="spotlight" />
              <div className="stage-haze" />
              <div className="hero-filmstrip filmstrip-back">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-filmstrip filmstrip-front">
                <span />
                <span />
                <span />
              </div>
              <div className="clapboard">
                <div className="clap-top">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="clap-body">
                  <span>PRODUCTION SLATE</span>
                  <strong>ARYAN SINGH</strong>
                  <small>SCENE 01&nbsp;&nbsp; TAKE 04</small>
                  <div>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
              <div className="cinema-lens">
                <div className="lens-glass">
                  <i />
                  <b />
                </div>
                <span>FOCUS · FRAME · STORY</span>
              </div>
              <div className="film-perf perf-a">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="film-perf perf-b">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span className="art-note note-a">CAMERA / ACTION</span>
              <span className="art-note note-b">A STORY IN EVERY SHOT</span>
            </div>
          </div>
          <div className="hero-foot">
            <span>AN ARYAN SINGH PRODUCTION</span>
            <span>
              SCROLL TO TAKE YOUR SEAT <ArrowDown size={13} />
            </span>
          </div>
          <div className="hero-index">AS / 001</div>
        </section>
        <section className="intro" id="about">
          <div className="section-kicker">
            <span>ACT I — THE STORYTELLER</span>
            <span>About Aryan</span>
          </div>
          <div className="intro-grid">
            <h2>
              Life gives the story.
              <br />
              <em>I frame it.</em>
            </h2>
            <div className="intro-copy">
              <p>
                I'm Aryan Singh — interested in filmmaking, cinematography,
                video editing and design. I love the process of turning an idea
                into a visual story, one thoughtful frame at a time.
              </p>
              <p>
                My goal is to collaborate with creative professionals,
                contribute to impactful projects, and continuously grow my
                knowledge of the production process.
              </p>
              <div className="credits">
                <span>CREATIVE FOCUS</span>
                <b>Filmmaking / DOP / Editing </b>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio" id="work">
          <div className="section-kicker dark">
            <span>ACT II — SELECTED SCENES</span>
            <span>Portfolio / 01—05</span>
          </div>
          <div className="portfolio-heading">
            <div>
              <p className="eyebrow dark-eye">A COLLECTION OF FRAMES & IDEAS</p>
              <h2>
                The art of
                <br />
                <em>the unseen.</em>
              </h2>
            </div>
            <p>
              Photography, edits, production and stories from the world around
              us. Every project is a new scene; every scene, a new way to see.
            </p>
          </div>
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
                <sup>
                  {f === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === f).length}
                </sup>
              </button>
            ))}
          </div>
          <div className="project-grid">
            {shown.map((p, i) => (
              <article
                className="project-card"
                key={p.title}
                style={{ "--delay": `${i * 80}ms` }}
              >
                <button
                  className="project-image"
                  onClick={() => setSelected(p)}
                  aria-label={`View ${p.title} details`}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} portfolio visual`}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    decoding="async"
                  />

                  <span className="image-shade" />
                  <span className="project-no">
                    {p.number} / {p.tag}
                  </span>
                  <span className="view-project">
                    VIEW SCENE <ArrowUpRight size={16} />
                  </span>
                  <span className="film-frame-corner c1" />
                  <span className="film-frame-corner c2" />
                </button>

                <div className="project-caption">
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <span>{p.number}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="portfolio-end">
            <span>END OF REEL — FOR NOW</span>
            <span>MORE STORIES COMING SOON ✦</span>
          </div>
        </section>
        <section className="tools" id="tools">
          <div className="section-kicker">
            <span>ACT III — THE TOOLKIT</span>
            <span>Tools & software</span>
          </div>
          <div className="tools-heading">
            <h2>
              Behind every
              <br />
              <em>good frame.</em>
            </h2>
            <p>
              Professional tools used for video production, design and newsroom
              management.
            </p>
          </div>
          <div className="tool-grid">
            {toolGroups.map((g, i) => (
              <article className="tool-card" key={g.title}>
                <div className="tool-top">
                  <span>TOOLBOX / {g.number}</span>
                  <span className="tool-icon">{g.icon}</span>
                </div>
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>
                      <span>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="tool-card-bottom">
                  <span>PRODUCTION DEPT.</span>
                  <span>0{i + 1}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="tools-footnote">
            <Aperture size={16} /> THE RIGHT TOOL SERVES THE STORY — NEVER THE
            OTHER WAY AROUND.
          </div>
        </section>
        <section className="experience">
          <div className="section-kicker">
            <span>ACT IV — NEWSROOM NOTES</span>
            <span>Journalism</span>
          </div>
          <div className="experience-grid">
            <h2>
              Stories beyond
              <br />
              <em>the Headlines.</em>
            </h2>
            <div className="experience-copy">
              <p>
                Hands-on experience in the newsroom environment has helped shape
                an appreciation for research, editorial workflows, and
                storytelling under pressure.
              </p>
              <div className="newsroom-list">
                <div>
                  <span className="newsroom-icon">
                    <Newspaper />
                  </span>
                  <div>
                    <h3>NDTV</h3>
                    <p>Newsroom experience</p>
                  </div>
                  <span className="credit-arrow">↗</span>
                </div>
                <div>
                  <span className="newsroom-icon">
                    <Newspaper />
                  </span>
                  <div>
                    <h3>Republic World</h3>
                    <p>News and editorial environment</p>
                  </div>
                  <span className="credit-arrow">↗</span>
                </div>
              </div>
              <small className="verify-note">
                Confirm exact roles and dates before publishing.
              </small>
            </div>
          </div>
        </section>
        <section className="closing">
          <div className="closing-curtain" />
          <p className="closing-overline">THE FINAL SCENE</p>
          <h2>
            Let's Frame
            <br />
            <em>What Matters.</em>
          </h2>
          <p className="closing-copy">
            Good stories stay with us long after the screen fades to black.
          </p>
          <a className="ticket-button" href="#contact">
            LET'S COLLABORATE <ArrowUpRight size={15} />
          </a>
          <div className="closing-star">✦</div>
        </section>
        <section className="contact" id="contact">
          <div className="section-kicker dark">
            <span>THE LOBBY — CONTACT</span>
            <span>Get in touch</span>
          </div>
          <div className="contact-grid">
            <div>
              <p className="eyebrow dark-eye">NOW SHOWING: NEW POSSIBILITIES</p>
              <h2>
                Have a story
                <br />
                <em>to tell?</em>
              </h2>
              <p className="contact-intro">
                Open to creative collaborations, production projects, media
                opportunities and working with people who care about the craft.
              </p>
            </div>
            <div className="contact-card">
              <span className="contact-label">CONTACT THE CREATOR</span>
              <h3>Aryan Singh</h3>
              <p>Filmmaking · DOP · Video editing · Journalism</p>
              <a
                href="mailto:aryansingh4904@gmail.com"
                className="contact-link"
              >
                Email Aryan <ArrowUpRight size={17} />
              </a>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/aryan-singh-5b32a4343"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>in</span> LinkedIn <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.instagram.com/aryan_singh1711/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={15} />
                  Instagram
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
          <p className="contact-small">
            REPLACE THE PLACEHOLDER EMAIL AND SOCIAL LINKS BEFORE LAUNCH.
          </p>
        </section>
      </main>
      <footer>
        <a className="footer-logo" href="#home">
          AS<span>✦</span>
        </a>
        <span>AN ARYAN SINGH PRODUCTION</span>
        <span>© {new Date().getFullYear()} — ALL FRAMES RESERVED</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
      {selected && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <X />
            </button>
            <img src={selected.image} alt={selected.title} />
            <div>
              <span className="modal-kicker">
                {selected.number} / {selected.category}
              </span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
              <a href={selected.link} target="_blank" rel="noopener noreferrer">
                Open original <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
