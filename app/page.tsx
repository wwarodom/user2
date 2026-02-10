const URL = `https://randomuser.me/api/0.8/?results=3`

type UserType = {
  user: {
    name: {
      title: string
      first: string
      last: string
    },
    email: string
    picture: string
  }
}

export default async function UserPage() {
  const response = await fetch(URL)
  const users = await response.json()
  return (<div>
    <h1>User Page</h1>
    {/* <div>
      <pre>
        {JSON.stringify(users, null, 4)}
      </pre>
    </div> */}
    <div>
      {
        users && users.results.map((item: UserType, index: number) =>
          <div key={index} className="border-2 m-2 p-2">
            <div>
              {item.user.name.title}. {item.user.name.first}  {item.user.name.last}
            </div>
            <div>
              {item.user.email}
            </div>
          </div>
        )
      }
    </div>
  </div>
  )
}
