import * as React from 'react'
import * as ReactToast from "react-toastify";

export default function NewProduct() {

    const [data , setData] = React.useState({});
      const [image, setImage] = React.useState(null);
      const fileInputRef = React.useRef(null);
    const [validationErrors , setValidationErrors] = React.useState({});

    const handleSubmit = (e)=>{
        e && e.preventDefault();
            }

            const handleChange = (e)=>{
                const {name , value } = e.target;

                setData((prev)=>({
                    ...prev,
                    [name]:value,
                }))
            }
    
  return (
    <div className="flex items-center justify-center mx-6 px-4">
            <div className="bg-white p-4 shadow-xl rounded-lg w-full max-w-md mt-0">
                <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">Create New Product</h1>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1 text-gray-700">Product Name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter your Product name'
                            // value={data.name}
                            onChange={(e)=>handleChange(e)}
                            error={validationErrors.name}
                            className="w-full border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1 text-gray-700">Price</label>
                        <input
                            type='number'
                            name='price'
                            placeholder='Enter your product price'
                            // value={data.price}
                            onChange={(e)=>handleChange(e)}
                            className="w-full border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1 text-gray-700">Upload Product Image</label>
                        <input
                            type='file'
                            ref={fileInputRef} // Attach the ref here
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full border border-gray-300 rounded-md p-1 focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1 text-gray-700">Category</label>
                        <select
                            name='category'
                            // value={category}
                            className="w-full border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e)=>handleChange(e)}
                        >
                            <option value=''>Select a category</option>
                            <option value='appetizers'>Appetizers</option>
                            <option value='main course'>Main Course</option>
                            <option value='entress'>Entress</option>
                            <option value='desert'>Desert</option>
                            <option value='beverages'>Beverages</option>
                            <option value='kids'>Kid's menu</option>
                            <option value='healthy'>Healthy Option</option>
                            <option value='seasonal'>Seasonal Special</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1 text-gray-700">Description</label>
                        <textarea 
                            name='description' 
                            // value={data.description}
                            onChange={(e)=>handleChange(e)}
                            className="w-full border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1 text-gray-700">Discount</label>
                        <input
                            type='number'
                            name='discount'
                            placeholder='Enter the discount percentage'
                            // value={data.discount}
                            onChange={(e)=>handleChange(e)}
                            className="w-full border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            className="w-full bg-green-500 font-semibold py-3 rounded-md hover:opacity-90 transition duration-200"
                        >
                            Add the Product
                        </button>
                    </div>
                </form>
            </div>
            <ReactToast.ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        </div>
  )
}
