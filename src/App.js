
import { AlertProvider } from './AlertContext';
import Alert from './Alert';
import AnyComponent from './AnyComponent';
const App = () => {
  return (
    <AlertProvider>
      <Alert />
      <AnyComponent />
    </AlertProvider>
  );
};
export default App