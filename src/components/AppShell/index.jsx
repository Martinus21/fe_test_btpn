import Header from "../Header";
import NavigateMobile from "../NavigateMobile";

function AppShell(props) {
  const { children } = props;
  return (
    <main className={`bottom-0 left-0 right-0 top-0`} >
      <Header />
      {/* <Head refs={props.refs} subNav={props.subNav} setSubNav={props.setSubNav} sideNav={props.sideNav} setSideNav={props.setSideNav}/>
      <Navside sideNav={props.sideNav} setSideNav={props.setSideNav} /> */}
      {children}
      {/* <Footer /> */}
      <NavigateMobile />
    </main>
  );
};

export default AppShell;
