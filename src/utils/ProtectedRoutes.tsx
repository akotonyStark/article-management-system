import { RootState } from '../redux/store'
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import RootLayout from '../layouts/RootLayout'

const ProtectedRoutes = () => {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth)
    let userData:any = localStorage.getItem('auth')
    userData = JSON.parse(userData)
    
    //const user = false
    return isAuthenticated || userData?.token ? <RootLayout/> : <Navigate to={'/login'} />
}

export default ProtectedRoutes