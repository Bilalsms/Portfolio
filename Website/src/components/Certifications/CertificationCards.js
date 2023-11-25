import React from "react";
import Card from "react-bootstrap/Card";

function CertificationCard(props) {
  const styles = {
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55,
      width: '50vw',
      height: '30vh',
      className: 'd-flex justify-content-center',
    }
  }
  
  return (
    <Card className="project-card-view" style={styles.cardImage} >
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify-center", strong:true }}>
          {props.description}
        </Card.Text>
      
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default CertificationCard;





