export const login = () => {

  return (
    <>
      <form>
        <p><span>Login</span></p>
        <label htmlFor="nombre_usuario">Nombre de usuario:</label>
        <input type="text" id="nombre_usuario" />
        <label htmlFor="contraseya">Contraseña:</label>
        <input type="text" id="contraseya" />
        <label htmlFor="recordar-contraseya">
          <input
            type="checkbox"
            id="recordar-contraseya"

          />{" "}
          ¿Recordar contraseña?
        </label>
        <button type="submit">Continuar</button>
      </form>
    </>
  );
  }
