<template>
  <nav>
    <div class="link-wrap" :class="[isMenuExpanded ? 'visible' : undefined]">
      <a
        class="nav-item"
        href="#home"
        :class="{ active: activeSection === 'home' }"
        >{{ $t("nav.home") }}</a
      >
      <a
        class="nav-item"
        href="#about"
        :class="{ active: activeSection === 'about' }"
        >{{ $t("nav.about") }}</a
      >
      <a
        class="nav-item"
        href="#skills"
        :class="{ active: activeSection === 'skills' }"
        >{{ $t("nav.skills") }}</a
      >
      <a
        class="nav-item"
        href="#experiences"
        :class="{ active: activeSection === 'experiences' }"
        >{{ $t("nav.experiences") }}</a
      >
      <a
        class="nav-item"
        href="#projects"
        :class="{ active: activeSection === 'projects' }"
        >{{ $t("nav.projects") }}</a
      >
      <a
        class="nav-item"
        href="#contact"
        :class="{ active: activeSection === 'contact' }"
        >{{ $t("nav.contact") }}</a
      >
    </div>
    <div class="toggle-theme" @click="toggleTheme()">
      <span v-if="theme === 'light'">
        <span class="material-icons">light_mode</span>
      </span>
      <span v-else>
        <span class="material-icons">dark_mode</span>
      </span>
    </div>
    <div class="menu-expand" @click="toggleMenu()">
      <span class="material-icons">menu</span>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeService from "./../services/ThemeService";

export default defineComponent({
  data() {
    return {
      isMenuExpanded: false,
    };
  },
  computed: {
    theme() {
      return ThemeService.getTheme();
    },
  },
  props: {
    activeSection: {
      type: String,
      required: false,
    },
  },
  mounted() {
    ThemeService.initializeTheme();
  },
  methods: {
    toggleMenu() {
      this.isMenuExpanded = !this.isMenuExpanded;
    },
    toggleTheme() {
      ThemeService.toggleTheme();
    },
  },
});
</script>

<style lang="scss">
@import "./../assets/variables.scss";

nav {
  top: 0;
  position: sticky;
  background: $black-background;
  border-bottom: 6px solid $highlighted-blue;
  height: 53px;
  text-align: left;
  width: 100%;
  z-index: 99;
  align-items: center;
  display: inline-flex;
  justify-content: end;
  text-transform: uppercase;
  border-top: 1px solid #111111;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.4);

  .nav-item {
    padding: 0 20px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
  }

  .toggle-theme {
    cursor: pointer;
    margin-right: 12px;
    line-height: 10px;
    color: var(--nav-toggle-theme-icon);

    :hover {
      filter: sepia(1);
    }
  }
}

.menu-expand {
  cursor: pointer;
  padding-right: 10px;

  .material-icons {
    font-size: 36px;
    color: white;
  }
}

nav .link-wrap.visible {
  height: 250px;
}

nav .link-wrap {
  flex-direction: column;
  display: flex;
  width: 100%;

  .nav-item:first-child {
    padding-top: 18px;
  }

  .nav-item {
    cursor: pointer;
    padding: 8px 20px;
    transition: color 0.5s;

    &:hover,
    &.active {
      color: $highlighted-gold;
    }
  }
}

.link-wrap {
  background: #333;
  height: 0;
  max-width: 1200px;
  overflow: hidden;
  position: absolute;
  top: 52px;
  transition: height 0.3s ease-out;
  width: 100%;
}

@media screen and (min-width: 810px) {
  nav {
    .menu-expand {
      display: none;
    }
  }

  nav .link-wrap {
    background: none;
    height: initial;
    overflow: visible;
    position: initial;
    text-align: left;
    display: block;

    .nav-item {
      display: inline;
      font-size: initial;
      margin: 0 20px;
      padding: initial;
    }
  }
}

@media (min-width: $screen-width-m) {
  nav .link-wrap {
    width: 970px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}
@media (min-width: $screen-width-l) {
  nav .link-wrap {
    width: 1170px;
  }
}
</style>
