import React, { useContext, useState } from 'react'
import styles from './login.module.css'
import logo from '../../assets/logo.png'
import Input from '../../components/Input'
import Btton from '../../components/Btton'
import { register } from '../../utils/axiosInstance'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { validateName } from '../../utils/helprs'

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const {signup: authSignup} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(password != confPass) {
        setError("Check your password");
        return;
    }

    if(!validateName(name)) {
        setError("Check your name");
        return;
    }
    
    try {
      const res = await register(name, email, password);
      authSignup(res.data.token);
      navigate("/home");
    } catch (error) {
        console.log(email, name, password);
        console.log(error);
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
          <label htmlFor='name'>Username</label>
          <Input type="text" isRequired={true} id="name" onChange={setName} />
          <label htmlFor='email'>Email</label>
          <Input type="email" isRequired={true} id="email" onChange={setEmail}/>
          <label htmlFor="pass">Mot de passe</label>
          <Input type="password" isRequired={true} id="pass" onChange={setPassword}/>
          <label htmlFor='confpass'>Confirmer votre mot de passe</label>
          <Input type="password" isRequired={true} id="confpass" onChange={setConfPassword} />
        </div>
        {error && <p className={styles.errors}>{error}</p>}
        <br/>
        <Btton title={"S'inscrire"}/>
        <p className={styles.createaccount}>Vous possedez déjà un compte ? <span onClick={()=> navigate('/login')}>Se connecter </span> </p>
    </form>
  )
}
