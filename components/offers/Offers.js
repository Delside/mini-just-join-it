import Offer from "./Offer";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Link from 'next/link'

function Offers(props) {
    return (
        <Container>
        {props.offers.map((offer) => (
            <Link href="/[offer].js">
            <Card>
                <p><strong>{offer.title}</strong>, {offer.salary_from} - {offer.salary_to} {offer.currency}</p>
                <p>{offer.city}, {offer.street}</p>
            </Card>
            </Link>
        ))}
        </Container>
    );
}

export default Offers