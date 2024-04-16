import UncontrolledExample from "../../components/corouselComp/Corousel";
import "./style.scss";
import { Container } from "@containers";
// import blueTesla from "../../assets/images/blueTesla.png";
import blue2 from "../../assets/images/Group 20.png"
import modelS from "../../assets/images/Model S.png";

const index = () => {
  return (
    <div className="bg-black">
      <Container>
        <img src={modelS} className="textBack" alt="" />
        <UncontrolledExample imagesTesla={blue2} />
      </Container>
    </div>
  );
};

export default index;
