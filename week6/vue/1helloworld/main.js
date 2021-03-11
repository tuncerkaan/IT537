new Vue({
    el: '#helloworld',
    name: 'HelloWorld',
    data: {
        message: 'Hello Vue!'
    }
})

new Vue({
    el: '#conditional',
    name: 'Conditional',
    data: {
        visibility: true
    }
})

new Vue({
    el: '#loop',
    name: 'Loop',
    data: {
        pilots: [{name:'Valentio' , surname:'Rossi'},
                {name:'Casey' , surname:'Stoner'},
                {name:'Dani' , surname:'Pedrosa'}]
    }
})

new Vue({
    el: '#attribute_bind',
    name: 'AttributeBind',
    data: {
        message:'Hello IT537! ' + new Date().toLocaleDateString() 
    }
})

new Vue({
    el: '#event_bind',
    name: 'EventBind',
    data: {
        teamName: 'Aston Martin F1 Team' 
    },
    methods: {
        reverseName: function(){
            this.teamName = this.teamName.split(' ').reverse().join(' ')
        }
    }
})