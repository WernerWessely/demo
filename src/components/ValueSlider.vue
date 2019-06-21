<template>
    <v-content>
        <v-slider 
        :label="label_"
        :max="data_.max"
        :min="data_.min"
        :step="data_.step"
        thumb-size="28"
        thumb-label="always"
        v-model="current_"></v-slider>
    </v-content>
</template>

<script>

export default {

    props: ['data'],

    data () {
        return {
            data_ : this.data,
            current_ : this.data.init,
            init_ : this.data.init,
            min_ : this.data.min_,
            max_ : this.data.max_,
            label_ : this.data.name + ' (' + this.data.unit + ')'
        }
    },
}
</script>

