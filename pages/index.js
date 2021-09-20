import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Offer from '../components/offers/Offer';
import NavigationBar from '../components/navbar/NavigationBar';

export async function getStaticProps() {
  const res = await axios.get('https://test.justjoin.it/offers');
  const offers = res.data
  return {
    props: {
      offers,
    },
    revalidate: 1
  }
}

function Home() {
  return (
  <Container>
    <NavigationBar />, 
    <Offer />
  </Container>
  );
}

export default Home;