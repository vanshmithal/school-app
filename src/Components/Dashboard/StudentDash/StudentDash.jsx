import React, { useState } from 'react'
import './StudentDash.css'
import StudentSubDash from './StudentSubDash/StudentSubDash'

const StudentDash = (props) => {
  //uses props.subjectList = ['p', 'c', 'm']
  const [state, setState] = useState({ class: <></>, selectSubject: '' })

  return (
    <>
      <div className='studentDash-container'>
        {props.subjectList.map((subj, ind) => {
          return (
            <div
              className='studentDash-subject-button'
              style={{
                borderBottom:
                  state.selectSubject === subj ? '1px solid black' : '',
              }}
              key={ind}
              onClick={() => {
                setState({
                  ...state,
                  class: <StudentSubDash subject={subj} />,
                  selectSubject: subj,
                })
              }}
            >
              {subj}
            </div>
          )
        })}
      </div>
      {state.class}
    </>
  )
}

export default StudentDash
