import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Send,
  ShieldCheck,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  BriefcaseBusiness,
  MessageSquare,
  Globe,
} from "lucide-react";


/* ============================================================
   PERSONAL CONTACT INFORMATION
============================================================ */

const CONTACT_INFO = {
  name: "Samir Levate",

  email: "sameerlewate8788@gmail.com",

  phone: "+91 8788696321",

  phoneLink: "tel:+918788696321",

  github:
    "https://github.com/samirlevate8788-creator",

  linkedin:
    "https://www.linkedin.com/in/samir-levate",
};


/* ============================================================
   CONTACT REASONS
============================================================ */

const contactReasons = [
  {
    icon: BriefcaseBusiness,

    title: "Internship Opportunities",

    description:
      "Open to software engineering, full-stack development, AI and cybersecurity internship opportunities.",
  },

  {
    icon: MessageSquare,

    title: "Technical Collaboration",

    description:
      "Open to collaborating on meaningful software, open-source and technology projects.",
  },

  {
    icon: Globe,

    title: "Project Discussion",

    description:
      "Have a project idea or technical problem worth discussing? Let's connect and explore it.",
  },
];


/* ============================================================
   COMPONENT
============================================================ */

export default function Contact() {

  /* ==========================================================
     FORM STATE
  ========================================================== */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  /* ==========================================================
     STATUS STATE
  ========================================================== */

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  /* ==========================================================
     LOADING STATE
  ========================================================== */

  const [loading, setLoading] = useState(false);


  /* ==========================================================
     INPUT HANDLER
  ========================================================== */

  function handleChange(event) {

    const {
      name,
      value,
    } = event.target;


    setFormData((previous) => ({
      ...previous,

      [name]: value,
    }));


    if (status.message) {

      setStatus({
        type: "",
        message: "",
      });

    }

  }


  /* ==========================================================
     FORM VALIDATION
  ========================================================== */

  function validateForm() {

    const name =
      formData.name.trim();

    const email =
      formData.email.trim();

    const subject =
      formData.subject.trim();

    const message =
      formData.message.trim();


    if (!name) {

      return "Please enter your name.";

    }


    if (!email) {

      return "Please enter your email address.";

    }


    if (!email.includes("@")) {

      return "Please enter a valid email address.";

    }


    if (!subject) {

      return "Please enter a subject.";

    }


    if (!message) {

      return "Please enter your message.";

    }


    if (message.length < 10) {

      return "Please write a little more detail in your message.";

    }


    return "";

  }


  /* ==========================================================
     SUBMIT FORM
  ========================================================== */

  async function handleSubmit(event) {

    event.preventDefault();


    /* --------------------------------------------------------
       VALIDATION
    -------------------------------------------------------- */

    const validationError =
      validateForm();


    if (validationError) {

      setStatus({
        type: "error",
        message: validationError,
      });

      return;

    }


    /* --------------------------------------------------------
       START LOADING
    -------------------------------------------------------- */

    setLoading(true);


    setStatus({
      type: "",
      message: "",
    });


    try {

      /* ------------------------------------------------------
         BACKEND REQUEST
      ------------------------------------------------------ */

      const response =
        await fetch(
          "http://localhost:5000/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                formData
              ),
          }
        );


      /* ------------------------------------------------------
         RESPONSE
      ------------------------------------------------------ */

      const data =
        await response
          .json()
          .catch(() => ({}));


      if (!response.ok) {

        throw new Error(
          data?.message ||
            "Unable to send your message."
        );

      }


      /* ------------------------------------------------------
         SUCCESS
      ------------------------------------------------------ */

      setStatus({
        type: "success",

        message:
          "Message sent successfully. Thanks for reaching out!",
      });


      /* ------------------------------------------------------
         RESET FORM
      ------------------------------------------------------ */

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

      console.error(
        "Contact form error:",
        error
      );


      setStatus({
        type: "error",

        message:
          "Unable to send the message right now. Please try again or contact me directly.",
      });

    } finally {

      setLoading(false);

    }

  }


  /* ==========================================================
     RENDER
  ========================================================== */

  return (

    <main
      id="contact"
      className="contact-page"
    >


      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="contact-hero">

        <div className="contact-container">


          {/* HERO CONTENT */}

          <motion.div
            className="contact-hero-content"

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

            <p className="contact-eyebrow">
              12 / CONTACT
            </p>


            <h1>

              Let's build

              <br />

              <span>
                something useful.
              </span>

            </h1>


            <p className="contact-hero-description">

              Whether you're looking for an engineering
              intern, a technical collaborator, or someone
              to discuss a technology project with, I'd be
              happy to connect.

            </p>

          </motion.div>


          {/* OPEN STATUS */}

          <motion.div
            className="contact-live-status"

            initial={{
              opacity: 0,
              x: 25,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >

            <div className="contact-status-dot" />

            <div>

              <strong>
                OPEN TO OPPORTUNITIES
              </strong>

              <span>
                Internship • Collaboration • Projects
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ======================================================
          MAIN CONTACT AREA
      ====================================================== */}

      <section className="contact-main">

        <div className="contact-container">

          <div className="contact-layout">


            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

            <motion.div
              className="contact-info"

              initial={{
                opacity: 0,
                x: -30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
              }}
            >

              <p className="contact-label">
                GET IN TOUCH
              </p>


              <h2>

                Start a

                <br />

                conversation.

              </h2>


              <p className="contact-info-description">

                I'm interested in opportunities where I can
                learn, build real software and contribute to
                technically meaningful work.

              </p>


              {/* =================================================
                  CONTACT METHODS
              ================================================= */}

              <div className="contact-methods">


                {/* =============================================
                    EMAIL
                ============================================= */}

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="contact-method"
                >

                  <div className="contact-method-icon">

                    <Mail size={19} />

                  </div>


                  <div className="contact-method-content">

                    <span>
                      EMAIL
                    </span>

                    <strong>
                      {CONTACT_INFO.email}
                    </strong>

                  </div>


                  <ArrowUpRight
                    size={17}
                  />

                </a>


                {/* =============================================
                    PHONE
                ============================================= */}

                <a
                  href={CONTACT_INFO.phoneLink}
                  className="contact-method"
                >

                  <div className="contact-method-icon">

                    <Phone size={19} />

                  </div>


                  <div className="contact-method-content">

                    <span>
                      PHONE
                    </span>

                    <strong>
                      {CONTACT_INFO.phone}
                    </strong>

                  </div>


                  <ArrowUpRight
                    size={17}
                  />

                </a>


                {/* =============================================
                    GITHUB
                ============================================= */}

                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method"
                >

                  <div className="contact-method-icon">

                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 900,
                      }}
                    >
                      GH
                    </span>

                  </div>


                  <div className="contact-method-content">

                    <span>
                      GITHUB
                    </span>

                    <strong>
                      Projects & Open Source
                    </strong>

                  </div>


                  <ArrowUpRight
                    size={17}
                  />

                </a>


                {/* =============================================
                    LINKEDIN
                ============================================= */}

                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method"
                >

                  <div className="contact-method-icon">

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 900,
                      }}
                    >
                      in
                    </span>

                  </div>


                  <div className="contact-method-content">

                    <span>
                      LINKEDIN
                    </span>

                    <strong>
                      Professional Profile
                    </strong>

                  </div>


                  <ArrowUpRight
                    size={17}
                  />

                </a>

              </div>


              {/* =================================================
                  CALL BUTTON
              ================================================= */}

              <a
                href={CONTACT_INFO.phoneLink}
                className="contact-call-button"
              >

                <Phone size={18} />

                <span>
                  Call +91 8788696321
                </span>

                <ArrowUpRight
                  size={16}
                />

              </a>


              {/* =================================================
                  SECURITY NOTE
              ================================================= */}

              <div className="contact-security-note">

                <ShieldCheck size={20} />

                <div>

                  <strong>
                    Responsible communication
                  </strong>

                  <p>
                    Messages are intended for professional,
                    educational and project-related
                    communication.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT — CONTACT FORM
            ================================================= */}

            <motion.div
              className="contact-form-wrapper"

              initial={{
                opacity: 0,
                x: 30,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
              }}
            >


              {/* FORM HEADER */}

              <div className="contact-form-header">

                <div>

                  <p className="contact-label">
                    SEND MESSAGE
                  </p>

                  <h3>
                    Tell me about it.
                  </h3>

                </div>


                <div className="contact-form-icon">

                  <Send size={19} />

                </div>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >


                {/* =============================================
                    NAME + EMAIL
                ============================================= */}

                <div className="contact-form-row">


                  <div className="contact-field">

                    <label htmlFor="contact-name">
                      YOUR NAME
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="contact-email">
                      EMAIL ADDRESS
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />

                  </div>

                </div>


                {/* =============================================
                    SUBJECT
                ============================================= */}

                <div className="contact-field">

                  <label htmlFor="contact-subject">
                    SUBJECT
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                </div>


                {/* =============================================
                    MESSAGE
                ============================================= */}

                <div className="contact-field">

                  <label htmlFor="contact-message">
                    MESSAGE
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="7"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                </div>


                {/* =============================================
                    STATUS
                ============================================= */}

                {status.message && (

                  <div
                    className={
                      `contact-form-status ${
                        status.type === "success"
                          ? "success"
                          : "error"
                      }`
                    }
                  >

                    {status.type ===
                    "success" ? (

                      <CheckCircle2
                        size={18}
                      />

                    ) : (

                      <AlertCircle
                        size={18}
                      />

                    )}


                    <span>
                      {status.message}
                    </span>

                  </div>

                )}


                {/* =============================================
                    SUBMIT BUTTON
                ============================================= */}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={loading}
                >

                  {loading ? (

                    <>

                      <span className="contact-spinner" />

                      Sending...

                    </>

                  ) : (

                    <>

                      Send Message

                      <Send
                        size={17}
                      />

                    </>

                  )}

                </button>


                <p className="contact-form-footnote">

                  Your message will be submitted through the
                  portfolio contact API.

                </p>

              </form>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ======================================================
          REASONS TO CONNECT
      ====================================================== */}

      <section className="contact-reasons">

        <div className="contact-container">


          {/* HEADER */}

          <div className="contact-reasons-header">

            <p className="contact-label">
              WHAT WE CAN DISCUSS
            </p>

            <h2>

              Different goals.

              <br />

              One conversation.

            </h2>

          </div>


          {/* CARDS */}

          <div className="contact-reasons-grid">

            {contactReasons.map(
              (
                reason,
                index
              ) => {

                const Icon =
                  reason.icon;


                return (

                  <motion.article
                    key={reason.title}
                    className="contact-reason-card"

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
                      duration: 0.5,
                      delay:
                        index * 0.1,
                    }}
                  >

                    <div className="contact-reason-icon">

                      <Icon size={21} />

                    </div>


                    <h3>
                      {reason.title}
                    </h3>


                    <p>
                      {reason.description}
                    </p>

                  </motion.article>

                );

              }
            )}

          </div>

        </div>

      </section>


      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="contact-final">

        <div className="contact-container">

          <motion.div
            className="contact-final-box"

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

            <div className="contact-final-icon">

              <Globe size={25} />

            </div>


            <p className="contact-label">
              READY WHEN YOU ARE
            </p>


            <h2>

              Build.

              <span>
                Learn.
              </span>

              Grow.

            </h2>


            <p>
              Every project starts with a conversation.
            </p>


            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="contact-final-button"
            >

              Start a Conversation

              <ArrowUpRight
                size={17}
              />

            </a>

          </motion.div>

        </div>

      </section>

    </main>

  );
}
