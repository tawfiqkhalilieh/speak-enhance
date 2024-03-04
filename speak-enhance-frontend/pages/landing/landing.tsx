import React, { Dispatch, SetStateAction, useState } from "react";
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
import SparklesCore from "@/utils/components/sparkles/sparkles";
import { Button } from "@/utils/components/button/button";
import convertSpeechText from "@/utils/methods/convertSpeechText";
import axios from "axios";

const Landing = () => {
  // TODO: use conversation to handle the conversation between the user and the model
  const [conversation, setConversation]: [
    string[],
    Dispatch<SetStateAction<never[]>>
  ] = useState([]);
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
          <Fade duration={2500} cascade>
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </Fade>
          <AudioRecorder
            onRecordingComplete={async (blob: any) => {
              const url = URL.createObjectURL(blob);

              // const audio = document.createElement("audio");
              // audio.src = url;
              // audio.controls = true;
              // document.body.appendChild(audio);
              // TOOD: Send audio.src to the backend to get a response

              // We will have to wait for now, maybe in the future we will remove it.
              // await wait(1500);
              const response: Response = await fetch(url);
              const file: Uint8Array = new Uint8Array(
                await response.arrayBuffer()
              );

              const sent_text: string = await convertSpeechText(url, file);
              const model_response: string = await promptAI("prompt", []);
              // TODO: convert the recorded audio to text and send it to the AI as a prompt
              speak({ text: sent_text });

              conversation.push(sent_text);
              conversation.push(model_response);
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

      <Button
        onClick={() => {
          // TODO: show the results in styled UI
          console.log(generateReview(conversation));
        }}
      >
        Log Results
      </Button>
    </>
  );
};

export default Landing;
