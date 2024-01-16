<script>

export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="container">
        <h1>Pagina Contatti</h1>

        <form action="" method="POST">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nome</label>
                <input type="text" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput2">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Messaggio</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>