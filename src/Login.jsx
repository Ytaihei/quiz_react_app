import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { auth } from "../api/firebase"

const Login = () => {
    const signInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return (
        <button onClick={signInGoogle}>Googleでログイン</button>
    );
};

export default Login;
