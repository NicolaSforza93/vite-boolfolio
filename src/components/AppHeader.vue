<script>

export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <header>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link">Home Page</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'projects.index' }" class="nav-link">Portfolio</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'contacts' }" class="nav-link">Contatti</router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped></style>