import React from 'react'
import Container from "reactstrap/lib/Container"
import Fade from "reactstrap/lib/Fade"
import { H1, H2, Text, Ul, TextContainer } from 'components/Html'
import Callout from "components/Callout"
import { FormattedMessage } from 'react-intl'
import messages from "./messages"

export default class Legal extends React.Component {
    render() {
        return (
            <Container>
                <Fade in={true} timeout={0}>
                    <H1><FormattedMessage {...messages.title} /></H1>
                    <H2>Visto turistico o familiare per l'ingreso di stranieri a Cuba</H2>
                    <Text lead>
                        Chi risiede in Italia può organizzare ed ottenere l'ingresso turistico dell'amico o il visto familiare per venire in Italia. Abbiamo la possibilità di produrre per Lei, tutta la documentazione richiesta dalle amabasciate:
                    </Text>
                    <Ul lead>
                        <li>Emissione delle polizze assicurative e fdeiussioni</li>
                        <li>Richiesta di appuntamento per l'intervista</li>
                        <li>Prenotazione di volo</li>
                        <li>Spedizione documenti in Italia o al Estero tramite corriente espresso (richiedilo / contattaci)</li>
                        <li>Consulenza telefonica per l'ottenimento del visto (dalle ore 10.00 alle 13.00 / 14.00 alle 19.00)</li>
                        <li>Paccheto completo comprensivo di feiussione bancaria, polizza sanitaria, prenotazione volo, lettera d'invito, documentazione necessaria per la richiesta di concessione del visto turistico, consulenza ed invio del dossier al estero tramite corriere.</li>
                    </Ul>

                    <H2>Servizi preso consolato cubano a Roma</H2>
                    <Ul lead>
                        <li>Proroga del passaporto cubano (tasa obbligatoria ).</li>
                        <li>Legalizzazione documenti presso il consolato cubano per matrimonio a Cuba.</li>
                        <li>Legalizzazione  certificati in prefettura / procura.</li>
                        <li>Richiesta di traduzione e legalizzazione certificati dei per richiedere la residenza a Cuba.</li>
                        <li>Nulla osta per matrimonio in Italia.</li>
                        <li>Trascrizione del certificato di nascita a Cuba.</li>
                        <li>Trascrizione del matrimonio / divorzio a Cuba.</li>
                        <li>Trascrizione morte a Cuba.</li>
                        <li>Richiesta residenza a Cuba per stranieri.</li>
                        <li>Matrimonio per procura a Cuba.</li>
                        <li>Divorzio per procura a Cuba.</li>
                        <li>Servizio di ritiro documenti / passaporti nel consolato cubano ed invio a domicilio.</li>
                        <li>Visto turistico per Cuba.</li>
                        <li>Visto commerciale.</li>
                        <li>Visto familiare per Cuba.</li>
                    </Ul>

                    <Callout title="Visti d’ingresso per stranieri a Cuba">
                        <TextContainer lead>
                            <Text>
                                Per visitare Cuba occorre il visto turistico (Tarjeta del turista). Ha una validità di 30 giorni; chi desiderasse prolungare la propria permanenza oltre tale periodo, il visto potrà essere prorogato al massimo per altri 30 giorni, rivolgendosi al ufficio immigrazione di Cuba.
                            </Text>
                            <Text>
                                Il visto turistico è un documento stampato e non è possibile trasmetterlo per mail o fax, deve essere ritirato di persona o ricevuto tramite corriere postale. Il visto va presentato al check-in alla partenza per Cuba in Aeroporto. Richiedici il visto online: puoi ritirarlo in sede oppure lo spediremo al tuo domicilio!!
                            </Text>
                            <Text>
                                Per il visto familiare invece è necessario il passaporto del richiedente da consegnare in Consolato. Per info e costo contattaci!
                            </Text>
                        </TextContainer>
                    </Callout>

                    <H2>Certificati a Cuba</H2>
                    <TextContainer lead>
                        <Text>
                            Abbiamo la possibilità di offrire un servizio celere e professionale nella gestione di tutta la documentazione necessaria; tanto nell'Ambasciata italiana all'Avana come nella Consultoria giuridica internazionale di Cuba. Ottenimento, legalizzazione e traduzione di:
                        </Text>
                        <Ul>
                            <li>Certificato di nascita.</li>
                            <li>Certificato di precedenti penali.</li>
                            <li>Certificato di fe de solteria.</li>
                            <li>Certificato di matrimonio.</li>
                            <li>Certificato di divorzio.</li>
                            <li>Titoli e documenti di studio.</li>
                        </Ul>
                    </TextContainer>

                    <H2>Richiesta della cittadinanza italiana</H2>
                    <Text lead>
                        Contattaci per più informazione.
                    </Text>
                    <H2>Assicurazione medico bagaglio obbligatoria per Cuba.</H2>
                    <Text lead>
                        Contattaci per più informazione.
                    </Text>
                </Fade>
            </Container>
        );
    }
};