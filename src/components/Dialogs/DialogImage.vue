<template>
    <v-dialog overlay-opacity=".7" v-model="showDialog" max-width="1200">
        <v-card>
            <v-card-title class="title" primary-title>{{title}}</v-card-title>
            <v-card-text>
                <p v-if="content" v-html="content" class="text-content"></p>
                <slot></slot>
            </v-card-text>
            
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="confirmClick">{{confirmText}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
	export default {
        name: 'DialogImage',
        props: [
            'active',
            'title',
            'content',
            'confirmText',
            'trabajo'
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
    .text-content{
        span{
            font-weight: 700;
            color: #0A2E36;
        }
    }
    .title{
        color: #0A2E36
    }
</style>