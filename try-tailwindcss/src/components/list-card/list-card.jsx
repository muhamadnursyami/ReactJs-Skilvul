import style from "./list-card.module.css"
function ListCard () {

    return(

        <div className={style.listCard}>
            <div className={style.card}>satu</div>
            <div className={style.card}>dua</div>
            <div className={style.card}>tiga</div>
            
        </div>
        )
}

export default ListCard;