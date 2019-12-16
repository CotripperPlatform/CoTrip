import React from "react";
import { storiesOf } from "@storybook/react";
import FileUpload from "./FileUpload"


storiesOf("File Upload", module)
  .add("New User Upload", () =>
    <FileUpload
      header="Upload a profile photo"
      buttonLabel="Browse Files">
    </FileUpload>)