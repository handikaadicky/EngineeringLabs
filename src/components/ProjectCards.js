import React, { useState } from "react";
import Slider from "react-slick";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

function ProjectCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="projectcards">
      <Slider {...settings}>
        <div>
          <Card tag="a">
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card 1</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button onClick={toggle}>Lihat Proyek</Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Proyek ... </ModalHeader>
                <ModalBody>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus optio atque, accusantium illo voluptas veritatis
                  dolor eos iure, facere soluta maxime quos quia illum quisquam
                  ipsum alias adipisci necessitatibus recusandae.
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card tag="a">
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card 1</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button onClick={toggle}>Lihat Proyek</Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Proyek ... </ModalHeader>
                <ModalBody>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus optio atque, accusantium illo voluptas veritatis
                  dolor eos iure, facere soluta maxime quos quia illum quisquam
                  ipsum alias adipisci necessitatibus recusandae.
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card tag="a">
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card 1</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button onClick={toggle}>Lihat Proyek</Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Proyek ... </ModalHeader>
                <ModalBody>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus optio atque, accusantium illo voluptas veritatis
                  dolor eos iure, facere soluta maxime quos quia illum quisquam
                  ipsum alias adipisci necessitatibus recusandae.
                </ModalBody>
              </Modal>
            </CardBody>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectCards;
