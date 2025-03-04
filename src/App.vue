<template>
  <HomeComponent />
  <NavComponent :activeSection="activeSection" />
  <main>
    <AboutComponent />
    <SkillsComponent />
    <ExperiencesComponent />
    <ProjectsComponent />
    <ContactComponent />
  </main>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeComponent from "./components/HomeComponent.vue";
import NavComponent from "./components/NavComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import ExperiencesComponent from "./components/ExperiencesComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default defineComponent({
  components: {
    HomeComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  },
  data() {
    return {
      activeSection: "home",
    };
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href")!);
        target?.scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, _) => {
      const activeSectionElt = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      if (activeSectionElt) {
        this.activeSection = activeSectionElt?.id;
      }
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  },
  methods: {},
});
</script>

<style lang="scss">
@import "./assets/variables.scss";

section {
  padding: 70px 0 70px 0;
  position: relative;
  background-color: var(--section-background-even);
  color: var(--section-text-color);

  &.odd {
    background: var(--section-background-odd);
    box-shadow: 0px 0px 10px #00000042;
    z-index: 9;
  }

  .section-title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:after {
      content: "";
      display: block;
      background-color: $dark-grey;
      height: 4px;
      width: 70px;
      margin-top: 12px;
    }
  }
}

@media (max-width: 540px) {
  section .section-title {
    font-size: 30px;
  }
}

@media (max-width: 860px) {
  section .section-title {
    font-size: 28px;
  }
}
</style>
