<template>
  <div class="PersonDetails">
    <h1>Details</h1>  
      {{person.name}}
<!--       <h1>{{person.name}}</h1>
      <div>Height: {{person.height}}</div>
      <div>Mass: {{person.mass}}</div>
      <div>Hair Color: {{person.hair_color}}</div>
      <br/> -->
      <router-link to="/">Back to people</router-link>
    </div>
</template>


<script>

export default {
  name: "PersonDetails",
  props: ["person"],

}

</script>

