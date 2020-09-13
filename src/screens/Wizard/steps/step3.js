import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Checkbox from '@material-ui/core/Checkbox';
import './style.scss'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [section, setSection] = React.useState(false);

  const [expanded1, setExpanded1] = React.useState(false);
  const [section1, setSection1] = React.useState(false);

  const [expanded2, setExpanded2] = React.useState(false);
  const [section2, setSection2] = React.useState(false);

  const [expanded3, setExpanded3] = React.useState(false);
  const [section3, setSection3] = React.useState(false);

  const [expanded4, setExpanded4] = React.useState(false);
  const [section4, setSection4] = React.useState(false);

  const [all, setAll] = React.useState(false);



  const handelClickall = () => {
    setAll(!all)
    setExpanded(false);
    setExpanded1(false);
    setExpanded2(false);
    setExpanded3(false);
    setExpanded4(false);
    setSection(!section)
    setSection1(!section1)
    setSection2(!section2)
    setSection3(!section3)
    setSection4(!section4)


  };

  return (
      <>
      <div className="iconsContent">
          <div style={{marginLeft:'30px'}}></div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={()=>setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ArrowDropDownIcon style={{  color:'#000000' }}/>
        </IconButton>
        <Checkbox checked={section} onChange={()=>[setSection(!section),setExpanded(false)]} name="section" />
        <p className='iconText'>Términos y Condiciones</p>
        </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
         <div>
             <p className='textCollapse'>
             1. El DISTRIBUIDOR o PUNTO DE VENTA declara y acepta que el diligenciamiento del presente formato se realiza única y exclusivamente con el fin de que BE MOVIL solicite la vinculación y actualización El DISTRIBUIDOR o PUNTO DE VENTA como corresponsal bancario, sin que ello implique para BE MOVIL o sus aliados la obligación de aceptar tal solicitud. 
             </p>
             <p className='textCollapse'>
             2. El DISTRIBUIDOR o PUNTO DE VENTA declara y acepta que el diligenciamiento del presente formato o aceptación como corresponsal no genera un vínculo directo con BE MOVIL, toda vez que El DISTRIBUIDOR o PUNTO DE VENTA seguirá conservando su posición y nivel de jerarquía dentro de la red, reconociendo en todos los casos las jerarquías de nivel superior a las que pertenece, así como las condiciones comerciales pactadas por ellas. 
             </p>
         </div>
      </Collapse>

      <div className="iconsContent">
          <div style={{marginLeft:'30px'}}></div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded1,
          })}
          onClick={()=>setExpanded1(!expanded1)}
          aria-expanded={expanded1}
          aria-label="show more"
        >
          <ArrowDropDownIcon style={{  color:'#000000' }}/>
        </IconButton>
        <Checkbox checked={section1} onChange={()=>[setSection1(!section1),setExpanded1(false)]} name="section1" />
        <p className='iconText'>AUTORIZACIÓN PARA CONSULTA Y REPORTE A CENTRALES DE RIESGO Y LISTAS RESTIRCTIVAS</p>
        </div>
      <Collapse in={expanded1} timeout="auto" unmountOnExit style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
         <div>
            <p className='textCollapse'>
             Con el diligenciamiento del presente formato, autorizo a BE MOVIL para que procese, administre, coleccione, archive, reporte o transmita la información comercial y financiera que reciba u obre en su poder sobre el suscrito y para que recolecte o consulte en las diferentes centrales de riesgo y listas restrictivas, la información sobre mi comportamiento crediticio y, respecto del cumplimiento de cualquier obligación civil o natural a mi cargo; así mismo para reportar a terceros tales datos, dando cumplimiento a lo contemplado en la Ley 1266 de 2008.            
            </p>
         </div>
      </Collapse>

      <div className="iconsContent">
          <div style={{marginLeft:'30px'}}></div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded2,
          })}
          onClick={()=>setExpanded2(!expanded2)}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ArrowDropDownIcon style={{  color:'#000000' }}/>
        </IconButton>
        <Checkbox checked={section2} onChange={()=>[setSection2(!section2),setExpanded2(false)]} name="section2" />
        <p className='iconText'>TRATAMIENTO DE DATOS PERSONALES</p>
        </div>
      <Collapse in={expanded2} timeout="auto" unmountOnExit style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
         <div>
             <p className='textCollapse'>
             El DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga en todo a cumplir con los procedimientos, autorizaciones, requisitos, condicionamientos y alcances contemplados para la protección de los datos de carácter personal en las leyes que regulen
             la materia. 
             El DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga a mantener en estricta reserva y absoluta confidencialidad todos los documentos y bases de datos que contengan información personal de clientes, proveedores y/o empleados de cualquiera de las Partes. Esta información no podrá ser utilizada por las Partes para fines distintos de los que sean necesarios para la prestación de los servicios objeto del presente Contrato, ni podrá ser entregada o cedida, transferida o transmitida, parcial o totalmente a terceras personas ajenas a esta relación contractual.
             En virtud de la obligación anteriormente descrita, el DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga expresamente a: a) Utilizar o aplicar la información personal proporcionada por BE MOVIL y por los clientes exclusivamente para la realización de los fines establecidos en este Contrato, b) No comunicarlos, traspasarlos o proporcionarlos a otras personas, ni duplicar o reproducir toda o Parte de la información, c) Asegurarse de que los datos sean manejados únicamente por aquellos empleados cuya intervención sea necesaria para la prestación de los servicios del presente contrato, con sujeción al secreto profesional y confidencialidad, d) Admitir los controles y auditorías que las Partes requieran a efectos de verificar el cumplimiento de lo establecido en el presente documento, e) Una vez finalizado el Contrato, deberá destruir la información o devolverla sin conservar ninguna copia, f) Custodiar la información, a través de las medidas de seguridad, legalmente exigibles, de índole técnica y organizativa que garanticen la seguridad de los mismos, evitando su alteración, pérdida, tratamiento o acceso no autorizado, g) Responder por cualquier reclamo, denuncia, proceso judicial, procedimiento administrativo u otro iniciado contra alguna de ellas como motivo del incumplimiento de cualquiera de las obligaciones pactadas en este artículo El DISTRIBUIDOR Y/O PUNTO DE VENTA asumirá las costas y costos correspondientes, asumiendo cualquier monto por daños o perjuicios, indemnizaciones, multas, u otras sanciones que pudiera recibir BE MOVIL. 
             El DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga a suministrar físicamente, en cualquier tiempo, previo requerimiento de BE MOVIL, la autorización previa y expresa por Parte del titular de la información que establezca la facultad de realizar tratamiento de los datos para los fines establecidos en el 
             presente Contrato. 
             </p>
         </div>
      </Collapse>

      <div className="iconsContent">
          <div style={{marginLeft:'30px'}}></div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded3,
          })}
          onClick={()=>setExpanded3(!expanded3)}
          aria-expanded={expanded3}
          aria-label="show more"
        >
          <ArrowDropDownIcon style={{  color:'#000000' }}/>
        </IconButton>
        <Checkbox checked={section3} onChange={()=>[setSection3(!section3),setExpanded3(false)]} name="section3" />
        <p className='iconText'>AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES</p>
        </div>
      <Collapse in={expanded3} timeout="auto" unmountOnExit style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
         <div>
            <p className='textCollapse_'>
            En mi calidad de Titular de la información o Representante Legal del mismo, autorizo a BE MOVIL a dar Tratamiento a mis datos personales, de acuerdo a la Ley 1581 de 2012 y el decreto reglamentario 1377 de 2013 para:
            </p>
            
            <p className='textCollapse_'>
            b)     Evaluar la calidad de los servicio. 
            </p>

            <p className='textCollapse_'>
            c)     Realizar estudios de mercadeo. 
            </p>
            <p className='textCollapse_'>
            d)     Envió de publicidad
            </p>
            <p className='textCollapse_'>
            e)     Transferir o transmitir la información de contacto, para el envío de información comercial de los productos y/o servicios comercializados.
            </p>
            <p className='textCollapse_'>
            a)     Establecer comunicación directa por diferentes medios (impreso, telefónico, sms, correos electrónicos) con objetivos comerciales asociados a productos y/o servicios. 
            </p>
            <p className='textCollapse_'>
            f)      Programas de fidelización y actualización de datos
            </p>
            <p className='textCollapse_'>
            g)     Utilización de datos biométricos como huella digital, audio, video y/o fotografía o a través de cualquier otro medio conocido o por conocerse (se entiende como “imagen” el nombre, seudónimo, voz, firmas, iniciales, figura, fisionomía de cuerpo, cara o cualquier signo que se relacione con la identidad de la persona), para reproducción, comunicación o transmisión.
            </p>
            <p className='textCollapse_'>
            a)     Establecer comunicación directa por diferentes medios (impreso, telefónico, sms, correos electrónicos) con objetivos comerciales asociados a productos y/o servicios. 
            </p>
            <p className='textCollapse_'>
            h)     Información para el diligenciamiento de planilla, manejo y uso de la plataforma sirse.            </p>
            <p className='textCollapse_'>
            i)      Para efectos de envió, recaudo, despachos y garantías de los productos.
            </p>
            <p className='textCollapse_'>
            j)      Dar respuesta a requerimientos de autoridades competentes o judiciales.
            </p>
            <p className='textCollapse_'>
            k)     Procesos  de  certificación en calidad.
             </p>
             <p className='textCollapse'>
             La autorización permitirá a la empresa transferir, almacenar, usar, circular, suprimir, compartir, actualizar y transmitir los datos de acuerdo con el procedimiento y la Política de Protección de Datos Personales, la cual podrá ser consultada en la pagina web: www.bemovil.net. El tratamiento se realizará mediante correo físico, electrónico, celular o dispositivo móvil, vía mensajes de texto, whatsapp o a través de cualquier medio análogo y/o 
             digital de comunicación.
             En el evento en que se soliciten datos sensibles, es decir, aquellos que afecten la intimidad del titular o cuyo uso indebido puede generar su discriminación, usted no está en la obligación de autorizar su tratamiento. Los titulares podrán ejercer en cualquier momento su derecho a conocer, actualizar y rectificar sus datos personales; solicitar prueba de la autorización otorgada; ser informado del uso que le han dado a sus datos personales; presentar ante la SIC quejas por infracciones; revocar la autorización y solicitar la supresión de los datos y acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.
             </p>
         </div>
      </Collapse>

      <div className="iconsContent">
          <div style={{marginLeft:'30px'}}></div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded4,
          })}
          onClick={()=>setExpanded4(!expanded4)}
          aria-expanded={expanded4}
          aria-label="show more"
        >
          <ArrowDropDownIcon style={{  color:'#000000' }}/>
        </IconButton>
        <Checkbox checked={section4} onChange={()=>[setSection4(!section4),setExpanded4(false)]} name="section4" />
        <p className='iconText'>ORIGEN DE FONDOS</p>
        </div>
      <Collapse in={expanded4} timeout="auto" unmountOnExit style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
         <div>
            <p className='textCollapse'>
            El DISTRIBUIDOR Y/O PUNTO DE VENTA declara bajo la gravedad del juramento que sus ingresos provienen de actividades lícitas, que no se encuentra con registro negativo en listados de prevención de lavado de activos nacionales o internacionales, que no se encuentra dentro de una de las dos categorías de lavado de activos (conversión o movimiento) y que, en consecuencia, se obliga a responder a BE MOVIL por todos los perjuicios que se llegaren a causar como consecuencia de esta afirmación. En igual sentido responderá ante terceros. Declara igualmente, que sus conductas se ajustan a la ley y a la ética. Asimismo, manifiesta de manera expresa que no tienen relación alguna con actividades prohibidas o calificadas por la ley como delictivas. En todo caso, se autorizan de manera irrevocable a entre sí para hacer las verificaciones e investigaciones que estimen necesarias sobre este aspecto. BE MOVIL dar por terminado el presente contrato en cualquier tiempo y sin previo aviso a si el DISTRIBUIDOR Y/O PUNTO DE VENTA llegare a ser: 1.) Vinculado por parte de las autoridades competentes a cualquier tipo de investigación por delitos de narcotráfico, terrorismo, secuestro, lavado de activos y/o conexos; 2.) Incluido en listas para el control de lavado de activos administradas por cualquier autoridad nacional o extranjera, tales como la Oficina de Control de Activos en el Exterior (OFAC) del Departamento del Tesoro de los Estados Unidos de América o; 3.) Condenado por parte de las autoridades competentes en cualquier tipo de proceso judicial relacionado con la comisión de cualquier hecho punible.
            </p>
         </div>
      </Collapse>
      <div className='form'>
      <section className='confirm'>
      <Checkbox checked={all} onChange={()=>handelClickall()} name="section4" />
      <p className='textCollapse'>Confirmo que he leído y estoy de acuerdo</p>
       </section>

      </div>
      </>
  );
}
