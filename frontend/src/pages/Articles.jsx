import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  FileText,
  ExternalLink,
} from "lucide-react";

const articles = [
  {
    number: "01",
    category: "CYBERSECURITY",
    title: "AegisOne — AI-Powered Cybersecurity & Digital Risk Platform",
    description:
      "A technical project article covering the development, architecture, API integration, testing and deployment of AegisOne.",
    date: "2026",
    type: "Project Article",
    link: "https://aegisone-frontend.onrender.com",
    tags: ["Cybersecurity", "AI", "REST API", "FastAPI"],
  },
  {
    number: "02",
    category: "SYSTEMS",
    title: "AstraOS — Learning Operating Systems by Building One",
    description:
      "Documentation and engineering notes around the AstraOS open-source operating-system initiative, covering low-level programming and OS concepts.",
    date: "2026",
    type: "Technical Documentation",
    link: "https://samirlevate8788-creator.github.io/AstraOS-/index.html",
    tags: ["C", "C++", "Assembly", "Linux", "OS"],
  },
  {
    number: "03",
    category: "SECURITY",
    title: "SecureCheck — Understanding Password Security",
    description:
      "A security-awareness project exploring password strength, entropy, character analysis and educational crack-time estimation directly in the browser.",
    date: "2026",
    type: "Technical Project",
    link: "https://samirlevate8788-creator.github.io/securecheck-password-analyze/",
    tags: ["Cybersecurity", "JavaScript", "Security"],
  },
];

const topics = [
  "Software Engineering",
  "Cybersecurity",
  "Artificial Intelligence",
  "Linux & Systems",
  "Open Source",
  "Programming",
];

export default function Articles() {
  return (
    <main className="articles-page" id="articles">
      {/* HERO */}
      <section className="articles-hero">
        <div className="articles-container">
          <motion.div
            className="articles-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>08 / ARTICLES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ideas, research
            <br />
            <span>& engineering notes.</span>
          </motion.h1>

          <motion.p
            className="articles-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            A collection of technical writing, project documentation and
            engineering notes around software development, cybersecurity,
            artificial intelligence, Linux and open-source technology.
          </motion.p>

          <div className="article-topic-row">
            {topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles-list-section">
        <div className="articles-container">
          <div className="articles-section-head">
            <div>
              <p className="articles-small-label">SELECTED WRITING</p>
              <h2>Technical work & documentation</h2>
            </div>

            <div className="articles-count">
              <BookOpen size={18} />
              <span>{articles.length} Published Entries</span>
            </div>
          </div>

          <div className="articles-grid">
            {articles.map((article, index) => (
              <motion.article
                className="article-card"
                key={article.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="article-card-top">
                  <span className="article-number">
                    {article.number}
                  </span>

                  <span className="article-category">
                    {article.category}
                  </span>
                </div>

                <div className="article-icon">
                  <FileText size={22} />
                </div>

                <h3>{article.title}</h3>

                <p className="article-description">
                  {article.description}
                </p>

                <div className="article-meta">
                  <span>
                    <CalendarDays size={14} />
                    {article.date}
                  </span>

                  <span>{article.type}</span>
                </div>

                <div className="article-tags">
                  {article.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="article-read-btn"
                >
                  Read / Explore
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING PHILOSOPHY */}
      <section className="writing-philosophy">
        <div className="articles-container">
          <div className="writing-philosophy-box">
            <div className="writing-symbol">
              <ExternalLink size={24} />
            </div>

            <p className="articles-small-label">
              ENGINEERING PHILOSOPHY
            </p>

            <h2>
              Build it.
              <br />
              Understand it.
              <br />
              Document it.
            </h2>

            <p>
              Writing is part of engineering. Documentation helps turn
              experiments and projects into knowledge that can be shared,
              reviewed and improved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
