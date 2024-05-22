import styles from './styles.module.css';

export default function Blogcard({ imageSrc}) {

    return (

        <>
         <div className={styles.card}>
            <img src={imageSrc} alt="Project Image" className={styles.card__image} />
            <div className={styles.card__content}>
                <p className={styles.card__title}>Project Name</p>
                <p className={styles.card__description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <button className={styles.card__button}>Live Demo</button>
                <button className={`${styles.card__button} ${styles.secondary}`}>Source Code</button>
            </div>
        </div>
        </>


    )

}