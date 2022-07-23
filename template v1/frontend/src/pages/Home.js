import { useEffect } from "react"
import CustomPopup from "../components/CustomPopup";
import { useState } from "react"

function Home() {
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  }

  return (
    <div className="home">

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Drinks"
      >
        <h1>Hello This is Popup Content Area</h1>
        <h2>This is my lorem ipsum text here!</h2>
      </CustomPopup>

      <h1> this is home</h1>

    </div >
  );
};

export default Home