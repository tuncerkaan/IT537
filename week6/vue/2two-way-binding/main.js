new Vue({
    el: '#twb',
    data: {
        message: 'Hello IT537!',
    }
})

new Vue({
    el: '#extended_twb',
    data: {
        isSelected: false,
        selectedValueArray:'orange'
    },
    methods: {
        setValue(){
            this.selectedValueArray = 'banana';
            this.isSelected = !this.isSelected;
        }
    },
})