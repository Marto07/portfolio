<script setup>
import { 
  handleHireMe, 
  handleHome, 
  handleAboutMe, 
  handleProjects 
  } from 'src/composables/useNavigation';
</script>

<template>
  <q-header
    reveal
    elevated
    overlay
    class="header-minimal"
  >
    <q-toolbar class="q-px-md q-py-xs">

      <!-- Espacio para futura marca o logo (izquierda) -->
      <div class="header-logo">
        <!-- Podés poner "Martin Dev" después -->
      </div>

      <q-space />

      <!-- Navegación -->
      <div class="row items-center q-gutter-sm header-nav">

        <q-btn
          flat
          label="Home"
          class="header-btn"
          @click="handleHome"
        />

        <q-btn
          flat
          label="About"
          class="header-btn"
          @click="handleAboutMe"
        />

        <q-btn
          flat
          label="Projects"
          class="header-btn"
          @click="handleProjects"
        />

        <q-btn
          flat
          label="Contact"
          class="header-btn header-btn-accent"
          @click="handleHireMe"
        />

      </div>

    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">

.header-minimal {
  background: #1a1f26; /* semitransparente */
}

/* Botones */

.header-btn {
  color: white;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.header-btn:hover {
  color: #00b4b4;
}

/* Contact destacado */

.header-btn-accent {
  color: #00b4b4;
}

/* Espacio para logo futuro */

.header-logo {
  font-size: 14px;
  color: rgba(0, 180, 180, 0.8);
}

</style>