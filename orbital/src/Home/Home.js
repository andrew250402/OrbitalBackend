import "./Home.css";
import Side from "./Side";
//import img from "../images/Orbital Poster Final.png";
const Home = () => {
  return (
    <div className="container">
      <div className="side-container">
        <Side></Side>
      </div>

      <div className="full-main-container">
        <div className="main-container">
          <div className="title">Welcome to LinkedNUS!</div>
          <div className="img">
            {/* <img className="main-logo" src={img} alt="logo" /> */}
          </div>

          <h1 className="about">About</h1>
          <h2 className="about-header">Motivation</h2>
          <p>
            Unlike secondary school or JC where we can easily find people who
            are taking the same subjects as us or have taken the subject before
            to discuss, partner up or to seek advice, in university, it is not
            as easy. Moreover, students in university might find it difficult to
            find people in the hostel or clubs or programs that they are
            interested in to seek advice from. What if there is a place where,
            with one click, allows us to find people who have taken a course,
            have taken part in a program, have stayed at a RC or are currently
            in a specific club ? To make our platform better, we have also
            included some key useful features on the side to help make
            university living better and easier. E.g Calculating predicted CAP /
            Planning modules from Year 1 to Year 4
          </p>
          <h2 className="about-header">Aim</h2>
          <p>
            We hope to create a platform for NUS students, specifically seniors
            and juniors, to connect and get to interact with each other more.
            Mainly, our aim is for students to be more informed and have a
            better understanding of what is there to expect as they progress
            throughout university.
          </p>
          <h2 className="about-header">User Stories</h2>
          <p>
            1. As a student who wants to help and give information to peers or
            juniors, I can add my achievements and current activities to my
            profile, which will be accessible to the public.
            <br />
            <br />
            2.As a student who wants to know more about a specific module or
            CCA, I can search it up and see other students who have done it and
            give them a direct message to ask my queries or questions.
            <br />
            <br /> 3. As a student leader/organisation who is shortlisting
            candidates to be part of their team, they can refer to their profile
            and portfolio to help them make better decisions to include them in
            their team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
