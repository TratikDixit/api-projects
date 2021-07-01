import "../../App.css";
import React, { useState } from "react";
import Field from "../field.js";
import Languages from "../languages.js";
import Translate from "../translate.js";

function Apib() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default Apib;