import './App.css';
import React from 'react';
import SampleResume from './Components/SampleResume/index'
import ResumeTemplate from './Components/ResumeTemplate';

function App() {
  const [field, setField] = React.useState({
    name: "",
    title: "",
    phoneNo: "",
    mail: "",
    address: "",
    experience: [],
    education: [],
    skills: []
  });
  const [ready, setReady] = React.useState(0);
  // Name
  const [name, setName] = React.useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  // TITLE
  const [title, setTitle] = React.useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  // PHONE NUMBER
  const [phoneNo, setPhoneNo] = React.useState("");
  const handleChangePhoneNo = (e) => {
    setPhoneNo(e.target.value);
  }
  // MAIL
  const [mail, setMail] = React.useState("");
  const handleChangeMail = (e) => {
    setMail(e.target.value);
  }
  // ADDRESS
  const [address, setAddress] = React.useState("");
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  }

  // EXPERIENCE
  const [experience, setExperience] = React.useState([{
    name: "",
    start: "",
    end: "",
    position: "",
    desc: ""
  }])

  const handleClickAddExp = () => {
    setExperience([...experience, {
      name: "",
      start: "",
      end: "",
      position: "",
      desc: ""
    }])
  }

  const handleChangeExp = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;
    const onChangeVal = [...experience]
    onChangeVal[i][name] = value;
    setExperience(onChangeVal);
  }

  const handleDelete = (i) => {
    const deleteVal = [...experience]
    deleteVal.splice(i, 1)
    setExperience(deleteVal)
  }

  // EDUCATION
  const [education, setEducation] = React.useState([{
    name: "",
    degree: "",
    start: "",
    end: "",
    desc: ""
  }])

  const handleClickAddEdu = () => {
    setEducation([...education, {
      name: "",
      degree: "",
      start: "",
      end: "",
      desc: ""
    }])
  }

  const handleChangeEdu = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;
    const onChangeVal = [...education]
    onChangeVal[i][name] = value;
    setEducation(onChangeVal);
  }

  const handleDeleteEdu = (i) => {
    const deleteVal = [...education]
    deleteVal.splice(i, 1)
    setEducation(deleteVal)
  }

  // SKILLS
  const [skill, setSkill] = React.useState("")
  const [skills, setSkills] = React.useState([])
  const handleChangeSkills = (e) => {
    setSkill(e.target.value);
  }
  const handleClickSkills = (e) => {
    e.preventDefault();
    setSkills([...skills, skill]);
  }

  // Create resume
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name===""||title===""||phoneNo===""||mail===""||address===""||experience===[]||education===[]||skills===[]){
      alert("Fill all the fields")
    }else{
      setField((prevState) => ({
        ...prevState,
        name: name,
        title: title,
        phoneNo: phoneNo,
        mail: mail,
        address: address,
        experience: experience,
        education: education,
        skills: skills
      }));
      setReady(1);
    }
  }
  console.log(field);
  return (
    <div className="App">
      {/* Form */}
      <div className={'border w-75 mx-auto pl-0 mt-5 mb-5'}>
        <h1>Resume Form</h1>
        <form className={'mr-5 ml-5'} onSubmit={handleSubmit}>
          <h4>BASIC DETAILS</h4>
          <div className={"form-group text-left"}>
            <h6>Name</h6>
            <input type="text" placeholder='Full Name' className={"form-control"} id="InputName" onChange={handleChangeName} />
          </div>
          <div className={"form-group text-left"}>
            <h6>Title</h6>
            <input type="text" placeholder='Full Stack Web Developer' className={"form-control"} id="InputTitle" onChange={handleChangeTitle} />
          </div>
          <div className={"form-group text-left"}>
            <h6>Phone No</h6>
            <input type="Number" placeholder='+91 1234567890' className={"form-control"} id="InputPhoneNo" onChange={handleChangePhoneNo} />
          </div>
          <div className={"form-group text-left"}>
            <h6>Email</h6>
            <input type="email" placeholder='email@example.com' className={"form-control"} id="InputEmail" aria-describedby="emailHelp" onChange={handleChangeMail} />
            <small id="emailHelp" className={"form-text text-muted"}>We'll never share your email with anyone else.</small>
          </div>
          <div className={"form-group text-left"}>
            <h6>Address</h6>
            <input type="text" placeholder='Location' className={"form-control"} id="InputAddress" onChange={handleChangeAddress} />
          </div>
          {/* EXPERIENCE */}
          <h4>EXPERIENCE</h4>
          {experience.map((val, i) => (
            <div>
              <div className={"form-group text-left"}>
                <h6>Company Name</h6>
                <input name='name' value={val.name} type="text" placeholder='Company Name' className={"form-control"} id="InputCompanyName" onChange={(e) => handleChangeExp(e, i)} />
              </div>
              <div className={'d-flex'}>
                <div className={"form-group text-left"}>
                  <h6>Start Date</h6>
                  <input name='start' value={val.start} type="text" placeholder='2017' className={"form-control"} id="InputCompanyName" onChange={(e) => handleChangeExp(e, i)} />
                </div>
                <div className={"form-group text-left ml-5"}>
                  <h6>End Date</h6>
                  <input name='end' value={val.end} type="text" placeholder='2020' className={"form-control"} id="InputCompanyName" onChange={(e) => handleChangeExp(e, i)} />
                </div>
                <div className={"form-group text-left ml-5"}>
                  <h6>Position</h6>
                  <input name='position' value={val.position} type="text" placeholder='Job Position' className={"form-control"} id="InputCompanyName" onChange={(e) => handleChangeExp(e, i)} />
                </div>
              </div>
              <div className={"form-group text-left"}>
                <h6>Description</h6>
                <input name='desc' value={val.desc} type="text" placeholder='Description' className={"form-control"} id="InputCompanyName" onChange={(e) => handleChangeExp(e, i)} />
              </div>
              <button type="button" class="d-flex btn btn-primary" onClick={() => handleDelete(i)}>Delete</button>
            </div>
          ))}
          <div>
            <button type="button" class="mt-3 mb-3 btn btn-primary" onClick={handleClickAddExp}>
              Add New Field
            </button>
          </div>
          {/* EDUCATION */}
          <h4>EDUCATION</h4>
          {education.map((val, i) => (
            <div>
              <div className={"form-group text-left"}>
                <h6>Institution Name</h6>
                <input name='name' value={val.name} type="text" placeholder='Institution Name' className={"form-control"} onChange={(e) => handleChangeEdu(e, i)} />
              </div>
              <div className={'d-flex'}>
                <div className={"form-group text-left"}>
                  <h6>Start Date</h6>
                  <input name='start' value={val.start} type="text" placeholder='2017' className={"form-control"} onChange={(e) => handleChangeEdu(e, i)} />
                </div>
                <div className={"form-group text-left ml-5"}>
                  <h6>End Date</h6>
                  <input name='end' value={val.end} type="text" placeholder='2020' className={"form-control"} onChange={(e) => handleChangeEdu(e, i)} />
                </div>
                <div className={"form-group text-left ml-5"}>
                  <h6>Degree</h6>
                  <input name='degree' value={val.degree} type="text" placeholder='Degree' className={"form-control"} onChange={(e) => handleChangeEdu(e, i)} />
                </div>
              </div>
              <div className={"form-group text-left"}>
                <h6>Description</h6>
                <input name='desc' value={val.desc} type="text" placeholder='Description' className={"form-control"} onChange={(e) => handleChangeEdu(e, i)} />
              </div>
              <button type="button" class="d-flex btn btn-primary" onClick={() => handleDeleteEdu(i)}>Delete</button>
            </div>
          ))}
          <div>
            <button type="button" class="mt-3 mb-3 btn btn-primary" onClick={handleClickAddEdu}>
              Add New Field
            </button>
          </div>
          {/* SKILLS */}
          <div>
            <h4>SKILLS</h4>
            <div className={'d-flex'}>
              <input name='skill' value={skill} type="text" placeholder='Institution Name' className={"form-control"} onChange={handleChangeSkills} />
              <button type="submit" class="btn btn-primary text-nowrap" onClick={handleClickSkills}>Set Skill</button>
            </div>
            {skills.map((el) => (
              <button disabled class="mt-2 mr-2 btn btn-primary text-nowrap">{el}</button>
            ))}
          </div>
          <button type="submit" class="mb-3 mt-3 btn btn-primary">Generate Resume</button>
        </form>
      </div>
      {ready === 0 ? (
        <div>
          <h1>SAMPLE RESUME STYLE</h1>
          <SampleResume />
        </div>
      ) : (
        <div>
          <h1>Resume Complete</h1>
          <ResumeTemplate field={field} />
        </div>
      )}
    </div>
  );
}

export default App;
