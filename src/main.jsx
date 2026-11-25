import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const experiences = [
    {
        date: 'March 2026 – Present', place: 'ICAF Project', title: 'Call Center Agent & Data Collector',
        description: 'Support patient counseling and structured data collection through the project’s call center operations.',
        tags: ['Softphone counseling', 'ODK data collection', 'Call dashboards', 'Confidentiality'],
    },
    {
        date: '5 months', place: 'Clinical support', title: 'Waiting Room Assistant',
        description: 'Helped with patient reception and flow, supporting a welcoming and organized waiting room experience.',
        tags: ['Patient reception', 'Flow coordination', 'Respectful communication'],
    },
    {
        date: 'University of Gondar', place: 'Team Training Program', title: 'Community Health Fieldwork',
        description: 'Participated in community and environmental mini-projects, including local health assessment as part of team training.',
        tags: ['Community assessment', 'Environmental health', 'Teamwork'],
    },
];

const competencies = [
    'Clinical protocol & attention to detail', 'Confidentiality & medical ethics',
    'Health education & community outreach', 'Empathy & active listening',
    'Adaptability & rapid learning', 'Healthcare data & computer systems',
];

const credentials = [
    ['Digital Health Foundations', 'Africa Digital Health Academy · 25 Nov 2026 · 5 CPD points · valid through 25 Nov 2029'],
    ['Employability Skills & Job Readiness', 'Oct 2023'],
    ['English Language Proficiency Certification', 'University of Gondar · 2024'],
    ['Africa Girls Can Code Initiative', 'Jul–Aug 2019'],
    ['Intermediate English Diploma', 'E.C. 2006'],
];

function Eyebrow({ children }) {
    return <span className="eyebrow">{children}</span>;
}

function SectionHeading({ number, title, intro, id }) {
    return (
        <div className="section-heading">
            <span className="section-number">{number}</span>
            <div><h2 id={id}>{title}</h2><p className="section-intro">{intro}</p></div>
        </div>
    );
}

