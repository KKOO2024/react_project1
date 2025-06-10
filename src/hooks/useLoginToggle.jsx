import {useState} from 'react';

function useLoginToggle() {
    
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = () => setIsLogin(loginToggle => !loginToggle )

  return (
    {isLogin, toggleLogin}
  )
}

export default useLoginToggle