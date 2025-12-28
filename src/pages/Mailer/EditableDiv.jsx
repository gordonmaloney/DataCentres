import React, { useState, useEffect, useRef } from "react";
import { LabelStyle } from "../../../MUIStyles";

//LOOK I KNOW THIS WHOLE COMPONENT IS BANANAS BUT IT WORKS SO DON'T CHANGE IT WITHOUT BEING VERY CAREFUL

const EditableDiv = ({
  substrings,
  label,
  body,
  onBodyChange,
  promptsChanged,
}) => {
  const textFieldRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const textField = textFieldRef.current;
    let textContent = textField.innerHTML;

    // Find and highlight prompt answers
    const highlightedContent = substrings.reduce((content, answer) => {


      // Skip highlighting for certain terms or short answers
      if (
        answer === "span" ||
        answer === "class" ||
        answer === "name" ||
        answer.length < 1
      ) {
        return content;
      }

      const regex = new RegExp(`(?<!\\w)${answer}(?!\\w)`, "gis");

      return content.replaceAll(
        regex,
        `<span class="highlightText">${answer}</span>`
      );
    }, textContent);

    textField.innerHTML = highlightedContent;
  }, [substrings, promptsChanged]); // Include promptsChanged in dependencies

  const [length, setLength] = useState(body?.length);
  useEffect(() => {
    setLength(body?.length);
  }, [body]);



  return (
    <div style={{ width: "100%", marginTop: "0.5rem", position: "relative" }}>
      <div className="editableDivBox">
        <label 
          htmlFor="editableDiv" 
          style={{
            ...LabelStyle,
            color: isFocused ? 'var(--text-primary)' : 'var(--text-secondary)'
          }}
        >
          {label}
        </label>
        <div
          style={{
            outline: "none",
            color: "black",
            fontFamily: 'var(--font-main)',
            padding: "5px",
            minHeight: "200px",
            height: "auto",
            whiteSpace: "pre-wrap",
          }}
          ref={textFieldRef}
          contentEditable
          suppressContentEditableWarning={true}
          autoFocus
          onInput={(e) => setLength(e.target?.innerText.length)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBodyChange(textFieldRef.current.innerText);
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
};

export default React.memo(EditableDiv);
