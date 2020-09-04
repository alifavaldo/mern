import React from 'react';
import Fade from 'react-reveal/Fade';

export default function MainContent({ data, current }) {

  <Fade>
    {data[current] && data[current].content}
  </Fade>;

}
