import UserDetail from "./UserDetail"

const URL = `https://randomuser.me/api/0.8/?results=22`

type UserType = {
  user: {
    name: {
      title: string
      first: string
      last: string
    },
    email: string
    picture: {
      large: string
    }
  }
}

export default async function UserPage() {

  const response = await fetch(URL)
  const users = await response.json()

  const { results } = users

  return <UserDetail results={results} />
}
