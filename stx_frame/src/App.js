import React from 'react';
import Top_bar from './frames/frame_top_bar'
import Index from './frames/frame_index'
import Noise from './frames/frame_nude_noise';
import Footer from './frames/frame_footer'


function App() {
  return (
   <React.Fragment>
      <Top_bar/>
      <Index/>
      <Noise/>
      <Footer/>
   </React.Fragment>
  );
}

export default App;
