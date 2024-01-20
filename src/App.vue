<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
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
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
</style>
