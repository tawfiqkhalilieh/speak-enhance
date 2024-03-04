// import styles from "./submitButton.module.css";
// import { Fade } from "react-awesome-reveal";

// import { Button } from "@/utils/components/button/button";
// interface Props {
//   onClick?: (fun: any) => void;
// }

// const SubmitButton = (props: Props) => {
//   return (
//     <>
//       <Fade duration={2500} cascade>
//         <button className={styles.button} onClick={props.onClick}></button>
//         <Button> hello</Button>
//       </Fade>
//     </>
//   );
// };

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/utils/components/AlertDialog/alertdialog";
import { Button } from "@/utils/components/button/button";

function SubmitButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default SubmitButton;
