import { useState } from 'react';
import WelcomeOne from './WelcomeOne';
import WelcomeTwo from './WelcomeTwo';

export default function Welcome() {
  const [auto, setAuto] = useState(false);
  const [colorOne, setColorOne] = useState('');
  const [colorTwo, setColorTwo] = useState('');
  const [colorThree, setColorThree] = useState('');
  const [colorFour, setColorFour] = useState('');
  const [widthOne, setWidthOne] = useState(70);
  const [widthTwo, setwidthTwo] = useState('');
  const [widthThree, setwidthThree] = useState('');
  const [widthFour, setwidthFour] = useState('');

  const [count, setCount] = useState(1);
  const [login, setLogin] = useState(false);
  const [reset, setReset] = useState(false);
  const [resetLogin, setResetLogin] = useState(false);

  const showAuto = () => {
    setAuto(true);
    setColorOne('#01a926');
    setColorTwo('#f58220');
    setWidthOne(40);
    setwidthTwo(70);
    setCount(2);
    setLogin(false);
  };

  const [pass, setPass] = useState(false);
  const showPass = () => {
    setPass(true);
    setColorTwo('#01a926');
    setColorThree('#f58220');
    setwidthTwo(40);
    setwidthThree(70);
    setCount(3);
  };

  const showReset = () => {
    setReset(true);
  };

  const showLogin = () => {
    setLogin(true);
    setColorThree('#01a926');
    setColorFour('#f58220');
    setwidthThree(40);
    setwidthFour(70);
    setCount(4);
    setResetLogin(true);
    console.log(reset);
  };

  const [userLogin, setUserLogin] = useState(false);
  const [loginCount, setLoginCount] = useState(1);
  const [stepOne, setStepOne] = useState('#f58220');
  const [stepTwo, setStepTwo] = useState();
  const [stepWidth, setStepWidth] = useState(70);
  const [stepTwoWidth, setStepTwoWidth] = useState();

  const showUserLogin = () => {
    setUserLogin(true);
  };

  const [otpPage, setOtpPage] = useState(false);
  const showOtpPage = () => {
    setOtpPage(true);
    setStepOne('#01a926');
    setStepTwo('#f58220');
    setStepWidth(40);
    setStepTwoWidth(70);
    setLoginCount(2);
  };

  return (
    <div className="grid grid-cols-2 ">
      <WelcomeOne
        auto={auto}
        setAuto={setAuto}
        showAuto={showAuto}
        pass={pass}
        login={login}
        otpPage={otpPage}
      />
      <WelcomeTwo
        auto={auto}
        setAuto={setAuto}
        showAuto={showAuto}
        colorOne={colorOne}
        colorTwo={colorTwo}
        colorThree={colorThree}
        colorFour={colorFour}
        pass={pass}
        showPass={showPass}
        count={count}
        widthOne={widthOne}
        widthTwo={widthTwo}
        widthThree={widthThree}
        widthFour={widthFour}
        login={login}
        showLogin={showLogin}
        loginCount={loginCount}
        stepOne={stepOne}
        stepTwo={stepTwo}
        stepWidth={stepWidth}
        stepTwoWidth={stepTwoWidth}
        userLogin={userLogin}
        showUserLogin={showUserLogin}
        otpPage={otpPage}
        showOtpPage={showOtpPage}
        reset={reset}
        showReset={showReset}
        resetLogin={resetLogin}
      />
    </div>
  );
}
