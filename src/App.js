import FAQsection from './components/atoms/FAQsection';
import Footer from './components/atoms/footer';
import Hero from './components/atoms/Hero';
import Sponsors from './components/atoms/Sponsers';
import ProcessOne from './components/atoms/LoanProcess';
import SectionTwo from './components/atoms/GuarantorshipProcess';

function App() {

  // state = {
  //   data: null
  // };
  // const [data, setData]=useState(null);

  // useEffect(() => {
  //   //update api response
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // });


  // const callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };


  return (
    <>
    <Hero/>
    <Sponsors/>
    <ProcessOne/>
    <SectionTwo/>
    <FAQsection/>
    <Footer/>
    </>
    
  )
}

export default App;
