import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const education = [
  {
    year: "2025 — 2029",
    status: "CURRENT",
    level: "B.TECH",
    title: "Computer Science & Engineering",
    institute: "Brahmdevdada Mane Institute of Technology (BMIT)",
    location: "Solapur, Maharashtra, India",
    description:
      "Building a strong foundation in computer science, software engineering, programming, artificial intelligence, cybersecurity, operating systems and modern technology.",
    subjects: [
      "Computer Science",
      "Software Engineering",
      "Programming",
      "AI",
      "Cybersecurity",
      "Operating Systems",
    ],
    icon: GraduationCap,
  },
  {
    year: "2023 — 2025",
    status: "COMPLETED",
    level: "12TH",
    title: "Higher Secondary Education",
    institute: "G. R. Kabra Junior Science College",
    location: "Chandur Bazar, Amravati, Maharashtra",
    description:
      "Science-focused higher secondary education with a foundation in mathematics, science and computer-oriented learning.",
    subjects: [
      "Science",
      "Mathematics",
      "Computer Fundamentals",
    ],
    result: "56.33%",
    icon: BookOpen,
  },
  {
    year: "2022 — 2023",
    status: "COMPLETED",
    level: "10TH",
    title: "Secondary School Certificate",
    institute: "Pragati High School",
    location: "Adgaon, Amravati, Maharashtra",
    description:
      "Completed secondary education with a strong academic foundation and developed an early interest in technology and computer science.",
    subjects: [
      "Mathematics",
      "Science",
      "Computer Basics",
    ],
    result: "86.60%",
    icon: School,
  },
];

export default function Education() {
  return (
    <main className="education-page" id="education">

      {/* HERO */}

      <section className="education-hero">
        <div className="education-container">

          <motion.p
            className="education-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            09 / EDUCATION
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Academic
            <br />
            <span>foundation.</span>
          </motion.h1>

          <motion.p
            className="education-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My academic journey combines formal Computer Science education
            with continuous practical learning through software projects,
            cybersecurity labs, artificial intelligence and open-source
            development.
          </motion.p>

        </div>
      </section>

      {/* TIMELINE */}

      <section className="education-section">
        <div className="education-container">

          <div className="education-heading">
            <div>
              <p className="education-small-label">
                ACADEMIC JOURNEY
              </p>

              <h2>
                Education & learning
              </h2>
            </div>

            <div className="education-summary">
              <GraduationCap size={18} />
              <span>Computer Science & Engineering</span>
            </div>
          </div>

          <div className="education-timeline">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="education-card"
                  key={item.level}
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
                    delay: index * 0.12,
                  }}
                >

                  {/* TIMELINE MARKER */}

                  <div className="education-marker">
                    <Icon size={21} />
                  </div>

                  <div className="education-card-content">

                    {/* TOP */}

                    <div className="education-card-top">

                      <div>
                        <span className="education-level">
                          {item.level}
                        </span>

                        <span className="education-status">
                          {item.status}
                        </span>
                      </div>

                      <span className="education-year">
                        <CalendarDays size={14} />
                        {item.year}
                      </span>

                    </div>

                    {/* TITLE */}

                    <h3>
                      {item.title}
                    </h3>

                    <h4>
                      {item.institute}
                    </h4>

                    <p className="education-location">
                      <MapPin size={14} />
                      {item.location}
                    </p>

                    {/* DESCRIPTION */}

                    <p className="education-description">
                      {item.description}
                    </p>

                    {/* SUBJECTS */}

                    <div className="education-tags">

                      {item.subjects.map((subject) => (
                        <span key={subject}>
                          {subject}
                        </span>
                      ))}

                    </div>

                    {/* RESULT */}

                    {item.result && (
                      <div className="education-result">
                        <span>
                          Academic Result
                        </span>

                        <strong>
                          {item.result}
                        </strong>
                      </div>
                    )}

                  </div>
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* LEARNING APPROACH */}

      <section className="education-learning">
        <div className="education-container">

          <div className="education-learning-box">

            <div className="education-learning-icon">
              <BookOpen size={23} />
            </div>

            <p className="education-small-label">
              BEYOND THE CLASSROOM
            </p>

            <h2>
              Learning by
              <br />
              <span>building.</span>
            </h2>

            <p>
              Academic learning is only one part of my development.
              I continuously experiment with real projects, technical
              documentation, cybersecurity labs, open-source development,
              programming and modern AI tools.
            </p>

            <div className="education-learning-grid">

              <div>
                <strong>Projects</strong>
                <span>Real-world development</span>
              </div>

              <div>
                <strong>Open Source</strong>
                <span>AstraOS & collaboration</span>
              </div>

              <div>
                <strong>Cybersecurity</strong>
                <span>Safe technical labs</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Modern AI technologies</span>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
