import eightImage from "/cta-section/cta-section-illustration.png";
import { Link } from "react-router-dom";
function Cta() {
  return (
    <div className="bg-background w-full  flex px-4 pt-10 lg:pt-0 justify-center items-center">
      <div className="max-w-7xl bg-white border-2 border-inputBorder rounded-2xl shadow-sm flex flex-col lg:flex-row  mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6 flex-1  text-center lg:text-left">
          <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            This is what your day should{" "}
            <span className="font-instrument italic">not look like!</span>
          </h2>
          <p className="font-outfit text-gray-600 font-light text-2xl sm:text-lg md:text-xl leading-relaxed">
            Jumping between sheets, registers, and calculators only creates
            errors and delays. It slows your business and hides your actual
            numbers.
          </p>
          <div className="mt-2">
            <Link
              to="/contact"
              className="bg-primary  text-white font-outfit font-medium px-6 py-3 rounded-lg shadow-md"
            >
              Try Hisaab Sathi
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full lg:w-auto max-w-md lg:max-w-lg">
          <img
            src={eightImage}
            alt="Desktop with calculator and papers illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Cta;
