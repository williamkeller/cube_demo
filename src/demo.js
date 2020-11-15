

function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, 800.0 / 600.0, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer({ canvas: glcanvas })
  renderer.setSize(800, 600);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 1.75;

  const animate = function (now) {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
}

window.addEventListener("load", init)
