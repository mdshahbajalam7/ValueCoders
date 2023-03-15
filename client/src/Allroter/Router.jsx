import React from 'react'
import Home from '../components/Home/Home'
import Amazing from '../page/Amazing'
import Blogs from '../page/Blogs'
import Bringing from '../page/Bringing'
import Choose from '../page/Choose'
import Companylogo from '../page/Companylogo'
import Development from '../page/Development'
import Discuss from '../page/Discuss'
import Project from '../page/Project'
import Skill from '../page/Skill'
import Software from '../page/Software'
import Technology from '../page/Technology'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../page/Footer'
import Studies from '../page/Studies'
import Consulting from '../page/Consulting'
import Consultation from '../page/Consultation'

function Router() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Companylogo/>
        <Technology/>
        <Discuss/>
        <Skill/>
        {/* <Software/> */}
        {/* <Bringing/> */}
        {/* <Development/> */}
        <Amazing/>

        <Project/>
        <Choose/>
        <Studies/>

        <Blogs/>
        <Consulting/>

        <Consultation/>


        <Footer/>
    </div>
  )
}

export default Router