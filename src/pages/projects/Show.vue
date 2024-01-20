<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    props: {
        name_project: String
    },
    data() {
        return {
            technologies: ['Css', 'Javascript', 'Vue', 'Laravel', 'Php', 'Sass', 'Bootstrap', 'MySql', 'Node'],
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
            <div class="row">
                <div class="col-6">
                    <h1>{{ project.name_project }}</h1>
                    <p v-if="project.type" class="text-decoration-underline">{{ project.type.name }}</p>
                    <!-- <p>{{ project.type?.name }}</p> -->
                    <h5>Tecnologie utilizzate</h5>
                    <ul class="tech-list d-flex gap-3 ps-0">
                        <li class="list-item" v-for="(technology, index) in project.technologies" :key="technology.id">
                            <img :src="`/technologies/${technology.name}.png`" alt="">
                        </li>
                    </ul>
                    <p>{{ project.description }}</p>
                </div>
                <div class="col-6" v-if="project.cover_image">
                    <figure class="ratio ratio-1x1">
                        <img :src="project.cover_image" alt="" class="object-fit-contain">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list-item img {
    width: 55px;
}
</style>