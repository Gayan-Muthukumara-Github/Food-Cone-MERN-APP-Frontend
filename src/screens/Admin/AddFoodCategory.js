import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar';
export default function AddFoodCategory() {
  const [credentials, setCredentials] = useState({ categoryname: "" })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ CategoryName: credentials.categoryname}));
    const response = await fetch("http://localhost:5000/api/addcategory", {
     
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ CategoryName: credentials.categoryname})

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
        alert("Category Added Successfully!")
        navigate("/");
    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxmb29kfGVufDB8fDB8fHww")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>

        <div className='container' >
          <form className='w-50 m-auto mt-5 border bg-dark border-warning rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label text-white">Category Name</label>
              <input type="text" className="form-control" name='categoryname' value={credentials.categoryname} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="m-3 btn btn-warning">Save</button>
          </form>
        </div>
      </div>
  )
}
