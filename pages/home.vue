<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' },
{ customParent: 'http://app.storyblok.com' })
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
