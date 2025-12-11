import AdsBoard from "./ads";
import Catagories from "./catagaries";


function Section() {
  return (
    <div className="bg-white min-h-screen w-screen">
      <div>
.      <AdsBoard />
      </div>
      <div className="mt-8">
        <Catagories />
      </div>
      
    </div>
  );
}

export default Section;