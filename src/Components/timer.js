import '../style/timer.css'

const timer = ({timeMinutes, timeSeconds}) => {

    return (
        <div className='num'>
            {("0" + Math.floor((timeMinutes))).slice(-2)}:
            {("0" + Math.floor((timeSeconds))).slice(-2)}
        </div>
    );
}

export default timer;