<template>
    <v-dialog eager content-class="dialog-link" overlay-opacity=".7" v-model="showDialog" max-width="500">
        <v-card class="mx-auto my-12" dark>
            <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>

            <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

            <v-card-title>{{work.title}}</v-card-title>

            <v-card-text>
                <v-row align="center" class="mx-0 dialog-link__row">
                    <div class="grey--text ml-4">
                        Dificultad: 4.5
                    </div>
                    <v-rating :value="4.5" color="#EE9900" dense half-increments readonly size="16"></v-rating>
                </v-row>

                <div>{{work.description}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <!-- <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
                <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                    <v-chip>5:30PM</v-chip>

                    <v-chip>7:30PM</v-chip>

                    <v-chip>8:00PM</v-chip>

                    <v-chip>9:00PM</v-chip>
                </v-chip-group>
            </v-card-text> -->

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#ebff29" text  :href="work.link" target="_blank">
                    Descargar
                </v-btn>
            </v-card-actions>
        </v-card>
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
.dialog-link {
    background-color: var(--black);
    display: inline-grid;

    &__row {
        display: contents;
    }
}

.v-card {
    .v-divider {
        border-color: #405C5F;
    }
}

.v-card__title,
.v-card__text,
.v-card__actions {
    color: #ffffff;
    background-color: var(--black);

    div {
        color: #ffffff;
    }
}
</style>