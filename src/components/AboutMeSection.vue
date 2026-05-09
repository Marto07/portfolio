<template>
  <div class="portfolio-hero q-py-xl">
    <div class="row items-center justify-center full-height q-px-xl">
      
      <!-- Contenedor del grid de 2 columnas -->
      <div class="col-12 col-lg-10">
        <div class="row items-center q-col-gutter-xl">
          
          <!-- Lado izquierdo: Texto -->
          <div class="col-12 col-md-6">
            <div class="text-container">
              <div class="text-h4 text-weight-bold text-white uppercase q-mb-sm">
                acerca de <span class="text-teal-accent">mi</span>
              </div>
              
              <div class="text-white q-mt-md">
                <p class="text-body1 text-grey-3">
                  Soy desarrollador web full stack con orientación al backend. 
                  Trabajo principalmente con PHP y Laravel para el desarrollo del lado del servidor, 
                  y utilizo Vue para construir interfaces modernas y funcionales.

                  Me gusta participar en todo el proceso de desarrollo de una aplicación, 
                  desde la lógica del backend hasta la creación de interfaces que permitan una buena experiencia de usuario.
                  Disfruto construir proyectos completos, manteniendo un enfoque en la organización del código, 
                  la mantenibilidad y las buenas prácticas.
                </p>
                <!-- Puedes agregar más párrafos o información aquí -->
              </div>

              
            </div>
          </div>

          <!-- lado derecho: imagen -->
          <div class="col-12 col-md-6">
            <div class="illustration-container flex justify-center items-center">
              <div class="illustration-wrapper">
                <img 
                  src="~assets/images/writing_online.svg" 
                  alt="Creative UI Designer Illustration"
                  class="illustration-image"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['hireMe', 'downloadCV'])
</script>

<style lang="scss" scoped>
.portfolio-hero {
  background-color: #1a1f26;
  overflow: hidden;
  min-height: 100vh;         
}

.illustration-container {
  height: 100%;                /* Toma toda la altura disponible del row */
  min-height: 420px;           /* Altura mínima en mobile */
}

.illustration-wrapper {
  position: relative;
  width: 100%;
  max-width: 520px;            /* ← Ajusta este valor según quieras que sea el tamaño máximo */
  aspect-ratio: 1 / 1;         /* Cambia según el aspect ratio de tu imagen (ej: 16/9, 4/3, etc) */
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-image {
  width: 90%;
  height: 90%;
  object-fit: contain;         /* ← Esto es clave: fitea sin estirar */
  object-position: center;
  filter: drop-shadow(0 20px 30px rgba(0, 180, 180, 0.25)); /* opcional: bonito efecto */
}

.uppercase {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.text-teal-accent {
  color: #00b4b4;
}

.illustration-container {
  position: relative;
}

.illustration-placeholder {
  width: 100%;
  max-width: 480px;
  aspect-ratio: 1 / 1;           /* mantiene proporción cuadrada o ajusta según necesites */
  background-color: rgba(0, 180, 180, 0.1);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(0, 180, 180, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.illustration-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
}

/* Opcional: efecto hover en la ilustración */
.illustration-placeholder:hover {
  transform: translateY(-10px);
  transition: transform 0.4s ease;
  box-shadow: 0 30px 60px rgba(0, 180, 180, 0.25);
}

/* Alineación del texto a la izquierda */
.text-container p {
  text-align: left;
  line-height: 1.7;
}
</style>