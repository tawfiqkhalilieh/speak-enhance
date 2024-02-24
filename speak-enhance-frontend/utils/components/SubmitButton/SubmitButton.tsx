import styles from "./submitButton.module.css";
import { Fade } from "react-awesome-reveal";

interface Props {
  onClick?: (fun: any) => void;
}

const SubmitButton = (props: Props) => {
  return (
    <>
      <Fade duration={2500} cascade>
        <button className={styles.button} onClick={props.onClick}>
          Submit
        </button>
      </Fade>
    </>
  );
};

export default SubmitButton;
