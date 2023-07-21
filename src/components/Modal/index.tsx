import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: string;
  modalTitle: string;
  onAgree?: () => void;
  isEdit: boolean;
  CustomCard?: React.ReactNode;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertDialogSlide({
  isModalOpen,
  setIsModalOpen,
  modalContent,
  modalTitle,
  onAgree,
  isEdit,
  CustomCard,
  setIsEdit,
}: Props) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{isEdit ? "Edit Todo" : modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {isEdit ? CustomCard : modalContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              setIsModalOpen(false);
              if (setIsEdit) {
                setIsEdit(false);
              }
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={onAgree}>
            {isEdit ? "Edit" : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
