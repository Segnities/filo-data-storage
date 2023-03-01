import styles from './App.module.css';

import { useGetClientDevice } from './hooks/useGetClientDevice';

import BgDesktop from "./assets/img/bg-desktop.png"
import BgMobile from "./assets/img/bg-mobile.png";

function App(): JSX.Element {
  const userDevice: string = useGetClientDevice();
  const appBackground: string = userDevice === "mobile" ? BgMobile : BgDesktop;

  return (
    <div className={styles["App"]} style={{ backgroundImage: `url(${appBackground})` }}>
      
    </div>
  )
}

export default App
