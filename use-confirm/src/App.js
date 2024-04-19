import { useState } from "react";
import "./App.css";
import useConfirm from "./useConfirm";

function App() {
  const { triggerConfirm, ConfirmDialog } = useConfirm();
  const [deleteMessage, setDeleteMessage] = useState(false);
  const handleDelete = async () => {
    const deleteText = await triggerConfirm("Do you want to delete it?");
    setDeleteMessage(deleteText);
  };

  return (
    <div className="App">
      <h1>Window.Confirm</h1>
      <button onClick={handleDelete}>Delete</button>
      <p>{deleteMessage ? "Confirmed" : "Not yet"}: Delete this text</p>
      <ConfirmDialog />
    </div>
  );
}

export default App;
