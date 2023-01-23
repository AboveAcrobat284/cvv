import '../../assets/styles/Page.css'
import Caption from '../atoms/Caption';
import Picture from '../atoms/Picture';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import Espace from '../atoms/Espace';
import Phone from '../atoms/Phone';
import Mail from '../atoms/Mail';
import Adress from '../atoms/Adress';

function Prueba1() {
    return (
        <>
            <div class="contenedor">

                <div class="c1">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Picture></Picture>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Caption msn="Sobre mi"></Caption>
                    <Text msn="Estudiante de Desarrollo de Software,"></Text>
                    <Text msn="Me considero una persona responsable,"></Text>
                    <Text msn=" ordenada y productiva."></Text>
                    <br />
                    <br />
                    <br />
                    <Espace></Espace>
                    <br />
                    <br />
                    <br />
                    <Caption msn="Contacto"></Caption>
                    <br />
                    <div class="contenedordos">
                        <div>
                            <Phone></Phone>
                        </div>
                        <div>
                            <Text msn="9661111842"></Text>
                        </div>
                    </div>
                    <div class="contenedordos">
                        <div>
                            <Mail></Mail>
                        </div>
                        <div>
                            <Text msn="cgumetanavarro@gmail.com"></Text>
                        </div>
                    </div>
                    <div class="contenedordos">
                        <div>
                            <Adress></Adress>
                        </div>
                        <div>
                            <Text msn="Av.Ferrocarril#10"></Text>
                        </div>
                    </div>

                </div>

                <div class="c2">
                    <Title msn="Gumeta Navarro Carlos Eduardo"></Title>
                    <Text msn="Estudiante"></Text>
                    <Caption msn="-EXPERIENCIA LABORAL"></Caption>
                    <Caption msn="Universidad Politécnica de Chiapas"></Caption>
                    <Text msn="2022-2023"></Text>
                    <Text msn="Proyecto integrador, 2do y 3er cuatrimestre."></Text>
                    <Caption msn="-ESTUDIOS"></Caption>
                    <Caption msn="Universidad Politécnica de Chiapas"></Caption>
                    <Text msn="2023 - actualidad."></Text>
                    <Text msn="Carrera de Ingenieria en Software"></Text>
                    <Caption msn="Escuela secundaria ESTI#228"></Caption>
                    <Text msn="2015-2018"></Text>
                    <Caption msn="CECyte#33"></Caption>
                    <Text msn="Bachiller con orientación en Técnico en Programación."></Text>
                    <Caption msn="-IDIOMA"></Caption>
                    <Text msn="INGLES INTERMEDIO"></Text>
                    <Text msn="ESPAÑOL NATIVO"></Text>
                    <Caption msn="-HERRAMIENTAS DE SOFTWARE"></Caption>
                    <Text msn="Procesador de texto"></Text>
                    <Text msn="Hoja de cálculo"></Text>
                    <Text msn="Presentación de diapositivas"></Text>
                    <Text msn="Manego del ide visual studio code"></Text>
                    <Text msn="Manego del ide intellige"></Text>
                    <Text msn="Programación en lenguaje c/c++/C#"></Text>
                    <Text msn="Programación en lenguaje Java/JavaScript"></Text>
                    <Text msn="Manejo de lenguajes de marcado de hipertexto Html/css"></Text>
                </div>

            </div>
        </>
    );
}

export default Prueba1;