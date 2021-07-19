<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'
import { isLargeScreen } from '/@src/state/responsiveState'
import VueScrollTo from 'vue-scrollto'

import { useRouter } from 'vue-router'

const isMobileNavOpen = ref(false)
const router = useRouter()
const scrollTo = VueScrollTo.scrollTo

const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

watchEffect(() => {
  if (isLargeScreen.value) {
    isMobileNavOpen.value = false
  }
})
</script>

<template>
  <nav
    class="navbar is-fixed-top is-transparent"
    :class="[!isScrolling && 'is-docked', isMobileNavOpen && 'is-solid']"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a href="/" class="navbar-item" @click.prevent="scrollTo('#app', 800)">
        <div class="brand-icon">
          <img alt="lh-logo" src="~Assets/img/luxhub.svg" />
        </div>
      </a>

      <a
        role="button"
        :class="[isMobileNavOpen && 'is-active']"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isMobileNavOpen = !isMobileNavOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="[isMobileNavOpen && 'is-active']">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-Link
            :to="{
              name: 'index',
            }"
            class="nav-link is-scroll"
            @click.passive="
              () => {
                scrollTo('#mp-demos', 800, { offset: -50 })
                isMobileNavOpen = false
              }
            "
          >
            Home
          </router-Link>
        </div>

        <div class="navbar-item">
          <router-Link
            :to="{
              name: 'index',
              hash: '#mp-demos',
            }"
            class="nav-link is-scroll"
            @click.passive="
              () => {
                scrollTo('#mp-demos', 800, { offset: -50 })
                isMobileNavOpen = false
              }
            "
          >
            Demos
          </router-Link>
        </div>

        <div class="navbar-item">
          <RouterLink
            :to="{
              name: 'index',
              hash: '#mp-components',
            }"
            class="nav-link is-scroll"
            @click.passive="
              () => {
                scrollTo('#mp-components', 800, { offset: -50 })
                isMobileNavOpen = false
              }
            "
          >
            UI Elements
          </RouterLink>
        </div>

        <div class="navbar-item">
          <a href="https://docs.cssninja.io/vuero" class="nav-link">Docs</a>
        </div>

        <div class="navbar-item">
          <a href="https://cssninja.io" class="nav-link">Support</a>
        </div>
      </div>

    </div>
  </nav>
</template>
