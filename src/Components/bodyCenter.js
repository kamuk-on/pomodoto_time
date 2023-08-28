import '../style/bodyCenter.css'
import CubeTime from "./cubeTime";
/*import SectionTask from "./sectionTask";*/

const bodyCenter = ({handleBackground, handleStartBtn, typeBg, timeMinutes, timeSeconds, startBtn}) => {


    return (
        <div className={`App-header`}>
            <CubeTime handleBackground={handleBackground} handleStartBtn={handleStartBtn} typeBg={typeBg} 
            timeMinutes={timeMinutes} timeSeconds={timeSeconds} startBtn={startBtn}/>
        </div>
    );
    /*<SectionTask/>*/
}
export default bodyCenter;