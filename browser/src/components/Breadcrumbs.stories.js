import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Breadcrumbs from "./Breadcrumbs";

export const actions = {
  onLinkClick: action("onLinkClick")
};

storiesOf("Breadcrumbs", module).add("breadcrumbs", () => (
  <Breadcrumbs links={["Search", "About", "Sign Out"]} {...actions} />
));
