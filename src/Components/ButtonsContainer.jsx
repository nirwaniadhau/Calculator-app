
import styles from './ButtonsContainer.module.css';
import Buttons from './Buttons';
function ButtonsContainer({onButtonClick}){
    return <Buttons onButtonClick={onButtonClick} />
}
export default ButtonsContainer;
