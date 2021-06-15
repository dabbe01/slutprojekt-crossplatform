// import React, { useState } from 'react'
// import * as API from '../src/components/api'

// const LoginContext = React.createContext()

// const LoginContextProvider = (props) => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [token, setToken] = useState('')


//     const login = async () => {
//         const credentials = await API.login(email, password)
//         setEmail(credentials.email)
//         setToken(credentials.token)
//     }
//     return (
//         <LoginContext.Provider value={
//             {
//                 email,
//                 setEmail,
//                 password,
//                 setPassword,
//                 setToken,
//                 token,
//                 login
//             }
//         }>
//             {props.children}
//         </LoginContext.Provider>
//     )
// }

// export { LoginContextProvider, LoginContext }