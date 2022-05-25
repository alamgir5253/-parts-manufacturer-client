import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const UseToken = user =>{
  const [token, setToken]= useState('')
  useEffect(()=>{
    const email = user?.user?.email
    const presentUser = {email:email}
    if(email){
      fetch(`https://blooming-brook-62791.herokuapp.com/user/${email}`,{
        method:'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(presentUser)
      })
      .then(res =>res.json())
      .then(data => {
        console.log(data)
        const accessToken = data.token
        localStorage.setItem('access_token', accessToken)
        setToken(accessToken)
      })


      toast('inserted user to db')
      

    }

  },[user])


return [token]
}
export default UseToken