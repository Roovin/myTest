import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

export default function ContactUs() {

    const [state, handleSubmit] = useForm("xeqyvnlk");
    const [formSuccess, setFormSuccess] = useState(false);

    return (
        <section className="contactUs">
            <div className="container">
                <div className="formWithImage flex w-[calc(100%+40px)] ml-[-20px]">
                    <div className="imageWrapper w-[calc(50%-20px)] mx-[20px]">
                        <Image src={'/contactUs/article_cover.jpg'} alt='' width={500} height={500} />
                    </div>
                    <div className="formWrap  w-[calc(50%-20px)] mx-[20px]">
                        <form
                            className="w-[calc(100%+16px)] ml-[-8px] flex lg:flex-wrap md:mx-auto md:inline-grid md:w-full"
                        >
                            <label htmlFor="firstName" className=" text-[0] ">
                                Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                name="Name"
                                placeholder="Name"
                                className="w-full p-4 border border-gray-300 rounded-lg mb-[40px]"
                            />
                            <ValidationError
                                prefix="Name"
                                field="Name"
                                errors={state.errors}
                            />
                            <label htmlFor="email" className=" text-[0]  ">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-4 border border-gray-300 rounded-lg"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="Massage" className=" text-[0]  ">
                                Massage
                            </label>
                            <input
                                id="Massage"
                                type="text"
                                name="massage"
                                placeholder="Massage"
                                className="w-full p-4 border border-gray-300 rounded-lg "
                            />
                            <ValidationError
                                prefix="Massage"
                                field="Massage"
                                errors={state.errors}
                            />
                            <button
                                type="submit"
                                className="default h-full md:max-w-[150px] min-w-[150px] md:mx-auto"
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
