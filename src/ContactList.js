import React from 'react';
import ContactCard from './ContactCard';
import loading from './loading';

let ContactList = ({contacts}) => {

    let list = contacts.map(c=><ContactCard contact={c} key={c.id} />);

    return <div>
        {list}
    </div>
}

export default loading('contacts')(ContactList);