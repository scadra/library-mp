<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="~Assets/food.svg" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">{{ $t('menu.home') }}</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">{{ $t('menu.categories') }}</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Italian</a>
            <a class="navbar-item">Greek</a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">{{ $t('menu.ranking') }}</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">American</a>
            <a class="navbar-item">Italian</a>
            <a class="navbar-item">Greek</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">See all</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable current-flag-item">
          <a class="navbar-link current-flag-link">
            <img :src="require('Assets/flags/'+ currentLanguage.img)" class="flag" />
            <span>{{currentLanguage.label}}</span>
          </a>

          <div class="navbar-dropdown flags">
            <a
              class="navbar-item"
              :class="{'is-active': language.code === currentLanguage.code}"
              v-for="language in languages"
              :key="language.code"
              @click="setLocale(language.code)"
            >
              <img :src="require('Assets/flags/'+ language.img)" class="flag" />
              {{language.label}}
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>{{ $t('menu.sign-up') }}</strong>
            </a>
            <a class="button is-light">{{ $t('menu.log-in') }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
import { LANGUAGES } from 'Constants/languages';

export default {
  name: 'Navbar',
  beforeMount() {
    this.setLocale(this.$i18n.locale);
  },
  data() {
    return {
      languages: LANGUAGES,
      currentLanguage: null,
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.currentLanguage = this.languages.find(item => item.code === locale);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "./navbar.scss";
</style>
