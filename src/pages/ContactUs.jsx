import React from "react";
import Footer from "../layout/footer.jsx";
import Pages_header from "../layout/Pages_header.jsx";
import Form from "../layout/Form.jsx";

const ContactUs = () => {

    // Contact information data

    const formFields = [
        {
            id: 1,
            placeholder: "Full Name*",
            type: "text",
            pattern:"[A-Za-z\s]+",
            title:"Please enter only letters."
        },
        {
            id: 2,
            placeholder: "Phone Number*",
            type: "tel",
            pattern: "[0-9]{10}",
            title: "Enter a 10-digit phone number"
        },
        {
            id: 3,
            placeholder: "Email*",
            type: "email",
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            title: "Please enter a valid email address.",
        }
    ]

    const message = {
        name: "message",
        placeholder: "Your Message*",
    }


    const ContactUs = [
        {
            id: 1,
            icon: "fa-solid fa-envelope",
            title: "Contact Mail",
            description: "mail.example@gmail.com"
        },
        {
            id: 2,
            icon: "fa-solid fa-phone",
            title: "Contact Number",
            description: "+91 1234567890"
        },
        {
            id: 3,
            icon: "fa-solid fa-location-dot",
            title: "Address",
            description: "123, E-commerce Street, City, Country"
        }
    ]
    
    return(
        <>
            <section className="flex flex-col space-y-10 p-3 md:p-5 items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
                <Pages_header
                    headingName="Ask a Query"
                    breadcrumb={{ to: "/ContactUs", label: "Contact Us" }}
                />

                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4 w-full ">
                    <div className="flex flex-col items-center justify-center space-y-4 w-full md:w-1/3">
                        {ContactUs.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col items-center justify-center space-y-2">
                            <div className="flex items-center justify-center bg-blue-800 p-5 rounded-xl mb-4">
                                <i className={`${item.icon} text-4xl text-white`}></i>
                            </div>
                            <h2 className="font-bold text-2xl ">{item.title}</h2>
                            <p className="text-xl text-center">{item.description}</p>
                        </div>
                    </React.Fragment>
                ))}
                    </div>

                <Form formFields={formFields} message={message} />
                
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default ContactUs;