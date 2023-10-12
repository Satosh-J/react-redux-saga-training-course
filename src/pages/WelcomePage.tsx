// Welcome.tsx
import { useNavigate } from 'react-router-dom';
import '../App.css'

export function WelcomePage() {

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/users')
  }
  return (
    <>
      <h1>Welcome to Chara!</h1>
      <button onClick={handleBtnClick}>Go to Users</button>
    </>
  );
}
