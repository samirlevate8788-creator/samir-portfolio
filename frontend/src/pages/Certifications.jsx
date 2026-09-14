import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ExternalLink,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

/* =========================================================
   CERTIFICATION DATA
   ========================================================= */

const certifications = [
  {
    id: 1,
    title:
      "Artificial Intelligence: Knowledge Representation and Reasoning",
    issuer: "NPTEL • IIT Madras",
    category: "AI",
    year: "2026",
    level: "Elite",
    skills: [
      "Artificial Intelligence",
      "Knowledge Representation",
      "Reasoning",
    ],
    description:
      "Advanced academic learning in artificial intelligence, knowledge representation and reasoning.",
    certificate:
      "/certificates/nptel-ai-krr.pdf.pdf",
    verify: "https://nptel.ac.in/",
  },

  {
    id: 2,
    title: "Full Stack Web Development with AI",
    issuer: "Internshala",
    category: "Development",
    year: "2026",
    level: "Course",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "DBMS",
      "AI",
    ],
    description:
      "Full-stack development training covering frontend, databases, JavaScript, React and AI-assisted web development.",
    certificate:
      "/certificates/full-stack-web-development-ai.pdf.pdf",
  },

  {
    id: 3,
    title: "Preparation for Job Interviews",
    issuer: "Coursera",
    category: "Career",
    year: "2026",
    level: "Course",
    skills: [
      "Interview Preparation",
      "Communication",
      "Career",
    ],
    description:
      "Career-focused learning for technical and professional interview preparation.",
    certificate:
      "/certificates/job-interview-preparation.pdf.pdf",
  },

  {
    id: 4,
    title: "Excel for Beginners",
    issuer: "Great Learning",
    category: "Productivity",
    year: "2026",
    level: "Course",
    skills: [
      "Microsoft Excel",
      "Spreadsheets",
      "Data Handling",
    ],
    description:
      "Foundational Excel training covering spreadsheet workflows and productivity skills.",
    certificate:
      "/certificates/excel-for-beginners.pdf.pdf",
  },

  {
    id: 5,
    title: "AI-Powered Shopping Ads Certification",
    issuer: "Google",
    category: "AI",
    year: "2026",
    level: "Certification",
    skills: [
      "Google Ads",
      "AI",
      "E-Commerce",
      "Digital Marketing",
    ],
    description:
      "Certification focused on AI-powered shopping advertising concepts and digital commerce.",
    certificate:
      "/certificates/google-ai-shopping-ads.pdf.pdf",
  },

  {
    id: 6,
    title: "Robot Arm in Industries",
    issuer: "Infosys Springboard",
    category: "Technology",
    year: "2026",
    level: "Course",
    skills: [
      "Robotics",
      "Automation",
      "Industrial Technology",
    ],
    description:
      "Learning focused on industrial robotic-arm applications and automation concepts.",
    certificate:
      "/certificates/robot-arm-industries.pdf.pdf",
    verify: "https://verify.onwingspan.com/",
  },

  {
    id: 7,
    title: "AI Tools / ChatGPT Workshop",
    issuer: "AI Workshop",
    category: "AI",
    year: "2026",
    level: "Workshop",
    skills: [
      "AI Tools",
      "ChatGPT",
      "Prompting",
      "Productivity",
    ],
    description:
      "Practical workshop covering AI tools, prompting and AI-assisted productivity.",
    certificate:
      "/certificates/ai-tools-chatgpt-workshop.pdf",
  },

  {
    id: 8,
    title: "Copywriting Internship — Selection",
    issuer: "Internshala Trainings",
    category: "Professional",
    year: "2026",
    level: "Selection",
    skills: [
      "Copywriting",
      "Content",
      "Communication",
    ],
    description:
      "Selection credential related to copywriting and professional content work.",
    certificate:
      "/certificates/copywriting-internship-selection.pdf.pdf",
  },

  {
    id: 9,
    title: "Content Writing Internship — Selection",
    issuer: "Internshala Trainings",
    category: "Professional",
    year: "2026",
    level: "Selection",
    skills: [
      "Content Writing",
      "Research",
      "Communication",
    ],
    description:
      "Selection credential related to content writing and research-oriented work.",
    certificate:
      "/certificates/content-writing-internship-selection.pdf.pdf",
  },

  {
    id: 10,
    title: "Cybersecurity Professional Career Roadmap 2026",
    issuer: "WsCube Tech",
    category: "Cybersecurity",
    year: "2026",
    level: "Course",
    skills: [
      "Cybersecurity",
      "Security Career",
      "Ethical Hacking",
    ],
    description:
      "Cybersecurity career-oriented learning and roadmap covering security fundamentals.",
    certificate:
      "/certificates/cybersecurity-career-roadmap-2026.pdf.pdf",
  },

  {
    id: 11,
    title: "Ethical Hacking Certification Course",
    issuer: "Programming Hub",
    category: "Cybersecurity",
    year: "2026",
    level: "Certification",
    skills: [
      "Ethical Hacking",
      "Cybersecurity",
      "Security",
    ],
    description:
      "Learning focused on ethical hacking concepts and cybersecurity fundamentals.",
    certificate:
      "/certificates/ethical-hacking-certification.pdf.pdf",
  },

  {
    id: 12,
    title: "Basics of Python",
    issuer: "Infosys",
    category: "Programming",
    year: "2026",
    level: "Course",
    skills: [
      "Python",
      "Programming",
      "Problem Solving",
    ],
    description:
      "Foundational Python programming course covering core programming concepts.",
    certificate:
      "/certificates/basics-of-python.pdf.pdf",
  },

  {
    id: 13,
    title: "Time Management",
    issuer: "Infosys",
    category: "Professional",
    year: "2026",
    level: "Course",
    skills: [
      "Time Management",
      "Productivity",
      "Professional Skills",
    ],
    description:
      "Professional-development learning focused on time management and productivity.",
    certificate:
      "/certificates/time-management.pdf.pdf",
  },

  {
    id: 14,
    title: "Web Development with AI",
    issuer: "Schoolverse Educare",
    category: "Development",
    year: "2026",
    level: "Course",
    skills: [
      "Web Development",
      "AI",
      "Frontend",
    ],
    description:
      "Web development learning focused on integrating modern AI-assisted development workflows.",
    certificate:
      "/certificates/web-development-with-ai.pdf.pdf",
  },

  {
    id: 15,
    title: "Drawing — Elementary Examination",
    issuer: "Government of Maharashtra • Drawing Grade Examinations",
    category: "Achievement",
    year: "2019",
    level: "C Grade",
    skills: [
      "Drawing",
      "Creative Skills",
    ],
    description:
      "Certificate awarded for passing the Elementary Grade Drawing Examination held in 2019 with Grade C.",
    certificate:
      "/certificates/drawing-elementary.pdf",
  },

  {
    id: 16,
    title: "Drawing — Intermediate Examination",
    issuer: "Government of Maharashtra • Drawing Grade Examinations",
    category: "Achievement",
    year: "2022",
    level: "C Grade",
    skills: [
      "Drawing",
      "Creative Skills",
    ],
    description:
      "Certificate awarded for passing the Intermediate Grade Drawing Examination held in 2022 with Grade C.",
    certificate:
      "/certificates/drawing-intermediate.pdf",
  },

  {
    id: 17,
    title: "Certificate of Excellence",
    issuer:
      "Brahmdevdada Mane Institute of Technology, Solapur",
    category: "Achievement",
    year: "2026",
    level: "Excellence",
    skills: [
      "Academic Excellence",
      "Academic Performance",
      "Engineering",
    ],
    description:
      "Certificate of Excellence awarded for outstanding academic performance in the First Year of Engineering during the Academic Year 2025–26.",
    certificate:
      "/certificates/certificate-of-excellence-bmit.pdf",
  },
];


