<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    
    <div v-for="(tech, key) in technologies" :key="key">
      <img :src="tech.icon" :alt="tech.name" style="width: 24px; height: 24px;" />
    </div>

  </q-page>
</template>

<script setup>
import technologies from  'src/data/technologies'
</script>
