<template>
    <h2 class="divider line one-line" contenteditable>{{ text }}</h2>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style src="./divider.scss" lang="scss" scoped></style>
