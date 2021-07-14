<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

type TabId = 'elements' | 'components' | 'forms' | 'plugins'
const activeTab = ref<TabId>('elements')

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <MinimalLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div id="mp-landing" class="hero is-fullheight rounded-hero is-active">
        <!-- Navbar partial -->
        <LandingNavigation />

        <div class="absolute-header">
          <div class="header-inner">
            <img
              class="cut-circle light-image-l"
              src="~Assets/img/shapes/cut-circle.svg"
              alt=""
            />
          </div>
        </div>

        <div class="hero-body has-text-centered">
          <div class="container">
              <img alt="logo" class="logo-landing mb-5" src="~Assets/img/luxhub-logo-white.svg"/>
            <h1 class="title is-1 is-bold is-light is-bold">
               Branding <span>Luxhub</span>.
            </h1>
            <h3 class="subtitle is-4 is-light">
              The UI Kit.
              <span class="tag is-primary is-rounded">1.0</span>
            </h3>
                  <!--Stacks Section-->
    <div id="stacks-section mb-6" class="section">
        <div class="container">
          <!--Stacks-->
          <div class="stacks">
            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/stacks/vuejs.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Vue 3',
                    subtitle: 'Composition API',
                    logo: '/stacks/vuejs.svg',
                    description:
                      'The Progressive JavaScript Framework for building user interfaces.',
                    homepage: 'https://v3.vuejs.org/',
                    github: 'https://github.com/vuejs/vue-next',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/stacks/vite.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Vite',
                    subtitle: 'Next Generation Frontend Tooling',
                    logo: '/stacks/vite.svg',
                    description:
                      'Vite is a new breed of frontend build tool that significantly improves the frontend development experience.',
                    homepage: 'https://vitejs.dev/',
                    github: 'https://github.com/vitejs/vite',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/stacks/bulma.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Bulma',
                    subtitle: 'The modern CSS framework',
                    logo: '/stacks/bulma.svg',
                    description:
                      'Bulma is a free, open source framework that provides ready-to-use frontend components.',
                    homepage: 'https://bulma.io/',
                    github: 'https://github.com/jgthms/bulma',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/stacks/sass.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Sass',
                    subtitle: 'Makes CSS fun again',
                    logo: '/stacks/sass.svg',
                    description:
                      'Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.',
                    homepage: 'https://sass-lang.com/',
                    github: 'https://github.com/sass/sass',
                  }"
                />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="top">
              <div class="stack">
                <img src="/stacks/typescript.svg" alt="" />
              </div>
              <template #content>
                <StackPopoverContent
                  :stack="{
                    name: 'Typescript',
                    subtitle: 'Javascript enhanced',
                    logo: '/stacks/typescript.svg',
                    description:
                      'TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications.',
                    homepage: 'https://www.typescriptlang.org/',
                    github: 'https://github.com/microsoft/TypeScript',
                  }"
                />
              </template>
            </tippy>
          </div>

          </div>
      </div>

<div class="m-auto">
    <V-Button color="success" icon="feather:check" elevated size="huge" class="m-auto">
      GET STARTED
    </V-Button>
</div>
 

          </div>
        </div>
      </div>


      <!-- Footer -->
      <LandingFooter />
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_landing.scss';
.logo-landing {
    width: 25%;
}
</style>
