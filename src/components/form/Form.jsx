import styles from "./Form.module.css";
import React from "react";
import validate from "./Validation";
export default function Form(props) {
  const [userData, setUserData] = React.useState({
    Email: "",
    Password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validate({ ...userData, [name]: value }));
  };
  const [errors, setErrors] = React.useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label> Email: </label>
        <input
          placeholder="ejemplo@gmail.com"
          type="text"
          name="Email"
          value={userData.Email}
          onChange={handleChange}
        />
        <p className={styles.error}>{errors.Email ? errors.Email : null}</p>
        <label>Password: </label>
        <input
          placeholder="123456"
          type="Password"
          name="Password"
          value={userData.Password}
          onChange={handleChange}
        />
        <p className={styles.error}>
          {errors.Password ? errors.Password : null}
        </p>{" "}
        {/* Si hay error lo muestra, sino null(nada)*/}
        <button type="submit">Login</button>
        <hr />
      </form>
    </div>
  );
}
