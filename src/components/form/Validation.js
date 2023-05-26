export default function validate(input) {
  const error = {};
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = new RegExp("[0-9]");
  if (!regexEmail.test(input.Email)) {
    error.Email = "Debe ingresar un email valido";
  }
  if (!input.Email) {
    error.Email = "Por favor ingresar un nombre";
  }
  if (input.Email.length > 35) {
    error.Email = "No mas de 35 caracteres";
  }
  if (!regexPassword.test(input.Password)) {
    error.Password = "Al menos un número";
  }
  if (input.Password.length < 6 || input.Password.length > 10) {
    error.Password = "Por favor entre 6 y 10 caracteres";
  }
  return error;
}
