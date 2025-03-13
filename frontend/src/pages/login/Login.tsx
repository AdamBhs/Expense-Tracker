import React, { useContext, useState } from 'react'
import styles from './login.module.css'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import Btton from '../../components/Btton'
import { login } from '../../utils/axiosInstance'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login: authLogin} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await login(email, password);
      authLogin(res.data.token);
      navigate("/home");
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }else {
        setError("An unexpected error");
      }
    }
  }

  return (
    <form className={styles.container} onSubmit={handleLogin}>
        <img src={logo} alt="" className={styles.logo}/>
        <p className={styles.soustitre}>Merci d'entrer vos information de connexion</p>
        <div className={styles.dataInput}>
          <label htmlFor='email'>Email</label>
          <Input type="email" isRequired={true} id="email" onChange={setEmail}/>
          <label htmlFor="pass">Mot de passe</label>
          <Input type="password" isRequired={true} id="pass" onChange={setPassword}/>
        </div>
        {error && <p className={styles.errors}>{error}</p>}
        <p className={styles.mdpOublie}>Mot de passe oublié ?</p>
        <Btton title={"Se connecter"}/>
        <p className={styles.createaccount}>Vous n’avez pas de compte ? <span onClick={() =>navigate('/signup')}>Créer un compte </span> </p>
    </form>
  )
}
