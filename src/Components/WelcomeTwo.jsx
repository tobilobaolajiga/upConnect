import { useState } from 'react';

export default function WelcomeTwo({
  auto,
  setAuto,
  showAuto,
  colorOne,
  colorTwo,
  colorThree,
  colorFour,
  count,
  pass,
  showPass,
  widthOne,
  widthTwo,
  widthThree,
  widthFour,
  login,
  showLogin,
  loginCount,
  stepOne,
  stepTwo,
  stepWidth,
  stepTwoWidth,
  userLogin,
  showUserLogin,
  otpPage,
  showOtpPage,
}) {
  // const handleEmail = async () => {};

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col gap-6">
        {!userLogin && (
          <div>
            <p className="text-[#1E1B39] font-bold text-[12px]">
              Step {count} of 4
            </p>
            <div className="flex gap-2 mt-2">
              <div
                style={{
                  backgroundColor: colorOne,
                  width: widthOne,
                }}
                className="bg-[#f58220] w-[70px] h-[3px] rounded-lg"
              ></div>
              <div
                style={{
                  backgroundColor: colorTwo,
                  width: widthTwo,
                }}
                className="bg-[#e5edff] w-[40px] h-[3px] rounded-lg"
              ></div>
              <div
                style={{
                  backgroundColor: colorThree,
                  width: widthThree,
                }}
                className="bg-[#e5edff] w-[40px] h-[3px] rounded-lg"
              ></div>
              <div
                style={{
                  backgroundColor: colorFour,
                  width: widthFour,
                }}
                className="bg-[#e5edff] w-[40px] h-[3px] rounded-lg"
              ></div>
            </div>
          </div>
        )}
        {userLogin && (
          <div>
            <p className="text-[#1E1B39] font-bold text-[12px]">
              Step {loginCount} of 2
            </p>
            <div className="flex gap-2 mt-2">
              <div
                style={{
                  backgroundColor: stepOne,
                  width: stepWidth,
                }}
                className="bg-[#f58220] w-[70px] h-[3px] rounded-lg"
              ></div>
              <div
                style={{
                  backgroundColor: stepTwo,
                  width: stepTwoWidth,
                }}
                className="bg-[#e5edff] w-[40px] h-[3px] rounded-lg"
              ></div>
            </div>
          </div>
        )}

        <div className="mt-4">
          {!pass && !login && !userLogin && (
            <p className="font-bold text-[22px] text-[#1e1b39] text-center pb-[4px] font-epilogue">
              Welcome!
            </p>
          )}
          {pass && !login && (
            <p className="font-bold text-[22px] text-[#1e1b39] text-center pb-[4px] font-epilogue">
              Change Password
            </p>
          )}
          {(login || userLogin) && !otpPage && (
            <p className="font-bold text-[22px] text-[#1e1b39] text-center pb-[4px] font-epilogue">
              Login to your account
            </p>
          )}
          {otpPage && (
            <p className="font-bold text-[22px] text-[#1e1b39] text-center pb-[4px] font-epilogue">
              Enter one time password (OTP)
            </p>
          )}
          {!auto && !userLogin && (
            <p className="text-[#8d9196] text-[12px] font-inter">
              Sign up using your official email. An autogenerated password will
              <p className="text-center">be sent to your email to proceed.</p>
            </p>
          )}
          {pass && !login && (
            <p className="text-[#8d9196] text-[12px] font-inter">
              Change your auto generated password to your personal
              <p className="text-center">password, then proceed to login</p>
            </p>
          )}
          {auto && !pass && (
            <p className="text-[#8d9196] text-[12px] font-inter">
              Enter the autogenerated password that was sent to your
              <p className="text-center">email address to Proceed.</p>
            </p>
          )}
          {(login || userLogin) && !otpPage && (
            <p className="text-[#8d9196] text-[12px] font-inter">
              Login using your email and your personal password
            </p>
          )}
          {otpPage && (
            <p className="text-[#8d9196] text-[12px] font-inter">
              Please enter the one time password sent to your email address,
              <p className="text-center"> OTP expires in 5 minutes</p>
            </p>
          )}
        </div>
        {!pass && !userLogin && (
          <div className="relative">
            <p className="text-[#1e1b39] text-xs font-semibold mb-2">Email</p>
            <input
              type="text"
              className="border rounded w-full py-[6px] placeholder:text-[11px] placeholder:pl-2 opacity-50 bg-[#f6f6f7] outline-none px-[6px] text-xs"
              placeholder="johndoe@gmail.com"
            />
            <img
              src="sms.svg"
              alt=""
              className=" absolute right-2 bottom-[5px] w-[16px]"
            />
          </div>
        )}
        {auto && !pass && (
          <div className="relative">
            <p className="text-[#1e1b39] text-xs font-semibold mb-2">
              Autogenerated Password
            </p>
            <input
              type="text"
              className="border rounded w-full py-[6px] placeholder:text-[11px] placeholder:pl-2 opacity-50 bg-[#f6f6f7] outline-none px-[6px] text-xs"
              placeholder="Enter autogenerated password"
            />
            <img
              src="eye.svg"
              alt=""
              className=" absolute right-2 bottom-[5px] w-[16px]"
            />
          </div>
        )}
        {pass && !login && (
          <div>
            <div className="relative">
              <p className="text-[#1e1b39] text-xs font-semibold mb-2">
                New Password
              </p>
              <input
                type="text"
                className="border rounded w-full py-[6px] placeholder:text-[11px] placeholder:pl-2 opacity-50 bg-[#f6f6f7] outline-none px-[6px] text-xs"
                placeholder="Enter new password"
              />
              <img
                src="eye.svg"
                alt=""
                className=" absolute right-2 bottom-[7px] w-[16px]"
              />
            </div>

            <div className="relative">
              <p className="text-[#1e1b39] text-xs font-semibold mb-2 mt-4">
                Confirm New Password
              </p>
              <input
                type="text"
                className="border rounded w-full py-[6px] placeholder:text-[11px] placeholder:pl-2 opacity-50 bg-[#f6f6f7] outline-none px-[6px] text-xs"
                placeholder="Confirm new password"
              />
              <img
                src="eye.svg"
                alt=""
                className=" absolute right-2 bottom-[7px] w-[16px]"
              />
            </div>
          </div>
        )}

        {(login || userLogin) && !otpPage && (
          <div>
            <div className="relative">
              <p className="text-[#1e1b39] text-xs font-semibold mb-2">Email</p>
              <input
                type="text"
                className="border rounded w-full py-[6px] placeholder:text-[11px] placeholder:pl-2 opacity-50 bg-[#f6f6f7] outline-none px-[6px] text-xs"
                placeholder="johndoe@gmail.com"
              />
              <img
                src="sms.svg"
                alt=""
                className=" absolute right-2 bottom-[7px] w-[16px]"
              />
            </div>

            <div className="relative">
              <p className="text-[#1e1b39] text-xs font-semibold mb-2 mt-4">
                Password
              </p>
              <input
                type="text"
                className="border rounded w-full py-[6px] placeholder:text-[11px] placeholder:pl-2 opacity-50 bg-[#f6f6f7] outline-none px-[6px] text-xs"
                placeholder="Enter password"
              />
              <img
                src="eye.svg"
                alt=""
                className=" absolute right-2 bottom-[7px] w-[16px]"
              />
            </div>
          </div>
        )}

        {auto && !pass && (
          <p className="text-right text-[10px] text-[#00afef] -mb-[10px] font-inter cursor-pointer">
            Didn't get an autogenerated password?
          </p>
        )}
        {!auto && !userLogin && (
          <button
            className="text-center rounded text-white font-semibold text-[12px] py-[7px] bg-[#f58220] cursor-pointer"
            onClick={showAuto}
          >
            Proceed
          </button>
        )}
        {auto && !pass && (
          <button
            className="text-center rounded text-white font-semibold text-[12px] py-[7px] bg-[#f58220] cursor-pointer"
            onClick={showPass}
          >
            Proceed
          </button>
        )}
        {auto && pass && !login && (
          <button
            className="text-center rounded text-white font-semibold text-[12px] py-[7px] bg-[#f58220] cursor-pointer"
            onClick={showLogin}
          >
            Proceed
          </button>
        )}
        {userLogin && !otpPage && (
          <p className="text-right text-[10px] text-[#000000] -mb-[10px] font-inter cursor-pointer">
            Forgot password?{' '}
            <span className="text-[#f58220] cursor-pointer">Reset it now!</span>
          </p>
        )}
        {otpPage && (
          <>
            <div className="rounded-full text-white flex justify-center items-center">
              <p className="bg-[#14a2fd] rounded-full text-white text-[14px] px-[8px] py-[2px] font-inter">
                4 min : 59 secs
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <input
                type="text"
                className="rounded w-[40px] h-[40px] bg-[#e5edff] outline-none text-center font-bold text-[14px]"
              />
              <input
                type="text"
                className="rounded w-[40px] h-[40px] bg-[#e5edff] outline-none text-center font-bold text-[14px]"
              />
              <input
                type="text"
                className="rounded w-[40px] h-[40px] bg-[#e5edff] outline-none text-center font-bold text-[14px]"
              />
              <input
                type="text"
                className="rounded w-[40px] h-[40px] bg-[#e5edff] outline-none text-center font-bold text-[14px]"
              />
              <input
                type="text"
                className="rounded w-[40px] h-[40px] bg-[#e5edff] outline-none text-center font-bold text-[14px]"
              />
            </div>
          </>
        )}
        {(login || otpPage) && (
          <button className="text-center rounded text-white font-semibold text-[12px] py-[7px] bg-[#f58220] cursor-pointer">
            Login
          </button>
        )}
        {userLogin && !otpPage && (
          <button
            className="text-center rounded text-white font-semibold text-[12px] py-[7px] bg-[#f58220] cursor-pointer"
            onClick={showOtpPage}
          >
            Proceed
          </button>
        )}
        {!auto && !userLogin && (
          <div className="mt-4 font-inter">
            <p className="font-semibold text-[11px] text-center">
              Already have an account?{' '}
              <span
                className="text-[#f58220] cursor-pointer"
                onClick={showUserLogin}
              >
                Login
              </span>
            </p>
          </div>
        )}
        {userLogin && !otpPage && (
          <p className="text-center text-[10px] text-[#000000] mt-2 font-inter cursor-pointer">
            Don't have an account?
            <span className="text-[#f58220] cursor-pointer"> Sign Up</span>
          </p>
        )}
      </div>
    </div>
  );
}
