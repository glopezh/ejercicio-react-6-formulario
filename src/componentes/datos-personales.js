export const datosPersonales = () => {

  return (
    <>
      <form>
        <p><span>Datos personales</span></p>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" />
        <label htmlFor="nombre">Apellido:</label>
        <input type="text" id="apellido" />
        <label htmlFor="correo-electronico">Correo Electronico:</label>
        <input type="email" id="correo-electronico" />
        <button type="submit">Continuar</button>
      </form>
    </>
  );
}
