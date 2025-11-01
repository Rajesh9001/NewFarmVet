import { useContext, useState } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    // Directly authenticate without checking credentials
    setIsAuthenticating(true);
    const dummyToken = 'dummy-token';
    authCtx.authenticate(dummyToken);
    authCtx.mailsetter(email);
    // Alert.alert("", "Welcome to Dashboard");
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
