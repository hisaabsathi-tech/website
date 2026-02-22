const logos = [
  {
    name: "ups",
    url: "/logos/0.png",
  },
  {
    name: "BlueDart",
    url: "/logos/1.png",
  },
  {
    name: "delhivery",
    url: "/logos/2.png",
  },
  {
    name: "DTDC",
    url: "/logos/3.png",
  },
  {
    name: "eKart",
    url: "/logos/4.png",
  },
  {
    name: "shadowfax",
    url: "/logos/5.png",
  },
  {
    name: "shree Maruti",
    url: "/logos/6.png",
  },
  {
    name: "ExpressBees",
    url: "/logos/7.png",
  },
  {
    name: "tirupati",
    url: "/logos/8.png",
  },
  {
    name: "FedEx",
    url: "/logos/9.png",
  },
  {
    name: "DHL",
    url: "/logos/10.png",
  },
  {
    name: "Rivigo",
    url: "/logos/11.png",
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full  px-4 bg-background  py-12  ">
      <div className="mx-auto max-w-7xl w-full ">
        <p className="text-left text-input text-lg sm:text-xl md:text-2xl mb-4 font-outfit">
          Integrated with Industry Leaders
        </p>
        <div className="relative">
          <div
            className="group relative flex overflow-hidden gap-3 py-3"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 1%, black 17%, black 85%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 1%, black 17%, black 85%, transparent 100%)",
            }}
          >
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row gap-3"
                >
                  {logos.map((logo, key) => (
                    <img
                      key={key}
                      src={logo.url}
                      className="h-8 lg:h-14 "
                      alt={logo.name}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
