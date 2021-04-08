// Rreplicare le funzioni della Todolist viste a lezione con le seguenti caratteristiche
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio
// oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

function initVue() {
    new Vue({
        el: '#app',
        data: {
            todos: [
                'elem 3',
                'elem 1',
                'elem 4',
                'elem 44',
            ],
            newTodo:'' // input di partenza vuoto
        },

        methods: {
            createNewTodo: function(){
                if(this.newTodo.length > 0){

                    this.todos.push(this.newTodo);
                    this.newTodo = '';
                }
            },
            deleteTodo: function(index){
                this.todos.splice(index, 1);
            }
        }
    });
}   // fine initVue
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);