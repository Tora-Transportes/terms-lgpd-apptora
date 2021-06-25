import logo from './images/tora-verde.png'
import './styles/App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="tora-logo" alt="logo" />
        <p className= "titleTerm">
        Termo LGPD do Chatbot
        </p>
        </header>

         {/* TEXTO TEMPORÁRIO ATÉ RECEBER O TERMO POR PARTE DO JURIDICO */}
        <p className="textBody">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis. Lectus sit amet est placerat in egestas erat imperdiet. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Sit amet mauris commodo quis imperdiet. Facilisis mauris sit amet massa vitae. Et pharetra pharetra massa massa ultricies. Ut sem viverra aliquet eget sit amet. Tincidunt vitae semper quis lectus nulla at. Bibendum ut tristique et egestas quis ipsum suspendisse. Viverra tellus in hac habitasse. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Ac tortor vitae purus faucibus ornare suspendisse. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fermentum posuere urna nec tincidunt praesent. Sagittis orci a scelerisque purus. Pulvinar sapien et ligula ullamcorper malesuada. Pharetra convallis Sagittis orci a scelerisque purus. Pulvinar sapien et ligula ullamcorper malesuada. Pharetra convallis
        Sagittis orci a scelerisque purus. Pulvinar sapien et ligula ullamcorper malesuada. Pharetra convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis. Lectus sit amet est placerat in egestas erat imperdiet. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Sit amet mauris commodo quis imperdiet. Facilisis mauris sit amet massa vitae. Et pharetra pharetra massa massa ultricies. Ut sem viverra aliquet eget sit amet. Tincidunt vitae semper quis lectus nulla at. Bibendum ut tristique et egestas quis ipsum suspendisse. Viverra tellus in hac habitasse. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Ac tortor vitae purus faucibus ornare suspendisse. Risus pretium quam vulputate dignissim suspendisse in est ante in. Fermentum posuere urna nec tincidunt praesent. Sagittis orci a scelerisque purus. Pulvinar sapien et ligula ullamcorper malesuada. Pharetra convallis 
        Sagittis orci a scelerisque purus. Pulvinar sapien et ligula ullamcorper malesuada. Pharetra convallis Sagittis orci a scelerisque purus. Pulvinar sapien et ligula ullamcorper malesuada. Pharetra convallis
        </p>

      {/* APOTAMENTO TEMPORÁRIO ATÉ RECEBER O TERMO POR PARTE DO JURIDICO */}
        <a href="https://toradigital.tora.com.br/app/terms/015799116.pdf">
        <Button className="downContent" variant="contained" color="primary">
        BAIXAR
        </Button>
        </a>
    </div>
  );
}

export default App;
