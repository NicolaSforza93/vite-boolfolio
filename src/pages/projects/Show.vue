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
                }).catch((error) => {
                    // console.log(error.response);
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }
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
        <div class="container py-5">
            <h1>{{ project.name_project }}</h1>
            <p v-if="project.type" class="text-decoration-underline">{{ project.type.name }}</p>
            <!-- <p>{{ project.type?.name }}</p> -->
            <ul class="d-flex gap-3 ps-0">
                <li v-for="(technology, index) in project.technologies" :key="technology.id"
                    class="badge text-bg-dark p-2 fw-medium">{{ technology.name }}</li>
            </ul>
            <p>{{ project.date_creation }}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatem fugit? Saepe aspernatur deserunt,
                facilis corrupti maiores sit doloribus unde.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>