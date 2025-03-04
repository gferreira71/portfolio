<template>
  <footer>
    <a href="#home" :title="$t('footer.go_to_top')">
      <div class="footer-button-top">
        <span class="material-icons">keyboard_double_arrow_up</span>
      </div>
    </a>
    <div class="container">
      <div class="footer-content">
        <div class="footer-social">
          <a
            href="https://www.linkedin.com/in/guillaume-ferreira-dev/"
            target="_blank"
            :title="$t('footer.goto_linkedin')"
          >
            <div class="social-button">
              <img
                src="./../assets/images/footer/linkedin.svg"
                :alt="$t('footer.linkedin_logo')"
              />
            </div>
          </a>

          <a
            href="https://github.com/gferreira71"
            target="_blank"
            :title="$t('footer.goto_github')"
          >
            <div class="social-button">
              <img
                src="./../assets/images/footer/github.svg"
                :alt="$t('footer.github_logo')"
              />
            </div>
          </a>

          <a
            href="mailto: ferreiraguillaume71600@gmail.com"
            :title="$t('footer.goto_mail')"
          >
            <div class="social-button">
              <span class="material-icons">mail</span>
            </div>
          </a>
        </div>
        <div class="footer-copy">
          <div class="copyrights">© 2025 • Guillaume Ferreira</div>
          <div class="background-credits">
            <div class="material-icons">grade</div>
            <div>
              <a
                class="stars-link"
                href="https://codepen.io/sarazond/pen/LYGbwj"
                target="_blank"
              >
                {{ $t("footer.animated_background") }}
              </a>
            </div>
            <div>
              {{ $t("footer.made_by") }}
              <a
                class="linkedin-link"
                href="https://www.linkedin.com/in/saranshsinha"
                target="_blank"
                >@screenshake</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
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

footer {
  background: #0b0b0b;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  position: relative;

  .footer-button-top {
    height: 48px;
    width: 48px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: calc(50% - 24px);
    top: -24px;
    cursor: pointer;
    font-size: 36px;
    transition: all 0.3s;

    .material-icons {
      color: white;
      font-size: 40px;
      line-height: 48px;
    }

    &:hover {
      background-color: $highlighted-blue;
    }
  }

  .footer-content {
    padding-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .footer-social {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;

      a {
        &:not(:last-child) {
          margin-right: 12px;
        }

        .social-button {
          padding: 12px 12px;
          border: 1px solid $highlighted-blue;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
          line-height: 0;

          &:hover {
            background-color: $highlighted-blue;
            color: white;
          }

          img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    .footer-copy {
      margin-top: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .background-credits {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        align-items: center;

        .stars-link {
          color: $highlighted-gold;
          text-decoration: underline;
        }

        .linkedin-link {
          color: $highlighted-gold;
          text-decoration: none;
          font-weight: bold;
        }
      }
    }
  }
}

@media (max-width: 540px) {
  footer .footer-content .footer-copy {
    flex-direction: column-reverse;
    gap: 2em;
  }
}
</style>
