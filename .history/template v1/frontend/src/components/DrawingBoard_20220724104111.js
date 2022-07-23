import * as React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const DrawingPad = () => {
  return (
    <ReactSketchCanvas
      style={styles}
      width="600px"
      height="400px"
      strokeWidth={4}
      strokeColor="red"
    />
  );
};

export default DrawingPad;