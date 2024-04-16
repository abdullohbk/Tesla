import Container from "../../components/containers/container";
import whiteTesla from "../../assets/images/Group 20 (2).png";
import UncontrolledExample from "../../components/corouselComp/Corousel";
import modelY from "../../assets/images/Model Y.png";
import "./style.scss";

const index = () => {
  return (
    <div className="bg-black contactClass">
      <Container>
        <img src={modelY} className="textBack" alt="" />
        <UncontrolledExample imagesTesla={whiteTesla} />
      </Container>
    </div>
  );
};

export default index;
