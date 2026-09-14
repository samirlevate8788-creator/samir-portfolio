import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  PenTool,
  FileText,
} from "lucide-react";

const experiences = [
  {
    id: "01",
    type: "PROJECT EXPERIENCE",
    title: "AegisOne",
    organization: "Independent Engineering Project",
    period: "Jul 2026 — Aug 2026",
    icon: Code2,
    description:
      "Founder and developer of an AI-powered cybersecurity and digital-risk platform. Worked across frontend, backend APIs, security-oriented application logic, testing and production deployment.",
    skills: [
      "Python",
      "FastAPI",
      "REST API",
      "Cybersecurity",
      "Testing",
      "Cloud Deployment",
    ],
  },

  {
    id: "02",
    type: "OPEN SOURCE",
    title: "AstraOS",
    organization: "Open-Source Operating System Initiative",
    period: "2026 — Present",
    icon: BriefcaseBusiness,
    description:
      "Founder and project lead of an educational operating-system initiative exploring systems programming, Linux concepts, kernel development and open-source collaboration.",
    skills: [
      "C",
      "C++",
      "Assembly",
      "Linux",
      "Kernel Concepts",
      "Open Source",
    ],
  },

  {
    id: "03",
    type: "INTERNSHIP SELECTION",
    title: "Content Writing Internship",
    organization: "Professional Internship Opportunity",
    period: "2026",
    icon: FileText,
    description:
      "Selected for a content-writing opportunity involving research, structured writing, communication and content development.",
    skills: [
      "Content Writing",
      "Research",
      "Communication",
      "Technical Writing",
    ],
  },

  {
    id: "04",
    type: "INTERNSHIP SELECTION",
    title: "Copywriting Internship",
    organization: "Professional Internship Opportunity",
    period: "2026",
    icon: PenTool,
    description:
      "Selected for a copywriting opportunity focused on clear communication, content creation and audience-oriented writing.",
    skills: [
      "Copywriting",
      "Content",
      "Communication",
      "Creative Thinking",
    ],
  },
];

export default function Experience() {
  return (
    <main className="experience-page" id="experience">

      {/* HERO */}

      <section className="experience-hero">

        <div className="experience-container">

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
              06 / EXPERIENCE
            </p>

            <h1>
              Experience beyond
              <span> the classroom.</span>
            </h1>

            <p className="experience-intro">
              A combination of practical engineering,
              open-source development and professional
              opportunities built alongside my academic
              journey.
            </p>

          </motion.div>

        </div>

      </section>


      {/* TIMELINE */}

      <section className="experience-timeline">

        <div className="experience-container">

          <div className="timeline">

            {experiences.map((experience, index) => {

              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.id}
                  className="timeline-item"

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
                    amount: 0.15,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >

                  {/* TIMELINE ICON */}

                  <div className="timeline-marker">
                    <Icon size={18} />
                  </div>


                  {/* CARD */}

                  <div className="timeline-card">

                    <div className="timeline-top">

                      <span className="timeline-number">
                        {experience.id}
                      </span>

                      <span className="timeline-type">
                        {experience.type}
                      </span>

                      <span className="timeline-period">
                        {experience.period}
                      </span>

                    </div>


                    <h2>
                      {experience.title}
                    </h2>


                    <p className="timeline-org">
                      {experience.organization}
                    </p>


                    <p className="timeline-description">
                      {experience.description}
                    </p>


                    <div className="timeline-skills">

                      {experience.skills.map((skill) => (

                        <span key={skill}>
                          {skill}
                        </span>

                      ))}

                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>


      {/* CAREER DIRECTION */}

      <section className="career-direction">

        <div className="experience-container">

          <div className="career-card">

            <div>

              <p className="section-eyebrow">
                CAREER DIRECTION
              </p>

              <h2>
                Building experience
                <span> through projects.</span>
              </h2>

            </div>

            <p>
              My current direction is software engineering
              with a strong interest in cybersecurity,
              artificial intelligence, Linux systems and
              open-source technology.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}