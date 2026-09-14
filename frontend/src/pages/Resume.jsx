import { motion } from "framer-motion";

import {
  FileText,
  Download,
  Eye,
  BriefcaseBusiness,
  Code2,
  ShieldCheck,
  ExternalLink,
  Mail,
} from "lucide-react";


/* ============================================================
   RESUME DATA
============================================================ */

const resumes = [
  {
    id: 1,

    title: "ATS Resume",

    type: "RECRUITER READY",

    description:
      "One-page ATS-friendly resume focused on software development, artificial intelligence, cybersecurity, technical skills, projects and education.",

    file:
      "/resumes/Samir_Levate_ATS_Resume_Final.pdf",

    icon: FileText,
  },

  {
    id: 2,

    title: "Professional Resume",

    type: "GENERAL PURPOSE",

    description:
      "Professional resume highlighting technical skills, practical projects, certifications, education, strengths and career direction.",

    file:
      "/resumes/Samir_Levate_Resume_1_Page_Full.pdf",

    icon: BriefcaseBusiness,
  },

  {
    id: 3,

    title: "Projects Resume",

    type: "PROJECT FOCUSED",

    description:
      "Project-oriented resume designed to highlight practical development work, technical implementation and engineering experience.",

    file:
      "/resumes/Samir_Levate_Resume_1_Page_Projects_2_Columns.pdf",

    icon: Code2,
  },
];


/* ============================================================
   QUICK PROFILE FACTS
============================================================ */

const quickFacts = [
  {
    value: "B.Tech",
    label: "Computer Science & Engineering",
  },

  {
    value: "Software",
    label: "Engineering",
  },

  {
    value: "Security",
    label: "Cybersecurity",
  },

  {
    value: "AI",
    label: "Artificial Intelligence",
  },
];


/* ============================================================
   CAREER FOCUS
============================================================ */

const careerFocus = [
  {
    icon: Code2,

    title: "Software Engineering",

    description:
      "Building practical software projects and strengthening programming, development and engineering fundamentals.",
  },

  {
    icon: ShieldCheck,

    title: "Cybersecurity",

    description:
      "Learning cybersecurity through defensive security concepts, secure development and authorized lab environments.",
  },

  {
    icon: BriefcaseBusiness,

    title: "AI & Technology",

    description:
      "Exploring artificial intelligence, modern technology and practical tools for building useful solutions.",
  },
];


/* ============================================================
   RESUME COMPONENT
============================================================ */

