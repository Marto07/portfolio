<script setup>
  import contacts from 'src/data/contact'
  const mail = contacts.email
  const phone = contacts.phone
  const linkedIn = contacts.linkedin
</script>
<template>
  <div class="row items-center justify-center full-height contact-hero q-px-xl">
    <div class="col-12 col-lg-10">
      <div class="row items-center q-col-gutter-xl">

        <!-- Lado izquierdo: Información de contacto -->
        <div class="col-12 col-md-6">
          <div class="text-h2 text-weight-bold text-white q-mb-md">
            TRABAJEMOS <span class="text-teal-accent">JUNTOS</span>
          </div>
          
          <div class="text-h4 text-grey-4 q-mb-xl">
            Estoy disponible para nuevos proyectos y colaboraciones.
          </div>

          <div class="contact-info q-mb-xl">
            <a class="contact-item" :href="`mailto:${ mail }`">
              <q-icon name="mail" size="28px" color="teal-accent" class="q-mr-md" />
              <div>
                <div class="text-white text-h6">Email</div>
                <div class="text-teal-accent text-body1">{{ mail }}</div>
              </div>
            </a>

            <a :href="`tel:${ phone }`" class="contact-item">
              <q-icon name="phone" size="28px" color="teal-accent" class="q-mr-md" />
              <div>
                <div class="text-white text-h6">Teléfono</div>
                <div class="text-teal-accent text-body1">{{ phone }}</div>
              </div>
            </a>

            <!-- LinkedIn (cuando lo tengas) -->
            <a :href="linkedIn" target="_blank" class="contact-item">
              <q-icon name="mdi-linkedin" size="28px" color="teal-accent" class="q-mr-md" />
              <div>
                <div class="text-white text-h6">LinkedIn</div>
                <div class="text-teal-accent text-body1">@Martin Coppa</div>
              </div>
            </a>
          </div>

          <q-btn
            rounded
            unelevated
            label="Enviar mensaje"
            color="teal-accent"
            text-color="dark"
            class="q-px-xl text-weight-bold"
            @click="$emit('sendMessage')"
          />
        </div>

        <!-- Lado derecho: Ilustración -->
        <div class="col-12 col-md-6">
          <div class="illustration-container flex justify-center items-center">
            <div class="illustration-wrapper">
              <img 
                src="~assets/images/hand_shake.svg" 
                alt="Contact Illustration"
                class="illustration-image"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.contact-hero {
  background-color: #1a1f26;
  overflow: hidden;
  min-height: 100vh;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(8px);
  }
}

.illustration-container {
  height: 100%;
  min-height: 420px;
}

.illustration-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
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
  filter: drop-shadow(0 25px 35px rgba(0, 180, 180, 0.25));
}

/* Reutilizamos los estilos que ya tenías */
.text-teal-accent {
  color: #00b4b4;
}

.text-h2 {
  line-height: 1.1;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
}
</style>