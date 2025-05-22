import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

export default function ContactUs() {

    const [state, handleSubmit] = useForm("xeqyvnlk");
    const [formSuccess, setFormSuccess] = useState(false);

    return (
        <section className="contactUs bg-gray-50">
            <div className="container">
                <div className="formWithImage flex w-[calc(100%+40px)] ml-[-20px] items-center max-lg:w-[calc(100%+20px)] max-lg:ml-[-10px] max-md:w-full max-md:ml-0 max-md:flex-wrap">
                    <div className="imageWrapper w-[calc(50%-20px)] mx-[20px] max-md:w-full max-md:mx-0 max-md:mb-[20px]">
                        <Image src={'/contactUs/article_cover.jpg'} alt='laptop with girl' className="rounded-[10px] max-md:mx-auto" width={500} height={500} />
                    </div>
                    <div className="formWrap  w-[calc(50%-20px)] mx-[20px] max-md:w-full max-md:mx-0 ">
                        <div className="intro mb-[10px]">
                            <h2 className="!font-[600]">Contact Us</h2>
                        </div>
                        <form
                            className="w-[calc(100%+16px)] ml-[-8px] flex lg:flex-wrap max-lg:block max-md:w-full max-md:ml-0"
                        >
                            <label htmlFor="firstName" className=" text-[0] mb-[10px] !font-[600] ">
                                Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                name="Name"
                                placeholder="Name"
                                className="w-full p-4 border border-gray-300 max-lg:p-3 max-md:p-2 rounded-lg mb-[40px] max-lg:mb-[20px]"
                            />
                            <ValidationError
                                prefix="Name"
                                field="Name"
                                errors={state.errors}
                            />
                            <label htmlFor="email" className=" text-[0] mb-[10px] !font-[600] ">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-4 border border-gray-300 max-lg:p-3 max-md:p-2 rounded-lg  mb-[40px] max-lg:mb-[20px]"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="Massage" className=" text-[0] mb-[10px] !font-[600] ">
                                Massage
                            </label>
                            <textarea id="message" class="w-full p-4 border max-lg:p-3 max-md:p-2 border-gray-300 rounded-lg max-lg:mb-[20px]" rows="4" placeholder="Write your message" required="" autocomplete="off" spellcheck="false" />
                            <ValidationError
                                prefix="Massage"
                                field="Massage"
                                errors={state.errors}
                            />
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#1d3c6b] mt-[30px] text-white font-bold rounded-md hover:bg-blue-800 max-lg:mt-0 transition duration-300"
                                disabled={state.submitting}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
