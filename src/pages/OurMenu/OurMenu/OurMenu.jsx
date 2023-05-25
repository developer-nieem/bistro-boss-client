import Cover from "../../Shared/Cover/Cover";

import topCover from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle";

const OurMenu = () => {
  return (
    <div>
      <Cover
        img={topCover}
        title="OUR MENU"
        details="Would you like to try a dish?"
      ></Cover>

      <div>
        <SectionTitle
          heading='TODAY"S OFFER '
          subHeading='Don"t miss'
        ></SectionTitle>
        
      </div>
    </div>
  );
};

export default OurMenu;
