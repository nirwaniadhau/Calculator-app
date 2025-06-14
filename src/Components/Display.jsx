
import styles from './Display.module.css';
function Display({value}){

    
    return  <input type="text" className={styles.display} value={value}/>
}
export default Display;