import CSS from "./LinkList.module.css";
export default function LinkList() {
  return (
    <div>
      <ul className={CSS.list}>
        <li className={CSS.item}>
          <a href="" className={CSS.link}>
            book blog
          </a>
        </li>
        <li className={CSS.item}>
          <a href="" className={CSS.link}>
            youtube
          </a>
        </li>
        <li className={CSS.item}>
          <a href="" className={CSS.link}>
            telegraph
          </a>
        </li>
      </ul>
    </div>
  );
}
