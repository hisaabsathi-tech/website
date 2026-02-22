import thirdImage from "/feature-one/feature-one-illustration.png";

function FeatureOne() {
  return (
    <div className=" flex-col bg-background w-full flex justify-center items-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:p-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 ">
            <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl lg:text-56 text-foreground leading-tight">
              Create customer invoices in seconds
            </h2>

            <p className="font-outfit text-base sm:text-lg md:text-xl lg:text-2xl text-input font-light leading-relaxed">
              Forget Excel templates. Your invoices are created automatically
              and always stay organised. You can set auto reminders and mail
              invoices directly.
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <div className="w-full h-auto max-w-md lg:max-w-full">
              <img
                src={thirdImage}
                alt="Third Section Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureOne;
