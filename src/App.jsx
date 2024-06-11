import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";


function App() {
  return (
    <div>
      {/* navbar */}
        <NavbarComponent/>
      {/* wrapper */}
        <div className="wrapper">
          <h2>wrapper</h2>
        </div>
      {/* footer */}
        <FooterComponent/>
    </div>
  );
}

export default App;
