import Navbar from "./navbar";
import Description from "./description";
import AvailabilityBox from "./availabality";
import LeftFeature from "./leftFeature";
import "./styles/styles.css";
import RightFeature from "./rightFeature";
import Feedback from "./feedback";

export default function LandingPage() {
  return (
    <>
      <div className="landpage">
        <Navbar />
        <Description />
        <AvailabilityBox />
        <LeftFeature />
        <RightFeature />
        <Feedback />
      </div>
    </>
  );
}
