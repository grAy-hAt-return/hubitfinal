import React from 'react'
import Layout from '../../HOC/Layout/Layout'
import Testimonials from '../../components/PageComponent/HomePage/Testimonials/Testimonials'
import TestimonialsCard from '../../components/PageComponent/HomePage/Testimonials/TestimonialsCard'
import TopTestimonials from '../../components/PageComponent/HomePage/Testimonials/TopTestimonials'
function index() {
  return (
    <>
        <Layout>
            {/* <Testimonials /> */}
            {/* <TestimonialsCard /> */}
            {/* <div>
                <h1>hello</h1>
            </div> */}
            <TopTestimonials/>
        </Layout>
    </>
  )
}

export default index