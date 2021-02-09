<template>
    <v-dialog eager content-class="dialog-image dragscroll" overlay-opacity=".7" v-model="showDialog" max-width="1000">
        <!-- <v-card>
            <v-card-title class="title" primary-title>{{title}}</v-card-title>
            <v-card-text>
                <p v-if="content" v-html="content" class="text-content"></p>
                <slot></slot>
            </v-card-text>
            
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="confirmClick">{{confirmText}}</v-btn>
            </v-card-actions>
        </v-card> -->
        <div class="dialog-image__content">
            <img class="img-responsive" :src="work.imgFull" />
        </div>
    </v-dialog>
</template>

<script>
export default {
    name: 'DialogImage',
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
    methods: {
        confirmClick() {
            this.showDialog = false;
            this.$emit('confirm');
        }
    }
}
</script>

<style lang="scss">
    .dialog-image{
        display: inline-grid;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;      

        &::-webkit-scrollbar {
            width: .2em;
        }
    
        &::-webkit-scrollbar-track {
            box-shadow: transparent;
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            border-radius: 6px;
        }

        &__content{
            display: inline-grid;
            max-width: 1000px;
        }
    }
</style>