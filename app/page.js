import CenterPanel from "./components/CenterPanel";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <LeftSidebar />
      <CenterPanel />
      <RightSidebar />
    </div>
  );
}
