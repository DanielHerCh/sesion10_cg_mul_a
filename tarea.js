  
// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material)
    {
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);
   
    Cubo = [];   //efinir un array unidimensional

    delta = 8; //valor para transladar los cubos
    dim = 4; //valor de las dimensiones de los cubos 
    n1 = Math.round(Math.random() * (2 - 0) + 0); //variable para generar un numero aleatorio entre el 0 y el 2 con Math.random y redondearlo con math.round 
    n2 = Math.round(Math.random() * (2 - 0) + 0); //variable para generar un numero aleatorio entre el 0 y el 2 con Math.random y redondearlo con math.round 
    n3 = Math.round(Math.random() * (2 - 0) + 0); //variable para generar un numero aleatorio entre el 0 y el 2 con Math.random y redondearlo con math.round 

    angulo = prompt("Digita un ángulo en grados", " (ej: 45)"); //cuadro de texto para que el usuario digite el ángulo en grados

    radianes = (angulo)*((2*Math.PI)/(360)); //convierte grados a radianes

    Cubo.push(cubo(dim, dim, dim, 0xFFDD00, 'Physical', false));
    Cubo.push(cubo(dim, dim, dim, 0x6FA8DC, 'Physical', false));
    Cubo.push(cubo(dim, dim, dim, 0x0000FF, 'Physical', false));

    valor = Math.round(Math.random() * (2 - 0) + 0);

    if(angulo != null)
    {
    alert("El ángulo en radianes es: " + radianes); //mensaje cuando el usuario interactua
    }   
    else 
    {
    alert("No digitaste nada aún."); //mensaje de alerta
    }

    if (valor=0)  //transformaciones en los ejes x y y
    {
    Cubo[n1].rotateY(radianes); 
    Cubo[n1].translateX(delta);
    }
    if (valor=1) //transformaciones en los ejes x y z
    {
    Cubo[n2].rotateX(radianes);
    Cubo[n2].translateZ(delta);
    }
    if (valor=2) //transformaciones en los ejes y y z
    {
    Cubo[n3].rotateZ(radianes);
    Cubo[n3].translateY(delta);
    }
  
    //Luz (requerida para el material MeshLambertMaterial)
    light = new THREE.PointLight(0xFFFFFF); //  Luz proveniente de un punto en el espacio, 
                                        //  semejante al sol.
    light.position.set(-10, 5, 10);             //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}