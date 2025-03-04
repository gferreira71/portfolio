<template>
  <section class="contact" id="contact">
    <div class="section-title">{{ $t("contact.title") }}</div>
    <div class="container">
      <div class="contact-helper">
        <div>{{ $t("contact.info.work_together") }}</div>
        <div>
          {{ $t("contact.info.contact_me") }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import "./../assets/variables.scss";

.contact {
  background: $black-background;
  color: #fff;
  border-top: 2px solid #005597;

  .contact-helper {
    color: $highlighted-gold;
    text-align: center;
    margin-bottom: 16px;
    font-size: 16px;
  }
}

@media (max-width: 540px) {
  .contact {
    .contact-helper {
      font-size: 14px;
    }
  }
}
</style>
