/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { getContacts, addContact, updateContact, deleteContact } from "./services/api";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  const handleAddOrUpdate = async (data) => {
    if (editContact) {
      const res = await updateContact(editContact.id, data);
      setContacts(prev =>
        prev.map(c => (c.id === editContact.id ? res.data : c))
      );
      setEditContact(null);
    } else {
      const res = await addContact(data);
      setContacts(prev => [...prev, { ...res.data, id: Date.now() }]);
    }
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Manager</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ContactForm
        onSubmit={handleAddOrUpdate}
        editContact={editContact}
      />

      <ContactList
        contacts={filteredContacts}
        onEdit={setEditContact}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;