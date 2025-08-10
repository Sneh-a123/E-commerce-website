import React from "react";

const Form =({formFields, message})=>{

    if (!formFields) {
        return <p className="text-red-500">Form fields not provided</p>;
    }

    
    return(
        <>
            <form action="#" className=" w-full sticky top-4 h-fit z-10 flex flex-col justify-center space-y-4">
                    {formFields.map((item) => (
                        <input 
                            key={item.id} 
                            type={item.type} 
                            placeholder={item.placeholder} 
                            className="bg-white w-full pl-5 py-3 rounded-xl border border-gray-200 text-xl" 
                            required
                            pattern={item.pattern}
                            title={item.title}
                        />
                    ))}
                    {message && (
                        <textarea  name={message.name} className="bg-white w-full pl-5 py-3 rounded-xl text-xl" placeholder={message.placeholder}></textarea>
                    )}
                    <button className="bg-blue-800 text-white font-bold text-xl px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer">
                       Send
                    </button>
                </form>
        </>
    );
}

export default Form;