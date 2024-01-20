<script>

export default {
    data() {
        return {
            title: 'Nicola Sforza',
            job_title: 'Jr Full-Stack Web Developer'
        }
    }
}

</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-4 text-center">
                <figure>
                    <img class="profile-img" src="https://ca.slack-edge.com/T91QPE3BP-U05NXKB288N-964f7fa52102-512" alt="">
                </figure>
            </div>
            <div class="col-8">
                <h1>{{ title }}</h1>
                <h4>{{ job_title }}</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem vero doloribus quibusdam obcaecati veniam
                    voluptates nobis id, similique dolorum totam doloremque explicabo iusto corporis ipsum odit labore a
                    autem
                    aliquid?</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile-img {
    width: 200px;
    border-radius: 50%;
}
</style>