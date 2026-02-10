import Image from 'next/image'

const URL = `https://randomuser.me/api/0.8/?results=3`

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
  return (<div>
    <h1>User Page</h1>
    {/* <div>
      <pre>
        {JSON.stringify(users, null, 4)}
      </pre>
    </div> */}
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        users && users.results.map((item: UserType, index: number) =>
          <div key={index} className="border-2 m-2 p-2 flex justify-between items-center w-96">
            <div>
              <Image src={item.user.picture.large} width={100} height={100} alt="User" />
            </div>
            <div>
              <div>
                {item.user.name.title}. {item.user.name.first}  {item.user.name.last}
              </div>
              <div>
                {item.user.email}
              </div>
            </div>
          </div>
        )
      }
    </div>
  </div>
  )
}
