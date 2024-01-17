<script>


export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="project-card card">
        <img v-if="project.cover_image" :src="project.cover_image" class="card-img-top w-100" alt="">
        <div class="card-body">
            <h5>{{ project.name_project }}</h5>
            <p v-if="project.type">
                <router-link :to="{ name: 'types.archive', params: { name: project.type.name } }"
                    class="text-reset text-decoration-none">Tipologia: {{
                        project.type.name
                    }}</router-link>
            </p>
            <router-link :to="{ name: 'projects.show', params: { name_project: project.name_project } }">Scopri di più
                &#8594</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-card {
    text-align: center;
    height: 100%;

    img {
        width: 250px;
        aspect-ratio: 2/1;
        object-fit: contain;
    }
}
</style>