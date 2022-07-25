var vm = new Vue({
    el: '#app',
    data: {
        title: 'vippro',
        url: 'https://www.facebook.com/',
        counter: 0
    },
    methods: {
        say: function (params) {
            return params + '123123';
        },
        tang() {
            return this.counter += 1;
        }
    }
})

console.log(vm)