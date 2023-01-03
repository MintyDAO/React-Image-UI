import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon
  } from "@ionic/react";
  import React from "react";
  
  export const Menu = () => {
    return (
        <IonMenu content-id="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
    
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink="/home">
                <IonIcon slot="start" name='home'></IonIcon>
                <IonLabel>
                  Home
                </IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink="/subscription">
                <IonIcon slot="start" name='home'></IonIcon>
                <IonLabel>
                  Subscription
                </IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };