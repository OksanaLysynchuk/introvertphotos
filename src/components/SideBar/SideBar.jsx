import LinkList from "../LinksList/LinksList.jsx";
import Search from "../Search/Search.jsx";
import CSS from "./SideBar.module.css";
export default function SideBar() {
  return (
    <div className={CSS.sidebar}>
      <h1 className={CSS.title}>INTROVERT PHOTOS</h1>
      <p className={CSS.description}>
        personal photo diary of a chronic introvert
      </p>
      <LinkList />
      <Search />
    </div>
  );
}
