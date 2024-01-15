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
    <div class="container">
        <h1>I miei Progetti</h1>
        <div class="grid">
            <div class="project-card" v-for="(project, index) in store.projects" :key="project.id">
                <ProjectCard :project="project" />
            </div>
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