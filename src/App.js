import logo from './logo.svg';
import './App.css';
import Turismo from './componentes/Turismo';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
       <h1>Este verano cambiá de aire en Bariloche </h1>
       <Turismo 
       temporada='Verano'
       turismo='Bariloche es el destino ideal para cambiar de aire y llenarte de la mejor energía natural. Te espera con actividades y paisajes que estimularán todos tus sentidos. Ya sea cuando respires sus mañanas frescas a orillas del lago, cuando te llenes de sus tardes cálidas en la montaña o recorriendo algún sendero rodeado de bosques.'
       imagen='verano'/>
       <Turismo
       temporada='Otoño'
       turismo='En otoño descubrís y redescubrís toda la belleza única de la Patagonia. Las vistas imponentes desde Circuito Chico y el Cerro Catedral. La magia de las vistas del Nahuel Huapi. Cuando saboreás Bariloche, te das gustos por todos lados. Cordero patagónico a las brasas, ahumados, cerveza artesanal, deliciosos chocolates y mucho más. Otoño es la época ideal para pasear por los colores de los bosques, visitar casas de té o recorrer senderos. Por eso, date un gusto y miles.'
       imagen='otoño'/>
       <Turismo
       temporada='invierno'
       turismo='Bariloche te invita a pasar unas vacaciones de invierno de película. No te pierdas las divertidas aventuras para todo el público.
       Una historia romántica rodeados de paisajes naturales. Aventuras en la montaña, llena de acción, velocidad y adrenalina. Un viaje que nunca olvidarás, como aprender a esquiar. Y muchos momentos divertidos rodeados de un paisaje tan perfecto como la amistad.
       La temporada más esperada del año se estrena este invierno en Bariloche.'
       imagen='invierno'/>
       <Turismo
       temporada='primavera'
       turismo='Sentí la inmensidad de los aromas que te ofrece la ciudad en primavera y dejate atrapar por la intensidad de sus colores bajo el cálido sol que comienza a disipar las heladas del invierno. Bariloche, cada temporada una ciudad diferente.'
       imagen='primavera'/>
      </div>
    </div>
  );
}

export default App;
