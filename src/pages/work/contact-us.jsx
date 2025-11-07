import { Link } from "react-router-dom";
import LinkdenIcon from "../../assets/icon/linkden-icon";
import TickIcon from "../../assets/icon/tick-icon";
import React, { useState } from "react";
import { Ali, Babar, BannerAward, TechBehemoths, TrustPiolt, UiUx } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactFormValidations = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    company: Yup.string(),
    contact: Yup.string(),
    message: Yup.string().required("Message is required"),
});

const contactFormInitialValues = {
    name: "",
    email: "",
    company: "",
    contact: "",
    message: "",
};
const LINKDEN_PROFILE = [
    {
        id: 1,
        thumbnail: Ali,
        title: 'Muhammad Ali',
        desc: 'Director & Co-Founder',
    },
    {
        id: 2,
        thumbnail: Babar,
        title: 'Muhammad Babar',
        desc: 'Director & Co-Founder',
    },
]

const TICK_FRAME = [
    {
        id: 1,
        icon: TickIcon,
        desc: 'You’ll hear from us within one business day.'
    },
    {
        id: 2,
        icon: TickIcon,
        desc: 'Our team will gather your project details and put together a clear brief.'
    },
    {
        id: 3,
        icon: TickIcon,
        desc: 'We’ll provide a tailored estimate and share a proposal for your review.'
    },
]

