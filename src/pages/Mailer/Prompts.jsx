import React, { useState, useCallback, useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Mailer from "./Mailer";
import {
  Button,
  TextField,
  Tooltip,
} from "@mui/material";
import FetchTarget from "./FetchTarget";
import EmailInput from "./ClientHandling/EmailInput";
import {
  BtnStyle,
  TextFieldStyle,
  BtnStyleDisabled,
} from "../../../MUIStyles";





const Prompts = ({ issue, blankTemplate }) => {
  const location = useLocation();
  const [stage, setStage] = useState("prompts");

  // postcode and divisions - initialize from navigation state if available
  const [postcode, setPostcode] = useState(location.state?.postcode || "");
  const [adminDivisions, setAdminDivisions] = useState(location.state?.adminDivisions || {});

  // email handling
  const [emailClient, setEmailClient] = useState(undefined);
  const [userEmail, setUserEmail] = useState("");
  const [noClient, setNoClient] = useState(false);

  // template assembly and answers for highlighting
  const [template, setTemplate] = useState(blankTemplate);
  const [answers, setAnswers] = useState([]);

  // user inputs
  const [userName, setUserName] = useState("");
  const [userStory, setUserStory] = useState("");
  // const [userNumber, setUserNumber] = useState("");
  const [contactDetails, setContactDetails] = useState({});

 

  const handlePrompts = useCallback(() => {

    setTemplate(
      blankTemplate
        .replace("<<|userStory|>>", userStory)
        .replace("<<|userName|>>", userName)
        .replace("<<|postcode|>>", postcode)
    );

    const baseAnswers = [userName, userStory, postcode];
    setAnswers(baseAnswers);
  }, [blankTemplate, issue, postcode, userName, userStory]);

  const fieldsIncomplete =
    userName === "" ||
    userStory === "" ||
    userEmail === "" ||
    postcode === "" ||
    adminDivisions.ward == undefined;

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const handleButtonClick = useCallback(() => {
    if (fieldsIncomplete) {
      setTooltipOpen(true);
      setTimeout(() => setTooltipOpen(false), 3000);
    }
  }, [fieldsIncomplete]);

  // ensure initial render does not jank inputs (optional micro-optim)
  useLayoutEffect(() => {}, []);

  useEffect(() => {
    setContactDetails({
      name: userName,
      // number: userNumber,
      email: userEmail,
    });
  }, [userName, /* userNumber, */ userEmail]);

  if (stage === "prompts") {
    return (
      <div>
        {issue === "object" && (
          <>
          OBJECTIONS
          </>
        )}

        {issue === "email" && (
          <>
          EMAIL MSPS
          </>
        )}

        <TextField
          label="Your Name"
          variant="outlined"
          value={userName}
          sx={TextFieldStyle}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setUserName(e.target.value)}
          fullWidth
        />

        <TextField
          label="Your Story"
          variant="outlined"
          value={userStory}
          sx={TextFieldStyle}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setUserStory(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />

        <FetchTarget
          postcode={postcode}
          setPostcode={setPostcode}
          adminDivisions={adminDivisions}
          setAdminDivisions={setAdminDivisions}
        />

        <EmailInput
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          emailClient={emailClient}
          setEmailClient={setEmailClient}
        />


{/*
        <TextField
          label="Your number"
          variant="outlined"
          value={userNumber}
          sx={TextFieldStyle}
          onChange={(e) => setUserNumber(e.target.value)}
          fullWidth
        />
*/}

        <Tooltip
          title="Make sure you have filled out all the questions above"
          open={tooltipOpen}
          disableHoverListener
          disableFocusListener
          disableTouchListener
          placement="left"
        >
          <span style={{ float: "right" }}>
            <Button
              sx={fieldsIncomplete ? BtnStyleDisabled : BtnStyle}
              onClick={() => {
                if (!fieldsIncomplete) {
                  handlePrompts();
                  setStage("message");
                } else {
                  handleButtonClick();
                }
              }}
            >
              Next
            </Button>
          </span>
        </Tooltip>
      </div>
    );
  }

  if (stage === "message") {
    return (
      <div>
        <Mailer
          template={template}
          setTemplate={setTemplate}
          answers={answers}
          noClient={noClient}
          setNoClient={setNoClient}
          emailClient={emailClient}
          issue={issue}
          setStage={setStage}
          adminDivisions={adminDivisions}
          contactDetails={contactDetails}
        />
      </div>
    );
  }

  return null;
};

export default Prompts;
