var a= document.getElementById("input_a");
var lista= document.getElementById("lista");
var ganancia= document.getElementById("ganancia");
var rangoizq= document.getElementById("rangoi");
var rangoder= document.getElementById("rangod");


var boton=document.getElementById("boton");

var r=document.getElementById("resultado");
var expression="";
var aux=0;
var k=1;
var senal="";
var rango_i=0;
var rango_d=0;

  function draw() {

      console.log("Dibujando")
      
      aux=parseFloat(a.value);
      k=parseFloat(ganancia.value);
      senal=lista.value;
      rango_i=parseFloat(rangoizq.value);
      rango_d=parseFloat(rangoder.value);


      if (senal=="coseno")
      {
        expression = k +"*cos(" + aux + "*x)"

        "3*cos(5*x)"
      }
      else if (senal=="seno")
      {
          expression =k+"*sin(" + aux + "*x)"
      }
      else if (senal=="tangente")
      {
        expression = k+"*tan(" + aux + "*x)"
      }
      else
      {
        expression =k+"*x"
      }
      
        const expr = math.compile(expression)
      const xValues = math.range( rango_i , rango_d, (0.001)).toArray()
      const yValues = xValues.map(function (x) {   return expr.evaluate({x: x})   })

      const trace1 = {
        x: xValues,
        y: yValues,
        textfont: {
            family: 'Arial Black',
            size: 18,
            color: '#1f77b4'
          },
        type: 'scatter'
      }
      const data = [trace1]
      
      var layout = {
        autosize: true,
        margin: {
            l: 80,
            r: 50,
            b: 60,
            t: 20,
            pad: 4
          },
        xaxis: { 
          tickfont: {
            family: 'Arial Black',
            size: 24,
            color: 'black'
          },
            color: '#000000',
            tickfont_family:'Arial Black',
            title: {
              text: 'Eje X',
              autosize: true,
              automargin: false,
              font: {family: 'Arial Black',
               size: 15,color: '#000000'
              }
            }
        },

        yaxis: {
          title: {
            text: 'Eje Y',
            autosize: true,
            automargin: false,
            font: {family: 'Arial Black',
             size: 15,color: '#000000'
            }},
          tickfont: {
            family: 'Arial Black',
            size: 24,
            color: 'black'
          },
          autosize: true,
          automargin: true,
          titlefont: { size:15 },
          color: '#000000'
        },  
        paper_bgcolor: '#a2e5f8ff',
        plot_bgcolor: '#f3f2f2ff',
        showlegend: false
      };
      Plotly.newPlot('plot', data, layout, {displayModeBar: false})
      
    

  }
boton.addEventListener("click",draw);