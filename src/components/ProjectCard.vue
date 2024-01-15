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
    <div class="project-card">
        <h4>{{ project.name_project }}</h4>
        <p v-if="project.type">{{ project.type.name }}</p>
    </div>
</template>

<style lang="scss" scoped>
.project-card {
    border: 1px solid black;
    padding: 5px;
    text-align: center;
}
</style>