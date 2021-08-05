import s from "./GoBackBtn.module.css";
import { useHistory } from "react-router-dom";

export function GoBackBtn() {
  const history = useHistory();

  const onClickBtn = () => {
    history.goBack();
  };

  return (
    <button type='submit' className={s.btn} onClick={onClickBtn}>
      <p className={s.btnTitle}> Go Back</p>
    </button>
  );
}
