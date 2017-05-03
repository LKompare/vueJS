<template>
  <div id='app'>
    <h1>Hi!</h1>
    <people :people="people">
    </people>
  </div>
</template>



<script>
import People from './components/people'
import PersonDetails from './components/person'

export default { 
  name: 'app',
  components: {
    People,
    PersonDetails
  },
  data () {
    return {
      people: [],
      person: ''
    }
  }
}
</script>
