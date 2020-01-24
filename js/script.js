function findIndex( id, arr ) {
  const item = arr.filter( item => item.id === id );
  return arr.indexOf( ...item );
}

const app = new Vue( {
  el: '#app',
  data: {
    list: [
      { id: 0, label: 'Create Vue.js App', important: false, done: false },
      { id: 1, label: 'Eat Pizza', important: false, done: false },
      { id: 2, label: 'Drink coffee', important: false, done: false },
      { id: 3, label: 'Jora kek', important: false, done: false }
    ],
    search: '',
    idCount: 4,
    label: '',
    filter: 'all'
  },
  computed: {
    todoList() {
      let todoList = this.list;
      
      if ( this.search.length ) todoList = this.list.filter( item => item.label.toLowerCase().indexOf( this.search.toLowerCase() ) >= 0 );
      if ( this.filter === 'important' ) todoList = todoList.filter( item => item.important );
      if ( this.filter === 'done' ) todoList = todoList.filter( item => item.done );
      
      return todoList;
    }
  },
  methods: {
    filterList( type ) {
      this.filter = type;
    },
    toggleProperty( id, property ) {
      const index = findIndex( id, this.list );
      
      if (property === 'important' ) this.list[ index ].important = !this.list[ index ].important;
      if (property === 'done' ) this.list[ index ].done = !this.list[ index ].done;
    },
    addItem() {
      if ( this.label.length ) {
        const item = {
          id: this.idCount++,
          label: this.label,
          important: false,
          done: false
        };
        
        this.list.push( item );
        this.label = '';
      }
    },
    deleteItem( id ) {
      const index = findIndex( id, this.list );
      this.list = [ ...this.list.slice( 0, index ), ...this.list.slice( index + 1 ) ];
    }
  }
} );
