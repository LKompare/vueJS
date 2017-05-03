<template>
    <div id="people">
      <div>
        <h1>Names</h1>
        <ul>
          <li v-for="person in people">
            <router-link :to="{ name: 'person', params: {person: person}}">{{person.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>


<script>
import PersonDetails from './person'

export default {
  name: "people",
  components: {
    PersonDetails
  },
  data () {
    return {
    sidebar: false,
    people: []
    }
  },
  methods: {
    fetchPeople(){
      var api = `https://swapi.co/api/people/`
      this.$http.get(api).then(function(response){
        this.people = response.body.results;
        this.$router.push("people")
        console.log(this.people)
      })
    }
  },
  computed: {
  },
  created: function(){
    console.log('hi')
    this.fetchPeople();
  }
}
</script>

<style scoped>

</style>