const ICON_IMAGES = [
    {
        id: 1,
        thumbnail: TechBehemoths,
        width: 109,
        height: 36,
    },
    {
        id: 2,
        thumbnail: TrustPiolt,
        width: 158,
        height: 38,
    },
    {
        id: 3,
        thumbnail: UiUx,
        width: 50,
        height: 36,
    },
    {
        id: 4,
        thumbnail: BannerAward,
        width: 43,
        height: 34,
    },
]
export default function ContactUs() {
    return (
        <section className="py-8 sm:py-20 bg-[#0B0B0B]">
            <div className="container">
                <div className="flex md:flex-row flex-col justify-between gap-8 sm:gap-16">
                    <div className="max-w-[616px]">
                        <div className="grid gap-8">
                            <div>
                                <HeroContant subheading='CONTACT US' classNameSub='!text-start !pb-4 sm:!pb-8' heading='Lets work on what you care about!' classNamehead='!text-start sm:!leading-[40px] !leading-[28px]' desc='Got a project in mind? From a full UI/UX refresh to a brand-new digital experience, we’re ready to help. Let’s turn your vision into reality' classNameDesc='!text-start' />
                            </div>
                            <div className="flex md:flex-row flex-col gap-8 sm:gap-12">
                                {LINKDEN_PROFILE.map((card =>
                                    <div className="flex items-center gap-4" key={card.id}>
                                        <img src={card.thumbnail} alt="ali" width={48} height={48} />
                                        <div className="grid gap-1.5">
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-base font-medium text-white">{card.title}</h2>
                                                <LinkdenIcon />
                                            </div>
                                            <p className="text-[#BDBDBD] text-sm font-normal">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid gap-3">
                                {TICK_FRAME.map((card =>
                                    <div className="flex gap-2 items-center" key={card.id}>
                                        <TickIcon />
                                        <p className="text-sm font-normal text-[#BDBDBD]">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-6">
                                {ICON_IMAGES.map((card =>
                                    <div className="" key={card.id}>
                                        <img src={card.thumbnail} alt="icon-image" width={card.width} height={card.height} />
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[540px]">
                        <div className="px-6 py-6 border w-full border-[#3C3C3C] rounded-[24px] shadow-sm bg-[rgba(255,255,255,0.05)]">
                            <Formik
                                initialValues={contactFormInitialValues}
                                validationSchema={contactFormValidations}
                                onSubmit={(values, { resetForm }) => {
                                    console.log("Form Submitted ✅", values);
                                    alert("Form submitted successfully!");
                                    resetForm();
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="grid gap-8">
                                        <div className="grid gap-6.5">
                                            <div>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    placeholder="Name*"
                                                    className={`px-4 py-2.5 text-white rounded-[8px] w-full bg-transparent focus:outline-none border ${errors.name && touched.name
                                                        ? "border-red-500 focus:border-red-500"
                                                        : "border-[#373737] focus:border-[#F3FE00]"
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>

                                            <div>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email*"
                                                    className={`px-4 py-2.5 text-white rounded-[8px] w-full bg-transparent focus:outline-none border ${errors.email && touched.email
                                                        ? "border-red-500 focus:border-red-500"
                                                        : "border-[#373737] focus:border-[#F3FE00]"
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>

                                            <div>
                                                <Field
                                                    name="company"
                                                    type="text"
                                                    placeholder="Company"
                                                    className={`px-4 py-2.5 text-white rounded-[8px] w-full bg-transparent focus:outline-none border ${errors.company && touched.company
                                                        ? "border-red-500 focus:border-red-500"
                                                        : "border-[#373737] focus:border-[#F3FE00]"
                                                        }`}
                                                />
                                            </div>

                                            <div>
                                                <Field
                                                    name="contact"
                                                    type="text"
                                                    placeholder="Contact"
                                                    className={`px-4 py-2.5 text-white rounded-[8px] w-full bg-transparent focus:outline-none border ${errors.contact && touched.contact
                                                        ? "border-red-500 focus:border-red-500"
                                                        : "border-[#373737] focus:border-[#F3FE00]"
                                                        }`}
                                                />
                                            </div>

                                            <div>
                                                <Field
                                                    as="textarea"
                                                    name="message"
                                                    placeholder="Tell us about your project*"
                                                    className={`px-4 py-4 h-[117px] resize-none text-white rounded-[8px] w-full bg-transparent focus:outline-none border ${errors.message && touched.message
                                                        ? "border-red-500 focus:border-red-500"
                                                        : "border-[#373737] focus:border-[#F3FE00]"
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    name="message"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="text-base text-white font-normal text-center w-full px-5 py-3.5 border border-[#F3FE00] rounded-full hover:bg-[#F3FE00]/10 transition"
                                        >
                                            Submit Inquiry
                                        </button>

                                        <div className="grid gap-3">
                                            <p className="text-sm text-[#F2F2F2] font-normal">
                                                Hate contact forms? Direct Contact.
                                            </p>
                                            <div className="flex md:flex-row flex-col gap-4">
                                                <Link
                                                    to="https://wa.me/14232493851"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 hover:text-[#25D366] transition"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        width="18"
                                                        height="18"
                                                        className="text-[#FFF]"
                                                    >
                                                        <path d="M20.52 3.48A11.5 11.5 0 0012 0C5.38 0 0 5.38 0 12c0 2.11.55 4.15 1.6 5.96L0 24l6.26-1.6A11.94 11.94 0 0012 24c6.62 0 12-5.38 12-12 0-3.19-1.25-6.2-3.48-8.52zM12 22a9.91 9.91 0 01-5.06-1.39l-.36-.21-3.72.95.99-3.63-.24-.38A9.94 9.94 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.06-7.64c-.27-.14-1.59-.79-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.16-1.34-.8-.72-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.48.07-.73.34s-.96.94-.96 2.28.99 2.64 1.13 2.83c.14.18 1.95 2.98 4.72 4.18.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.81-1.28.23-.64.23-1.18.16-1.28-.06-.1-.23-.16-.5-.3z" />
                                                    </svg>
                                                    <p className="text-sm text-[#BDBDBD] font-normal">
                                                        +1 423 249 3851
                                                    </p>
                                                </Link>

                                                <Link
                                                    to="mailto:businessmanager@zeeframes.com"
                                                    className="flex items-center gap-1.5"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        width="18"
                                                        height="18"
                                                        className="text-[#FFF]"
                                                    >
                                                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.511l-8 5.334-8-5.334V6h16zM4 18V9.489l8 5.334 8-5.334V18H4z" />
                                                    </svg>
                                                    <p className="text-sm text-[#BDBDBD] font-normal">
                                                        businessmanager@zeeframes.com
                                                    </p>
                                                </Link>

                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}