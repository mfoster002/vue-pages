<template>
  <div class="hello">
    <button @click="fetchData" class="click-me">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      fetch("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", {
        method: "GET",
        headers: {
      "x-rapidapi-key": "b594523094msh9d4be5879bacd62p1cbff3jsnedcee5b8061d",
      "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com",
    },
      })
        .then((response) => response.json())
        .then((data) => {
          this.fact = data[0].fact;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
