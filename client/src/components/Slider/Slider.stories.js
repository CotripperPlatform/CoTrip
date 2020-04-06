import React from "react";
import { storiesOf } from "@storybook/react";
import Slider from "./Slider";
import Person from "../PersonCard/PersonCard";


let cards = [<Person />, <Person />, <Person />, <Person />, <Person />];
storiesOf("Atoms/Slider", module).add("Default", () => (
    <Slider 
    cards={cards}
    
    />
  
));
