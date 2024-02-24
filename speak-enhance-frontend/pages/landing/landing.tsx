import React, { useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import wait from "@/utils/methods/wait";
// @ts-ignore
import { useSpeechSynthesis } from "react-speech-kit";
import promptAI from "@/utils/methods/promptAI";
// @ts-ignore
import SubmitButton from "@/utils/components/SubmitButton/SubmitButton";
import styles from "./landing.module.css";
import { Fade } from "react-awesome-reveal";
import generateReview from "@/utils/methods/generateReview";

const Landing = () => {
  // TODO: use conversation to handle the conversation between the user and the model
  const [conversation, setConversation] = useState([]);
  const { speak } = useSpeechSynthesis();

  return (
    <>
      <Fade duration={2500} cascade>
        <h1>Speak Enhance!!</h1>
      </Fade>

      <Fade duration={1500} cascade>
        <hr className={styles.line} />
      </Fade>

      <center>
        <div className={styles.container}>
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

              // TODO: convert the recorded audio to text and send it to the AI as a prompt
              speak({ text: promptAI("prompt", []) });
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

        <SubmitButton
          onClick={() => {
            const review_text = generateReview(conversation);
            // TODO: show a modal with the review written by the model.
          }}
        />
      </center>
    </>
  );
};

export default Landing;
