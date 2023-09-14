import { Key, useEffect, useState } from 'react';
import Employees from '../contexts/user-data';

interface Member {
  id: number;
  name: string;
  lastname: string;
  position: string;
}

interface TableProps {
  permission: boolean;
  newMember?: Member;
  getMember?: (member: Member) => void;
}

const Table: React.FC<TableProps> = (props) => {

  const [permission, setPermission] = useState(true);
  const [members, setMembers] = useState(Employees)

  // Check permission of User or Admin
  useEffect(()=>{

    if (props.permission === true) {
      setPermission(true)
    } else if (props.permission === false) {
      setPermission(false)
    }

  }, [props.permission]);
  
  // Function Delete for static data
  const handleDelete = (id: number) => {
    
    const updateItems = members.filter((item: { id: number; }) => item.id !== id);
    setMembers(updateItems);

  }

  useEffect(() => {
    if (props.newMember && props.newMember.name !== '') {
      setMembers([...members, props.newMember]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.newMember])


  return (
    <div className="max-h-96 relative overflow-y-auto rounded-t-xl">
        <table className="w-[50vw] text-center text-sm text-white overflow-auto">
            <thead className="text-xl text-white uppercase bg-black">
                <tr>
                    <th scope="col" className="px-6 py-4 ">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    {permission === true ? <th scope="col" className="px-6 py-3">
                        Manage
                    </th> : null}
                </tr>
            </thead>
            <tbody className=''>
                {
                  members.map((member: Member, index: Key | null | undefined) => (
                  <tr key={index} className="border-b-2 border-gray-700">
                    <th scope="row" className="px-6 py-4 text-xl text-white whitespace-nowrap">
                      {member.name}
                    </th>
                    <td className="px-6 py-4 text-xl font-bold text-white whitespace-nowrap">
                      {member.lastname}
                    </td>
                    <td className="px-6 py-4 text-xl font-bold text-white whitespace-nowrap">
                      {member.position}
                    </td>
                   {permission === true ? <td className="px-6 py-4">
                      <button className='py-2 px-3 hover:bg-emerald-500 hover:border-white border-2 text-white rounded-xl me-3'
                      onClick={() => props.getMember?.(member) ?? (() => {})}
                      >
                        Edit
                      </button>
                      <button className='py-2 px-3 hover:bg-red-600 hover:border-white border-2 text-white rounded-xl me-3'
                      onClick={() => handleDelete(member.id)}
                      >
                        Delete
                      </button>
                    </td> : null}
                  </tr>))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table