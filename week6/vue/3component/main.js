Vue.component('hello',{
    template: '<h5 @click="sayHello">Hello Component from IT537</h5>',
    methods: {
        sayHello() {
            console.log("Hello IT537!")
        }
    },
});

new Vue({
    el: '#component',
    name: 'ComponentSample'
})