import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Offer(props) {
    return (
            <Card>
                <Card.Title>
                <br/> {/*proszę nie bij XD */}
                <h1 className="text-center">Nazwa stanowiska {props.title}</h1>
                </Card.Title>
                <Card.Body>
                    <p>City: {props.city}, {props.street}</p>
                    <p>Company: {props.company}</p>
                    <p>Seniority: {props.seniority}</p>
                    <p>Salary: from <strong>{props.salary_from}</strong> to <strong>{props.salary_to} {props.currency}</strong></p>
                    <p>Category: {props.category}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra mauris in odio hendrerit ullamcorper. Fusce scelerisque neque vestibulum maximus convallis. Sed aliquet metus eu leo gravida, a pellentesque nunc congue. Quisque eget nisi in lorem pellentesque faucibus vitae et nibh. Duis finibus lectus nibh. In non dui euismod, hendrerit dui non, auctor nunc. Maecenas sed eros et purus auctor sagittis. Cras congue odio at ligula euismod scelerisque. Aenean a lectus sed nulla pulvinar maximus. Pellentesque et porttitor urna. Donec vitae dictum lacus. Sed pellentesque magna eget turpis lobortis lobortis. Suspendisse ornare scelerisque lacinia. Quisque mollis vehicula risus, in luctus nunc. In maximus nisl sit amet tortor euismod fermentum. Aenean vitae volutpat sem.</p>
                </Card.Body>
            </Card>

    );
}

export default Offer;