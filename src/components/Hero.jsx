import React, { useRef, useState} from 'react'
import heroVideo from '../icons/heroVideo.mp4'
import Button from './Button';
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const Hero = ({ isMenu}) => {
   
        const [isVideoPlaying, setIsVideoPlaying] = useState(true);
        const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };
      
  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
          <video
        ref={videoRef}
        src={heroVideo}
        // autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <div className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenu ? "opacity-20" : "opacity-100"}`}
      >
        <h4 className="text-2xl capitalize text-white lg:text-2xl">my name is anteneh tassew, i am a full stack web developer => 
        <span className='text-2xl text-thBlue'>javascript, node.js, react.js, next.js, redux, firebase, mysql, css, tailwind...</span> </h4>
        <h1 className="text-3xl lg:text-7xl capitalize mb-12">
          the <span className="text-thBlue font-bold">future</span> is here...
        </h1>

        <div
        className="flex flex-row justify-center items-center">
          <Button className="capitalize" title="get anteneh" />
          <Button className="capitalize mx-12" title="products" />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
            ) : (
                <FaPlayCircle
                  size={30}
                  onClick={handleVideoPlay}
                  className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
                />
              )}
        </div>

        
      </div>
    </div>
  )
}

export default Hero;
