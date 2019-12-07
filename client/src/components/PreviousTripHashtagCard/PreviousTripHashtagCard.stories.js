import React from "react";
import { storiesOf } from "@storybook/react";
import PreviousTripHashtagCard from "./PreviousTripHashtagCard";

storiesOf("PreviousTripHashtagCard", module)
  .add("Previous Trips, Empty", () => <PreviousTripHashtagCard trips={[]} />)
  .add("Previous Trips", () => <PreviousTripHashtagCard trips={["New York", "Mexico"]} />);
