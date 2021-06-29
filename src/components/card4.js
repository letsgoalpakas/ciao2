import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Carta = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle id="a" tag="h5">
            Auto
          </CardTitle>
          <CardText>Fascia bassa: 20€/h (oppure 80€ al giorno)</CardText>
          <CardText>Fascia media: 25€/h (oppure 100€ al giorno)</CardText>
          <CardText>Fascia alta: 50€/h (oppure 300€ al giorno)</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Carta;
