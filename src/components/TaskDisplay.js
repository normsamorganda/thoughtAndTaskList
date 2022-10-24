import React from 'react'
import '../assets/Journal.css'
const TaskDisplay = ({list,removeData}) => {
  return (
    <div>
    <table>
               <tr style={{padding:'20px'}}>
                  <th> 
                Date
                </th>
                <th>
                Task
                </th> 
                <th>
                Action
                </th>
          </tr>
          {list.map(x => { return <tr>
              <td>
                {x.date}
              </td>
              <td>
              {x.task}
              </td>
            <td>
          <button type='button' id={x.id} onClick={removeData}>Remove</button> 
         </td>
        </tr>})}
      </table>
  </div>
  )
}

export default TaskDisplay
