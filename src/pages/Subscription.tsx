import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { NavButtons } from '../components/NavButtons';
import UploadImages from '../components/UploadImages';
import './Home.css';

const Subscription: React.FC = () => {
  return (
    <IonPage>
        <IonHeader collapse="condense" className='header'>
          <IonToolbar>
            <IonTitle size="large">Minty Ai Art</IonTitle>
            <IonButtons slot="end">
          <NavButtons/>
        </IonButtons>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        
    
        
      </IonContent>
    </IonPage>
  );
};

export default Subscription;