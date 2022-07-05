
import Map from '../../components/mapComp/Map';
import './style.css';


function Home(){
    return(
        <div id='map-container'>
            <h2>Localize seu maquinário:</h2>
            <Map/>
        </div>
    );
}

export default Home;