import React from 'react'
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import {CATEGORIES_LINK, FAVORITE_LINK} from "../../utils/linkNames";
import '../../styles/AllProducts.css'
import '../../styles/Content.css'
import {
    IonButton,
    IonButtons,
    IonContent, IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {heartOutline} from "ionicons/icons";

export default function FitnessCategory() {
    const fitnessProducts = useSelector(state =>
        state.firebase.data.products && state.firebase.data.products.fitness
            ? state.firebase.data.products.fitness : []
    );

    const renderNoProductsMessage = () => {
        return (
            <IonContent>
                Produsele din categoria fitness nu au fost incarcate inca!
            </IonContent>
        )
    };

    const renderList = () => {
        return (
            <IonContent>
                {fitnessProducts.length > 0 ? fitnessProducts.map(product => (
                    <ProductCard product={product} type='add' icon={heartOutline} text='Adauga la favorite'
                                 link={FAVORITE_LINK}/>
                )) : renderNoProductsMessage()}
            </IonContent>
        )
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Produse din categoria fitness</IonTitle>
                </IonToolbar>
            </IonHeader>

            {renderList()}
            <IonRouterLink href={CATEGORIES_LINK}><IonButton id='button' color='dark'>Inapoi</IonButton></IonRouterLink>
        </IonPage>
    )
}
