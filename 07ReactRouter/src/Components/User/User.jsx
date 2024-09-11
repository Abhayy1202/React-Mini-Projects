import { useParams } from "react-router-dom"

export default function User()
{
    const {userid}= useParams()
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">User:{userid}</div>
  )
}