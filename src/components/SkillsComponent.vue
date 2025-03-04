<template>
  <section class="skills odd" id="skills">
    <div class="section-title">{{ $t("skills.title") }}</div>
    <div class="skills-list">
      <div class="skills-row">
        <div class="skill">
          <img
            :title="$t('skills.img_alt.html')"
            :alt="$t('skills.img_alt.html')"
            src="./../assets/images/skills/html.webp"
            width="44px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.html") }}
          </span>
        </div>
        <div class="skill">
          <img
            :title="$t('skills.img_alt.angular')"
            :alt="$t('skills.img_alt.angular')"
            src="./../assets/images/skills/angular.png"
            width="50px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.angular") }}
          </span>
        </div>
        <div class="skill">
          <img
            :title="$t('skills.img_alt.java')"
            :alt="$t('skills.img_alt.java')"
            src="./../assets/images/skills/java.png"
            width="50px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.java") }}
          </span>
        </div>
      </div>
      <div class="skills-row">
        <div class="skill">
          <img
            :title="$t('skills.img_alt.javascript')"
            :alt="$t('skills.img_alt.javascript')"
            src="./../assets/images/skills/js.png"
            width="50px"
            height="50px"
            class="js-logo"
          />
          <span class="skill-logo">
            {{ $t("common.stack.javascript") }}
          </span>
        </div>
        <div class="skill">
          <img
            :title="$t('skills.img_alt.css')"
            :alt="$t('skills.img_alt.css')"
            src="./../assets/images/skills/css.png"
            width="50px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.css") }}
          </span>
        </div>
        <div class="skill">
          <img
            :title="$t('skills.img_alt.node_js')"
            :alt="$t('skills.img_alt.node_js')"
            src="./../assets/images/skills/node.png"
            width="46px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.node_js") }}
          </span>
        </div>
        <div class="skill">
          <img
            :title="$t('skills.img_alt.git')"
            :alt="$t('skills.img_alt.git')"
            src="./../assets/images/skills/git.png"
            width="50px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.git") }}
          </span>
        </div>
      </div>
      <div class="skills-row">
        <div class="skill">
          <img
            :title="$t('skills.img_alt.typescript')"
            :alt="$t('skills.img_alt.typescript')"
            src="./../assets/images/skills/ts.png"
            width="50px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.typescript") }}
          </span>
        </div>
        <div class="skill">
          <img
            :title="$t('skills.img_alt.vue')"
            :alt="$t('skills.img_alt.vue')"
            src="./../assets/images/skills/vue.webp"
            width="100px"
            height="87px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.vue") }}
          </span>
        </div>
        <div class="skill">
          <img
            :title="$t('skills.img_alt.cypress')"
            :alt="$t('skills.img_alt.cypress')"
            src="./../assets/images/skills/cypress.svg"
            width="50px"
            height="50px"
          />
          <span class="skill-logo">
            {{ $t("common.stack.cypress") }}
          </span>
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

.skills {
  .skills-list {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .skills-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .skills-row:not(:last-child) {
      margin-right: 25px;
    }

    .skill {
      border: double 3px transparent;
      height: 100px;
      width: 130px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 12px;
      border-image-slice: 1;
      border-width: 3px;
      background-image: linear-gradient(
          var(--skills-image-background-color-top),
          var(--skills-image-background-color-bottom)
        ),
        radial-gradient(
          circle at top left,
          $highlighted-blue,
          $highlighted-gold
        );
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);

      img {
        height: 50px;
        width: auto;
      }

      .skill-logo {
        font-size: 14px;
        font-weight: 600;
        color: var(--section-text-color);
        text-transform: uppercase;
      }

      .js-logo {
        background: #31342f;
      }
    }

    .skill:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
}

@media (max-width: 860px) {
  .skills .skills-list .skill {
    width: 100px;
    height: 80px;

    img {
      height: 40px;
      width: auto;
    }

    .skill-logo {
      font-size: 12px;
    }
  }
}

@media (max-width: 365px) {
  .skills .skills-list {
    flex-direction: column;

    .skills-row,
    .skills-row:not(:last-child) {
      margin-right: unset;
      width: calc(100% - 3em);

      .skill {
        margin-bottom: 0.4rem;
        width: 100%;
        height: 60px;

        img {
          height: 28px;
          width: auto;
        }
      }
    }
  }
}
</style>
