import React from 'react'

const Modal = ({ errorMesseges, setopenModal }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 `}
        >
            <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg z-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl  font-semibold">{errorMesseges.length > 0 ? "Error" : "All Done"}</h2>
                    <button
                        onClick={() => { setopenModal(false) }}
                        className="text-white bg-red-600 py-1 px-2 rounded-md"
                    >
                        x
                    </button>
                </div>
                {
                    errorMesseges.length > 0 ? errorMesseges.map((item, index) => {
                        return <p key={index} className='text-red-500 my-1'>{item}</p>
                    }) :
                        <p className='text-green-500 my-1'>Form Submitted</p>

                }
                <div className='ml-auto'>
                    <button
                        onClick={() => { setopenModal(false) }}
                        className="text-white bg-blue-600 py-1 px-2 rounded-md my-2"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal