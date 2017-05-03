<template>
  <div>
      <h1>Hi!</h1>
      <router-view :people="people"></router-view>
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
    }
  },
  methods: {
    fetchPeople(){
      var api = `https://swapi.co/api/people/`
      this.$http.get(api).then(function(response){
        this.people = response.body.results;
        console.log(this.$router, this.$route)
      })
    }
  },
  created(){
    this.fetchPeople()
  }
}
</script>
