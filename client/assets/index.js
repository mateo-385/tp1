function mandarNombre() {
  const nombre = document.getElementById('nombre')
  const mensaje = document.getElementById('mensaje')

  if (!nombre.value.trim()) {
    mensaje.innerText = 'El nombre no puede estar vacío.'
    mensaje.style.color = 'red'
    return
  }
  mensaje.style.color = ''

  fetch(`http://localhost:3000/saludo/${nombre.value}`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('mensaje').textContent = data
    })
    .catch((error) => {
      document.getElementById('mensaje').textContent =
        'Error al conectarse al servidor.'
      console.error('Error:', error)
    })
}
