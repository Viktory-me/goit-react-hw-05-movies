import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Spinner() {
  return (
    <div className={s.overlay}>
      <Loader
        className={s.spin}
        type='Puff'
        color=' rgba(220, 20, 60, 0.466)'
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}
