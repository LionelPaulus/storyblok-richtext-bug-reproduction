<template>
  <div v-editable="blok" class="px-4">
    <StoryblokRichText :doc="blok.content" :resolvers="resolvers" />
  </div>
</template>

<script setup>
import { resolveDynamicComponent } from 'vue'
import upperFirst from 'lodash/upperFirst.js'
defineProps({ blok: Object })

const resolvers = {
  [BlockTypes.COMPONENT]: (node) => {
    if (!node?.attrs?.body || !node?.attrs?.body[0]) return null
    const componentName = node.attrs.body[0].component

    try {
      return h(resolveDynamicComponent(upperFirst(componentName)), {
        data: node.attrs.body[0],
      })
    } catch (error) {
      console.error(`Component ${componentName} could not be resolved`, error)
      return null
    }
  },
}
</script>
