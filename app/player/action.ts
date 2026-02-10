export default function submitPlayer(
    prevState: unknown, formData: FormData) {

    const name = formData.get("name") as string
    const age = Number(formData.get("age"))
    const email = formData.get("email") as string

    const data = { name, age, email }

    console.log(data)

    return {
        error: {},
        data
    }
}