/* =========================================================
   CATEGORIES
   ========================================================= */

const categories = [
  "All",
  "Cybersecurity",
  "AI",
  "Development",
  "Programming",
  "Technology",
  "Professional",
  "Productivity",
  "Career",
  "Achievement",
];


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Certifications() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [selected, setSelected] =
    useState(null);


  /* =======================================================
     FILTER
     ======================================================= */

  const filtered = useMemo(() => {
    return certifications.filter((cert) => {

      const categoryMatch =
        activeCategory === "All" ||
        cert.category === activeCategory;

      const searchableText =
        `${cert.title} ${cert.issuer} ${cert.category} ${cert.skills.join(
          " "
        )}`.toLowerCase();

      const searchMatch =
        searchableText.includes(
          search.toLowerCase()
        );

      return (
        categoryMatch &&
        searchMatch
      );
    });
  }, [activeCategory, search]);


  return (
    <main
      className="certifications-page"
      id="certifications"
    >

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="certifications-hero">

        <div className="certifications-container">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <p className="section-eyebrow">
              05 / CERTIFICATIONS
            </p>

            <h1>
              Learning backed
              <span> by credentials.</span>
            </h1>

            <p className="certifications-intro">
              A curated collection of certifications,
              technical courses, workshops and academic
              achievements across software engineering,
              cybersecurity, artificial intelligence and
              technology.
            </p>

          </motion.div>


          {/* =================================================
              STATS
          ================================================= */}

          <div className="certificate-stats">

            <div>
              <strong>
                {certifications.length}
              </strong>

              <span>
                Credentials
              </span>
            </div>

            <div>
              <strong>
                05+
              </strong>

              <span>
                Technical Areas
              </span>
            </div>

            <div>
              <strong>
                2026
              </strong>

              <span>
                Active Learning
              </span>
            </div>

            <div>
              <strong>
                ∞
              </strong>

              <span>
                Learning Mindset
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          CERTIFICATE VAULT
      =================================================== */}

      <section className="certificate-vault">

        <div className="certifications-container">

          {/* SEARCH */}

          <div className="certificate-toolbar">

            <div className="certificate-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search certifications..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

            </div>

            <div className="certificate-count">
              {filtered.length} results
            </div>

          </div>


          {/* FILTER */}

          <div className="certificate-filters">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* GRID */}

          <div className="certificate-grid">

            {filtered.map(
              (cert, index) => (

                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  index={index}
                  onOpen={() =>
                    setSelected(cert)
                  }
                />

              )
            )}

          </div>


          {/* EMPTY */}

          {filtered.length === 0 && (

            <div className="certificate-empty">

              <Search size={28} />

              <h3>
                No certifications found.
              </h3>

              <p>
                Try another search or category.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ===================================================
          LEARNING PHILOSOPHY
      =================================================== */}

      <section className="certification-philosophy">

        <div className="certifications-container">

          <div className="learning-card">

            <div className="learning-icon">
              <Sparkles size={23} />
            </div>

            <div>

              <p className="section-eyebrow">
                LEARNING PHILOSOPHY
              </p>

              <h2>
                Certificates document
                <span> the journey.</span>
              </h2>

              <p>
                The goal is not simply collecting
                certificates. The goal is converting
                learning into practical projects,
                stronger engineering decisions and
                real-world problem solving.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          CERTIFICATE MODAL
      =================================================== */}

      {selected && (

        <div
          className="certificate-modal-backdrop"
          onClick={() =>
            setSelected(null)
          }
        >

          <motion.div
            className="certificate-modal"

            initial={{
              opacity: 0,
              scale: 0.95,
              y: 15,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="modal-close"
              onClick={() =>
                setSelected(null)
              }
            >
              <X size={20} />
            </button>


            {/* ICON */}

            <div className="modal-icon">
              <Award size={28} />
            </div>


            <p className="section-eyebrow">
              CERTIFICATE DETAILS
            </p>


            {/* TITLE */}

            <h2>
              {selected.title}
            </h2>


            {/* ISSUER */}

            <p className="modal-issuer">
              {selected.issuer}
            </p>


            {/* META */}

            <div className="modal-meta">

              <span>
                <BadgeCheck size={15} />
                {selected.level}
              </span>

              <span>
                <Trophy size={15} />
                {selected.year}
              </span>

              <span>
                <ShieldCheck size={15} />
                {selected.category}
              </span>

            </div>


            {/* DESCRIPTION */}

            <p className="modal-description">
              {selected.description}
            </p>


            {/* SKILLS */}

            <div className="modal-skills">

              {selected.skills.map(
                (skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                )
              )}

            </div>


            {/* =================================================
                ACTUAL PDF
            ================================================= */}

            {selected.certificate ? (

              <a
                href={selected.certificate}
                target="_blank"
                rel="noreferrer"
                className="verify-button"
              >

                <Award size={17} />

                View Certificate

                <ExternalLink size={16} />

              </a>

            ) : (

              <div className="certificate-unavailable">
                Certificate file not available yet.
              </div>

            )}


            {/* =================================================
                VERIFICATION
            ================================================= */}

            {selected.verify && (

              <a
                href={selected.verify}
                target="_blank"
                rel="noreferrer"
                className="verify-button secondary"
              >

                <ShieldCheck size={17} />

                Verify Credential

                <ExternalLink size={16} />

              </a>

            )}

          </motion.div>

        </div>

      )}

    </main>
  );
}


