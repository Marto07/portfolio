<script setup>
import { projects as rawProjects, technologies as rawTechnologies } from 'src/data/index';

const projects = rawProjects.map(project => ({
  ...project,
  coverImage: new URL(
    `../assets/images/${project.coverImage}`,
    import.meta.url
  ).href
}))

const technologies = Object.fromEntries(
  Object.entries(rawTechnologies).map(([key, tech]) => [
    key,
    {
      ...tech,
      icon: new URL(
        `../assets/icons/${tech.icon}`,
        import.meta.url
      ).href
    }
  ])
)

const thumbStyle = {
  borderRadius: '5px',
  backgroundColor: '#5AC4B8',
  width: '5px',
  opacity: 0.75
};

const barStyle = {
  borderRadius: '9px',
  backgroundColor: '#027be3',
  width: '9px',
  opacity: 0.2
};

const goToGithub = (githubUrl) => {
  if (githubUrl) {
    window.open(githubUrl, '_blank');
  } else {
    alert('URL de GitHub no disponible para este proyecto.');
  }
}
</script>

<template>
  <div class="projects-hero q-py-xl">
    <div class="container q-mx-auto q-px-lg">   <!-- o q-mx-auto si querés centrar -->

      <div class="text-h4 text-white q-mb-xl text-center">Proyectos</div>

      <!-- Scroll horizontal -->
      <q-scroll-area
        horizontal
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        class="scroll-area"
      >
        <div class="row no-wrap q-gutter-lg">
          <div
            v-for="project in projects"
            :key="project.id"
            class="flex-shrink-0"
            :style="{ width: $q.screen.lt.md ? '260px' : '300px' }"
          >
            <q-card class="my-card full-height bg-grey-2" @click="goToGithub(project.githubUrl)">

              <q-img
                :src="project.coverImage ? project.coverImage : 'https://cdn.quasar.dev/img/parallax2.jpg'"
                style="height: 250px;"
                fit="cover"
              >
                <div class="absolute-bottom text-h6 text-right q-pa-md text-white text-shadow">
                  {{ project.title || 'Sin título' }}
                </div>
              </q-img>

              <q-card-section>
                <p class="text-grey-8 text-body2 q-mt-sm">
                  {{ project.shortDescription || 'Descripción breve del proyecto.' }}
                </p>
              </q-card-section>

              <!-- Tecnologías -->
              <q-card-actions align="left" class="q-gutter-sm q-px-md q-pb-md">
                <div
                  v-for="(tech, key) in project.technologies"
                  :key="key"
                  class="tech-icon"
                >
                  <img
                    :src="technologies[tech].icon"
                    :alt="technologies[tech].name"
                    :title="technologies[tech].name"
                  />
                </div>
              </q-card-actions>

            </q-card>
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-hero {
  background-color: #1a1f26;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.scroll-area {
  height: 70vh; 
  width: 70vw;
  @media(max-width: $breakpoint-xs) {
    height: 60vh
  }
}

.my-card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.my-card .q-card__section {
  flex: 1;
}
.tech-actions {
  margin-top: auto;
}
.my-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  cursor:pointer;
}

.tech-icon img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  opacity: 0.85;
  transition: all 0.2s ease;
}

.tech-icon img:hover {
  opacity: 1;
  transform: scale(1.1);
}

.text-shadow {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}
</style>