import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  // Estado => characters = [{-}, {-}];
  const [access, setAccess] = useState(false);
  //const email = "ejemplo@gmail.com";
  //const password = "123456";
  const navigate = useNavigate();
  const location = useLocation();
  /*Recordar que se cambio a arrow*/
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const query = `?email=${email}&password=${password}`;
      const { data } = await axios(URL + query);
      const { access } = data;
      setAccess(data);
      access && navigate("/Home");
    } catch (error) {
      return { error: error.message };
    }
  }
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  async function onSearch(id) {
    // 2 => { id: 2 }
    try {
      const url = "http://localhost:3001/rickandmorty/character/" + id;
      const { data } = await axios(url);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      return { error: error.message };
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((caracter) => caracter.id !== Number(id)));
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}{" "}
      {/*Si es distinto a /(home) mostra la barra de nav*/}
      <hr />
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:detailId" element={<Detail />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
