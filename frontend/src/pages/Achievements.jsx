import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Code2,
  ShieldCheck,
  GitBranch,
  GraduationCap,
  Palette,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    icon: Code2,
    category: "SOFTWARE ENGINEERING",
    title: "Real-World Projects Built",
    description:
      "Designed and developed multiple practical software projects across web development, cybersecurity, systems programming and interactive applications.",
    tags: [
      "Full Stack",
      "JavaScript",
      "Python",
      "React",
      "APIs",
    ],
  },
  {
    icon: ShieldCheck,
    category: "CYBERSECURITY",
    title: "Cybersecurity Projects",
    description:
      "Built security-focused learning projects including AegisOne, SecureCheck and a Linux/Kali system lab in safe and educational environments.",
    tags: [
      "Cybersecurity",
      "Ethical Hacking",
      "Linux",
      "Network Security",
    ],
  },
  {
    icon: GitBranch,
    category: "OPEN SOURCE",
    title: "AstraOS Open-Source Initiative",
    description:
      "Founder and Project Lead of AstraOS, an educational open-source operating-system initiative focused on systems programming and collaborative learning.",
    tags: [
      "Open Source",
      "C",
      "C++",
      "Assembly",
      "Linux",
    ],
  },
  {
    icon: Trophy,
    category: "HACKATHON",
    title: "SecureCheck — Hackathon 2026",
    description:
      "Developed SecureCheck, an advanced browser-based password security analyzer featuring strength scoring, entropy analysis, character-set analysis and educational crack-time estimation.",
    tags: [
      "Hackathon 2026",
      "JavaScript",
      "Security",
      "Web App",
    ],
  },
  {
    icon: GraduationCap,
    category: "ACADEMIC",
    title: "Computer Science & Engineering",
    description:
      "Currently pursuing B.Tech in Computer Science & Engineering with a focus on software development, cybersecurity, AI, systems and practical technology development.",
    tags: [
      "B.Tech CSE",
      "Software Engineering",
      "AI",
      "Cybersecurity",
    ],
  },
  {
    icon: Award,
    category: "CERTIFICATIONS",
    title: "Technical Certification Journey",
    description:
      "Completed technical learning and certification programs covering artificial intelligence, web development, cybersecurity, Microsoft tools, writing and other technology areas.",
    tags: [
      "AI",
      "Web Development",
      "Cybersecurity",
      "Technology",
    ],
  },
  {
    icon: Palette,
    category: "CREATIVE",
    title: "Elementary & Intermediate Drawing",
    description:
      "Completed Elementary and Intermediate Drawing examinations with C Grade, adding a creative dimension alongside technical development.",
    tags: [
      "Elementary",
      "Intermediate",
      "Drawing",
      "C Grade",
    ],
  },
  {
    icon: Sparkles,
    category: "CONTINUOUS LEARNING",
    title: "Learning Beyond the Classroom",
    description:
      "Continuously exploring modern technologies through hands-on projects, technical documentation, AI tools, cybersecurity labs and open-source development.",
    tags: [
      "Self Learning",
      "AI",
      "Linux",
      "Open Source",
    ],
  },
];

const highlights = [
  {
    value: "B.Tech",
    label: "Computer Science",
  },
  {
    value: "AstraOS",
    label: "Open Source",
  },
  {
    value: "AegisOne",
    label: "Cybersecurity",
  },
  {
    value: "2026",
    label: "Hackathon Project",
  },
];

export default function Achievements() {
  return (
    <main className="achievements-page" id="achievements">

      {/* HERO */}

      <section className="achievements-hero">
        <div className="achievements-container">

          <motion.p
            className="achievements-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            10 / ACHIEVEMENTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Milestones
            <br />
            <span>worth remembering.</span>
          </motion.h1>

          <motion.p
            className="achievements-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            A collection of technical milestones, project achievements,
            academic progress and learning accomplishments from my journey
            in software engineering, cybersecurity, AI and technology.
          </motion.p>

          {/* HIGHLIGHTS */}

          <div className="achievement-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="achievement-highlight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ACHIEVEMENT GRID */}

      <section className="achievements-section">
        <div className="achievements-container">

          <div className="achievements-heading">
            <div>
              <p className="achievement-small-label">
                SELECTED MILESTONES
              </p>

              <h2>
                Building progress,
                <br />
                one milestone at a time.
              </h2>
            </div>

            <div className="achievement-total">
              <Trophy size={18} />
              <span>{achievements.length} Highlights</span>
            </div>
          </div>

          <div className="achievements-grid">

            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.article
                  className="achievement-card"
                  key={achievement.title}
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
                    delay: index * 0.08,
                  }}
                >

                  <div className="achievement-card-top">

                    <div className="achievement-icon">
                      <Icon size={22} />
                    </div>

                    <span className="achievement-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <p className="achievement-category">
                    {achievement.category}
                  </p>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p className="achievement-description">
                    {achievement.description}
                  </p>

                  <div className="achievement-tags">
                    {achievement.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="achievement-philosophy">
        <div className="achievements-container">

          <div className="achievement-philosophy-box">

            <div className="achievement-philosophy-icon">
              <Sparkles size={24} />
            </div>

            <p className="achievement-small-label">
              THE JOURNEY
            </p>

            <h2>
              Progress is
              <br />
              <span>the achievement.</span>
            </h2>

            <p>
              Every project, experiment, certification and technical
              challenge contributes to becoming a better engineer.
              The goal is not only to collect achievements, but to turn
              each experience into practical knowledge.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}
