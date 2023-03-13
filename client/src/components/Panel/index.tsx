import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

interface IPanelProps {
}

const Panel: React.FC<IPanelProps> = (props) => {
  return (
    <div>
      Panel
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  )
};

export default Panel;

