import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BsFillTelephoneFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'

const SampleResume = () => {
  let obj = {
    name: "Full Name Here",
    title: "Full Stack Web Developer",
    phoneNo: "+91 9875487846",
    mail: "pradhan.rajkumar.1999@gmail.com",
    address: "EB-108,Sec-1,Saltlake,Kolkata-700064",
    experience: [
      {
        name: "Company-1",
        start: 2017,
        end: 2020,
        position: "Job Position",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facilis labore doloribus placeat minus, voluptatem magni rem quo temporibus ratione quas omnis cumque eaque quae sequi delectus nulla possimus odio."
      },
      {
        name: "Company-2",
        start: 2020,
        end: 2021,
        position: "Job Position",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facilis labore doloribus placeat minus, voluptatem magni rem quo temporibus ratione quas omnis cumque eaque quae sequi delectus nulla possimus odio."
      },
      {
        name: "Company-3",
        start: 2021,
        end: "On Going",
        position: "Job Position",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facilis labore doloribus placeat minus, voluptatem magni rem quo temporibus ratione quas omnis cumque eaque quae sequi delectus nulla possimus odio."
      }
    ],
    education: [
      {
        name: "University Name 1",
        degree: "Your degree",
        start: 2012,
        end: 2014,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facilis labore doloribus placeat minus, voluptatem magni rem quo temporibus ratione quas omnis cumque eaque quae sequi delectus nulla possimus odio."
      },
      {
        name: "University Name 2",
        degree: "Your degree",
        start: 2014,
        end: 2016,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facilis labore doloribus placeat minus, voluptatem magni rem quo temporibus ratione quas omnis cumque eaque quae sequi delectus nulla possimus odio."
      },
      {
        name: "University Name 3",
        degree: "Your degree",
        start: 2016,
        end: 2017,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facilis labore doloribus placeat minus, voluptatem magni rem quo temporibus ratione quas omnis cumque eaque quae sequi delectus nulla possimus odio."
      }
    ],
    skills: [
      "HTML", "CSS", "Javascript", "React", "Mongoose", "Node.js", "Tailwind","bootstrap"
    ]
  }
  return (
    <div className={'border w-75 mx-auto pl-0 mt-5 mb-5'}>
      {/* Header */}
      <div className={'d-flex align-items-center  pt-4'}>
        <div className={'bg-secondary flex-grow-1 pt-3 pb-3'}>
          <h1 className={'text-left pl-5 text-white'}>{obj.name}</h1>
          <p className={'text-left pl-5 lead text-white'}>{obj.title}</p>
        </div>
        <div className={'flex-grow-1'}>
          <div className={'d-flex align-items-center pl-4'}>
            <BsFillTelephoneFill />
            <p className={'text-left m-0 pl-4'}>{obj.phoneNo}</p>
          </div>
          <div className={'d-flex align-items-center pl-4'}>
            <MdEmail />
            <p className={'text-left m-0 pl-4'}>{obj.mail}</p>
          </div>
          <div className={'d-flex align-items-center pl-4'}>
            <BsFillHouseDoorFill />
            <p className={'text-left m-0 pl-4'}>{obj.address}</p>
          </div>
        </div>
      </div>
      {/* Experience */}
      <hr class="ml-5 mr-5 border border-black border-4"></hr>
      <div className={'d-flex mt-4 justify-content-around pl-5'}>
        <h2 className={'text-left pl-5 text-black'}>Experience</h2>
        <div className={'flex-grow-1 pl-5 pr-5'}>
          {obj.experience.map((el) => (
            <div>
              <div className={'d-flex align-items-center'}>
                <h5>{el.name}</h5>
                <h6 className={'pl-3'}>{el.start}-{el.end}</h6>
              </div>
              <h6 className={'text-left'}>{el.position}</h6>
              <p className={'text-left'}>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Education */}
      <hr class="ml-5 mr-5 border border-black border-4"></hr>
      <div className={'d-flex mt-4 justify-content-around pl-5'}>
        <h2 className={'text-left pl-5 text-black'}>Education</h2>
        <div className={'flex-grow-1 pl-5 pr-5'}>
          {obj.education.map((el) => (
            <div>
              <div className={'d-flex align-items-center'}>
                <div className={'text-left'}>
                  <h5>{el.name}</h5>
                  <h6>{el.degree}</h6>
                  <h6>{el.start}-{el.end}</h6>
                </div>
                <p className={'ml-5 w-75 text-left'}>{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills */}
      <hr class="ml-5 mr-5 border border-black border-4"></hr>
      <div className={'d-flex pb-4 mt-4 justify-content-around pl-5'}>
        <h2 className={'text-left pl-5 text-black'}>Skills</h2>
        <div className={'flex-grow-1 pl-5 pr-5 container'}>
          <ul className={'row'}>
            {obj.skills.map((el) => (
              <li className={'text-left col-3'}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SampleResume