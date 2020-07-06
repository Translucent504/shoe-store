import React from 'react';
import Modali, { useModali } from 'modali';

const [completeModal, toggleCompleteModal] = useModali({
  animated: true,
  title: 'Are you sure?',
  message: 'Deleting this user will be permanent.',
  buttons: [
    <Modali.Button
      label="Cancel"
      isStyleCancel
      onClick={() => console.log("CANSELLLLLLLLLLL")}
    />,
    <Modali.Button
      label="Delete"
      isStyleDestructive
      onClick={() => console.log("DELETED")}
    />,
  ],
});

export default toggleCompleteModal