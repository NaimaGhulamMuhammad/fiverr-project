import { IonPage, IonContent } from "@ionic/react";
import { useState } from "react";
import { TopHeader } from "../../../ui/layouts/Headers";
import VideoCall from "../video-call";
import VideoCallPreview from "../video-call-preview";

const CONSTRAINTS = {
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
    facingModa: "user",
  },
  audio: { echoCancellation: true },
};
let localStream: any;
let videoElement: any;

const LandingPageVideoCall = () => {
  const [joinedMeeting, setJoinedMeeting] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);
  const [micActive, setMicActive] = useState(true);
  const [toggleChat, setToggleChat] = useState(false);
  const [message, setMessage] = useState("");

  const playVideoFromCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
      localStream = stream;
      videoElement = document.querySelector("video#localVideo");
      videoElement.srcObject = stream;
    } catch (error) {
      console.error("Error opening video camera", error);
    }
  };

  const stopStreamedVideo = () => {
    localStream.getTracks().forEach((track: any) => track.stop());
    videoElement.srcObject.getTracks().forEach((video: any) => video.stop());
    localStream = null;
    videoElement = null;
  };

  const toggleVideoButton = async () => {
    try {
      const videoTrack = localStream
        .getTracks()
        .find((track: any) => track.kind === "video");
      if (videoTrack.enabled) {
        videoTrack.enabled = false;
        setCameraActive(false);
      } else {
        videoTrack.enabled = true;
        setCameraActive(true);
      }
    } catch (error) {
      console.error("Error closing video camera", error);
    }
  };

  const toggleAudioButton = async () => {
    try {
      const audioTrack = localStream
        .getTracks()
        .find((track: any) => track.kind === "audio");
      if (audioTrack.enabled) {
        audioTrack.enabled = false;
        setMicActive(false);
      } else {
        audioTrack.enabled = true;
        setMicActive(true);
      }
    } catch (error) {
      console.error("Error muting microphone", error);
    }
  };

  const joinMeetingOnClick = () => {
    localStream.getTracks().forEach((track: any) => track.stop());
    videoElement.srcObject.getTracks().forEach((video: any) => video.stop());
    localStream = null;
    videoElement = null;
    setCameraActive(true);
    setMicActive(true);
    setJoinedMeeting(true);
  };

  return (
    <IonPage>
      {joinedMeeting ? (
        <TopHeader pageName="Video Consultation" />
      ) : (
        <TopHeader pageName="Video Preview" back />
      )}
      <IonContent className="ion-padding">
        {joinedMeeting ? (
          <>
            <VideoCall
              cameraActive={cameraActive}
              micActive={micActive}
              playVideoFromCamera={playVideoFromCamera}
              stopStreamedVideo={stopStreamedVideo}
              toggleVideoButton={toggleVideoButton}
              toggleAudioButton={toggleAudioButton}
            />
          </>
        ) : (
          <>
            <VideoCallPreview
              cameraActive={cameraActive}
              micActive={micActive}
              playVideoFromCamera={playVideoFromCamera}
              joinMeetingOnClick={joinMeetingOnClick}
              toggleVideoButton={toggleVideoButton}
              toggleAudioButton={toggleAudioButton}
            />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default LandingPageVideoCall;
