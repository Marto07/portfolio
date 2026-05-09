<template>
  <q-layout>
    <HeaderNav />
    <q-page-container>

      <router-view />

      <FooterNav />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderNav from 'src/components/HeaderNav.vue'
import FooterNav from 'src/components/FooterNav.vue';
</script>

<style scoped lang="scss">

</style>
