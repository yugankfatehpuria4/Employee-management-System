import React, { useState } from "react";
const Login = ({handleLogin}) => {

    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')

    const onSubmitte = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form onSubmit={(e) => {
                    onSubmitte(e)
                }} className="flex flex-col items-center justify-center">
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        className="border-2 border-emerald-600 rounded-full px-3 py-5 text-xl outline-none bg-transparent  placeholder:text-gray-400"
                        required type="email" placeholder="enter your email" />
                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        className="border-2 border-emerald-600 rounded-full px-3 py-5 text-xl outline-none bg-transparent mt-3 placeholder:text-gray-400"
                        required type="password" placeholder="enter password" />
                    <button className="border-none mt-5 bg-emerald-600 rounded-full px-3 py-5 text-xl text-white outline-none  placeholder:text-white">Log in</button>
                </form>
            </div>
        </div>
    )
}
export default Login