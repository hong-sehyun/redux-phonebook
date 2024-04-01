import React, { useState } from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ContactList = () => {
    const contactList = useSelector(state => state.contactList);
    const [keyword, setKeyword] = useState('');

    const searchContacts = keyword.length === 0 
        ? contactList
        : contactList.filter((item) => item.name.includes(keyword)); 

    return (
        <div>
            <SearchBox search={(item) => setKeyword(item)}/>
            {searchContacts.map((item) => (
                <ContactItem item={item} />
            ))}
        </div>
    )
}

export default ContactList