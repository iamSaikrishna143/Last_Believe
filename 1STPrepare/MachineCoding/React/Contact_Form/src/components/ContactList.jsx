function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className="space-y-2">
      {contacts.map(contact => (
        <div
          key={contact.id}
          className="border p-3 flex justify-between items-center rounded"
        >
          <div>
            <p className="font-semibold">{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => onEdit(contact)}
              className="bg-yellow-400 px-2 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(contact.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;