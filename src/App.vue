<template>
  <div class="App">
    <Title />
    <UploadForm />
    <ImageGrid @selected="updateSelectedImageUrl" />
    <Modal
      v-if="selectedImageUrl"
      :imgUrl="selectedImageUrl"
      @close="updateSelectedImageUrl"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import Modal from './components/Modal';

export default {
  name: 'App',
  components: {
    ImageGrid,
    Title,
    UploadForm,
    Modal,
  },
  setup() {
    const selectedImageUrl = ref(null);

    const updateSelectedImageUrl = (url) => {
      selectedImageUrl.value = url;
    };

    return { selectedImageUrl, updateSelectedImageUrl };
  },
};
</script>

<style></style>
