import { RotatingLines } from "react-loader-spinner";
import CSS from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={CSS.loader}>
      <RotatingLines color="#4fa94d" height={80} width={80} />
    </div>
  );
}
