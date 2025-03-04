<template>
  <section class="projects odd" id="projects">
    <div class="section-title">{{ $t("projects.title") }}</div>

    <div class="container">
      <div class="project">
        <div class="project-title">
          <span
            class="material-icons"
            :title="$t('projects.portfolio.logo_alt')"
            :alt="$t('projects.portfolio.logo_alt')"
            >work</span
          >
          {{ $t("projects.portfolio.title") }}
        </div>
        <div class="project-image">
          <img
            src="./../assets/images/projects/portfolio.webp"
            :title="$t('projects.portfolio.img_alt')"
            :alt="$t('projects.portfolio.img_alt')"
            width="900px"
            height="400px"
          />
        </div>
        <div class="project-description">
          {{ $t("projects.portfolio.description") }}
        </div>
        <div class="project-stack">
          <Badge>{{ $t("common.stack.vue") }}</Badge>
          <Badge>{{ $t("common.stack.html") }}</Badge>
          <Badge>{{ $t("common.stack.scss") }}</Badge>
          <Badge>{{ $t("common.stack.photoshop") }}</Badge>
        </div>

        <!-- <div class="project-actions">
          <div class="project-action">
            {{ $t("projects.buttons.view_github") }}
          </div>
        </div> -->
      </div>

      <div class="project">
        <div class="project-title">
          <span
            class="material-icons"
            :title="$t('projects.m3u_cleaner.logo_alt')"
            :alt="$t('projects.m3u_cleaner.logo_alt')"
            >play_circle</span
          >
          {{ $t("projects.m3u_cleaner.title") }}
        </div>
        <div class="project-image">
          <img
            src="./../assets/images/projects/m3u_cleaner.png"
            :title="$t('projects.m3u_cleaner.img_alt')"
            :alt="$t('projects.m3u_cleaner.img_alt')"
            width="900px"
            height="400px"
          />
        </div>
        <div class="project-description">
          {{ $t("projects.m3u_cleaner.description") }}
        </div>
        <div class="project-stack">
          <Badge>{{ $t("common.stack.vue") }}</Badge>
          <Badge>{{ $t("common.stack.html") }}</Badge>
          <Badge>{{ $t("common.stack.scss") }}</Badge>
          <Badge>{{ $t("common.stack.node_js") }}</Badge>
          <Badge>{{ $t("common.stack.express") }}</Badge>
        </div>

        <!-- <div class="project-actions">
          <div class="project-action">
            {{ $t("projects.buttons.view_live") }}
          </div>
          <div class="project-action">
            {{ $t("projects.buttons.view_github") }}
          </div>
        </div> -->
      </div>

      <div class="project">
        <div class="project-title">
          <span
            class="material-icons"
            :title="$t('projects.staddict.logo_alt')"
            :alt="$t('projects.staddict.logo_alt')"
            >sports_soccer</span
          >
          {{ $t("projects.staddict.title") }}
        </div>
        <div class="project-image">
          <img
            src="./../assets/images/projects/staddict.webp"
            :title="$t('projects.staddict.img_alt')"
            :alt="$t('projects.staddict.img_alt')"
            width="900px"
            height="400px"
          />
        </div>
        <div class="project-description">
          {{ $t("projects.staddict.description") }}
        </div>
        <div class="project-stack">
          <Badge>{{ $t("common.stack.vue") }}</Badge>
          <Badge>{{ $t("common.stack.html") }}</Badge>
          <Badge>{{ $t("common.stack.scss") }}</Badge>
          <Badge>{{ $t("common.stack.node_js") }}</Badge>
          <Badge>{{ $t("common.stack.express") }}</Badge>
        </div>

        <!-- <div class="project-actions">
          <div class="project-action">
            {{ $t("projects.buttons.view_live") }}
          </div>
        </div> -->
      </div>

      <div class="project">
        <div class="project-title">
          <span
            class="material-icons"
            :title="$t('projects.geo_dataset.logo_alt')"
            :alt="$t('projects.geo_dataset.logo_alt')"
            >cloud</span
          >
          {{ $t("projects.geo_dataset.title") }}
        </div>
        <div class="project-image">
          <img
            src="./../assets/images/projects/climato.png"
            :title="$t('projects.geo_dataset.img_alt')"
            :alt="$t('projects.geo_dataset.img_alt')"
            width="900px"
            height="400px"
          />
        </div>
        <div class="project-description">
          {{ $t("projects.geo_dataset.description") }}
        </div>
        <div class="project-stack">
          <Badge>{{ $t("common.stack.angular") }}</Badge>
          <Badge>{{ $t("common.stack.html") }}</Badge>
          <Badge>{{ $t("common.stack.scss") }}</Badge>
          <Badge>{{ $t("common.stack.node_js") }}</Badge>
          <Badge>{{ $t("common.stack.express") }}</Badge>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Badge from "./Badge.vue";
export default defineComponent({
  components: {
    Badge,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import "./../assets/variables.scss";

.projects {
  .project {
    padding: 30px 12px;

    .project-title {
      font-size: 24px;
      margin-bottom: 12px;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      .material-icons {
        margin-right: 8px;
        background-color: $dark-grey;
        color: white;
        padding: 5px;
        border-radius: 50%;
        border: 1px solid var(--project-title-icon-border-color);
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
        max-width: 36px;
      }
    }

    .project-image {
      border: 1px solid #d3d3d3;
      width: 100%;
      overflow: hidden;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        display: block;
        opacity: var(--project-image-opacity);
      }
    }

    .project-description {
      padding-top: 16px;
      line-height: 22px;
      padding-bottom: 8px;
      font-size: 16px;
      text-align: justify;

      a {
        color: var(--highlighted-element);
        cursor: pointer;
        font-weight: bold;
        text-decoration: underline;
      }
    }

    .project-stack {
      display: inline-flex;
      margin-top: 8px;
    }

    .project-actions {
      padding-top: 20px;
      padding-bottom: 12px;

      .project-action {
        padding: 8px 16px;
        border: 1px solid var(--highlighted-element);
        background-color: transparent;
        color: var(--highlighted-element);
        font-size: 16px;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        transition: all 0.3s;
        margin-right: 8px;

        .material-icons {
          margin-right: 8px;
        }

        &:hover {
          background-color: var(--highlighted-element);
          color: white;
        }
      }
    }
  }
}

@media (max-width: 860px) {
  .projects .project {
    .project-title {
      font-size: 20px;
      .material-icons {
        font-size: 18px;
      }
    }

    .project-description {
      font-size: 15px;
      line-height: 20px;
    }
  }
}
</style>
