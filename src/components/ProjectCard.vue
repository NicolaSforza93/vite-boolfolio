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
    <div class="card">
        <div class="card-header">
            <h4>{{ project.name_project }}</h4>
        </div>
        <div class="card-body">
            <p v-if="project.type">Tipologia: {{ project.type.name }}</p>
            <p>Data Creazione: {{ project.date_creation }}</p>
            <p>Stato: Completato</p>
            <a class="read-more" href="#">Leggi di più &#8594</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-card {
    border: 1px solid black;
    padding: 5px;
    text-align: center;
}
</style>