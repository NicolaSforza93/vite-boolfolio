<script>
import axios from 'axios';
import { store } from '../store';
import ProjectIndex from './pages/projects/Index.vue';

export default {
  components: { ProjectIndex },
  data() {
    return {
      store
    }
  },
  methods: {
    fetchProjects() {
      axios.get(`${store.baseURL}/projects`)
        .then(res => {
          // console.log(res);
          const projects = res.data.results;
          store.projects = projects;
        })
    }
  },
  created() {
    this.fetchProjects();
  }
}

</script>

<template>
  <h1>VITE-BOOLFOLIO</h1>
  <ProjectIndex />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
