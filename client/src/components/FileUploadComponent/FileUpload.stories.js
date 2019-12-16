import React from "react";
import { storiesOf } from "@storybook/react";
import FileUpload from "./FileUpload"


storiesOf("File Upload", module)
  .add("Default", () =>
    <FileUpload>
    </FileUpload>)
  .add("New User Upload", () =>
    <FileUpload
      header="Upload a profile photo"
      context="userPhoto"
      buttonLabel="Browse Files">
    </FileUpload>)