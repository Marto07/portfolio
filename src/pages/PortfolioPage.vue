<script setup>
import AboutMeSection from 'src/components/AboutMeSection.vue'
import HomeSection from 'src/components/HomeSection.vue'
import ProjectsSection from 'src/components/ProjectsSection.vue'
import ContactSection from 'src/components/ContactSection.vue'
import { handleHireMe, handleDownloadCV } from 'src/composables/useNavigation'
</script>

<template>
  <q-page class="portfolio-page">
    
    <!-- SECCIÓN 1: HOME -->
    <section id="home" class="section window-height">
      <HomeSection
        @hireMe="handleHireMe"
        @downloadCV="handleDownloadCV"
      />   <!-- o el contenido directo -->
    </section>

    <!-- SECCIÓN 2: ABOUT ME -->
    <section id="about" class="section window-height">
      <AboutMeSection />
    </section>

    <!-- SECCIÓN 3: PROJECTS -->
    <section id="projects" class="section">
      <ProjectsSection />
    </section>

    <!-- SECCIÓN 4: CONTACT -->
    <section id="contact" class="section">
      <ContactSection />
    </section>

    <!-- ... más secciones -->
    
  </q-page>
</template>

<style scoped>
.portfolio-page {
  scroll-behavior: smooth; 
}

.q-header { /* si tenés header fijo */
  position: fixed;
  z-index: 1000;
}


</style>