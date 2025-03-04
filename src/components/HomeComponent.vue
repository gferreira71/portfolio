<template>
  <header class="home" id="home">
    <div class="background-stars">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
    <div class="text">
      <div class="text-intro">
        <div v-if="langAnimation" class="hello-anim-container">
          <div class="hello-anim">
            <div>{{ $t("home.hello") }}</div>
            <div>Bonjour,</div>
            <div>Ola,</div>
          </div>
        </div>
        <div v-else>
          <div>{{ $t("home.hello") }}</div>
        </div>
        &nbsp;{{ $t("home.i_m") }}&nbsp;
        <span class="highlighted"
          >Guillaume Ferreira
          <div
            class="nickname"
            :class="{
              'nickname-displayed': displayNickname,
            }"
          >
            {{ $t("home.nickname") }}<span class="nickname-gui">Gui</span> !
          </div> </span
        >.
      </div>
      {{ $t("home.i_am_full_dev") }}
    </div>

    <!-- Small screen -->
    <div class="text-small">
      <div class="text-intro">
        {{ $t("home.hello") }}&nbsp;{{ $t("home.i_m") }}&nbsp;<span
          class="highlighted"
          >Guillaume Ferreira</span
        >.
      </div>
      {{ $t("home.i_am_full_dev") }}
    </div>

    <div class="discover-button" @click="scollToAbout()">
      {{ $t("home.discover_btn") }}
      <span class="material-icons">arrow_forward</span>
    </div>

    <div class="lang" :class="{ 'fade-in': !isLangSelected && langAnimation }">
      <ng-container v-if="displayLangForm">
        <div v-if="!isLangSelected" class="lang-form">
          <div class="lang-form__select">
            <div class="lang-option" @click="selectLang('en')">
              <span class="lang-l">English</span>
              <span class="lang-s">EN</span>
              <span class="fi fi-gb"></span>
            </div>
            <div class="lang-option" @click="selectLang('fr')">
              <span class="lang-l">Français</span>
              <span class="lang-s">FR</span>
              <span class="fi fi-fr"></span>
            </div>
            <div class="lang-option" @click="selectLang('pt')">
              <span class="lang-l">Portugues</span>
              <span class="lang-s">PT</span>
              <span class="fi fi-pt"></span>
            </div>
          </div>
        </div>
        <div v-else class="lang-info">
          {{ $t("home.this_site_in_lang") }}
          {{ $t(`common.languages.${selectedLang}`) }}.
          <span class="lang-info__link" @click="resetLang()">{{
            $t("home.click_to_change")
          }}</span>
        </div>
      </ng-container>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isLangSelected: false,
      langAnimation: false,
      displayLangForm: false, // true after 4.5 seconds
      displayNickname: false,
    };
  },
  computed: {
    selectedLang() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    this.isLangSelected = localStorage.getItem("lang") !== null;
    this.langAnimation = !this.isLangSelected;
    const animationDuration = this.isLangSelected ? 1000 : 4500;
    setTimeout(() => {
      this.displayLangForm = true;
    }, animationDuration);
    const nicknameAnimationDuration = this.isLangSelected ? 2000 : 5500;
    setTimeout(() => {
      this.displayNickname = true;
    }, nicknameAnimationDuration);
  },
  methods: {
    scollToAbout() {
      document.querySelector("#about")?.scrollIntoView({
        behavior: "smooth",
      });
    },

    selectLang(lang: string) {
      localStorage.setItem("lang", lang);
      this.$i18n.locale = lang;
      this.isLangSelected = true;
      setTimeout(() => {
        this.displayNickname = true;
      }, 3000);
    },

    resetLang() {
      localStorage.removeItem("lang");
      this.$i18n.locale = "en";
      this.isLangSelected = false;
    },
  },
});
</script>

<style lang="scss">
@import "./../assets/backaground-stars.scss";
@import "./../assets/variables.scss";

@keyframes hello-animation {
  0% {
    top: -114px;
  }
  25% {
    top: -114px;
  }
  50% {
    top: -60px;
  }
  75% {
    top: 0px;
  }
}

@keyframes lang-animation {
  0% {
    opacity: 0;
    user-select: none;
  }
  80% {
    opacity: 0;
    user-select: none;
  }
  100% {
    opacity: 1;
    user-select: auto;
  }
}

