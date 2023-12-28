import styles from './Timer.module.scss';

const Timer = props => {

    function milisecondsToTime(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);

        let millisec = milliseconds % 1000;
        seconds = seconds % 60;
        minutes = minutes % 60;
        hours = hours % 24;
    
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${padTo2Digits(millisec,3)}`;
      }  
      
    function padTo2Digits(num, lenght=2) {
        return num.toString().padStart(lenght, '0');
    }  

    return (<h1 className={styles.time}> { milisecondsToTime(props.miliseconds)}</h1>);
}

export default Timer;