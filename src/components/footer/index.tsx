import { Container } from "@containers";
import "./style.scss";

const index = () => {
  return (
    <footer className="bg-black text-center p-4 text-white footer">
      <Container>
        <div className="flex items-center justify-between mt-[50px]">
          <div>
            <ul>
              <li>
                <p className="footertext">396 mi</p>
                <p className="footertext2">Range (EPA est.)</p>
              </li>

              <li>
                <p className="footertext">1.99 s</p>
                <p className="footertext2">0-60 mph*</p>
              </li>

              <li>
                <p className="footertext">200 mph</p>
                <p className="footertext2">Top Speed†</p>
              </li>

              <li>
                <p className="footertext">1,020 hp</p>
                <p className="footertext2">Peak Power</p>
              </li>
            </ul>
          </div>
          <button className="footerButton">
            Order Now <i className="bi bi-chevron-double-right"></i>
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default index;
