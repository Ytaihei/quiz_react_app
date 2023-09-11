import { signOut } from "firebase/auth";
import { auth } from "../api/firebase"

const Logout = () => {
    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <button onClick={handleLogout}>ログアウト</button>
    );
};

export default Logout;
