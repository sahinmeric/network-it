// SignupDialog.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onSignupSuccess: () => void;
}

const SignupDialog = ({ open, onClose, onSignupSuccess }: Props) => {
  const handleSignup = () => {
    onSignupSuccess();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSignup}>Sign Up</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignupDialog;
