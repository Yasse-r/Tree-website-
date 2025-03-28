import tobio from '../assets/adult-tobio.jpg'
import shoyo from '../assets/adult-hinata.jpg'
import styles from './Card.module.css'



function Card({pic = false , name = "karasuno player", height=0}){
    return(
        <section className={styles.sec}>
            <img className={styles.image} 
           alt='image' src={pic ? tobio : shoyo}></img>
           <p>name : {name} </p>
           <p>height : {height} </p>
        </section>

    );
}
Card.defaultProps = {
    pic: true,
    name: "Karasuno Player",
    height: 0,  // Fix: Typo in "heigth" → should be "height"
};
export default Card
