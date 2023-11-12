import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar';
export default function AddFoodData() {
    const [foodCat, setFoodCat] = useState([])
    const [credentials, setCredentials] = useState({
        CategoryName: "",
        name: "",
        img: "",
        options: { half: "", full: "" },
        description: ""
    });

    let navigate = useNavigate()
    const loadFoodItems = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        });
        response = await response.json()
        setFoodCat(response[1])
    }

    useEffect(() => {
        loadFoodItems()
    }, [])



    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    }

    const handleOptions = (e) => {
        setCredentials({
            ...credentials,
            options: {
                ...credentials.options,
                [e.target.name]: e.target.value,
            },
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
            CategoryName: credentials.CategoryName,
            name: credentials.name,
            img: credentials.img,
            options: [{
                half: credentials.options.half,
                full: credentials.options.full,
            }],
            description: credentials.description,
        };
        console.log(JSON.stringify({ CategoryName: credentials.CategoryName, name: credentials.name, img: credentials.img, options: credentials.options, description: credentials.description }));
        const response = await fetch("http://localhost:5000/api/additems", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)

        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            alert("Food Items Added Successfully!")
            navigate("/");
        }
        else {
            alert("Enter Valid Credentials")
        }
    }

    return (
        <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxmb29kfGVufDB8fDB8fHww")', backgroundSize: 'cover', height: '100vh' }}>
            <div>
                <Navbar />
            </div>

            <div className='container' >
                <form className='w-50 m-auto mt-5 border bg-dark border-warning rounded' onSubmit={handleSubmit}>
                    <div className="m-3">
                        <label htmlFor="name" className="form-label text-white">Category Name</label>
                        <select
                            className="m-2 h-100 w-20 text-black rounded"
                            style={{ select: "#FF0000" }}
                            onChange={onChange}
                            name="CategoryName"  // Ensure that the name attribute matches the property name
                        >
                            <option>Select a category</option>
                            {foodCat.length !== 0
                                ? foodCat.map((data) => (
                                    <option key={data.CategoryName} value={data.CategoryName}>
                                        {data.CategoryName}
                                    </option>
                                ))
                                : <option>""""""</option>
                            }
                        </select>
                    </div>
                    <div className="m-3">
                        <label htmlFor="email" className="form-label text-white">Food Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="m-3">
                        <label htmlFor="name" className="form-label text-white">Image URL</label>
                        <input type="text" className="form-control" name='img' value={credentials.img} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="m-3">
                        <label htmlFor="name" className="form-label text-white">
                            Half Price
                            <input
                                type="text"
                                className="form-control"
                                name="half"
                                value={credentials.options.half}
                                onChange={handleOptions}
                                aria-describedby="emailHelp"
                            />
                        </label>
                    </div>
                    <div className="m-3">
                        <label htmlFor="name" className="form-label text-white">
                            Full Price
                            <input
                                type="text"
                                className="form-control"
                                name="full"
                                value={credentials.options.full}
                                onChange={handleOptions}
                                aria-describedby="emailHelp"
                            />
                        </label>
                    </div>

                    <div className="m-3">
                        <label htmlFor="name" className="form-label text-white">Description</label>
                        <input type="text" className="form-control" name='description' value={credentials.description} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="m-3 btn btn-warning">Save</button>
                </form>
            </div>
        </div>
    )
}
