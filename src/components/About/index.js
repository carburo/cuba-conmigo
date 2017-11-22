import React from "react"
import { Container } from "reactstrap"
import { FormattedMessage } from "react-intl"
import messages from './messages'
import Fade from "../Transitions/Fade"
import { H1, H2, Text, TextContainer } from "../Html"
import Callout from "../Callout"

export default class About extends React.Component {
    render() {
        return (
            <Fade in={true} timeout={0}>
                <Container>
                    <H1>
                        <FormattedMessage {...messages.aboutHeader} />
                    </H1>

                    <TextContainer lead>
                        <Text>
                            La nostra è una associazione specializzata essenzialmente in servizi da e per Cuba. A titolo esemplificativo elenchiamo quelli maggiormente forniti: inviti in Italia, visti familiari, rinnovo passaporti, matrimoni, divorzi, richieste certificati a Cuba, richieste documenti per studio, richiesta on line della cittadinanza italiana, trascrizioni di atti di nascita e di matrimoni, richiesta certificati per la residenza a Cuba di stranieri e fidejussioni.
                        </Text>
                        <Text>
                            N.B. Tutte le certificazioni e pratiche legali a Cuba, sono seguite da nostro personale in loco.
                        </Text>
                        <Text>
                            Inoltre: voli e pacchetti turistici personalizzati, visti ed assicurazioni obbligatori di viaggio, noleggio auto e invio containers.
                        </Text>

                        <H2>Perché con noi?!!!</H2>
                        <Text>
                            Perché non solo è importante fare quello che si ama, ma è pure importante amare quello che si fà! Questo concetto è palpabile conoscendo Maria Luisa negli uffici di Piazza Sante Bargellini N°3, puoi apprezzarne il rispetto che porta al proprio lavoro ed alle persone che interagiscono con lei. Cuba Conmigo offre consulenze sempre in forma gratuita anche su situazioni di particolare complessità, suggerendo sempre soluzioni ottimali alle esigenze della propria clientela.
                        </Text>

                        <Callout title="History & Mission">
                            <Text>Siamo un team di professionisti, riuniti in Associazione, che da circa 10 anni opera nel settore dei servizi alla comunità cubana mediante supporto per la produzione dei documenti consolari in stretta collaborazione con il Consolato Cubano in Roma.</Text>
                            <Text>Negli ultimi anni abbiamo esteso i nostri servizi alla vendita di biglietti da e per Cuba, al noleggio auto in Cuba e alla spedizione di pacchi verso l'Isola, oltre all'organizzazione di spedizioni più impegnative tramite l'uso di containers.</Text>
                        </Callout>

                    </TextContainer>
                </Container>
            </Fade>
        );
    }
}
