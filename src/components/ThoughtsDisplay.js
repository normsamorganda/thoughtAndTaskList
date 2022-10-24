import React from 'react'
import '../assets/Journal.css'
const ContactList = ({list,removeData}) => {
  return (
    <div>
    <table>
               <tr style={{padding:'20px'}}>
                  <th> 
                Date
                </th>
                <th>
                Your Thought
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
              {x.thought}
              </td>
            <td>
          <button type='button' id={x.id} onClick={removeData}>Remove</button> 
         </td>
        </tr>})}
      </table>
  </div>
  )
}

export default ContactList
