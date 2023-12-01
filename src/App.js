import Header from "./Header/Header";
import Form from "./Form/Form";
import Card from "./Card/Card";
import DisplayContainer from "./Display/DisplayContainer";
import DisplayItems from "./Display/DisplayItems";

const dummy_data = [
  {
    name: "chocolaty",
    description: "chocolate",
    price: 2,
  },
  {
    name: "eclairs",
    description: "tasty",
    price: 2,
  },
];

function App() {
  return (
    <>
    <Header/>
    <Card>
    <Form/>
    <DisplayContainer>
      <DisplayItems data = {dummy_data}/>
    </DisplayContainer>
    </Card>
    
    </>
  );
}

export default App;
