<script setup>
import contacts from 'src/data/contact'
</script>
<template>
  <q-footer
    class="footer-compact text-center"
  >

    <div class="footer-content">

      <span class="footer-text">
        © 2026 Martin Dev
      </span>

      <span class="footer-separator">|</span>

      <q-btn
        flat
        dense
        size="md"
        icon="mdi-github"
        type="a"
        :href="contacts.github"
        target="_blank"
        class="footer-icon"
      />

      <q-btn
        flat
        dense
        size="md"
        icon="mdi-linkedin"
        type="a"
        :href="contacts.linkedin"
        target="_blank"
        class="footer-icon"
      />

    </div>

  </q-footer>
</template>

<style scoped lang="scss">

.footer-compact {
  background-color: #1a1f26;
  padding: 12px 0;
}

/* Todo en una línea */

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

/* Texto muy discreto */

.footer-text {
  font-size: 11px;
  color: rgba(0, 180, 180, 0.6);
  letter-spacing: 1px;
}

/* Separador */

.footer-separator {
  color: rgba(0, 180, 180, 0.4);
}

/* Iconos chicos */

.footer-icon {
  color: #00b4b4;
  transition: all 0.2s ease;
}

.footer-icon:hover {
  color: white;
}

</style>