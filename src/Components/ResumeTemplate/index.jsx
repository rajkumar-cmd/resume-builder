import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BsFillTelephoneFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'
import html2pdf from 'html2pdf.js';

const ResumeTemplate = ({ field }) => {
  const handleDownload = () => {
    const element = document.getElementById('content'); // Replace 'content' with the ID of the HTML element you want to convert to PDF

    html2pdf()
      .from(element)
      .save('document.pdf');
  };
  return (
    <div>
        <button onClick={handleDownload} class="mt-2 mr-2 btn btn-primary text-nowrap">DOWNLOAD</button>
      <div id="content" className={'border w-75 mx-auto pl-0 mt-5 mb-5'}>
        {/* Header */}
        <div className={'d-flex align-items-center  pt-4'}>
          <div className={'bg-secondary flex-grow-1 pt-3 pb-3'}>
            <h1 className={'text-left pl-5 text-white'}>{field.name}</h1>
            <p className={'text-left pl-5 lead text-white'}>{field.title}</p>
          </div>
          <div className={'flex-grow-1'}>
            <div className={'d-flex align-items-center pl-4'}>
              <BsFillTelephoneFill />
              <p className={'text-left m-0 pl-4'}>{field.phoneNo}</p>
            </div>
            <div className={'d-flex align-items-center pl-4'}>
              <MdEmail />
              <p className={'text-left m-0 pl-4'}>{field.mail}</p>
            </div>
            <div className={'d-flex align-items-center pl-4'}>
              <BsFillHouseDoorFill />
              <p className={'text-left m-0 pl-4'}>{field.address}</p>
            </div>
          </div>
        </div>
        {/* Experience */}
        <hr class="ml-5 mr-5 border border-black border-4"></hr>
        <div className={'d-flex mt-4 justify-content-around pl-5'}>
          <h2 className={'text-left pl-5 text-black'}>Experience</h2>
          <div className={'flex-grow-1 pl-5 pr-5'}>
            {field.experience.map((el) => (
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
            {field.education.map((el) => (
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
              {field.skills.map((el) => (
                <li className={'text-left col-3'}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeTemplate