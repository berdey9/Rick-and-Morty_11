export default function validate(input) {
  const error = {};
  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = new RegExp("[0-9]");
  if (!regexEmail.test(input.Email)) {
    error.Email = "Ingresar el mail de ejemplo para continuar";
  }
  if (!input.Email) {
    error.Email = "Ingresar el mail de ejemplo para continuar";
  }
  if (input.Email.length > 35) {
    error.Email = "No mas de 35 caracteres";
  }
  if (!regexPassword.test(input.Password)) {
    error.Password = "Ingresar el password ejemplo para continuar";
  }
  if (input.Password.length < 6 || input.Password.length > 10) {
    error.Password = "Ingresar el password ejemplo para continuar";
  }
  return error;
}
