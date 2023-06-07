import { SortBy, type User } from '../types.d'

interface Props {
    changeSorting: (sort: SortBy) => void
    handleEraseLine: (id: string) => void
    colorLines: boolean
    users: User[]
}

const UserList = ({ users, colorLines, handleEraseLine, changeSorting }: Props) => {

    return (
        < table className='w-full' >
            <thead className='bg-slate-800'>
                <tr className='p-10'>
                    <td>Foto</td>
                    <td className='cursor-pointer' onClick = { ()=> changeSorting(SortBy.NAME)}>Nombre</td>
                    <td className='cursor-pointer' onClick = { ()=> changeSorting(SortBy.LAST)}>Apellido</td>
                    <td className='cursor-pointer' onClick = { ()=> changeSorting(SortBy.COUNTRY)}>Pais</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {users?.map(user => {
                    return (
                        <tr key={user.login.uuid} className={`${colorLines ? "odd:bg-gray-600 even:bg-gray-500" : ""}`}>
                            <td><img className='rounded-full' src={user.picture.thumbnail} alt={user.name.first} /></td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.location.country}</td>
                            <td><button onClick={()=>{handleEraseLine(user.login.uuid)}}>Borrar</button></td>

                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}

export default UserList;