export default function Resume() {
  return (
    <main
      className="resume-page"
      id="resume"
    >

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="resume-hero">

        <div className="resume-container">

          <motion.p
            className="resume-eyebrow"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            11 / RESUME CENTER
          </motion.p>


          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
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
            Professional
            <br />

            <span>
              profile.
            </span>
          </motion.h1>


          <motion.p
            className="resume-intro"
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.1,
            }}
          >
            A central place for my professional resumes and
            career profile. Choose the resume version that
            best matches the opportunity you are exploring.
          </motion.p>


          {/* =================================================
              QUICK FACTS
          ================================================= */}

          <div className="resume-facts">

            {quickFacts.map((fact, index) => (

              <motion.div
                key={fact.label}
                className="resume-fact"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >

                <strong>
                  {fact.value}
                </strong>

                <span>
                  {fact.label}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          RESUME DOCUMENT LIBRARY
      ====================================================== */}

      <section className="resume-section">

        <div className="resume-container">


          {/* HEADER */}

          <div className="resume-heading">

            <div>

              <p className="resume-small-label">
                DOCUMENT LIBRARY
              </p>

              <h2>
                Choose your resume.
              </h2>

            </div>


            <span className="resume-document-count">
              {resumes.length} versions
            </span>

          </div>


          {/* =================================================
              RESUME CARDS
          ================================================= */}

          <div className="resume-grid">

            {resumes.map((resume, index) => {

              const Icon = resume.icon;

              return (

                <motion.article
                  className="resume-card"
                  key={resume.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >

                  {/* CARD TOP */}

                  <div className="resume-card-top">

                    <div className="resume-icon">

                      <Icon size={24} />

                    </div>


                    <span className="resume-card-number">

                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                    </span>

                  </div>


                  {/* TYPE */}

                  <p className="resume-type">
                    {resume.type}
                  </p>


                  {/* TITLE */}

                  <h3>
                    {resume.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p className="resume-description">
                    {resume.description}
                  </p>


                  {/* BUTTONS */}

                  <div className="resume-card-actions">

                    <a
                      href={resume.file}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-view-btn"
                    >

                      <Eye size={16} />

                      <span>
                        View Resume
                      </span>

                    </a>


                    <a
                      href={resume.file}
                      download
                      className="resume-download-btn"
                    >

                      <Download size={16} />

                      <span>
                        Download
                      </span>

                    </a>

                  </div>

                </motion.article>

              );

            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          PROFESSIONAL PROFILE
      ====================================================== */}

      <section className="resume-profile">

        <div className="resume-container">

          <motion.div
            className="resume-profile-box"
            initial={{
              opacity: 0,
              y: 30,
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

            {/* PROFILE HEADER */}

            <div className="resume-profile-header">

              <div className="resume-profile-icon">

                <ShieldCheck size={25} />

              </div>


              <div>

                <p className="resume-small-label">
                  PROFESSIONAL PROFILE
                </p>

                <h2>
                  Samir Levate
                </h2>

              </div>

            </div>


            {/* PROFILE DESCRIPTION */}

            <p className="resume-profile-text">

              B.Tech Computer Science & Engineering student
              with a strong foundation in programming,
              software development, web technologies,
              artificial intelligence and cybersecurity.

              Focused on building practical technology
              projects, improving engineering skills and
              continuously learning modern technologies.

            </p>


            {/* =================================================
                CAREER FOCUS CARDS
            ================================================= */}

            <div className="resume-focus">

              {careerFocus.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="resume-focus-item"
                  >

                    <Icon size={18} />

                    <div>

                      <strong>
                        {item.title}
                      </strong>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </section>


      {/* ======================================================
          RECRUITER CTA
      ====================================================== */}

      <section className="resume-contact">

        <div className="resume-container">

          <motion.div
            className="resume-contact-box"
            initial={{
              opacity: 0,
              y: 30,
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

            <p className="resume-small-label">
              CONNECT
            </p>


            <h2>

              Interested in

              <br />

              <span>
                working together?
              </span>

            </h2>


            <p>

              For internship opportunities, software
              engineering roles, technical collaboration or
              project discussions, connect with me through
              the links below.

            </p>


            {/* =================================================
                SOCIAL LINKS

                IMPORTANT:
                GitHub / LinkedIn Lucide icons intentionally
                NOT used because your installed lucide-react
                package is throwing export errors.
            ================================================= */}

            <div className="resume-socials">


              {/* EMAIL */}

              <a
                href="mailto:sameerlewate8788@gmail.com"
                className="resume-social"
              >

                <Mail size={17} />

                <span>
                  Email
                </span>

                <ExternalLink size={14} />

              </a>


              {/* GITHUB */}

              <a
                href="https://github.com/samirlevate8788-creator"
                target="_blank"
                rel="noreferrer"
                className="resume-social"
              >

                <span
                  style={{
                    fontWeight: "900",
                    fontSize: "12px",
                  }}
                >
                  GH
                </span>

                <span>
                  GitHub
                </span>

                <ExternalLink size={14} />

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/samir-levate-a2647a357"
                target="_blank"
                rel="noreferrer"
                className="resume-social"
              >

                <span
                  style={{
                    fontWeight: "900",
                    fontSize: "12px",
                  }}
                >
                  in
                </span>

                <span>
                  LinkedIn
                </span>

                <ExternalLink size={14} />

              </a>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}
