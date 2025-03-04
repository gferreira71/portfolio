<template>
  <div class="badge-container">
    <div class="badge">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
@import "./../assets/variables.scss";

.badge-container {
  padding: 2px;

  .badge {
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid var(--highlighted-element);
    color: var(--highlighted-element);
    font-weight: 700;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>
