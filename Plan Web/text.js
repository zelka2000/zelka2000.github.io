!(function () {
  "use strict";

  function GumGum() {
    const GroundColor = 0x191b1d,
      GumColor = 0xee7568,
      AmbientColor = 0x8b8c8d,
      LightColor = 0xffffff,
      GumContainer = "GumWebGL";

    // --------

    var vw = window.innerWidth,
      vh = window.innerHeight;

    const scene = new THREE.Scene(),
      renderer = new THREE.WebGLRenderer({ antialias: true }),
      camera = new THREE.PerspectiveCamera(45, vw / vh, 0.1, 1000),
      ambient = new THREE.AmbientLight(AmbientColor),
      light = new THREE.DirectionalLight(LightColor, 0.3),
      geometry = new THREE.IcosahedronGeometry(24, 5),
      material = new THREE.MeshLambertMaterial({
        color: GumColor,
        wireframe: false,
      }),
      sphere = new THREE.Mesh(geometry, material),
      noise = new SimplexNoise();

    // --------

    scene.autoUpdate = true;
    scene.background = new THREE.Color(GroundColor);

    renderer.setClearColor(new THREE.Color(GroundColor));
    renderer.setSize(vw, vh);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 100;
    camera.lookAt(scene.position);

    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    sphere.castShadow = false;

    light.position.set(50, 10, 2);

    // --------

    scene.add(camera);
    scene.add(sphere);
    scene.add(ambient);
    scene.add(light);

    // --------

    document
      .getElementsByClassName(GumContainer)[0]
      .appendChild(renderer.domElement);

    var sgeom = sphere.geometry,
      offset = sgeom.parameters.radius,
      f = { x: 0.00001, y: 0.00001, z: 0.0005, a: 3 };

    this.update = function () {
      var t = Date.now();

      sgeom.vertices.forEach(function (v, i) {
        v.normalize();
        v.multiplyScalar(
          offset +
            noise.noise3D(v.x + t * f.x, v.y + t * f.y, v.z + t * f.z) * f.a
        );
      });

      sgeom.verticesNeedUpdate = true;
      sgeom.normalsNeedUpdate = true;

      sgeom.computeVertexNormals();
      sgeom.computeFaceNormals();

      renderer.render(scene, camera);
      //composer.render();
    };

    this.resize = function () {
      vw = window.innerWidth;
      vh = window.innerHeight;

      camera.aspect = vw / vh;
      camera.updateProjectionMatrix();

      renderer.setSize(vw, vh);
      composer.setSize(vw, vh);
    };

    // --------

    this.camera = camera;
    this.sphere = sphere;
    this.light = light;
    this.f = f;
  }

  const gum = new GumGum();

  function render() {
    gum.update();
    requestAnimationFrame(render);
  }

  function resize() {
    gum.resize();
  }

  window.addEventListener("resize", resize, false);
  window.onload = function () {
    render();
  };
  window.gumgum = gum;
})();
