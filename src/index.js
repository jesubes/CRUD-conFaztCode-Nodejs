// aqui en index.js solo se desea poner condigo de arranque de la aplicacion.

import app from './app.js'
import './database.js'
import { PORT } from './config.js'

app.listen(PORT, () => {
    console.log('Server Arriba PORT: ', PORT)
})

