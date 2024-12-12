import Form from '../common/Form'

const Register = () => {
    const formInputs = [
        {
            name: "firstname",
            label: "Firstname:",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            name: "lastname",
            label: "Lastname:",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            name: "email",
            label: "Email:",
            type: "email",
            placeholder: "Enter your email"

        },

        {
            name: "password",
            label: "Password:",
            type: "password",
            placeholder: "Enter a password"

        },
    ]

    const handleDataSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    const formButtons = [
        {
            title: "Register",
            style: "bg-blue-700 text-white py-3 rounded-md",
            action: handleDataSubmit
        },
        {
            title: "Already have an account?",
            style: "text-blue-700",
            action: () => { }
        }
    ]

    return (
        <Form
            image={{
                url: "https://th.bing.com/th?id=OIF.OXgvgx4%2b4ORvjRC0cs308w&w=253&h=180&c=7&r=0&o=5&pid=1.7",
                position: "right", style: "w-[950px]"
            }}
            containerStyle='w-[1250px] mt-12 mx-auto'
            formStyle="w-[900px] flex flex-col gap-5 border p-10 rounded-md"
            formInputs={formInputs} formButtons={formButtons} />
    )
}

export default Register