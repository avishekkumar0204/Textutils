
import './App.css';
import { Navbar, TextArea } from "./component/index";
function App() {
  let changeBackGround = (e) => {
    console.log("changed", e);
  }
  return (
    <>
      <Navbar title={"textUtils"} changeBg={changeBackGround} />
      <TextArea heading="Enter text to analyse" />
    </>
  );
}

export default App;
