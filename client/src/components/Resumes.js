import React from 'react'
import JSONDATA from '../MOCK_DATA.json'
import {useState} from 'react'

const Resumes = () => {
const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
    <input type="text" placeholder='Search...' onChange={event=>{setSearchTerm(event.target.value)}}/>
      {JSONDATA.filter((val)=>{
        if (searchTerm === ''){
          return val
        } else if (val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }
      ).map((val, key)=>{
        return (
          <div className='user' key={key}>
          <p>{val.first_name}</p>
        </div>
        );
      }
      )}
    </>
  )
}

export default Resumes
