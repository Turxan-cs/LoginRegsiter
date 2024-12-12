import Form from "../common/Form"

const Login = () => {
    const formInputs = [
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
            title: "Login",
            style: "bg-blue-700 text-white py-3 rounded-md",
            action: handleDataSubmit
        },
        {
            title: "Don't have an account?",
            style: "text-blue-700",
            action: () => { }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => { }
        }
    ]



    return (
        <Form image={{
            url: "https://th.bing.com/th/id/OIP.K_twIU_WDtzmaILIaSLhEgHaE8?w=221&h=180&c=7&r=0&o=5&pid=1.7",
            position: "left", style: "w-[3350px]  " 
        }} containerStyle='w-[1250px] mt-12 mx-auto' formStyle="w-[1700px] flex flex-col gap-5 border p-10 rounded-md" formInputs={formInputs} formButtons={formButtons} />
    )
}

export default Login