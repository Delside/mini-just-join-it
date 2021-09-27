import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Offer from '../components/offers/Offer';
import NavigationBar from '../components/navbar/NavigationBar';
import Offers from '../components/offers/Offers';

export async function getStaticProps() {

  const res = await fetch('https://test.justjoin.it/offers')
  const offers = await res.json()


  return {
    props: {
      offers: offers.map(offer => ({
        title: offer.title,
        city: offer.city,
        street: offer.street,
        category: offer.marker_icon,
        seniority: offer.experience_level,
        salary_from: offer.salary_from,
        salary_to: offer.salary_to,
        company: offer.company_name,
        id: offer.id,
        currency: offer.salary_currency
      })),
    },
    revalidate: 1
  }
}

function Home(props) {
  return (
  <Container>
    <NavigationBar /> 
    <Offers offers={props.offers}/>

  </Container>
  );
}

export default Home;