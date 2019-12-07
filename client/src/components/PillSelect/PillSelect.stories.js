import React from 'react';
import { storiesOf } from '@storybook/react';
import PillSelect from './PillSelect';


function pillClick(value){
  console.log(value);
    }
let pills = ['Parenting', 'Teens', 'Arts', 'Traveling', 'Primary School', 'Sports']

 pills = pills.map(val=>{
  let pill = <PillSelect
    selected={true}
    innerText={val}
    selectedColor={'#FB836F'}
    unselectedColor={'#FAFAFA'}
    onStatusChange={pillClick}
    width= {'200px'}
    selectId={0}
   />
   return <div className={'pill-padding'}>{pill}</div>
})




storiesOf('PillSelect', module)
  .add("Unselected", () => (
    <div className={'pillStorybook'}>
    <link href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap" rel="stylesheet"/>
    {pills}

     </div>
  )
)
  .add("Selected", () => (
    <div>
    <link href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap" rel="stylesheet"/>
    <PillSelect
      selected={true}
      innerText={'Traveling'}
      selectedColor={'green'}
      unselectedColor={'blue'}
      onStatusChange={pillClick}
      width= {'50%'}
      selectId={5}
     />
     </div>
  )
)
