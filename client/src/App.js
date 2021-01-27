import React, { useState } from 'react';
import ItemList from './components/ItemList';
import data from './models/items.json';

const App = (props) => {

     const [items] = useState(data);

     if (items.length === 0 ) {
         return 'No items found' ;
     }

    return (
           <div>
               <ItemList items = { items } />
           </div>
         
    );
}
export default App;