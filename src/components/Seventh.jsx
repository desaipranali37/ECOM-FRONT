import React, { useEffect } from 'react'

const Seventh = () => {
    fetchUser()
},[])
    useEffect(()=>{
        async function fetchUser() {
            const response = await
            fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            //console.log(data)
            setUser(data)
        }
        catch(error){
            console.error("Error fetching data:", error)
        }
        
    }
    fetchUser()
},[])
  return (
    <div>
      <h2>About useEffect Hook</h2>
      <ul>
        {useFormState.map((user)=>(
            <li key={user.id}>
                <h3>{user.id}</h3>
                <p>{user.name}</p>
                
            </li>
        }
      </ul>
    </div>
  )
}

export default Seventh
