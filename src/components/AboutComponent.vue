<template>
  <section class="about" id="about">
    <div class="section-title">{{ $t("about.title") }}</div>

    <div class="container about-content">
      <div class="avatar">
        <img
          src="./../assets/images/header/photo.png"
          :title="$t('about.pp_alt')"
          :alt="$t('about.pp_alt')"
        />
      </div>
      <div class="intro-text">
        <div class="intro-title">
          {{ $t("about.nice_to_meet_you") }}
        </div>
        <div class="content">
          <div class="paragraph">
            {{ $t("about.about_1") }}
          </div>
          <div class="paragraph">
            {{ $t("about.about_2") }}
          </div>
          <div class="paragraph">
            {{ $t("about.about_3") }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isLangSelected: false,
    };
  },
  mounted() {},
  methods: {},
});
</script>

<style lang="scss">
@import "./../assets/variables.scss";

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: double 3px transparent;
    border-image-slice: 1;
    border-width: 6px;
    background-image: linear-gradient(#f5f5f5, #f5f5f5),
      radial-gradient(circle at top left, #005597, #ffc12a);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0px 0px 20px 4px #00000047;
  }
}

.intro-text {
  max-width: 1000px;
}

.intro-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
}

.content {
  text-align: justify;

  .paragraph {
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 26px;
  }
}

@media (max-width: 860px) {
  .avatar {
    img {
      width: 250px;
      height: 250px;
    }
  }

  .content {
    .paragraph {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

@media (max-width: 540px) {
  .avatar {
    img {
      width: 200px;
      height: 200px;
    }
  }

  .intro-title {
    font-size: 20px;
  }

  .content {
    .paragraph {
      font-size: 15px;
      line-height: 23px;
    }
  }
}

@media (max-width: 320px) {
  .home .lang .lang-form .lang-form__select .lang-option {
    .lang-s {
      display: none;
    }

    .fi {
      margin-left: unset;
    }
  }
}
</style>
