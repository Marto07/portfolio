<template>
  <div class="row items-center justify-center full-height portfolio-hero q-px-xl">
    <div class="col-12 col-lg-10">
      <div class="row items-center q-col-gutter-xl">

        <!-- Lado izquierdo: Texto -->
        <div class="col-12 col-md-6 presentation">
          
          <div 
            class="
              text-h3 
              text-weight-bold 
              text-white uppercase 
              q-mb-none">
            desarrollador <span class="text-teal-accent">web</span>
          </div>
          <div 
            class="
              text-h3 
              text-weight-bold 
              text-teal-accent 
              uppercase 
              q-mt-none">
            full stack
          </div>
  
          <div class="row q-gutter-md q-mt-xl">
            <q-btn
              rounded
              unelevated
              label="Contactame"
              color="teal-accent"
              text-color="dark"
              class="q-px-xl text-weight-bold"
              @click="$emit('hireMe')"
            />
            <q-btn
              rounded
              outline
              label="descargar CV"
              color="grey-7"
              icon-right="download"
              class="q-px-lg text-white"
              @click="$emit('downloadCV')"
            />
          </div>
        </div>

        <!-- lado derecho: imagen -->
        <div class="col-12 col-md-6">
          <div class="illustration-container flex justify-center items-center">
            <div class="illustration-wrapper">
              <img 
                src="~assets/images/progresive_web_app.svg" 
                alt="fullstack-web-developer"
                class="illustration-image"
              />
            </div>
          </div>
        </div>



      </div>
    </div>

      
    </div>


</template>

<script setup>
</script>

<style lang="scss" scoped>
.portfolio-hero {
  background-color: $dark;
  overflow: hidden;
  min-height: 100vh;           
}


.illustration-container {
  height: 100%;                
  min-height: 420px;           
}

.illustration-wrapper {
  position: relative;
  width: 100%;
  max-width: 520px;            
  aspect-ratio: 1 / 1;         
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-image {
  width: 90%;
  height: 90%;
  object-fit: contain;         
  object-position: center;
  filter: drop-shadow(0 20px 30px rgba(0, 180, 180, 0.25)); 
}

.text-teal-accent {
  color: #00b4b4; 
}

.bg-teal-accent {
  background-color: #00b4b4;
}

.uppercase {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.text-h3 {
  line-height: 1.1;
  font-size: clamp(2.3rem, 8vw, 4.5rem);
}




</style>