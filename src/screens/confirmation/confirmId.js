import React, { Component } from 'react'
import { connect } from 'react-redux'
import Webcam from "react-webcam";


const WebcamCapture = () => {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    const webcamRef = React.useRef(null);
   
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );
   
    return (
      <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };
 const ConfirmId = () => {
  
       return <Webcam />
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmId)
