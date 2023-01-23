import './bootstrap';
import 'admin-lte/dist/css/adminlte.css'
import 'admin-lte/dist/js/adminlte.js'
import "admin-lte/plugins/fontawesome-free/css/all.min.css"
  // import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  import "admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
  import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
  import "admin-lte/plugins/jqvmap/jqvmap.min.css"
  import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
  import "admin-lte/plugins/daterangepicker/daterangepicker.css"
  import "admin-lte/plugins/summernote/summernote-bs4.min.css"
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})