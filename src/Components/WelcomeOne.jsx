export default function WelcomeOne({ auto, setAuto, showAuto, pass, login }) {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#f58220] to-white flex flex-col items-center justify-center h-screen rounded-lg m-2 gap-8">
        <img src="group.svg" alt="" className="w-[350px] my-4" />
        <div className="flex flex-col justify-center items-center">
          {!auto && (
            <p className="font-epilogue font-bold text-[#303030] text-[20px]">
              Control your Business!
            </p>
          )}
          {auto && !pass && (
            <p className="font-epilogue font-bold text-[#303030] text-[20px]">
              In need of insights?
            </p>
          )}
          {pass && !login && (
            <p className="font-epilogue font-bold text-[#303030] text-[20px]">
              Real-time Information
            </p>
          )}
          {login && (
            <p className="font-epilogue font-bold text-[#303030] text-[20px]">
              Data-driven Decision-making
            </p>
          )}
          {!auto && (
            <p className="text-center w-7/12 font-inter text-[12px] text-[#1c1c1c] my-2">
              Unified Payment Connect Monitoring System is a comprehensive
              platform for monitoring and managing transaction activities for
              various institutions.
            </p>
          )}
          {auto && !pass && (
            <p className="text-center w-7/12 font-inter text-[12px] text-[#1c1c1c] my-2">
              Unified Payment Connect Monitoring System helps in extracting
              meaningful insights from large volumes of data collected from
              various sources.
            </p>
          )}
          {pass && !login && (
            <p className="text-center w-7/12 font-inter text-[12px] text-[#1c1c1c] my-2">
              Unified Payment Connect Monitoring System provides up-to-date and
              accurate data to respond promptly to business changes.
            </p>
          )}
          {login && (
            <p className="text-center w-7/12 font-inter text-[12px] text-[#1c1c1c] my-2">
              Unified Payment Connect Monitoring System provides and establish a
              data-driven culture within the organization to base decisions on
              factual insights
            </p>
          )}
        </div>
        <div className="flex ">
          <img src="left.svg" alt="" />
          <img src="right.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
