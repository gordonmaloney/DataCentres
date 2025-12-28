import React, { useState, useEffect } from "react";
import EditableDiv from "./EditableDiv";
import {
  Chip,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  CircularProgress,
} from "@mui/material";
import { SendModal } from "./SendModal";
import { BtnStyle, CheckBoxStyle, TextFieldStyle, PaperStyle, LabelStyle, ChipStyle } from "../../../MUIStyles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ScrollToTop from "../../components/ScrollToTop";

const Mailer = ({
  template,
  setTemplate,
  answers,
  noClient,
  setNoClient,
  emailClient,
  setStage,
  adminDivisions,
  contactDetails,
  issue,
  initialSubject
}) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [gdprPrompt, setGdprPrompt] = useState(false);

  const [subject, setSubject] = useState(initialSubject || "Requesting support");
  const [sent, setSent] = useState(false);

  const Mobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

  let title = "Stop Data Centres";

  let bcc = "edinburgh@livingrent.org";

  const [copyIn, setCopyIn] = useState(true);
  const [optIn, setOptIn] = useState(undefined);

  const [messaging, setMessaging] = useState([]);
  const [notMessaging, setNotMessaging] = useState([]);

  useEffect(() => {
  let cancelled = false;

  const run = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      // COUNCILLORS (issue === "object")
      if (issue === "object") {
        const res = await fetch(
          "https://raw.githubusercontent.com/gordonmaloney/rep-data/main/edinburgh-councillors.json"
        );
        if (!res.ok) throw new Error("Failed to fetch councillors");

        const data = await res.json();
        if (cancelled) return;

        const wardMatches = data.filter(
          (c) => c.ward == adminDivisions.ward
        );

        setMessaging(wardMatches);
        setLoading(false);

        if (wardMatches.length === 0) {
          setErrorMsg("Could not load councillors");
        }

        return; // don't fall through
      }

      // MSPs (issue === "email")
      if (issue === "email") {
        const constituency = adminDivisions.scotConstituency;

        if (!constituency) {
          if (!cancelled) {
            setErrorMsg("No Scottish Constituency found...");
            setLoading(false);
          }
          return;
        }

        const [regionsRes, mspsRes] = await Promise.all([
          fetch(
            "https://raw.githubusercontent.com/gordonmaloney/rep-data/main/REGIONS.json"
          ),
          fetch(
            "https://raw.githubusercontent.com/gordonmaloney/rep-data/main/MSPs.json"
          ),
        ]);

        if (!regionsRes.ok) throw new Error("Failed to fetch regions");
        if (!mspsRes.ok) throw new Error("Failed to fetch MSPs");

        const [regionsData, mspsData] = await Promise.all([
          regionsRes.json(),
          mspsRes.json(),
        ]);

        if (cancelled) return;

        // setRegions and setMSPs removed as they are undefined

        const regionObj = regionsData.find(
          (r) => r.constituency === constituency
        );

        if (!regionObj) {
          setErrorMsg("Your constituency isn’t in our region map.");
          setLoading(false);
          return;
        }

        const regionName = regionObj.region;
        const inTarget = mspsData.filter(
          (msp) =>
            msp.constituency === constituency || msp.constituency === regionName
        );

        setMessaging(inTarget);
        setLoading(false);
        return;
      }

      // any other issue
      if (!cancelled) setLoading(false);
    } catch (err) {
      console.error(err);
      if (!cancelled) {
        setErrorMsg("Could not load representatives");
        setLoading(false);
      }
    }
  };

  run();

  return () => {
    cancelled = true;
  };
}, [issue, adminDivisions.ward, adminDivisions.scotConstituency]);


  if (template.includes("<<|")) {
    return <>Loading...</>;
  }

  if (errorMsg) {
    return <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>Error: {errorMsg}</div>;
  }

  const handleUnBcc = () => {
    setCopyIn(false);
  };

  const handleSendClicked = () => {
    setGdprPrompt(true);
  };

  return (
    <div>
      <ScrollToTop />

      {/* Messaging */}
      <Box
        sx={{
          marginTop: 4,
          marginBottom: "14px",
          width: "100%",
          position: "relative"
        }}
      >
        <label
          style={LabelStyle}
        >
          To
        </label>

        <Paper
          sx={PaperStyle}
        >
          {messaging.map((msp) => (
            <Chip
              key={msp.name}
              label={`${msp.name} ${msp.party ? `- ${msp.party}` : ""}`}
              variant="outlined"
              sx={ChipStyle}
              onClick={() => {
                setMessaging((prev) =>
                  prev.filter((prevTarget) => prevTarget.name !== msp.name)
                );
                setNotMessaging((prev) => [...prev, msp]);
              }}
              onDelete={() => {
                setMessaging((prev) =>
                  prev.filter((prevTarget) => prevTarget.name !== msp.name)
                );
                setNotMessaging((prev) => [...prev, msp]);
              }}
            ></Chip>
          ))}

          {loading ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '8px', color: 'var(--text-secondary)' }}>
              <CircularProgress size={18} sx={{ color: 'var(--accent-teal)' }} />
              <span style={{ fontSize: '0.9rem' }}>Fetching recipients...</span>
            </div>
          ) : messaging.length == 0 && (
            <div style={{ color: "red", marginLeft: "10px" }}>
              You need to pick at least one recipient!
            </div>
          )}
        </Paper>

        {notMessaging.length > 0 && (
          <>
            <div
              style={{
                marginBottom: "5px",
                marginTop: "5px",
              }}
            >
              <Accordion
                className="notMessaging"
                sx={{
                  backgroundColor: "rgba(246, 243, 246, 1)",
                  borderRadius: "5px !important",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                  aria-controls="panel1a-content"
                  id="details"
                  sx={{
                    backgroundColor: "rgba(246, 243, 246, 1)",
                    borderRadius: "5px 5px 0 0",
                    border: "1px solid lightgray",
                    borderBottom: "0",
                  }}
                >
                  <div
                    style={{
                      color: "black",
                      fontWeight: "400",
                      fontSize: "1rem"
                    }}
                  >
                    You aren't messaging:
                  </div>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    paddingY: "10px",
                    paddingX: "10px",
                    marginTop: "-10px",
                    backgroundColor: "rgba(246, 243, 246, 1)",
                    borderRadius: "0 0 5px 5px",
                    border: "1px solid lightgray",
                  }}
                >
                  <div style={{ marginLeft: "5px", color: "black", fontSize: "0.8rem", marginBottom: '4px' }}>
                    These are the recipients not included in your message. If
                    you'd like to include them, just tap their name.
                  </div>
                  {notMessaging.map((msp) => (
                    <Chip
                      key={msp.name}
                      size="small"
                      label={`${msp.name} ${msp.party ? `- ${msp.party}` : ""}`}
                      variant="outlined"
                      sx={ChipStyle}
                      deleteIcon={
                        <AddCircleIcon style={{ fontSize: "large", color: 'var(--textfield-outline)' }} />
                      }
                      onDelete={() => {
                        setNotMessaging((prev) =>
                          prev.filter(
                            (prevTarget) => prevTarget.name !== msp.name
                          )
                        );
                        setMessaging((prev) => [...prev, msp]);
                      }}
                      onClick={() => {
                        setNotMessaging((prev) =>
                          prev.filter(
                            (prevTarget) => prevTarget.name !== msp.name
                          )
                        );
                        setMessaging((prev) => [...prev, msp]);
                      }}
                    ></Chip>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          </>
        )}
      </Box>

      {/* BCCing */}
      <Box
        sx={{
          marginTop: 4,
          marginBottom: "14px",
          width: "100%",
          position: "relative"
        }}
      >
        <label
          style={LabelStyle}
        >
          BCC
        </label>

        <Paper
          sx={PaperStyle}
        >
          {copyIn ? (
            <Chip
              key={"livingrent"}
              label={`Action to Protect Rural Scotland`}
              variant="outlined"
              sx={ChipStyle}
              onClick={() => {
                handleUnBcc();
              }}
              onDelete={() => {
                handleUnBcc();
              }}
            />
          ) : (
            <span
            style={{marginLeft: "10px", fontStyle: "italic", color: "black", display: "inline-block"}}
            >
              Are you sure? By copying Action to Protect Rural Scotland in, your story can help shape our campaign.{" "}
              <span onClick={() => setCopyIn(true)}
                style={{cursor: "pointer"}}
                >
                <u>Add Action to Protect Rural Scotland back into BCC.</u>
              </span>
            </span>
          )}
        </Paper>
      </Box>

    
        <TextField
                 label="Subject line"
          variant="outlined"
         fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          sx={TextFieldStyle}
          InputLabelProps={{ shrink: true }}
        />

      <EditableDiv
        label="Your message"
        body={template}
        substrings={answers}
        onBodyChange={(e) => setTemplate(e)}
        promptsChanged={answers}
      />
      
      <div
        style={{ marginTop: "4px",fontSize: "small", textAlign: "center", color: 'black' }}
      >
        <em>
          Your answers have been incorporated into the template message,
          highlighted for you in yellow - check to make sure they still look
          okay!{" "}
        </em>
      </div>


{/*
      <Box
        sx={{
          position: "relative",
          marginTop: 2,
          marginBottom: "14px",
          border: optIn == undefined && gdprPrompt && "1px solid red",
          padding: optIn == undefined && gdprPrompt ? "4px" : 0,
          width: "100%",
          "&:focus-within .paperBorder": {
            outline: "2px solid #3f51b5", // Color for focus state
            outlineOffset: "-2px",
          },
        }}
      >
        <div style={{ margin: "10px 0" }}>
          <FormControl component="fieldset">
            <div
              style={{
                marginTop: "-10px",
                fontSize: "small",
                textAlign: "center",
              }}
            >
              Do you want to share your details with Action to Protect of Rural Scotland, in case we
              need to contact you to discuss it more?
            </div>
            <RadioGroup
              row
              value={optIn ? "yes" : optIn == false && "no"}
              onChange={(e) => setOptIn(e.target.value === "yes")}
            >
              <FormControlLabel
                value="yes"
                control={<Radio style={CheckBoxStyle} />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio style={CheckBoxStyle} />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {optIn == undefined && gdprPrompt && (
          <div
            style={{
              marginTop: "-10px",
              fontSize: "small",
              //textAlign: "center",
              color: "red",
            }}
          >
            You must select 'yes' or 'no' here.
          </div>
        )}
      </Box>
*/} 

      <Button sx={BtnStyle} onClick={() => setStage("prompts")}>
        Back
      </Button>

      <SendModal
        noClient={noClient}
        setNoClient={setNoClient}
        messaging={messaging}
        bcc={bcc}
        SL={subject}
        body={template}
        Mobile={Mobile}
        sent={sent}
        title={title}
        setSent={setSent}
        copyIn={copyIn}
        optIn={optIn}
        handleSendClicked={handleSendClicked}
        emailClient={emailClient}
        contactDetails={contactDetails}
      />
    </div>
  );
};

export default Mailer;
