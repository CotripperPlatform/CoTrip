import React from "react";
import { storiesOf } from "@storybook/react";
import FileUpload from "./FileUpload"

const handleFile = (file) => file

storiesOf("File Upload", module)
  .add("New User Upload", () =>
    <FileUpload
      header="Upload a profile photo"
      buttonLabel="Browse Files"
      handleFile={handleFile}
      >
    </FileUpload>)