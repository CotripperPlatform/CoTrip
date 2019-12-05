import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import Breadcrumbs from "./Breadcrumbs";

export const home = { title: "@" };
export const actions = {
  onLinkClick: action("onLinkClick")
};

storiesOf("Breadcrumbs", module)
  .addDecorator(withKnobs)
  .add("breadcrumbs", () => (
    <Breadcrumbs
      home={(object("breadcrumbs"), { ...home })}
      links={["Search", "About", "Sign Out"]}
      {...actions}
    />
  ));
