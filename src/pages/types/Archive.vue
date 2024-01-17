<script>
import { store } from '../../store';
import axios from 'axios';

export default {
    props: {
        name: String
    },
    data() {
        return {
            store,
            type: null
        }
    },
    methods: {
        fetchTypeProjects() {
            axios.get(`${store.baseURL}/types/${this.name}`)
                .then(res => {
                    // console.log(res.data.results);
                    this.type = res.data.results
                })
        }
    },
    created() {
        this.fetchTypeProjects();
    }
}

</script>

<template>
    <div v-if="type">
        <div class="container py-5">
            <h3>{{ type.name }}</h3>

            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="project in type.projects" :key="project.id">{{ project.name_project }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>