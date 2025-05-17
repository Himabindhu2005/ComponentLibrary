import React from "react"
import Testimonial from "../components/Testimonials/Testimonial"

export default function Testimonials () {
    return (
        <div className="testimonials__container">
            <Testimonial
            quote="You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
            name="Krishna"
            jobTitle="The God"
            />
            <Testimonial
            image="https://images.unsplash.com/photo-1747235170005-4162be197a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            quote="Any fool can write code that a computer can understand. Good programmers write code that humans can understand..."
            name="John 11:25-26"
            jobTitle="Programmer"
            />
            <Testimonial name="Someone" jobTitle="Writer" />
        </div>
    )}