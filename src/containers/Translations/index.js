import React from "react";
import {Card, Container} from "reactstrap"
import {FormattedMessage} from "react-intl"
import messages from './messages';

export default class Translations extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1><FormattedMessage {...messages.translationsHeader} /></h1>

                    <h2>Traduzioni giurate e libere</h2>
                    <p>
                        Consulenza riguardo alla documentazione necessaria da presentare a cuba
                        per conto di società italiane.
                    </p>

                    <Card>
                        <div className="card-body">
                            Presso gli uffici di Cuba Conmigo, è presente un traduttore giurato il quale, oltre che
                            prestare in forma del tutto gratuita consulenza sull’iter operativo da adottare per
                            l’espletamento delle pratiche, provvederà a tradurre e legalizzare tutti i documenti che di
                            volta in volta si rendessero necessari. Di questa opportunità possono avvalersi anche
                            società che abbiano bisogno di tradurre o legalizzare documenti societari come atti
                            costitutivi, certificati camerali, bilanci, lettere di referenze e quant’altro.
                        </div>
                    </Card>

                    <Card>
                        <div className="card-header">
                            <h4>Traduzione Asseverata</h4>
                        </div>
                        <div className="card-body">
                            Quando un documento legale deve essere tradotto per essere presentato presso un ente o
                            un’istituzione deve mantenere il proprio valore legale: in questo caso è necessaria la
                            traduzione asseverata (o traduzione giurata) in tribunale.

                            La nostra agenzia, garantisce un servizio professionale e competente di traduzioni giurate.
                            Qualora necessitaste di traduzioni con valore legale di documenti quali diplomi, certificati
                            e altri documenti ufficiali, rivolgervi a noi vi farà risparmiare tempo e denaro.Vi
                            consegneremo traduzioni asseverate complete pronte per essere utilizzate in ambito
                            ufficiale.

                            Le traduzioni giurate di ogni tipo e per ogni esigenza.

                            Tra i servizi di ambito legale la richiesta di traduzioni asseverate diventa ogni giorno più
                            frequente.
                            I confini di frontiera vengono abbattuti e la realtà odierna è sempre più multietnica,
                            pertanto sempre più spesso è necessario tradurre documenti legali perché possano essere
                            presentati per questioni ufficiali. Perciò la traduzione validata in tribunale assume
                            maggiore importanza.

                            Il servizio di asseverazione di traduzioni della nostra agenzia è garantita da un traduttore
                            giurato con più di 25 anni di esperienza.
                        </div>
                    </Card>
                </Container>
            </div>
        );
    }
}
