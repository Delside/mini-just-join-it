import { Container } from "react-bootstrap";
import NavigationBar from "../components/navbar/NavigationBar";
import Offer from "../components/offers/Offer";
import { useRouter } from "next/dist/client/router";

function OfferDetails(props) {
  const router = useRouter();
  router.query.offer;
    return (
        <Container>
                <NavigationBar /> 
                <Offer 
                  offer={props.offer}
                  //  title = {props.title}
                  //  city = {props.city}
                  //  company = {props.company}
                  //  seniority = {props.seniority}
                  //  salary_from = {props.salary_from}
                  //  salary_to = {props.salary_to}
                  //  category = {props.category}
                  //  id = {props.id}
                />
        </Container>
    );
}

export async function getStaticPaths() {

  const res = await fetch('https://test.justjoin.it/offers')
  const offers = await res.json()

  console.log(offers)
  Object.assign({}, offers)
  //console.log(offers)
  const offerid = offers.map(offer => ({id: offer.id}))
  console.log(offerid)
  const paths = offers.map((offer) => ({
    params: {id: offer.id}
    })
  );
  //  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const res = await fetch('https://test.justjoin.it/offers')
  const offers = await res.json()

  return {
    props: {
      offer: offers.find(offer => offer.id == context.params.id).toString()
    }
  }

  // console.log(params)
    // // const offerId = context.params.paths;

    // // const res = await axios.get('https://test.justjoin.it/offers');
    // // const selectedOffer = res.data.findOne({id: offerId})
    // // console.log(selectedOffer)

    // const bodies = await axios.get('https://test.justjoin.it/offers');
    // //const bodies = await json.json()
    // const {offers} = bodies;
    // return {
    //   props: {
    //     offer: offers.find(offer => offer.id == params.id),
    //     },
    //    // revalidate: 1
    //   };
    }
  

export default OfferDetails