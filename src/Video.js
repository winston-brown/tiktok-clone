import React from "react";
import "./Video.css";

function Video() {
  return (
    <div>
      <video
        className="videoPlayer"
        loop
        src="http://winstonbrown.me/tiktok/funnycat1.mp4"
      ></video>
      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
