import { Navigate } from "react-router-dom";
import { auth } from "../routes/firebase";

export default function ProtectedRoute({children}:{children: React.ReactNode}) {

    const user = auth.currentUser; 
    //firebase에 user 정보 요청
    //로그인이 되어있다면 user의 값, 로그인이 안되어있다면 null
    if (user === null) { //user가 null일때 (로그인X)
        return <Navigate to="/login"></Navigate>
    }
    return children;
}