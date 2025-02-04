
import style from "./singlemovie.module.css"

function Singlemovie(p) {
    return (
        <div className={style.movie}>
            <div className={style.singlemovie}>
                <img className={style.img} src={p.article.poster_path} alt="No poster available" />
                <div className={style.title}>
                    <p className={style.h}>{p.article.original_title}</p>
                </div>
            </div>
        </div>
    )
}

export default Singlemovie