/* =========================================================
   CERTIFICATE CARD
   ========================================================= */

function CertificateCard({
  cert,
  index,
  onOpen,
}) {

  return (

    <motion.article
      className="certificate-card"

      initial={{
        opacity: 0,
        y: 25,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.1,
      }}

      transition={{
        duration: 0.45,
        delay: index * 0.035,
      }}

      onClick={onOpen}
    >

      {/* TOP */}

      <div className="certificate-card-top">

        <span className="certificate-number">
          {String(cert.id).padStart(2, "0")}
        </span>

        <span className="certificate-level">
          {cert.level}
        </span>

      </div>


      {/* ICON */}

      <div className="certificate-icon">
        <Award size={22} />
      </div>


      {/* CATEGORY */}

      <p className="certificate-category">
        {cert.category}
      </p>


      {/* TITLE */}

      <h3>
        {cert.title}
      </h3>


      {/* ISSUER */}

      <p className="certificate-issuer">
        {cert.issuer}
      </p>


      {/* SKILLS */}

      <div className="certificate-skills">

        {cert.skills
          .slice(0, 3)
          .map((skill) => (

            <span key={skill}>
              {skill}
            </span>

          ))}

      </div>


      {/* FOOTER */}

      <div className="certificate-footer">

        <span>
          {cert.year}
        </span>

        <button
          onClick={(event) => {
            event.stopPropagation();
            onOpen();
          }}
        >

          View

          <ExternalLink size={14} />

        </button>

      </div>

    </motion.article>
  );
}
