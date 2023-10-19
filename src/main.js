import router from '@/routers'
import App from '@/core/App'

import '@/assets/scss/global.scss'

const app = new App(router)

app.run()
