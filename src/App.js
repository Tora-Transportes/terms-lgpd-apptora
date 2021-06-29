import logo from './images/tora-verde.png'
import docterm from './docs/termo_de_liberacao_lgpd.pdf'
import './styles/App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="tora-logo" alt="logo" />
        <p className= "titleTerm">
        TERMO DE LIBERAÇÃO LGPD
        </p>
        </header>

         {/* TEXTO TEMPORÁRIO ATÉ RECEBER O TERMO POR PARTE DO JURIDICO */}
        <p className="textBody">
        <b>DOS DADOS PESSOAIS E SENSÍVEIS</b>
        <br></br>
        <b>1.</b> O Usuário autoriza expressamente a coleta dos seus dados pessoais 
        nos exatos termos definidos pela Lei nº 13.709/2018, de maneira 
        amplamente consensual, tais como, nome, data de nascimento e/ou 
        idade, sexo, nacionalidade, estado civil, telefone, endereço, número e 
        cópia dos documentos de identificação profissional, CPF, RG, RNE, 
        CNH, habilitações, geolocalização, endereço eletrônico (e-mail),
        assinatura eletrônica, senha de acesso e liberação, dados de seu(s) 
        veículo(s), principalmente, mas não se limitando, a CRLV, RNTRC e
        ANTT, com as seguintes finalidades: a) fornecer dados atrelados a 
        contratos de transporte que podem ser firmados entre Usuário e TORA; 
        b) fiel cumprimento das obrigações de natureza previdenciária, tributária, 
        cível, anticorrupção e demais legislações vigentes, quando necessário; 
        c) criação de acesso de login e senha para execução única e exclusiva 
        das atividades relacionadas ao aplicativo da TORA; d) fins jurídicos e/ou 
        contábeis;
        <br></br>
        <b>2.</b> Importante afirmar que a TORA não faz coleta de dados pessoais sensíveis
        definidos pelo artigo 5º da LGPD, são eles: origem racial ou étnica, convicção 
        religiosa, opinião política, a organização de caráter religioso, filosófico ou 
        político, dado referente à vida sexual, dado genético.
        <br></br>
        <b>3.</b> De acordo com o artigo 7° da Lei n. 13.709/2018, as Partes reconhecem
        que, não há necessidade de autorização expressa para transmissão de dados 
        para os Órgãos Públicos, consequentemente, resta autorizado pela legislação 
        vigente.
        <br></br>
        <b>4.</b> O tratamento dos dados pessoais, assim entendido como a coleta, produção, 
        recepção, classificação, utilização, acesso, reprodução, transmissão, 
        distribuição, processamento, arquivamento, armazenamento, eliminação, 
        avaliação ou controle da informação, modificação, comunicação, transferência, 
        difusão ou extração, ocorrerá enquanto este possuir cadastro com a TORA. 
        Sua exclusão poderá ser efetuada mediante requerimento, sendo autorizada 
        sua conservação nas hipóteses descritas no artigo 16 da Lei Geral de Proteção 
        de Dados – LGPD - (Lei nº 13.709, de 14 de agosto de 2018).
        <br></br>
        <b>5.</b> Em caso de transmissão de dados para terceiros, inclusive em caso de
        subcontratação, que não ensejem cumprimento de obrigação legal, a TORA se 
        certificará que o terceiro tenha programa de cumprimento integral à Lei Geral 
        de Proteção de Dados, inclusive, mas não se limitando a inclusão de cláusula 
        </p>

      {/* APOTAMENTO TEMPORÁRIO ATÉ RECEBER O TERMO POR PARTE DO JURIDICO */}
        <a href={docterm} download='./docs/termo_de_liberacao_lgpd.pdf'>
        <Button className="downContent" variant="contained" color="primary">
        BAIXAR
        </Button>
        </a>
    </div>
  );
}

export default App;
