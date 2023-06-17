import { Dialog } from "@mui/material";
import ConnectionSetupComponent from "../../components/app/connection-setup/connection-setup.component";

const ConnectionSetupDialogComponent = ({ onCancel, onConnect }) => {
  return (
    <Dialog open={true} onClose={() => onCancel()}>
      <ConnectionSetupComponent />
    </Dialog>
  );
};

export default ConnectionSetupDialogComponent;
