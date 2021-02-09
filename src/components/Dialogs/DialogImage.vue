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
    mounted() {
        ! function (e, n) {
            "function" == typeof define && define.amd ? define(["exports"], n) : n("undefined" != typeof exports ? exports : e.dragscroll = {})
        }(this, function (e) {
            var n = window,
                o = document,
                t = "mousemove",
                l = "mouseup",
                i = "mousedown",
                r = "EventListener",
                c = "add" + r,
                f = "remove" + r,
                m = [],
                s = function (e, r) {
                    for (e = 0; e < m.length;) r = m[e++], r[f](i, r.md, 0), n[f](l, r.mu, 0), n[f](t, r.mm, 0);
                    for (m = o.getElementsByClassName("dragscroll"), e = 0; e < m.length;) ! function (e, o, r, f) {
                        e[c](i, e.md = function (e) {
                            f = 1, o = e.clientX, r = e.clientY, e.preventDefault(), e.stopPropagation()
                        }, 0), n[c](l, e.mu = function () {
                            f = 0
                        }, 0), n[c](t, e.mm = function (n, t) {
                            t = e.scroller || e, f && (t.scrollLeft -= -o + (o = n.clientX), t.scrollTop -= -r + (r = n.clientY))
                        }, 0)
                    }(m[e++])
                };
            "complete" == o.readyState ? s() : n[c]("load", s, 0), e.reset = s
        });
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