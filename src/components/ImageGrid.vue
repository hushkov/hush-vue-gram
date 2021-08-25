<template>
  <transition-group tag="div" name="grid" appear class="img-grid">
    <div
      class="img-wrap"
      v-for="img in documents"
      :key="img.id"
      @click="handleClick(img.url)"
    >
      <img :src="img.url" />
    </div>
  </transition-group>
</template>

<script>
import useCollection from '../composables/useCollection';
export default {
  setup(props, context) {
    const { documents } = useCollection('images');

    const handleClick = (url) => {
      context.emit('selected', url);
    };
    return { documents, handleClick };
  },
};
</script>

<style>
.img-grid {
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
}
.img-wrap {
  overflow: hidden;
  height: 0;
  padding: 60% 0;
  position: relative;
  opacity: 0.8;
}
.img-wrap img {
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/* transition classes */
.grid-enter-from {
  opacity: 0;
}
.grid-enter-to {
  opacity: 1;
}
.grid-enter-active {
  transition: all 3000ms ease;
}
.grid-move {
  transition: all 500ms ease;
}
</style>
