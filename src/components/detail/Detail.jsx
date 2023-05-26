import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailId]);
  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Detail </h1>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
