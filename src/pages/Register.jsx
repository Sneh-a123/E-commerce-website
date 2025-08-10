import React from "react";
import Pages_header from "../layout/Pages_header";
import Form from "../layout/Form.jsx";
import Img from "../assets/best_sellers/image2.webp";

const Register = () => {
    const formFields = [
        {
        id: 1,
        placeholder: "Name*",
        type: "text",
        pattern: "[A-Za-z]{2,}",
        title: "Name must be at least 2 characters long.",
        },
        {
        id: 2,
        placeholder: "Email*",
        type: "email",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
        title: "Please enter a valid email address.",
        },
        {
        id: 3,
        placeholder: "Password*",
        type: "password",
        pattern: ".{6,}",
        title: "Password must be at least 6 characters long.",
        },
        {
        id: 3,
        placeholder: "Conform Password*",
        type: "password",
        pattern: ".{6,}",
        title: "Password must be at least 6 characters long.",
        }
    ]
    return(
        <>
            <section className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100 p-5">
                <Pages_header
                    headingName="Register Page"
                    breadcrumb={{ to: "/register", label: "Register Page" }}
                />

                <div className="flex items-center justify-center">
                    <div className="bg-white shadow-2xl hover:shadow-blue-300 transition-all duration-300 rounded-3xl overflow-hidden w-full max-w-4xl mt-5 flex flex-col md:flex-row">

                        {/* Left Side: Image */}
                                    <div className="md:w-1/2 w-full h-64 md:h-auto">
                                      <img
                                        src={Img}
                                        alt="Login Visual"
                                        className="object-cover w-full h-full"
                                      />
                                    </div>

                        {/* Right Side: Form */}
                        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center space-y-4">
                            <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center md:text-left">
                                Create an Account
                            </h2>
                            <p className="text-gray-600 text-sm mb-4 text-center md:text-left">
                                Register to start shopping
                            </p>
                            <Form formFields={formFields} />
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Already have an account? <a href="/login" className="text-blue-700 underline">Login</a>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;