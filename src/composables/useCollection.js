import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const useCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  const collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt', 'desc');

  const unsubscribe = collectionRef.onSnapshot(
    (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      //  update values
      documents.value = results;
      error.value = null;
      // console.log(documents.value);
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      unsubscribe();
      console.log('unsubscribed');
    });
  });

  return { documents, error };
};

export default useCollection;
