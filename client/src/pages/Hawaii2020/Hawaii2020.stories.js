import React from "react";
import { storiesOf } from "@storybook/react";
import Hawaii2020 from "./Hawaii2020";

<<<<<<< HEAD
storiesOf("Hawaii2020", module).add("Default", () => <Hawaii2020 tripName={"Hawaii"} />);
=======
storiesOf('Hawaii2020', module)
  .add("Hawaii2020", () => (
    <Hawaii2020 
      trip={Hawaii2020}
    />
  )
)
>>>>>>> 662e17a9f52981b94437d9a2c85753f89e88d51d
