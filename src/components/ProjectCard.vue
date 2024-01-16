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
        <div class="card-header">
            <h5>{{ project.name_project }}</h5>
        </div>
        <div class="card-body">
            <p v-if="project.type">Tipologia: {{ project.type.name }}</p>
            <a class="read-more" href="#">Leggi di più &#8594</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-card {
    text-align: center;
    height: 100%;
}
</style>