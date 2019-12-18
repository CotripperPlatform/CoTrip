import React from "react";
import { storiesOf } from "@storybook/react";
import ComponentInbox from "./ComponentInbox";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faEdit);

storiesOf("ComponentInbox", module).add("Default", () => <ComponentInbox />);
