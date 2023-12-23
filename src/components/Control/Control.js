import styles from './Control.module.scss';
import Button from '../Button/Button';

const Control = props => {
    return (
      <div className={styles.timeControl}>
        <Button action={props.startTime}>START</Button>
        <Button action={props.stopTime}>STOP</Button>
        <Button action={props.resetTime}>RESET</Button>
      </div>
    )
}

export default Control;