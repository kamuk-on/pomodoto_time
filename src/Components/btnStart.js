import Button from "./button";

const btnStart = ({typeBg, handleStartBtn, startBtn}) => {

    return (
        <div>
            <Button name={(startBtn) ? 'PAUSE':'START'} typeBtn={`${(startBtn) ? 'pause':'start'}`} typeBg={`${typeBg}BtnColor`} onClick={() => handleStartBtn(!startBtn)}/>
        </div>
    );
}

export default btnStart;

