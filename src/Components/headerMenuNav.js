import '../style/headerMenuNav.css'
import BtnNav from "./btnNav";
import Logo from "./logo";

const headerMenuNav = ({typeBg}) => {
    return (
        <div className='App-nav'>
            <Logo />
            <BtnNav typeBg={typeBg}/>
        </div>
    );
}

export default headerMenuNav;