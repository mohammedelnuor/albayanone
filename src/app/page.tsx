import Navbar from "./components/Navbar";
import Header from "./components/header";
import Services from "./components/Services";
import Footar from "./components/footar";
import Construction from "./components/construction";
import Department from "./components/department";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      
      <Construction />

      <Department/>

      <Footar />
    </>
  );
}