.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  color: #fff;
  padding: 0 10px;
  background: black;

  .text-small {
    z-index: 12;
    display: none;
  }

  .text {
    z-index: 12;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: end;

    .text-intro {
      display: inline-flex;
      user-select: none;

      .hello-anim-container {
        position: relative;
        width: 176px;
        overflow: hidden;
        height: 3.5rem;
        text-align: right;

        .hello-anim {
          width: 176px;
          position: absolute;
          animation: hello-animation 6s;
        }
      }
    }
  }

  .text,
  .text-small {
    .highlighted {
      font-weight: 800;
      color: $highlighted-gold;
      user-select: text;
      position: relative;

      .nickname {
        position: absolute;
        top: -56px;
        font-size: 24px;
        border: 1px solid;
        border-radius: 6px;
        padding: 8px;
        background: #07101d;
        opacity: 0;
        transition: opacity 0.5s;

        &.nickname-displayed {
          opacity: 1;
          transition: opacity 0.5s;
        }

        &::after {
          content: "";
          position: absolute;
          top: 39px;
          left: 25%;
          width: 12px;
          height: 12px;
          transform: rotate(45deg);
          border-bottom: 1px solid #ffc02a;
          border-right: 1px solid #ffc02a;
          z-index: 99;
          background: #07101d;
        }

        .nickname-gui {
          font-weight: 900;
        }
      }
    }
  }
  .lang {
    z-index: 12;
    margin-top: 26px;
    height: 98px;
    animation: lang-animation 1.5s;

    &.fade-in {
      animation: lang-animation 5.5s;
    }

    .lang-form {
      border-radius: 4px;
      padding: 4px;
      font-size: 16px;
      background: rgba(229, 229, 229, 0.05);
      box-shadow: 0px 0px 16px 10px #102036;

      .lang-form__label {
        padding-bottom: 12px;
        .lang-form__label-long {
          display: inline;
        }
        .lang-form__label-short {
          display: none;
        }
      }

      .lang-form__select {
        display: inline-flex;

        .lang-option {
          padding: 8px 16px;
          border: 1px solid #ffffff33;
          border-radius: 4px;
          transition: background-color 0.3s;
          cursor: pointer;

          .lang-s {
            display: none;
          }

          &:hover {
            background-color: #ffffff33;
          }

          .fi {
            margin-left: 8px;
          }
        }

        .lang-option:not(:last-of-type) {
          margin-right: 8px;
        }
      }
    }

    .lang-info {
      margin-top: 8px;
      font-size: 16px;
      color: lightgrey;

      .lang-info__link {
        color: $highlighted-gold;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          color: #a7bdff;
        }
      }
    }
  }

  .discover-button {
    max-width: 178px;
    border-radius: 4px;
    z-index: 12;
    margin-top: 12px;
    padding: 8px 16px;
    border: 1px solid $highlighted-gold;
    background-color: transparent;
    color: $highlighted-gold;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;

    .material-icons {
      max-height: 26px;
      max-width: 26px;
      font-size: 26px;
      margin-left: 8px;
      transition: transform 0.3s;
    }

    &:hover {
      background-color: $highlighted-gold;
      color: black;

      .material-icons {
        color: black;
        transform: rotate(90deg);
      }
    }
  }
}

@media (max-width: 860px) {
  .home {
    .text {
      display: none;
    }

    .discover-button {
      font-size: 20px;

      .material-icons {
        font-size: 20px;
        margin-left: 6px;
      }
    }

    .text-small {
      display: flex;
      font-size: 2rem;
      flex-direction: column;
      align-items: end;
    }
  }
}

@media (max-width: 540px) {
  .home {
    .lang {
      .lang-info {
        font-size: 14px;
      }

      .lang-form .lang-form__select .lang-option {
        .lang-l {
          display: none;
        }

        .lang-s {
          display: inline;
        }
      }
    }

    .text-small {
      display: flex;
      font-size: 1.4rem;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .discover-button {
      font-size: 18px;

      .material-icons {
        font-size: 18px;
        margin-left: 6px;
      }
    }
  }
}

@media (max-width: 340px) {
  .home .lang .lang-form .lang-form__label {
    .lang-form__label-long {
      display: none;
    }
    .lang-form__label-short {
      display: inline;
    }
  }
}
</style>
