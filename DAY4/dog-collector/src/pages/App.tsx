import { useEffect } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import AppBar from '../components/AppBar';
import { useQuery } from '@tanstack/react-query';
import { getRandomDog } from '../queries/dogs';

function App() {
  const { t } = useTranslation();
  const {data, refetch} = useQuery({queryKey: ["dog_image"], queryFn: getRandomDog});

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <AppBar />
      <h1>{t("welcome")}</h1>
      <img src={data?.message} className="starter_image"></img>
    </>
  )
}

export default App
