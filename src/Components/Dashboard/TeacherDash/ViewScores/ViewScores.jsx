import React, { useState } from 'react'
import './ViewScores.css'

const ViewScores = (props) => {
  const [state, setState] = useState({ marksPerTest: [], selectedTest: '' })
  return (
    <div className='viewScore-container'>
      <h3>View Scores</h3>
      <div className='viewScore-test-container'>
        {props.testList.map((test, ind) => {
          return (
            <div
              key={ind}
              style={{
                borderBottom:
                  state.selectedTest === test ? '1px solid black' : '',
              }}
              onClick={() => {
                console.log(
                  'api call for this testId and get all students marks and render them',
                  test
                )
                setState({
                  ...state,
                  marksPerTest: [
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                    { email: 'vanshmih', marks: 90 },
                  ],
                  selectedTest: test,
                })
              }}
            >
              {test}
            </div>
          )
        })}
      </div>
      {state.selectedTest !== '' && (
        <div className='viewScores-markslist-cont'>
          Marks for Test {state.selectedTest}
          {state.marksPerTest.map((m, ind) => {
            return (
              <div key={ind} className='viewScores-marks-cont'>
                <div className='viewScores-marks'> {m.email}</div>
                <div className='viewScores-marks'> {m.marks}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ViewScores
