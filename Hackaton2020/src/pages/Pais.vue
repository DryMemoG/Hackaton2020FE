<template>
    <q-page class="q-pa-lg">
        <q-select borderless v-model="model" :options="options" label="Selecciona un País" />
        <q-select borderless v-model="model" :options="options" label="Departamento" />
        <q-select borderless v-model="model" :options="options" label="Municipio" />
    </q-page>
</template>

<script>
export default {
    data () {
        return {
            model: null,
            options: [
            'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
        ]
        }
    }
}
</script>
<style scoped>
.ancho{
  height: 65vh
}
.ancho2{
  width: 100vw;
}
.fondo{
  background-color: #BBBFCA;
}
</style>