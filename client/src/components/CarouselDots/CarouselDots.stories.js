import React from 'react';
import { storiesOf } from '@storybook/react';
import CarouselDots from './CarouselDots';


function statusChange(value){
  console.log('Status Changed', value);
}

function increment(){
  location += 1;
  console.log(location);
}

let style1 = {
  backgroundColor:'#FFCB08'
}
let style2 = {
  backgroundColor:'#FAFAFA'
}

let location = 1;


storiesOf('CarouselDots', module)
  .add("Default", () => (
    <div style={style1}>
    <CarouselDots
      numberOfDots={5}
      activeLocation={location}
      activeDotColor={'#6A4C93'}
      inactiveDotColor={'#FAFAFA'}
      hasBorder={false}
      borderWeight={null}
      onStatusChange={statusChange}
      size={50}
     />
    </div>

  )
)
  .add("Without Border", () => (
    <div style={style2}>
    <CarouselDots
      numberOfDots={5}
      activeLocation={3}
      activeDotColor={'#6A4C93'}
      inactiveDotColor={'#FAFAFA'}
      hasBorder={true}
      borderWeight={3}
      onStatusChange={statusChange}
      size={50}
     />
    </div>

  )
)
