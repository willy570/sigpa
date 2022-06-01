import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    navigate('/home');
  };

 

  return (
    <>
      <div>
        <div class="h-screen bg-white flex flex-col rounded space-y-10 justify-center items-center">
          <div class="bg-white w-96 shadow-xl rounded p-6">
          <div className="grid grid-cols-1 my-8">
              <div className="w-4/12"></div>
              <div className="inline-block shadow overflow-hidden w-full">
                <img
                  className="w-full object-cover"
                  src="imgs/UNESCO_logo_hor_blue.jpg"
                  alt="logo unesco"
                />
              </div>
              <div className="w-3/12"></div>
            </div>
            <p class="text-m text-center">Bienvenue veuillez vous connecter</p>

            <form class="space-y-5 mt-5" method="POST">
              <input
                type="text"
                class="w-full h-12 border border-gray-800 rounded px-3"
                placeholder="Email"
              />
              <div class="w-full flex items-center border border-gray-800 rounded px-3">
                <input
                  type={passwordShown ? "text" : "password"}
                  class="w-4/5 h-12"
                  placeholder="Mot de passe"
                />
                <span class="text-blue-700 hover:bg-blue-400 rounded-md px-3" onClick={togglePassword}>
                {passwordShown ? "cacher" : "afficher"}
                </span>
              </div>

              <div class="">
                <a
                  href="#!"
                  class="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2"
                >
                  Mot de passe oublié ?
                </a>
              </div>

              <button class="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium" onClick={handleSubmit}>
                Connexion
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
