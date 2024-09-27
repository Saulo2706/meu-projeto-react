// src/components/Principal.js
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Importando estilos

const Principal = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para carregamento
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("Usuário não logado.");
        alert("Usuário não logado."); // Alerta ao usuário
        navigate('/'); // Redireciona para a página de login
      }
      setLoading(false); // Define como carregamento concluído
    };
    fetchUserData();
  }, [navigate]); // Adicione navigate às dependências

  if (loading) {
    return <div>Carregando...</div>; // Exibir uma mensagem de carregamento
  }

  // Formatar a data de nascimento
  const formatDate = (dateString) => {
    const dateParts = dateString.split('-'); // Divide a string da data
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // Retorna no formato DD/MM/YYYY
  };

  return (
    <div className="principal-container">
      <div className="principal-card">
        <h1>Bem-vindo, {userData.nome}!</h1>
        <p>Sobrenome: {userData.sobrenome}</p>
        <p>Data de Nascimento: {formatDate(userData.dataNascimento)}</p>
      </div>
    </div>
  );
};

export default Principal;
