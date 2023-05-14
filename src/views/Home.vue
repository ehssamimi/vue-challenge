<template>
  <div class="card">
    <div class="card-body text-center">
      <h4>
        Welcome to the cat facts page
      </h4>
      <div>🐾</div>
      <span>
        Use the nav menu above to find new facts!
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMatrix } from '@/store/index'
import { storeToRefs } from "pinia";

export default {
  setup() {
    const todo = ref("");
    const store = useMatrix();
    store.fetchTodos()
    // const { matrix } = storeToRefs(store);
    // console.log(matrix)
    // console.log(store.matrix)
    return { todo };
  },
};
</script>
