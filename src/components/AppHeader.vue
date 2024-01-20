<script>

export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <header class="p-2">
        <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link" :class="{ 'active': $route.name === 'home' }">Home
                    Page</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'projects.index' }" class="nav-link"
                    :class="{ 'active': $route.name === 'projects.index' }">Portfolio</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'contacts' }" class="nav-link"
                    :class="{ 'active': $route.name === 'contacts' }">Contatti</router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
.nav-tabs .nav-link.active {
    font-weight: 500;
}

.logo {
    width: 20px;
}
</style>