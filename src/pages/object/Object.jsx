import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Prompts from "../Mailer/Prompts";
import { useStore } from "../../store/useStore";
import { objectionTemplate, SLs } from "../../templates/ObjectionTemplates";

export default function ObjectPage() {
  const [searchParams] = useSearchParams();
  const siteId = searchParams.get("site");
  const { mapData, fetchMapData } = useStore();

  useEffect(() => {
    if (mapData.length === 0) {
      fetchMapData();
    }
  }, [mapData, fetchMapData]);

  const application = siteId
    ? mapData.find((s) => s.id.toString() === siteId)
    : null;
  const SubjectLine = SLs[Math.floor(Math.random() * SLs.length)];

  return (
    <main className="mailer-page-container">
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }} sx={{ px: { xs: 2.5, md: 0 } }}>
            <div style={{ position: "sticky" }}>
              <h2
                style={{
                  fontFamily: "var(--font-main)",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  color: "var(--accent-teal)",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                {application ? "Object to this Proposal" : "Lodge an Objection"}
              </h2>

              {application ? (
                <div style={{ marginBottom: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--accent-teal)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Application Details
                    </span>
                    <h1
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        color: "var(--accent-teal)",
                        margin: 0,
                      }}
                    >
                      {application.name}
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      {application.developer && (
                        <div
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <strong>Developer:</strong> {application.developer}
                        </div>
                      )}
                      {application.localAuthority && (
                        <div
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <strong>Authority:</strong>{" "}
                          {application.localAuthority}
                        </div>
                      )}
                    </div>
                  </div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "1.05rem",
                      lineHeight: "1.6",
                      fontStyle: "italic",
                    }}
                  >
                    "{application.blurb}"
                  </p>
                </div>
              ) : (
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                  }}
                >
                  Submit a formal objection to the planning application for the
                  new data centre development in your area.
                </p>
              )}

              <div
                style={{
                  backgroundColor: "rgba(15, 113, 115, 0.05)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  borderLeft: "4px solid var(--accent-teal)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: "0.8rem",
                    color: "var(--accent-teal)",
                  }}
                >
                  How it works
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  Answer a few quick questions on this page about how the
                  proposed development will affect you.
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginTop: "0.8rem",
                  }}
                >
                  We'll use your answers to build a professional, structured
                  planning objection. After filling everything out, you'll be
                  able to review the final draft and send it off.
                </p>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Prompts
              issue="object"
              blankTemplate={objectionTemplate}
              initialSubject={SubjectLine}
            />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
