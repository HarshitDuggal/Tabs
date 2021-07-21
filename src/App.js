import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setjobs] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Value, setValue] = useState(0);
  const fetchjobs = async () => {
    const response = await fetch(url)
    const newjobs = await response.json()
    setjobs(newjobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchjobs();  
  }, []);

  if(Loading){
    return(
      <section className = 'section loading'>
        <h2>Loading .....</h2>
    </section>
    )
    
  }
  const {id,order,dates,title,duties,company} = jobs[Value] 
  return <>
  <section className='section'>
    <div className='title'>
     <h2>Experince</h2>
     <div className ='underline'></div>
    </div>
    <div className='btn-container'>
      {jobs.map((item,index) => {
        return <button key={item.id} onClick={() => {setValue(index)}}
        className={`job-btn btn-inline ${index === Value && 'active-btn'}` }
        >  {item.company}</button>
      })}
    </div>
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((duty,index) => {
        return <div className='job-desc' key={index}>
          <FaAngleDoubleRight className='job-icon'/>
          <p>{duty}</p>
        </div>
      })}
    </article>
  </section>
    
  </>
}

export default App
