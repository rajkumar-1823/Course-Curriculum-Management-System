import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
// import banner from './banner.png'
import { useAuth } from './Auth'

const Home = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const handleCourse = () =>{

    if(auth.user){
      navigate('/user')
    }
    else{
      alert('Please Login')
    }
  }
  return (
    <div className='mainx'>
      <div className="banner">
        <button onClick={handleCourse}>Courses</button>
      </div>
      <div class='about-container'>
    <div class='about'>
        <h3>About Us</h3>
    </div>
        <div class='para'>
            <p>Welcome to Course Curriculum System, a comprehensive online platform dedicated to providing high-quality education and resources to learners of all backgrounds. At Course Curriculum System, we believe that education is the key to unlocking opportunities and empowering individuals to achieve their goals.</p>
            <p>Our mission is to make learning accessible and engaging for everyone, regardless of geographical location or financial constraints. We strive to create a supportive and inclusive learning environment where students can explore new ideas, develop valuable skills, and pursue their passions.</p>
            <p>At the heart of Course Curriculum System is a team of dedicated educators, developers, and designers who are passionate about creating innovative learning experiences. Our team works tirelessly to develop cutting-edge curriculum, interactive lessons, and engaging multimedia content to ensure that every learner has the tools they need to succeed.</p>
        </div>
    </div>

        <div class='service-container'>
            <div class='service'>
                <h3>Our Services</h3>
            </div>
            <div class='para'>
                <p>A Course Curriculum Management System (CCMS) is a comprehensive service tailored to meet the needs of educational institutions, training centers, and online learning platforms. At its core, a CCMS facilitates the creation, organization, and dissemination of educational content and curricula. It acts as a centralized hub where educators and curriculum developers can collaborate to design and structure course materials, learning objectives, assessments, and activities.</p>
                <p>Leveraging advanced content authoring tools, a CCMS enables the creation of diverse content types, including text, multimedia, interactive exercises, quizzes, and assessments. This content is stored in a centralized repository, equipped with version control capabilities to track changes and revisions over time, ensuring content accuracy and integrity.</p>
            </div>
        </div>

      <div class="container5">
        <h2>Contact Us</h2>
        <form>
            <div class="form-group">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="message">Your Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </div>
    </div>
  )
}

export default Home
