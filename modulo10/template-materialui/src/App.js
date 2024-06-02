import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import NotificacaoProvider from "./context/notificacao";

function App() {
  return (
    <NotificacaoProvider>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </NotificacaoProvider>
  );
}

export default App;
