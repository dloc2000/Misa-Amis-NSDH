<template>
  <div class="container">
      <TheHeader/>
      <div class="main">
          <TheMenu/>
          <TheContent/>
      </div>
  </div>
</template>

<script>
import TheHeader from "./layout/header/TheHeader.vue";
import TheMenu from "./layout/navbar/TheMenu.vue";
import TheContent from "./layout/content/TheContent.vue";


export default {
  name: 'App',
  components: {
    TheHeader,
    TheMenu,
    TheContent,
}
}
</script>

<style>
@import url("./css/main.css");
</style>
