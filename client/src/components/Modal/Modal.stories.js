import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

function handleConfirm(evt) {
  evt.preventDefault()
  alert('Confirmed!')
}
function handleJoin(evt) {
  evt.preventDefault()
  alert('Joined!')
}
function handleCancel (evt){
  evt.preventDefault()
  alert('Canceled!')
}
function handleClose (evt){
  evt.preventDefault()
  alert('Modal Closed!')
}

storiesOf('Modal', module)
  .add("Follow Modal", () => 
    <Modal message={"Are you sure you want to follow"} 
          confirmText={"Confirm"} 
          cancelText={"Cancel"}
          onConfirm={handleConfirm} 
          onCancel={handleCancel}
          onClose={handleClose}/>
  )
  .add("Join Modal", () =>
    <Modal  message={"Are you sure you want to Join"} 
            confirmText={"Join"} 
            cancelText={"Cancel"}
            onConfirm={handleJoin} 
            onCancel={handleCancel}
            onClose={handleClose}/>
  ) 