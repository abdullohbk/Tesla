import UncontrolledExample from "../../components/corouselComp/Corousel";
import blackTesla from "../../assets/images/Group 20 (3).png";
import "./style.scss";
import Container from "../../components/containers/container";
import modelX from "../../assets/images/Model X.png"

const index = () => {
  return (
    <div className="bg-black">
      <Container>
        <img src={modelX} className="textBack" alt="" />
        <UncontrolledExample imagesTesla={blackTesla} />
      </Container>
    </div>
  );
};

export default index;
