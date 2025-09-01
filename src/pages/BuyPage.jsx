import React from "react";
import Pages_header from "../layout/Pages_header";

const BuyPage = () => {
    return (
        <>
            <section className="flex flex-col space-y-10 p-3 md:p-5 items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
                <Pages_header
                    headingName="Products"
                    breadcrumb={{ to: "/buypage", label: "Buy Page" }}
                />
                <div className="flex items-center w-full">
                    <div className="bg-white p-5 flex-col md:flex-row w-[80%] rounded-lg shadow-lg items-center gap-8">
                        <h2>Billing Details</h2>
                        <form action="">
                            <div >
                                <h3 htmlFor="">Checkout option</h3>
                                <div className="flex items-center  gap-4">
                                    <label for="I want to use an existing address" className="cursor-pointer flex items-center gap-2">
                                        <input type="radio" name="option" value="I want to use an existing address" id="I want to use an existing address" />I want to use an existing address
                                    </label>
                                    <label for="I want to use a new address" className="cursor-pointer flex items-center gap-2">
                                        <input type="radio" name="option" value="I want to use a new address" id="I want to use a new address" />I want to use a new address
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="first-name">First Name*</label>
                                    <input type="text" id="first-name" placeholder="First Name" className="border border-gray-300 rounded-xl p-2 w-full" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="last-name">Last Name*</label>
                                    <input type="text" id="last-name" placeholder="Last Name" className="border border-gray-300 rounded-xl p-2 w-full" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="company-name">Address</label>
                                <input type="text" id="address" placeholder="Address line 1" className="border border-gray-300 rounded-xl p-2 w-full" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="city">City*</label>
                                    <input type="text" id="city" placeholder="City" className="border border-gray-300 rounded-xl p-2 w-full" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="city">Pin code</label>
                                    <input type="text" id="pinCode" placeholder="Pin Code" className="border border-gray-300 rounded-xl p-2 w-full" />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="city">City*</label>
                                    <input type="text" id="city" placeholder="City" className="border border-gray-300 rounded-xl p-2 w-full" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="city">Pin code</label>
                                    <input type="text" id="pinCode" placeholder="Pin Code" className="border border-gray-300 rounded-xl p-2 w-full" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white border border-lg">
                        <h2>Order Summary</h2>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default BuyPage;