function App() {
    return <>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="topbar">
            <nav className="nav shell" aria-label="Main navigation">
                <a className="brand" href="#top">Rediet Abera</a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li><li><a href="#experience">Experience</a></li>
                    <li><a href="#competencies">Competencies</a></li><li><a href="#education">Education</a></li><li><a href="#contact">Contact</a></li>
                </ul>
                <a className="button nav-cta" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </nav>
        </header>
        <main id="main">
            <section className="hero shell" id="top" aria-labelledby="hero-title">
                <div>
                    <Eyebrow>Public health · Community care</Eyebrow>
                    <h1 id="hero-title">Rediet<br />Abera</h1>
                    <p className="hero-title">Public Health Officer | Healthcare Professional &amp; Counselor</p>
                    <p className="hero-copy">Grounded in public health training and frontline experience, I support people with thoughtful counseling, dependable health data collection, and community-centered care.</p>
                    <div className="hero-actions">
                        <a className="button" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
                        <a className="button secondary" href="#experience">View experience <span aria-hidden="true">↓</span></a>
                        <button className="button secondary" type="button" onClick={() => window.print()}>Print / save as PDF</button>
                    </div>
                    <p className="location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></svg>Addis Ababa, Ethiopia · Open to hybrid and on-site roles</p>
                </div>
                <div className="portrait-wrap">
                    <img className="portrait" src="./images/headshot.png" alt="Portrait of Rediet Abera" width="533" height="545" fetchPriority="high" />
                    <div className="portrait-label"><span>Focus areas</span>Public health · Community health · Research</div>
                </div>
            </section>

            <section className="section" id="about" aria-labelledby="about-title"><div className="shell">
                <SectionHeading number="01 / ABOUT" id="about-title" title={<>Care with purpose.<br />Data with integrity.</>} intro="A public health professional prepared to contribute across clinical support, community programs, and health research." />
                <div className="about-grid"><div className="about-copy">
                    <p>My training at the University of Gondar gave me a strong foundation in public health practice. Since graduating, I have supported patient communication and reception, taken part in community and environmental health fieldwork, and contributed to digital health data collection.</p>
                    <p>I value careful listening, confidentiality, and clear communication. I work in Amharic and English and am interested in roles where dependable fieldwork and respectful, patient-centered service matter.</p>
                </div><div className="fact-row" aria-label="Professional highlights">
                        <div className="fact-card"><strong>3.58</strong><span>GPA · University of Gondar</span></div>
                        <div className="fact-card"><strong>2</strong><span>Working languages · Amharic &amp; English</span></div>
                    </div></div>
            </div></section>

            <section className="section" id="experience" aria-labelledby="experience-title"><div className="shell">
                <SectionHeading number="02 / EXPERIENCE" id="experience-title" title="Experience & fieldwork" intro="Work across digital data collection, clinical support, and hands-on community health learning." />
                <div className="experience-list">{experiences.map((item) => <article className="experience-card" key={item.title}>
                    <div className="experience-meta">{item.date}<span>{item.place}</span></div>
                    <div><h3>{item.title}</h3><p>{item.description}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
                </article>)}</div>
            </div></section>

            <section className="section" id="competencies" aria-labelledby="competencies-title"><div className="shell">
                <SectionHeading number="03 / COMPETENCIES" id="competencies-title" title={<>Skills for people<br />and public health</>} intro="A blend of careful practice, clear communication, and practical data skills." />
                <div className="competency-layout"><div className="competency-grid">{competencies.map((skill, index) => <div className="competency" key={skill}><span className="competency-mark" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><strong>{skill}</strong></div>)}</div>
                    <aside className="language-card" aria-label="Languages"><Eyebrow>Communication</Eyebrow><h3>Language fluency</h3><p>Connecting with patients, communities, and multidisciplinary teams.</p>
                        <div className="language-line"><span>Amharic</span><span>Native</span></div><div className="language-line"><span>English</span><span>Professional working proficiency</span></div><div className="language-line"><span>Digital tools</span><span>ODK · Office · Reporting</span></div>
                    </aside>
                </div>
            </div></section>

            <section className="section" id="education" aria-labelledby="education-title"><div className="shell">
                <SectionHeading number="04 / EDUCATION" id="education-title" title="Education & credentials" intro="Formal public health training and continuing skills development." />
                <div className="education-grid"><article className="degree-card"><Eyebrow>Formal degree</Eyebrow><h3>Bachelor’s Degree in Public Health Officer</h3><p>University of Gondar · 2024</p><div className="degree-details"><span>GPA 3.58 / 4.00</span><span>Public Health</span></div></article>
                    <div className="credential-list" aria-label="Certifications">{credentials.map(([name, date]) => <div className="credential" key={name}><strong>{name === 'Digital Health Foundations' ? <a href="https://adha.edu.et/en/credential/ADHA-C-2026-SDFN7T" target="_blank" rel="noreferrer">{name}</a> : name}</strong><span>{name === 'Digital Health Foundations' ? <><span>Africa Digital Health Academy · 25 Nov 2026</span><span>5 CPD points · Valid through 25 Nov 2029</span></> : date}</span></div>)}</div>
                </div>
            </div></section>

            <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-layout">
                <div><Eyebrow>05 / CONTACT</Eyebrow><h2 id="contact-title">Let’s work toward healthier communities.</h2><p className="contact-copy">For opportunities in public health, clinical support, community programs, and field data collection, please get in touch.</p>
                    <div className="contact-links">
                        <a href="mailto:aberarediet716@gmail.com">aberarediet716@gmail.com</a>
                        <span>Addis Ababa, Ethiopia</span></div>
                </div>
                <aside className="availability"><Eyebrow>Availability</Eyebrow><strong>Open to meaningful work</strong><p>Available for full-time institutional, clinical, and NGO field deployments in Addis Ababa and beyond.</p></aside>
            </div></section>
        </main>
        <footer><div className="shell footer-inner"><p>© 2026 Rediet Abera · Patient privacy and dignity come first.</p><nav className="footer-nav" aria-label="Footer navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></nav></div></footer>
    </>;
}

createRoot(document.getElementById('root')).render(<App />);
