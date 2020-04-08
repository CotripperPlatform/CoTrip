import React from "react";
import { storiesOf } from "@storybook/react";
import Hawaii2020 from "./Hawaii2020";

storiesOf("Pages/Hawaii2020", module).add("Default", () => <Hawaii2020 tripName={"Hawaii"} />);
storiesOf("Pages/Hawaii2020", module).add("Hawaii2020", () => <Hawaii2020 trip={Hawaii2020} />);
