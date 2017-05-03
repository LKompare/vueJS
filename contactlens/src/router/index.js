import Vue from 'vue'
import Router from 'vue-router'
import People from '@/components/people'
import PersonDetails from '@/components/person'
import Vuetify from 'vuetify'

Vue.use(Router) 
Vue.use(Vuetify)

const routes = [
// { path:"/", component: Loading},
{ path: "/", name: "people", component: People},
{ path: "/person", name: "person", component: PersonDetails, props: true}
]

export default new Router ({
  mode: 'history',
  base: __dirname,
  routes,

}

  // routes: [
  //   {
  //     path: '/',
  //     components: {
  //       default: Contacts
  //     }
  //   },
  //   {
  //     path: '/contact/:index', 
  //     components: { 
  //       Contacts,
  //       ContactDetails
  //     },
  //     props: { default: true }
  //   }
//   ]
)