import styles from './List.module.css'
const List = (props) => {
    return (
        <article className={styles.List} >
            <img src={props.img} alt="" />
            <div className={styles.info}>
                <h2>{props.name}</h2>
                <h3>{props.age}</h3>
            </div>
        </article>
    )
}

export default List