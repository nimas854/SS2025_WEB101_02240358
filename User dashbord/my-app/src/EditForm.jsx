function EditForm({ user, updateUser, cancelEdit }) {
    const [formData, setFormData] = useState(user);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      updateUser(formData);
    };
  
    return (
      <form className="edit-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="text" name="bio" value={formData.bio} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
        <button type="submit">Save</button>
        <button type="button" onClick={cancelEdit}>Cancel</button>
      </form>
    );
  }
  
  export default EditForm;
  