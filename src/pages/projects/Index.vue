<script>
import { store } from '../../../store';

export default {
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
        <div class="card-project" v-for="project in store.projects" :key="project.id">
            <h4>{{ project.name_project }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>