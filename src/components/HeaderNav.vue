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
    <q-toolbar class="q-px-sm q-px-md-md q-py-xs">

      <div class="header-logo">
        <!-- Martin Dev -->
      </div>

      <q-space />

      <!-- Navegación con gutter responsivo -->
      <div class="row items-center q-gutter-xs q-gutter-sm-sm header-nav no-wrap">

        <q-btn
          flat
          label="Inicio"
          class="header-btn"
          @click="handleHome"
        />

        <q-btn
          flat
          label="Acerca"
          class="header-btn"
          @click="handleAboutMe"
        />

        <q-btn
          flat
          label="Proyectos"
          class="header-btn"
          @click="handleProjects"
        />

        <q-btn
          flat
          label="Contacto"
          class="header-btn header-btn-accent"
          @click="handleHireMe"
        />

      </div>

    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">
.header-minimal {
  background: #1a1f26;
}

.header-nav {
  // Evita que los botones salten de línea pase lo que pase
  flex-wrap: nowrap;
}

.header-btn {
  color: white;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s ease;
  
  // Ajustes para móviles (xs)
  @media (max-width: $breakpoint-xs-max) {
    font-size: 11px;      // Bajamos un poco el tamaño
    letter-spacing: 0.5px; // Reducimos espacio entre letras
    padding: 4px 6px;     // Reducimos el área de click interna para que entren
    min-height: unset;    // Quitamos altura mínima por defecto de Quasar
  }
}

.header-btn:hover {
  color: #00b4b4;
}

.header-btn-accent {
  color: #00b4b4;
  font-weight: bold;
}

.header-logo {
  font-size: 14px;
  color: rgba(0, 180, 180, 0.8);
}
</style>