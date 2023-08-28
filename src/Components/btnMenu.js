import Button from "./button";

const btnMenu = ({handleBackground, typeBg}) => {

    return (
        <div>
            <Button name='Pomodoro' typeBtn='menu' btnActive={(typeBg ==='pomodoroTime') ? typeBg+'BtnActive':''} onClick={() => handleBackground('pomodoroTime')}  />
            <Button name='Short Break' typeBtn='menu' btnActive={(typeBg ==='shortBreak') ? typeBg+'BtnActive':''} onClick={() => handleBackground('shortBreak')} />
            <Button name='Long Break' typeBtn='menu' btnActive={(typeBg ==='longBreak') ? typeBg+'BtnActive':''} onClick={() => handleBackground('longBreak')} />
        </div>
    );
}

export default btnMenu;