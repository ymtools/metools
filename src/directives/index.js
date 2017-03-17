export default {
    'absolute-bottom': {
        inserted: function (el, binding) {
            el.style.position = 'fixed';
            el.style.bottom = binding.value;
        }
    },
}