import LinkList from "../LinksList/LinksList.jsx";
import Search from "../Search/Search.jsx";
import CSS from "./SideBar.module.css";
export default function SideBar() {
  return (
    <div className={CSS.sidebar}>
      <LinkList />
      <Search />
    </div>
  );
}
