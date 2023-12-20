import { auth } from "./firebase";

export default function Home () {
    const logOut = () => {
        auth.signOut(); //로그아웃
    };
    return (
        <div>
            <h1>HOME!</h1>
            <button onClick={logOut}>Logout</button>
        </div>
    );
}