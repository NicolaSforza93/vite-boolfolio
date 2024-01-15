<script>
import { store } from '../../../store';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
    components: { ProjectCard },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <h1>I miei Progetti</h1>
    <div class="container">
        <div class="grid">
            <ProjectCard v-for="(project, index) in store.projects" :key="index" :project="project" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(2, 1fr);
}
</style>