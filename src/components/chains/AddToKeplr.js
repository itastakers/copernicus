import { Button, Image } from "react-bootstrap";

const addChainToKeplr = async (e, chain) => {
  e.preventDefault();
  if (!window.getOfflineSigner || !window.keplr) {
    alert("Please install keplr extension");
  } else {
    if (window.keplr.experimentalSuggestChain) {
      try {
        await window.keplr.experimentalSuggestChain(chain);
      } catch {
        alert("Failed to suggest the chain");
      }
    } else {
      alert("Please use the recent version of keplr extension");
    }
  }
};

const AddChain = (chain) => {
  return (
    <Button
      variant="outline-primary"
      onClick={(e) => addChainToKeplr(e, chain)}
    >
      Add to{" "}
      <Image src="keplr_icon.png" style={{ border: "1px solid white" }}></Image>
    </Button>
  );
};

export default AddChain;
