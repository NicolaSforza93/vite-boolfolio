<script>
import { store } from '../.././store';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
    components: { ProjectCard },
    data() {
        return {
            store,
            currentIndex: 0
        }
    },
    methods: {
        nextImage() {
            this.currentIndex++;
            if (this.currentIndex > this.store.projects.length - 1) {
                this.currentIndex = 0;
            }
        },

        prevImage() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.store.projects.length - 1;
            }
        },
    },
    computed: {
        visibleProject() {
            return this.store.projects.slice(this.currentIndex, this.currentIndex + 2);
        }
    }
}

</script>

<template>
    <div class="container position-relative py-5">
        <h1 class="title text-center mb-3">I miei migliori Progetti</h1>
        <div class="carousel">
            <div class="prev fs-2" @click="prevImage">
                <font-awesome-icon :icon="['fas', 'chevron-left']" beat />
            </div>
            <div class="next fs-2" @click="nextImage">
                <font-awesome-icon :icon="['fas', 'chevron-right']" beat />
            </div>
            <div class="row">
                <div class="col-6" v-for="(project, index) in visibleProject" :key="project.id">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-family: 'Bangers', system-ui;
}

.prev,
.next {
    color: rgb(148, 206, 242);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 999;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}
</style>