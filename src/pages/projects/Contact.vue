<script>

export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="container py-5">
        <h1 class="text-center mb-5">Contattami</h1>

        <div class="row">
            <div class="col-6">
                <p>Vuoi saperne di più su di me? <br> Hai in mente un progetto per un sito e vuoi sapere se o come
                    realizzarlo? <br> Vuoi realizzare una tua pagina web e cerchi qualcuno con le capacità di realizzarla?
                </p>
                <h4 class="text-decoration-underline">Contattami</h4>
            </div>
            <div class="col-6">
                <form action="" method="POST">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome">
                    </div>

                    <div class="mb-3">
                        <label for="cognome" class="form-label">Cognome</label>
                        <input type="text" class="form-control" id="cognome">
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email">
                    </div>

                    <div class="mb-3">
                        <label for="messaggio" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="messaggio" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Invia</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>