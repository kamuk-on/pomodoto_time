import Button from "./button";

const btnNav = ({typeBg}) => {
    return (
        <div>
            <Button name='Report' typeBtn='nav' typeBg={`${typeBg}TwoBg`} />
            <Button name='Setting' typeBtn='nav' typeBg={`${typeBg}TwoBg`} />
            <Button name='Login' typeBtn='nav' typeBg={`${typeBg}TwoBg`} />
        </div>
    )
}

export default btnNav;