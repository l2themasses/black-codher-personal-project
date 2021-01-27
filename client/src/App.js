import React, { useState } from 'react';
import Item from './components/Item';
import ItemList from './components/ItemList';
import data from './models/items.json';

const App = (props) => {

     const [items] = useState(data);

     const App = (props) => {
        const [items] = useState(data);
        
       
        return <ItemList items={items} />
       }
       
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