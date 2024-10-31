<template>
  <div>
    <GoBack />
    <h1>Random Facts:</h1>
    <img src="../assets/logo.png" alt="logo">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'; 
import GoBack from '@/components/GoBack.vue';

export default {
  components: {
    HelloWorld,
    GoBack,
  },
};
</script>