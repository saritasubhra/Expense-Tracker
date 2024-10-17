import Balance from "./components/Balance";
import Form from "./components/Form";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <Form />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
