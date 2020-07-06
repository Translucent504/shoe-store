import React from 'react';
import Appbar from './components/Appbar'
import Grid from './components/Grid'  
import Modali, { useModali } from 'modali';


function App() {
  const [completeModal, toggleCompleteModal] = useModali({
    large:true,
    animated: true,
    title: <div className="modaltitle">Shoe details</div>,
    message: <Appbar/>,
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleCompleteModal()}
      />,
      <Modali.Button
        label="Add to cart"
        isStyleDefault
        onClick={() => toggleCompleteModal()}
      />,
    ],
  });
  return (
    <div className="App">
      <Appbar />
      <Grid openModal={toggleCompleteModal}/>
      <Modali.Modal {...completeModal}/>
    </div>
  );
}

export default App;
