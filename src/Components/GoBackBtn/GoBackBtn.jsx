import s from "./GoBackBtn.module.css";
import { useHistory, useLocation } from "react-router-dom";

export function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();

  const onClickBtn = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <button type='submit' className={s.btn} onClick={onClickBtn}>
      <p className={s.btnTitle}> Go Back</p>
    </button>
  );
}
