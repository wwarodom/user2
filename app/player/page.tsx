export default function PlayerPage() {

    const initState = {
        name: "",
        age: 0,
        email: ""
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Player Page</h1>
            <form>
                <div>
                    Name: <input className="border my-2 px-2"
                        type="text" name="name" />
                </div>
                <div>
                    Age: <input className="border my-2 px-2"
                        type="number" name="age" />
                </div>
                <div>
                    Email: <input className="border my-2 px-2"
                        type="email" name="email" />
                </div>
                <div>
                    <button className="border my-2 px-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
