<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    props: {
        name_project: String
    },
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        fetchProject() {
            axios.get(`${store.baseURL}/projects/${this.name_project}`)
                .then(res => {
                    // console.log(res.data.results);
                    this.project = res.data.results;
                })
        }
    },
    created() {
        this.fetchProject();
    }
}

</script>

<template>
    <div v-if="project">
        <div class="container">
            <h1>{{ project.name_project }}</h1>
            <p v-if="project.type" class="text-decoration-underline">{{ project.type.name }}</p>
            <!-- <p>{{ project.type?.name }}</p> -->
            <ul class="d-flex gap-3 ps-0">
                <li v-for="(technology, index) in project.technologies" :key="technology.id"
                    class="badge text-bg-dark p-2 fw-medium">{{ technology.name }}</li>
            </ul>
            <p>{{ project.date_creation }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>