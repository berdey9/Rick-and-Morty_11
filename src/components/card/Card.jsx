import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav({ props });
    }
  };
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]);
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={props.image} alt="Personaje" />
          <br />
          <p className={styles.title}>{props.name}</p>
        </div>
        <div className={styles.flipCardBack}>
          <button
            onClick={() => props.onClose(props.id)}
            className={styles.btn}
          >
            CERRAR
          </button>
          <Link to={`/detail/${props.id}`}>
            <p className={styles.title}>👉 + INFO </p>
          </Link>
          <p className={styles.titleBack}>Status: {props.status}</p>
          <p className={styles.titleBack}>Specie: {props.species}</p>
          <p className={styles.titleBack}>Gender: {props.gender}</p>
          <p className={styles.titleBack}>Origin: {props.origin}</p>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFav(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFav(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
