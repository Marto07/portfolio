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
    <section id="home" class="section">
      <HomeSection
        @hireMe="handleHireMe"
        @downloadCV="handleDownloadCV"
      />   
    </section>

    <!-- SECCIÓN 2: ABOUT ME -->
    <section id="about" class="section">
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

    
  </q-page>
</template>

<style lang="scss" scoped>

.portfolio-page {
  scroll-behavior: smooth; 
  background-color: $dark;
}

.q-header { 
  position: fixed;
  z-index: 1000;
}

.section {
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-height: 100vh;
  width: 100%;
}



</style>