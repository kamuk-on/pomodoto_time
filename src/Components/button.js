import '../style/button.css'

const Button = ({onClick, typeBtn, name, typeBg, btnActive}) => {
    /*let style

    className={`btn btn-${type}`}

    if (typeBtn === 'nav'){
        style = "btn--nav " + typeBg + "TwoBg"
    }
    if  (typeBtn === 'menu'){
        style = "btn--menu " + btnActive
    }
    if  (typeBtn === 'start'){
        style = "btn_start " + typeBg + "BtnColor"
    }
    */

    return (
        <button className={`btn btn--${typeBtn} ${typeBg} ${(typeBtn==='menu' ? btnActive:'')}`} onClick={onClick}>{name}</button>
    )
}
export default Button;