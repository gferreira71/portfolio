<template>
  <section class="experiences" id="experiences">
    <div class="section-title">{{ $t("experiences.title") }}</div>

    <div class="company-logo">
      <img
        :title="$t('experiences.beonic.img_alt')"
        :alt="$t('experiences.beonic.img_alt')"
        src="./../assets/images/companies/beonic-logo.svg"
        class="beonic-logo"
        width="294px"
        height="96px"
      />
    </div>

    <div class="company-infos">
      <div class="company-location">
        <span
          class="material-icons"
          :title="$t('experiences.locations.img_alt')"
          :alt="$t('experiences.locations.img_alt')"
          >location_on</span
        >
        {{ $t("experiences.locations.lisbon") }}
      </div>
      <div class="company-website">
        <span class="material-icons">open_in_new</span>
        <a class="company-link" href="https://beonic.com" target="_blank"
          >beonic.com</a
        >
      </div>
    </div>

    <div class="container">
      <div class="experience">
        <div class="experience-timeline-icon">
          <span
            :title="$t('experiences.beonic.timeline_img_alt')"
            :alt="$t('experiences.beonic.timeline_img_alt')"
            class="material-icons"
            >wifi_tethering</span
          >
        </div>
        <div class="experience-title">{{ $t("experiences.beonic.role") }}</div>
        <div class="experience-company">
          {{ $t("experiences.beonic.company") }}
        </div>
        <div class="experience-details">
          <div class="experience-date">{{ $t("experiences.beonic.date") }}</div>
          <div class="experience-description">
            <ul>
              <li>
                {{ $t("experiences.beonic.description.line_1") }}
              </li>
              <li>
                {{ $t("experiences.beonic.description.line_2") }}
              </li>
              <li>
                {{ $t("experiences.beonic.description.line_3") }}
              </li>
            </ul>
          </div>
          <div class="experience-stack">
            <Badge>{{ $t("common.stack.angular") }}</Badge>
            <Badge>{{ $t("common.stack.scala") }}</Badge>
            <Badge>{{ $t("common.stack.cypress") }}</Badge>
            <Badge>{{ $t("common.stack.typescript") }}</Badge>
            <Badge>{{ $t("common.stack.scrum") }}</Badge>
          </div>
        </div>
      </div>
    </div>

    <div class="experience-separator"></div>

    <div class="company-logo company-logo-double">
      <div
        class="inetum-logo"
        :title="$t('experiences.gfi_inetum.inetum_img_alt')"
      >
        <img
          v-if="theme === 'light'"
          :alt="$t('experiences.gfi_inetum.inetum_img_alt')"
          src="./../assets/images/companies/inetum-light.svg"
          width="226px"
          height="40px"
        />
        <img
          v-else
          :alt="$t('experiences.gfi_inetum.inetum_img_alt')"
          src="./../assets/images/companies/inetum-dark.svg"
          width="226px"
          height="40px"
        />
        <img
          :alt="$t('experiences.gfi_inetum.inetum_img_alt')"
          src="./../assets/images/companies/inetum-symbol.svg"
          width="40px"
          height="40px"
        />
      </div>
      <img
        :title="$t('experiences.gfi_inetum.gfi_img_alt')"
        :alt="$t('experiences.gfi_inetum.gfi_img_alt')"
        src="./../assets/images/companies/gfi.png"
        width="192px"
        height="96px"
      />
    </div>

    <div class="company-infos">
      <div class="company-location">
        <span
          class="material-icons"
          :title="$t('experiences.locations.img_alt')"
          :alt="$t('experiences.locations.img_alt')"
          >location_on</span
        >
        {{ $t("experiences.locations.lisbon_and_toulouse") }}
      </div>
      <div class="company-website">
        <span class="material-icons">open_in_new</span>
        <a class="company-link" href="https://inetum.com" target="_blank"
          >inetum.com</a
        >
      </div>
    </div>

    <div class="container">
      <div class="experience">
        <div class="experience-timeline-icon">
          <span
            :title="$t('experiences.gfi_inetum.toyota_lexus.timeline_img_alt')"
            :alt="$t('experiences.gfi_inetum.toyota_lexus.timeline_img_alt')"
            class="material-icons"
            >directions_car</span
          >
        </div>
        <div class="experience-title">
          {{ $t("experiences.gfi_inetum.toyota_lexus.role") }}
        </div>
        <div class="experience-company">
          {{ $t("experiences.gfi_inetum.toyota_lexus.company") }}
        </div>
        <div class="experience-details">
          <div class="experience-date">
            {{ $t("experiences.gfi_inetum.toyota_lexus.date") }}
          </div>
          <div class="experience-description">
            <ul>
              <li>
                {{
                  $t("experiences.gfi_inetum.toyota_lexus.description.line_1")
                }}
              </li>
              <li>
                {{
                  $t("experiences.gfi_inetum.toyota_lexus.description.line_2")
                }}
              </li>
              <li>
                {{
                  $t("experiences.gfi_inetum.toyota_lexus.description.line_3")
                }}
              </li>
            </ul>
          </div>
          <div class="experience-stack">
            <Badge>{{ $t("common.stack.react") }}</Badge>
            <Badge>{{ $t("common.stack.aem") }}</Badge>
            <Badge>{{ $t("common.stack.html_css") }}</Badge>
          </div>
        </div>
      </div>

      <div class="experience">
        <div class="experience-timeline-icon">
          <span
            :title="$t('experiences.gfi_inetum.spherea.timeline_img_alt')"
            :alt="$t('experiences.gfi_inetum.spherea.timeline_img_alt')"
            class="material-icons"
            >flight</span
          >
        </div>
        <div class="experience-title">
          {{ $t("experiences.gfi_inetum.spherea.role") }}
        </div>
        <div class="experience-company">
          {{ $t("experiences.gfi_inetum.spherea.company") }}
        </div>
        <div class="experience-details">
          <div class="experience-date">
            {{ $t("experiences.gfi_inetum.spherea.date") }}
          </div>
          <div class="experience-description">
            <ul>
              <li>
                {{ $t("experiences.gfi_inetum.spherea.description.line_1") }}
              </li>
              <li>
                {{ $t("experiences.gfi_inetum.spherea.description.line_2") }}
              </li>
              <li>
                {{ $t("experiences.gfi_inetum.spherea.description.line_3") }}
              </li>
            </ul>
          </div>
          <div class="experience-stack">
            <Badge>{{ $t("common.stack.angular") }}</Badge>
            <Badge>{{ $t("common.stack.node_js") }}</Badge>
            <Badge>{{ $t("common.stack.typescript") }}</Badge>
          </div>
        </div>
      </div>

      <div class="experience">
        <div class="experience-timeline-icon">
          <span
            :title="$t('experiences.gfi_inetum.sivac.timeline_img_alt')"
            :alt="$t('experiences.gfi_inetum.sivac.timeline_img_alt')"
            class="material-icons"
            >public</span
          >
        </div>
        <div class="experience-title">
          {{ $t("experiences.gfi_inetum.sivac.role") }}
        </div>
        <div class="experience-company">
          {{ $t("experiences.gfi_inetum.sivac.company") }}
        </div>
        <div class="experience-details">
          <div class="experience-date">
            {{ $t("experiences.gfi_inetum.sivac.date") }}
          </div>
          <div class="experience-description">
            <ul>
              <li>
                {{ $t("experiences.gfi_inetum.sivac.description.line_1") }}
              </li>
              <li>
                {{ $t("experiences.gfi_inetum.sivac.description.line_2") }}
              </li>
            </ul>
          </div>
          <div class="experience-stack">
            <Badge>{{ $t("common.stack.angular") }}</Badge>
            <Badge>{{ $t("common.stack.spring_boot") }}</Badge>
            <Badge>{{ $t("common.stack.cypress") }}</Badge>
            <Badge>{{ $t("common.stack.accessibility") }}</Badge>
          </div>
        </div>
      </div>

      <div class="experience">
        <div class="experience-timeline-icon">
          <span
            :title="$t('experiences.gfi_inetum.navblue.timeline_img_alt')"
            :alt="$t('experiences.gfi_inetum.navblue.timeline_img_alt')"
            class="material-icons"
            >flight_takeoff</span
          >
        </div>
        <div class="experience-title">
          {{ $t("experiences.gfi_inetum.navblue.role") }}
        </div>
        <div class="experience-company">
          {{ $t("experiences.gfi_inetum.navblue.company") }}
        </div>
        <div class="experience-details">
          <div class="experience-date">
            {{ $t("experiences.gfi_inetum.navblue.date") }}
          </div>
          <div class="experience-description">
            <ul>
              <li>
                {{ $t("experiences.gfi_inetum.navblue.description.line_1") }}
              </li>
              <li>
                {{ $t("experiences.gfi_inetum.navblue.description.line_2") }}
              </li>
              <li>
                {{ $t("experiences.gfi_inetum.navblue.description.line_3") }}
              </li>
              <li>
                {{ $t("experiences.gfi_inetum.navblue.description.line_4") }}
              </li>
            </ul>
          </div>
          <div class="experience-stack">
            <Badge>{{ $t("common.stack.vue_js") }}</Badge>
            <Badge>{{ $t("common.stack.spring_boot") }}</Badge>
            <Badge>{{ $t("common.stack.selenium") }}</Badge>
            <Badge>{{ $t("common.stack.cucumber") }}</Badge>
            <Badge>{{ $t("common.stack.aws") }}</Badge>
            <Badge>{{ $t("common.stack.safe") }}</Badge>
          </div>
        </div>
      </div>
    </div>

    <div class="experience-separator"></div>

    <div class="company-logo">
      <img
        :title="$t('experiences.infotel.img_alt')"
        :alt="$t('experiences.infotel.img_alt')"
        src="./../assets/images/companies/infotel.png"
        width="312px"
        height="96px"
      />
    </div>

    <div class="company-infos">
      <div class="company-location">
        <span
          class="material-icons"
          :title="$t('experiences.locations.img_alt')"
          :alt="$t('experiences.locations.img_alt')"
          >location_on</span
        >
        {{ $t("experiences.locations.toulouse") }}
      </div>
      <div class="company-website">
        <span class="material-icons">open_in_new</span>
        <a class="company-link" href="https://infotel.com" target="_blank"
          >infotel.com</a
        >
      </div>
    </div>

    <div class="container">
      <div class="experience">
        <div class="experience-timeline-icon">
          <span
            :title="$t('experiences.infotel.airfrance_klm.timeline_img_alt')"
            :alt="$t('experiences.infotel.airfrance_klm.timeline_img_alt')"
            class="material-icons"
            >flight</span
          >
        </div>
        <div class="experience-title">
          {{ $t("experiences.infotel.airfrance_klm.role") }}
        </div>
        <div class="experience-company">
          {{ $t("experiences.infotel.airfrance_klm.company") }}
        </div>
        <div class="experience-details">
          <div class="experience-date">
            {{ $t("experiences.infotel.airfrance_klm.date") }}
          </div>
          <div class="experience-description">
            <ul>
              <li>
                {{ $t("experiences.infotel.airfrance_klm.description.line_1") }}
              </li>
              <li>
                {{ $t("experiences.infotel.airfrance_klm.description.line_2") }}
              </li>
            </ul>
          </div>
          <div class="experience-stack">
            <Badge>{{ $t("common.stack.angular_js") }}</Badge>
            <Badge>{{ $t("common.stack.spring_boot") }}</Badge>
            <Badge>{{ $t("common.stack.selenium") }}</Badge>
          </div>
        </div>
      </div>

      <div class="experience">
        <div class="experience-timeline-icon">
          <span
            :title="$t('experiences.infotel.acis.timeline_img_alt')"
            :alt="$t('experiences.infotel.acis.timeline_img_alt')"
            class="material-icons"
            >rocket_launch</span
          >
        </div>
        <div class="experience-title">
          {{ $t("experiences.infotel.acis.role") }}
        </div>
        <div class="experience-company">
          {{ $t("experiences.infotel.acis.company") }}
        </div>
        <div class="experience-details">
          <div class="experience-date">
            {{ $t("experiences.infotel.acis.date") }}
          </div>
          <div class="experience-description">
            <ul>
              <li>
                {{ $t("experiences.infotel.acis.description.line_1") }}
              </li>
              <li>
                {{ $t("experiences.infotel.acis.description.line_2") }}
              </li>
              <li>
                {{ $t("experiences.infotel.acis.description.line_3") }}
              </li>
            </ul>
          </div>
          <div class="experience-stack">
            <Badge>{{ $t("common.stack.php") }}</Badge>
            <Badge>{{ $t("common.stack.code_igniter") }}</Badge>
            <Badge>{{ $t("common.stack.junit") }}</Badge>
            <Badge>{{ $t("common.stack.svn") }}</Badge>
            <Badge>{{ $t("common.stack.lean") }}</Badge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Badge from "./Badge.vue";
