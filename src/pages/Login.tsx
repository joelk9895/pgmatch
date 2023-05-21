import "./Login.css";
import { app } from "../Firebase";
import TweenMax from "gsap";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // The signed-in user info.
          const user = result.user;
          console.log(
            user.displayName,
            user.uid,
            user.email,
            user.photoURL,
            user.phoneNumber
          );
          navigate("/feed");
          // IdP data available using getAdditionalUserInfo(result)
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    TweenMax.fromTo(
      "h1",

      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    TweenMax.fromTo(
      ".login-cont p",

      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      "button",

      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        duration: 1,
        scale: 1,
        delay: 1.5,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      ".filler",

      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 0.3,
        duration: 1,
        scale: 1,
        delay: 3.5,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      "hr",

      {
        opacity: 0,
        scaleX: 0,
      },
      {
        opacity: 0.5,
        duration: 1,
        scaleX: 1,
        delay: 1.5,
      }
    );
  }, []);

  useEffect(() => {
    TweenMax.fromTo(
      ".image-login",

      {
        borderRadius: "150px",
        opacity: 0,
      },
      {
        borderRadius: "0%",
        opacity: 1,
        duration: 1.5,

        delay: 2.5,
      }
    );
  }, []);

  return (
    <div className="Login-page">
      <div className="login-cont">
        <div className="filler"></div>
        <h1>Welcome to PGMatch</h1>
        <hr />
        <p>Login with your credentials to get started.</p>
        <div className="login-holder">
          <button onClick={handleSignIn}>
            Login with Google{" "}
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
              className="google-logo"
            />
          </button>
        </div>
      </div>
      <div className="image-login-holder">
        <img
          src="https://images.pexels.com/photos/1002244/pexels-photo-1002244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="image-login"
        />
      </div>
    </div>
  );
};

export default Login;
