import { Button, Stack, Tooltip } from "@mui/material";
import { BtnStyle } from "../../../MUIStyles";
import { useState } from "react";

export default function PostAction() {


    //CHANGE THIS
    const title = "Stop Data Centres"


      const [copied, setCopied] = useState(false);
    
      const handleCopy = async () => {
        try {
          // Copy the current page URL to the clipboard
          await navigator.clipboard.writeText(window.location.href);
          // Show the tooltip with "Copied" message
          setCopied(true);
          // Hide the tooltip after 3 seconds
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      };
    
      
  return (
    <div>
         <p style={{ color: "#444", lineHeight: "1.6", fontSize: "1.05rem" }}>
                Nice one! Will you now{" "}
                <b style={{ color: "#1A1A1A" }}>take a moment to share the campaign with a few friends?</b>{" "}
                You can use the buttons below:
              </p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  flexWrap="wrap" // so buttons drop to the next line on small screens
                >
                  <Button
                    sx={{ ...BtnStyle, margin: "10px 10px" }}
                    target="_blank"
                    href={`http://wa.me/?text=${encodeURI(
                      "Hey! I've just taken part in this campaign - check it out here: " +
                        title +
                        " " +
                        window.location.href
                    )}`}
                  >
                    Share on WhatsApp
                  </Button>
                  <Button
                    sx={{ ...BtnStyle, margin: "10px 10px" }}
                    target="_blank"
                    href={`https://bsky.app/intent/compose?text=${encodeURI(
                      title + " " + window.location.href
                    )}`}
                  >
                    Share on BlueSky
                  </Button>
                </Stack>
              </div>

              <p style={{ color: "#444", lineHeight: "1.6", marginTop: "1rem" }}>
                You can also just{" "}
                <Tooltip
                  open={copied}
                  title="Copied"
                  disableHoverListener
                  disableFocusListener
                  disableTouchListener
                  placement="top"
                  PopperProps={{
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, -14], // Adjust the second value to move tooltip closer/further
                        },
                      },
                    ],
                  }}
                >
                  <span
                    onClick={handleCopy}
                    style={{
                      cursor: "pointer",
                      color: "var(--accent-teal)",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    click here
                  </span>
                </Tooltip>{" "}
                to copy the link and share it with your friends!
              </p>
    </div>
  )
}
