import "./styles.css";
import waves from "../../../assets/waves.png";
import BtnRounded from "../../atoms/btn-rounded/BtnRounded";
import circle from "../../../assets/circle.png";

const Jumbotron = ({ history, vw }) => {
  const onClickButton = () => {
    history.push("#percorsi");
  };
  return (
    <div className="big-container jumbotron">
      <img src={waves} alt="colored-waves" className="waves" />
      <div className="container">
        <div className="text-container">
          <p className="title">Crescita Personale, Benessere e Relazioni</p>
          <p className="text1">
            Ti stai accontentando del tuo lavoro? <br /> Ti stai accontentando
            della tua forma fisica? <br /> Ti stai accontentando delle tue
            relazioni e delle persone che frequenti? <br /> Continui a ripeterti
            che vorresti cambiare qualcosa della tua vita ma non ne trovi la
            forza?
          </p>
          <p className="text2">
            Drive your Life, disegna la vita che desideri e determina le tue
            soddisfazioni!
          </p>
          <BtnRounded
            text={"Scopri di più sui percorsi offerti!"}
            functionClick={onClickButton}
            color="bg-light-blue"
            width={vw <= 800 ? null : "w-75"}
          />
        </div>
        <div className="img-container">
          <img src={circle} alt="circle" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
