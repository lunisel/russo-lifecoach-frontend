import { useEffect, useState } from "react";
import CardSection from "../../organisms/card-section/CardSection";
import ChiSono from "../../organisms/chi sono/ChiSono";
import Jumbotron from "../../organisms/jumbotron/Jumbotron";

const Home = ({ ...props }) => {
  const [vw, setVW] = useState(window.innerWidth);

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    setVW(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="big-container">
      <Jumbotron history={props.history} vw={vw} />
      <ChiSono vw={vw} />
      <CardSection history={props.history} vw={vw} />
    </div>
  );
};

export default Home;
