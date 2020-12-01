<template>
  <q-page class="fondo">
    <div class="q-pa-xs">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      class="ancho"
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://www.redcross.org/content/dam/redcross/cruz-roja/news-articles/coronavirus_spanish.png.transform/1288/q70/feature/image.png" />
      <q-carousel-slide :name="2" img-src="https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-07/sintomascovidhnd.jpg" />
      <q-carousel-slide :name="3" img-src="https://www.cepal.org/sites/all/themes/covid19/images/logo_eclac_covid19_es.svg" />
      
    </q-carousel>
  </div>
  <q-dialog v-model="upload">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Ingresar Archivo CSV</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-uploader
            url="http://localhost:4444/upload"
            style="max-width: 300px"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  <div class="row q-pa-lg center">
    <div class="col">
      <q-card class="my-card">
        <a href="#/Pais"><q-img src="https://s3.us-west-2.amazonaws.com/cdn.republica.gt/2020/03/coronavirus-mundol.png">
          <div class="text-h5 absolute-bottom text-center">
            Contagios por País
          </div>
        </q-img></a>
      </q-card>
    </div>
    <div class="col">
      <q-card class="my-card">
        <a href="#/Genero"><q-img src="https://s3.us-west-2.amazonaws.com/cdn.republica.gt/2020/05/coronavirus-genero.png">
          <div class="text-h5 absolute-bottom text-center">
            Contagios por Género
          </div>
        </q-img></a>
      </q-card>
    </div>
    <div class="col">
      <q-card class="my-card">
        <a href="#/Edad"><q-img src="https://static1.abc.es/Media/201409/04/edad--644x362.jpg">
          <div class="text-h5 absolute-bottom text-center">
            Contagios por Edad
          </div>
        </q-img></a>
      </q-card>
    </div>
    <div class="col">
      <q-card class="my-card" @click="upload = true">
        <q-img src="https://www.flaticon.es/svg/static/icons/svg/346/346569.svg">
          <div class="text-h5 absolute-bottom text-center">
            Agregar
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      autoplay: true,
      upload: false,
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
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

