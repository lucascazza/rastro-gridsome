<template>
    <v-dialog eager content-class="dialog-video" overlay-opacity=".7" v-model="showDialog" max-width="1000">
        <iframe class="dialog-video__iframe" width="1000" height="560" :src="work.link" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </v-dialog>
</template>

<script>
	export default {
        name: 'DialogVideo',
        props: [
            'active',
            'work'
        ],
        computed: {
            showDialog: {
                get() {
                    return this.active;
                },
                set(newValue) {
                    this.$emit('update:active', newValue);
                }
            }
        },
        methods: {}
	}
</script>

<style lang="scss">
.dialog-video{
    background-color: var(--black);
    display: inline-grid;
}
</style>