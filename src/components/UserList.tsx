import { type User } from '../types.d'

interface Props {
    handleEraseLine: (id: string) => void
    colorLines: boolean
    users: User[]
}

const UserList = ({ users, colorLines, handleEraseLine }: Props) => {

    return (
        < table className='w-full' >
            <thead className='bg-slate-800'>
                <tr className='p-10'>
                    <td>Foto</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Pais</td>
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