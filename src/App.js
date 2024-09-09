
import { AlertProvider } from './context/AlertContext';
import Alert from './components/Alert';
import AnyComponent from './components/AnyComponent';
const App = () => {
  return (
    <AlertProvider>
      <Alert />
      <AnyComponent />
    </AlertProvider>
  );
};
export default App