import ThemeService from "@/services/ThemeService";
export default defineComponent({
  components: {
    Badge,
  },
  computed: {
    theme() {
      return ThemeService.getTheme();
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import "./../assets/variables.scss";

.experiences {
  .company-logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.4em;

    &.company-logo-double {
      gap: 1rem;
    }

    .beonic-logo {
      filter: invert(var(--beonic-logo-invert-value));
    }

    .inetum-logo {
      display: inline-flex;
      align-items: center;
      justify-content: end;
      gap: 12px;
      min-height: 40px;
      min-width: 280px;

      img {
        height: 2.5rem;
        width: auto;
      }
    }

    img {
      height: 6rem;
      width: auto;
    }
  }

  .company-infos {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 42px;
    .company-location,
    .company-website {
      font-weight: bold;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      .material-icons {
        margin-right: 4px;
        font-size: 22px;
      }

      .company-link {
        color: var(--highlighted-element);
        cursor: pointer;
        font-weight: bold;
        text-decoration: underline;
      }
    }

    .company-website {
      margin-left: 2rem;
    }
  }

  .experience {
    position: relative;
    border-left: 1px solid var(--experience-timeline-color);
    padding-left: 30px;
    margin-left: 14px;
    padding-bottom: 40px;

    .experience-timeline-icon {
      position: absolute;
      left: -18px;
      top: -4px;
      background: $highlighted-blue;
      color: white;
      padding: 6px;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);

      .material-icons {
        font-size: 24px;
      }
    }

    .experience-title {
      font-size: 22px;
      font-weight: bold;
    }

    .experience-company {
      font-size: 18px;
      margin-bottom: 4px;
    }

    .experience-details {
      .experience-date {
        font-style: italic;
        margin-bottom: 12px;
      }

      .experience-description {
        padding: 8px 14px;
        text-align: justify;
        ul {
          list-style-type: disclosure-closed;
          margin-block-start: unset;
          margin-block-end: unset;
          margin-inline-start: unset;
          margin-inline-end: unset;
          padding-inline-start: unset;

          li:not(:last-child) {
            margin-bottom: 8px;
          }
        }
      }

      .experience-stack {
        display: inline-flex;
        margin-top: 8px;
        flex-wrap: wrap;
      }
    }
  }

  .experience-separator {
    height: 1px;
    background: var(--experience-timeline-color);
    width: calc(100% - 48px);
    margin: 38px 24px;
  }
}
@media (max-width: 540px) {
  .experiences .company-logo {
    &.company-logo-double {
      flex-direction: column;
      gap: 1rem;
    }

    .inetum-logo img {
      height: 2.5rem;
      width: auto;
    }

    img {
      height: 4em;
    }
  }
}
</style>
