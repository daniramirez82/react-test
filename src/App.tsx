import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { type User } from './types.d'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState<Array<User>>([])
  const [colorLines, setColorLines] = useState(false)
  const [sortingUsers, setSortingtUser] = useState(false);
  const [filterCountry, setFilterCountry] = useState("");

  const originalUsers = useRef(users);

  const handleColorChange = () => {
    setColorLines(!colorLines)
  }

  const handleSortUsers = () => {
    setSortingtUser(!sortingUsers);
  }

  const handleEraseLine = (id: string) => {
    const tempUsers = users.filter(user => user.login.uuid != id);
    setUsers(tempUsers);
  }

  const handleResetUsers = () => {
    setUsers(originalUsers.current)
  }

  const sortedUsers = useMemo (() => {
    console.log("sorting data")
    return sortingUsers ?
      users.toSorted((a, b) => a.location.country.localeCompare(b.location.country))
      : users
  },[sortingUsers, users])

  const filteredUsers = (
    ()=>{
      return filterCountry != "" && filterCountry.length > 0 ?
      sortedUsers.filter(user => {
        return user.location.country.toLocaleLowerCase().includes(filterCountry.toLowerCase())})
        : sortedUsers
    }
  )()

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className='w-full'>
      <h1 className='bg-slate-900'> Prueba tecnica</h1>
      <div className=' flex gap-4 p-4 '>
        <button className='bg-slate-400 text-slate-900 p-3 rounded-lg' onClick={handleColorChange}>Colorear</button>
        <button className='bg-slate-400 text-slate-900 p-3 rounded-lg' onClick={handleSortUsers}>{sortingUsers ? "Desordenar" : "Ordenar"}</button>
        <button className='bg-slate-400 text-slate-900 p-3 rounded-lg' onClick={handleResetUsers}>Reset Users</button>
        <input className='text-black' type="text" onChange={(e)=>{setFilterCountry(e.target.value)}} value={filterCountry} />

      </div>

      <UserList users={filteredUsers} colorLines={colorLines} handleEraseLine={handleEraseLine} />

    </div>
  )
}

export default App
