// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
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

    /*Cubo = [];   // Definir un array unidimensional
    Cubo.push(cubo(4, 4, 4, 0xFFDD00, 'Physical', false));
    Cubo.push(cubo(4, 4, 4, 0xFF0000, 'Standard', false));
    Cubo.push(cubo(4, 4, 4, 0xFFDD00, 'Physical', false));
    Cubo.push(cubo(4, 4, 4, 0xFF0000, 'Standard', false));
    Cubo.push(cubo(4, 4, 4, 0xFFDD00, 'Physical', false));

    Cubo[0].position.set(0, 0, 0);
    Cubo[1].position.set(0, 4, 0);
    Cubo[2].position.set(0, 8, 0);
    Cubo[3].position.set(0, 12, 0);
    Cubo[4].position.set(0, 16, 0);*/

    /*Cubo = [];
    for (i=0; i < 4; i++){
      Cubo.push(cubo(4, 4, 4, 0xFFDD00, 'Physical', false));
      Cubo[i].position.set(0, 0, 0);
      //Cubo[i].translate3d(0, i*4+4, 0);
    }*/

    Cubo = [];
    dim = 4;//define las dimensiones del cubo
    delta = 12;//define una variable para la distancia de desplazamiento
    Cubo.push(cubo(dim, dim, dim, 0xFFDD00, 'Physical', false));
    Cubo.push(cubo(dim, dim, dim, 0xFF0000, 'Standard', false));
    Cubo.push(cubo(dim, dim, dim, 0xFFDD00, 'Physical', false));

    //metodos para desplazarse por los ejes X, Y y Z
    Cubo[0].translateX(delta);
    Cubo[1].translateY(delta);
    Cubo[2].translateZ(delta);

    //Luz (requerida para el material MeshLambertMaterial)
    light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, 
                                        //  semejante al sol.
    light.position.set( -10, 5, 10 );             //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}
