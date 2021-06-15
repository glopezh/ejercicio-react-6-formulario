export const datosAcceso = () => {

  return (
    <>
      <form>
        <p><span>Datos de acceso</span></p>
        <label htmlFor="nombre_usuario">Nombre de usuario:</label>
        <input type="text" id="nombre_usuario" />
        <label htmlFor="contraseya">Contraseña:</label>
        <input type="password" id="contraseya" />
        <label htmlFor="contraseya_repetir">Repetir contraseña</label>
        <input type="password" id="contraseya_repetir" />
        <button type="submit">Continuar</button>
      </form>
    </>
  );
}
