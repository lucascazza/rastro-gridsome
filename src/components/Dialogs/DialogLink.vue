<template>
    <v-dialog eager content-class="dialog-link" overlay-opacity=".7" v-model="showDialog" :max-width="isMobile ? '400' : '640'">
        <v-card class="mx-auto my-12 dialog-link__vert" dark v-if="isMobile">
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img style="maxHeight:300px" :src="work.imgFull"></v-img>

            <v-card-title>{{work.title}}</v-card-title>

            <v-card-text>
                <v-row align="center" class="mx-0 dialog-link__row" v-if="work.dificultad">
                    <div class="grey--text ml-4">
                        Dificultad: {{work.dificultad}}
                    </div>
                    <v-rating :value="work.dificultad" color="#EE9900" dense half-increments readonly size="16"></v-rating>
                </v-row>

                <div>{{work.description}}</div>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#ebff29" text :href="work.link" target="_blank" class="ml-2 mt-5" outlined rounded large>
                    Descargar
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-card dark v-else class="dialog-link__horizontal">
            <div class="d-flex dialog-link__horizontal--content">
                <div class="content-flex">
                    <div>
                        <v-card-title class="headline" v-text="work.title"></v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0 dialog-link__row" v-if="work.dificultad">
                                <div class="grey--text ml-4">
                                    Dificultad: {{work.dificultad}}
                                </div>
                                <v-rating :value="work.dificultad" color="#EE9900" dense half-increments readonly
                                    size="16"></v-rating>
                            </v-row>

                            <div>{{work.description}}</div>
                        </v-card-text>
                    </div>
                    <v-card-actions>
                        <v-btn color="#ebff29" text :href="work.link" target="_blank" class="ml-2 mt-5" outlined rounded
                            large>
                            Descargar
                        </v-btn>
                    </v-card-actions>
                </div>

                <img class="dialog-link__horizontal--img" :src="work.imgFullVert" />
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'DialogLink',
    props: [
        'active',
        'work'
    ],
    beforeMount() {
        if (process.isClient) {
            window.addEventListener('resize', this.handleResize)
            this.handleResize()
        }
    },
    beforeDestroy() {
        if (process.isClient) {
            window.removeEventListener('resize', this.handleResize)
        }
    },
    data() {
        return {
            windowWidth: 0,
        }
    },
    computed: {
        isMobile() {
            return this.windowWidth < 768
        },
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
        handleResize() {
            if (process.isClient) {
                this.windowWidth = window.innerWidth;
            }
        }
    }
}
</script>

<style lang="scss">
.dialog-link {
    background-color: var(--black);

    @media (min-width: 768px){
        display: inline-grid;
    }

    &__row {
        display: contents;

        .v-icon.v-icon.v-icon--link {
            color: #e99000;
        }
    }

    &__vert {
        background-color: var(--black);

        .v-card__text {
            padding-bottom: 1rem;
        }

        .v-card__actions {
            padding-bottom: 20px !important;
        }

        .v-divider {
            border-color: #405C5F;

            .v-card__title,
            .v-card__text,
            .v-card__actions {
                color: #ffffff;
                background-color: var(--black);

                div {
                    color: #ffffff;
                }
            }
        }
    }

    &__horizontal{

        &--content{
            justify-content: space-between;

            .content-flex{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
            }
        }
        
        &--img{
            max-width: 30%;
        }

        .v-card__title,
        .v-card__text,
        .v-card__actions{
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .v-card__actions{
            padding-bottom: 1rem;
        }

    }
}
</style>