<template>
  <div id="app">
    <nav>
      <AppLink to="/about">About</AppLink>
      <AppLink to="/random-facts">Random Facts</AppLink>
      <AppLink to="/contact">Contact</AppLink>
      <AppLink to="https://target.com">Shop</AppLink>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AppLink from '@/components/AppLink.vue';

export default {
  components: { AppLink },
};
</script>
