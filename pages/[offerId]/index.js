import { Container } from "react-bootstrap";
import NavigationBar from "../../components/navbar/NavigationBar";
import Offer from "../../components/offers/Offer";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

function OfferDetails(props) {
  const router = useRouter();
  router.query.offerId;
    return (
        <Container>
                <NavigationBar /> 
                <Offer 
                   title = {props.title}
                   city = {props.city}
                   company = {props.company}
                   seniority = {props.seniority}
                   salary_from = {props.salary_from}
                   salary_to = {props.salary_to}
                   category = {props.category}
                   id = {props.id}
                />
        </Container>
    );
}

export async function getStaticPaths() {

  const res = await axios.get('https://test.justjoin.it/offers');
  const offers = res.data

  // {offers.map((offer) => (
  //   <p key={offer.id}>{offer.title}
  const offerid = offers.map((offer) => ({offer: offer.id}))
  //console.log(offerid)
  return {
    fallback: false,
    paths: offerid.map(offer => ({ params: {offerId: offer.toString()}}))
  }
}

export async function getStaticProps(context) {

    const offerId = context.params.offerId;

    const res = await axios.get('https://test.justjoin.it/offers');
    const selectedOffer = res.data.findOne({id: offerId})
    console.log(selectedOffer)
    return {
      props: {
        offerData: selectedOffer,
        },
        revalidate: 1
      };
    }
  

export default OfferDetails