import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UploadImages from '../components/UploadImages';
import {NavButtons} from '../components/NavButtons'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Minty Ai Art</IonTitle>
        <IonButtons slot="end">
          <NavButtons/>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
    <UploadImages />
    </IonContent>
  </IonPage>

  );
};

export default Home;
