import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import styles from "./css/landing.module.css";
import wait from "../../utils/methods/wait";
// @ts-ignore
import { useSpeechSynthesis } from "react-speech-kit";
import promptAI from "../../utils/methods/promptAI";

const Landing = () => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <h1 className="tlt" data-in-effect="fadeInDown" data-in-shuffle="true">
        Speak Enhance!!
      </h1>

      <hr />

      <center>
        <div className="container">
          {/* TODO: Fix the styling of the UI  */}
          <AudioRecorder
            onRecordingComplete={async (blob: any) => {
              const url = URL.createObjectURL(blob);
              // const audio = document.createElement("audio");
              // audio.src = url;
              // audio.controls = true;
              // document.body.appendChild(audio);
              // TOOD: Send audio.src to the backend to get a response

              // We will have to wait for now, maybe in the future we will remove it.
              await wait(1500);

              // Fetch the conversation from the backend or the React state and prompt gemeni
              speak({ text: promptAI([]) });
            }}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            // downloadOnSavePress={true}
            showVisualizer={true}
            downloadFileExtension="wav"
          />
        </div>
      </center>
    </div>
  );
};

export default Landing;
