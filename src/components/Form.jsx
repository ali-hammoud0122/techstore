import { useState } from 'react';
import '../style/form.css';


function Form() {
  const [formData,setFormData] =useState({
    name: '',
    email: '',
    major: '',
    message: '',});
  const [submittedInfo,setSubmittedInfo] =useState(null);
  const handleChange = (fo) => {
    const { name,value } =fo.target;
    setFormData((previousValue) =>({ ...previousValue, [name]: value })
  );
  };
  const handleSubmit =(fo) =>{
  fo.preventDefault();
  setSubmittedInfo(formData);
  };
  return (
    <div className="form">
      <form className="fform" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="major">itemadded</label>
          <input id="itemadded" name="itemadded" value={formData.itemadded} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="formitem">Submit</button>
      </form>

      {submittedInfo && (
        <div className="result">
          <h3>Submitted Information</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>itemadded:</strong> {formData.itemadded}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      )}
    </div>
  );
}

export default Form;