import logo from './logo.svg';
import './App.css';
import {Unity,useUnityContext} from 'react-unity-webgl'

function App() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "./Build2/webgl_client_02.loader.js",
    dataUrl: "./Build2/webgl_client_02.data",
    frameworkUrl: "./Build2/webgl_client_02.framework.js",
    codeUrl: "./Build2/webgl_client_02.wasm",
  });

  return (
    <div className="App unityDiv"> 
    

    <Unity className='unityCanvas' unityProvider={unityProvider} />
</div>
  );
}

export default App;
