import React from 'react'
import Card from '../../components/Card'
import { Link, useParams } from 'react-router-dom'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from 'react'
// import { userData } from '../../data/userData'

export default function Dashboard() {

  const params = useParams()
  const id = params.id

  const [formData, setFormData] = useState({

  })

  // const handleSubmit = (event) => {
  //   const {name, value} = event.target
  //   setFormData((prevFormData) => {
  //     return (
  //       ...prevFormData,
  //       [name]: value
  //     )
  //   })
  // }

  return (
    <div className='text-white lg:ml-24 ml-9'>
      
      <h1 className="text-3xl my-12">Your Events</h1>

      <div className="container flex flex-row flex-wrap">

        < Card
          imageUrl={"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydCUyMGNyb3dkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
          category={"concert"}
          title={"the weekend"}
          date={"21"}
          month={"dec"}
        />

        <Link to="/newEvent" className='container relative w-96 mr-14 border border-gray-200 rounded-3xl flex items-center justify-center'>
          < AiOutlinePlusCircle className='text-5xl'/>
        </Link>

      </div>
      {/* {
        userData.map((user) => {
          < Card
            imageUrl={event.imageUrl}
            category={event.category}
            title={event.title}
            date={event.date}
            month={event.month}
          />
          })
      } */}

    </div>
  )
}
