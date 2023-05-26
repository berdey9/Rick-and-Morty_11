import { useSelector } from "react-redux";
import Card from "../card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <>
      {favorites.map(({ character }) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            image={character.image}
          />
        );
      })}
    </>
  );
};
export default Favorites;
