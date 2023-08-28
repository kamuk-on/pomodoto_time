import '../style/cubeTime.css'
import BtnMenu from "./btnMenu";
import BtnStart from "./btnStart";
import Timer from "./timer";

const cubeTime = ({handleBackground, handleStartBtn, typeBg, timeMinutes, timeSeconds, startBtn}) => {

    return (
        <div className={`cubeTime ${typeBg}TwoBg`}>
            <BtnMenu handleBackground={handleBackground} typeBg={typeBg} />
            <Timer timeMinutes={timeMinutes} timeSeconds={timeSeconds} />
            <BtnStart typeBg={typeBg} handleStartBtn={handleStartBtn} startBtn={startBtn} />
        </div>
    );
}

export default cubeTime;