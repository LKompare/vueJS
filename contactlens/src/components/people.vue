<template>
    <div id="people">
      <div>
        <h1>Names</h1>
        <ul>
          <li v-for="person in people">
            <router-link :to="{ name: 'person', params: {person}}">{{person.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>


<script>
import PersonDetails from './person'

export default {
  name: "people",
  props:["people"],
  components: {
    PersonDetails
  },
  data () {
    return {
      sidebar: false,
    }
  },
}
</script>

<style scoped>

</style>