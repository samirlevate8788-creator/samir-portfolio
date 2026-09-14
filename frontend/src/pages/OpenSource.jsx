import React from "react";

function OpenSource() {
  return (
    <section
      id="opensource"
      style={{
        width: "100%",
        padding: "100px 0",
        boxSizing: "border-box",
      }}
    >
      {/* =====================================================
          FULL WIDTH WRAPPER
          ===================================================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "0 48px",
          boxSizing: "border-box",
        }}
      >

        {/* ===================================================
            HEADER
            =================================================== */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <div
            style={{
              marginBottom: "14px",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "3px",
              color: "#8fa3ff",
            }}
          >
            OPEN SOURCE
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(38px, 5vw, 64px)",
              lineHeight: "1.05",
              fontWeight: "800",
              letterSpacing: "-2px",
            }}
          >
            Building in Public.
            <span
              style={{
                opacity: 0.55,
                marginLeft: "12px",
              }}
            >
              Learning Together.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "800px",
              margin: "22px auto 0",
              color: "#9caecc",
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            I believe strong engineering grows through experimentation,
            documentation, collaboration and open-source contribution.
            I enjoy exploring systems, software engineering, Linux,
            cybersecurity and emerging technologies through practical work.
          </p>
        </div>


        {/* ===================================================
            CARDS WRAPPER

            IMPORTANT:
            FLEX COLUMN = ONE CARD BELOW ANOTHER
            =================================================== */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            boxSizing: "border-box",
          }}
        >


          {/* =================================================
              CARD 1 — ASTRAOS
              ================================================= */}
          <article
            style={{
              width: "100%",
              height: "560px",
              minHeight: "560px",
              boxSizing: "border-box",

              display: "flex",
              flexDirection: "column",

              padding: "38px",

              borderRadius: "28px",
              border: "1px solid rgba(135,150,255,0.18)",

              background:
                "linear-gradient(145deg, rgba(17,24,42,0.98), rgba(8,13,25,0.98))",

              boxShadow:
                "0 25px 80px rgba(0,0,0,0.30)",

              overflow: "hidden",
            }}
          >

            {/* TOP */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <span
                style={{
                  color: "#9eafff",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                }}
              >
                ACTIVE
              </span>

              <span
                style={{
                  color: "#7786a4",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                }}
              >
                OPEN SOURCE
              </span>
            </div>


            {/* ICON */}
            <div
              style={{
                width: "78px",
                height: "78px",
                minWidth: "78px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                marginBottom: "25px",

                borderRadius: "22px",
                border: "1px solid rgba(130,150,255,0.28)",

                background: "rgba(80,95,190,0.12)",

                color: "#94a7ff",

                fontFamily: "monospace",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {"</>"}
            </div>


            {/* TITLE */}
            <h3
              style={{
                margin: "0 0 18px",

                color: "#f3f5ff",

                fontSize: "32px",
                lineHeight: "1.2",

                fontWeight: "800",
              }}
            >
              AstraOS
            </h3>


            {/* DESCRIPTION */}
            <p
              style={{
                width: "100%",
                margin: 0,

                color: "#9eafca",

                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              An educational open-source operating system initiative
              focused on understanding operating-system concepts,
              Linux fundamentals, kernel development, memory management,
              file systems, shell concepts and low-level systems
              programming.
            </p>


            {/* TECH STACK */}
            <div
              style={{
                width: "100%",

                marginTop: "auto",
                paddingTop: "30px",

                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",

                gap: "9px",
              }}
            >
              {[
                "C",
                "C++",
                "Assembly",
                "NASM",
                "GCC",
                "Linux",
                "QEMU",
                "Make",
                "Git",
                "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    display: "inline-flex",

                    alignItems: "center",
                    justifyContent: "center",

                    padding: "8px 13px",

                    whiteSpace: "nowrap",

                    borderRadius: "10px",
                    border:
                      "1px solid rgba(130,150,255,0.16)",

                    background:
                      "rgba(255,255,255,0.035)",

                    color: "#b9c6df",

                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>


            {/* BUTTONS */}
            <div
              style={{
                width: "100%",

                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",

                gap: "12px",

                marginTop: "28px",
              }}
            >
              <a
                href="https://github.com/samirlevate8788-creator/AstraOS"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  padding: "12px 18px",

                  borderRadius: "12px",

                  border:
                    "1px solid rgba(140,155,255,0.30)",

                  background:
                    "rgba(100,115,255,0.14)",

                  color: "#c6d0ff",

                  textDecoration: "none",

                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                GitHub ↗
              </a>

              <a
                href="https://samirlevate8788-creator.github.io/AstraOS-/index.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",

                  padding: "12px 18px",

                  borderRadius: "12px",

                  border:
                    "1px solid rgba(255,255,255,0.10)",

                  background:
                    "rgba(255,255,255,0.035)",

                  color: "#aebbd2",

                  textDecoration: "none",

                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Documentation ↗
              </a>
            </div>

          </article>


          {/* =================================================
              CARD 2 — ENGINEERING MINDSET
              ================================================= */}
          <article
            style={{
              width: "100%",
              height: "560px",
              minHeight: "560px",
              boxSizing: "border-box",

              display: "flex",
              flexDirection: "column",

              padding: "38px",

              borderRadius: "28px",
              border: "1px solid rgba(135,150,255,0.18)",

              background:
                "linear-gradient(145deg, rgba(17,24,42,0.98), rgba(8,13,25,0.98))",

              boxShadow:
                "0 25px 80px rgba(0,0,0,0.30)",

              overflow: "hidden",
            }}
          >

            {/* TOP */}
            <div
              style={{
                width: "100%",

                display: "flex",

                justifyContent: "space-between",
                alignItems: "center",

                marginBottom: "25px",
              }}
            >
              <span
                style={{
                  color: "#9eafff",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                }}
              >
                BUILDING
              </span>

              <span
                style={{
                  color: "#7786a4",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                }}
              >
                ENGINEERING
              </span>
            </div>


            {/* ICON */}
            <div
              style={{
                width: "78px",
                height: "78px",
                minWidth: "78px",

                display: "flex",

                alignItems: "center",
                justifyContent: "center",

                marginBottom: "25px",

                borderRadius: "22px",

                border:
                  "1px solid rgba(130,150,255,0.28)",

                background:
                  "rgba(80,95,190,0.12)",

                color: "#94a7ff",

                fontFamily: "monospace",

                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {"{ }"}
            </div>


            {/* TITLE */}
            <h3
              style={{
                margin: "0 0 18px",

                color: "#f3f5ff",

                fontSize: "32px",
                lineHeight: "1.2",

                fontWeight: "800",
              }}
            >
              Engineering Mindset
            </h3>


            {/* DESCRIPTION */}
            <p
              style={{
                width: "100%",

                margin: 0,

                color: "#9eafca",

                fontSize: "16px",

                lineHeight: "1.8",
              }}
            >
              My approach combines software engineering,
              cybersecurity awareness, AI experimentation,
              Linux systems and practical project development.
              I focus on learning by building, documenting and
              continuously improving real projects.
            </p>


            {/* PRINCIPLES */}
            <div
              style={{
                width: "100%",

                marginTop: "auto",
                paddingTop: "30px",

                display: "grid",

                gridTemplateColumns:
                  "repeat(4, minmax(0, 1fr))",

                gap: "12px",
              }}
            >

              {[
                ["01", "Build real projects"],
                ["02", "Document what I learn"],
                ["03", "Improve through iteration"],
                ["04", "Collaborate openly"],
              ].map(([number, text]) => (
                <div
                  key={number}
                  style={{
                    width: "100%",

                    minHeight: "65px",

                    display: "flex",

                    alignItems: "center",

                    gap: "12px",

                    padding: "14px 16px",

                    boxSizing: "border-box",

                    borderRadius: "14px",

                    border:
                      "1px solid rgba(255,255,255,0.07)",

                    background:
                      "rgba(255,255,255,0.025)",
                  }}
                >
                  <strong
                    style={{
                      flexShrink: 0,

                      color: "#8fa2ff",

                      fontFamily: "monospace",

                      fontSize: "12px",
                    }}
                  >
                    {number}
                  </strong>

                  <span
                    style={{
                      color: "#aab8cf",

                      fontSize: "13px",

                      lineHeight: "1.4",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}

            </div>

          </article>

        </div>
      </div>


      {/* =====================================================
          RESPONSIVE OVERRIDE
          ===================================================== */}
      <style>
        {`
          @media (max-width: 900px) {
            #opensource > div {
              padding-left: 28px !important;
              padding-right: 28px !important;
            }

            #opensource article {
              height: 560px !important;
              min-height: 560px !important;
            }

            #opensource article:last-child > div:last-child {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 700px) {
            #opensource {
              padding: 80px 0 !important;
            }

            #opensource > div {
              padding-left: 18px !important;
              padding-right: 18px !important;
            }

            #opensource article {
              height: auto !important;
              min-height: 520px !important;
            }

            #opensource article:last-child > div:last-child {
              grid-template-columns: 1fr !important;
            }

            #opensource article > div:last-child {
              flex-direction: column !important;
              align-items: stretch !important;
            }
          }

          @media (max-width: 420px) {
            #opensource > div {
              padding-left: 14px !important;
              padding-right: 14px !important;
            }

            #opensource article {
              padding: 22px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default OpenSource;
