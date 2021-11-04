export default {
    methods: {
        showToast(variant, title, description) {
            this.$root.$vToast.toast(description, {
                title: title,
                autoHideDelay: 3000,
                variant: variant,
                solid: true
            });
        }
    }
}