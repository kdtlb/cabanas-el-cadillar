/* Datos de las 10 cabañas — fuente única compartida por todas las páginas.
   Fotos reales en assets/img/cabanas/<n>/<i>.jpg (rutas relativas a la raíz;
   el generador de las páginas de cabaña les antepone "../"). */
(function () {
  const BASE = 'assets/img/cabanas';

  const CABINS = [
    {
      dir: 1, slug: 'cabana-1', name: 'Cabaña 1', tag: 'Con hogar a leña',
      photos: 5, hero: 1, design: 2,
      capacity: '5 personas', beds: '1 doble + 4 simples', spec3: 'Hogar a leña',
      short: 'Amplia y hogareña, para cinco personas, con hogar a leña de piedra en el living.',
      long: 'La Cabaña 1 recibe con un amplio living-comedor de ladrillo visto y techo de madera, presidido por un hogar a leña de piedra que la vuelve especialmente acogedora en las noches frescas del valle. Un espacio para compartir la sobremesa sin mirar el reloj.',
      highlight: 'Hogar a leña de piedra en el estar.',
      amenities: ['Hogar a leña', 'Living-comedor', 'Frigobar', 'Microondas', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi']
    },
    {
      dir: 2, slug: 'cabana-2', name: 'Cabaña 2', tag: 'Con quincho y parrilla',
      photos: 10, hero: 1, design: 3,
      capacity: '5 personas', beds: '1 doble + 3 simples + sofá cama', spec3: 'Quincho propio',
      short: 'Para cinco personas, con quincho propio de parrilla a leña y muros de piedra.',
      long: 'Pensada para quienes disfrutan de un buen asado, la Cabaña 2 suma un quincho propio con parrilla a leña y muros de piedra bola. El lugar ideal para reunir a los suyos alrededor del fuego y estirar la tarde entre risas.',
      highlight: 'Quincho propio con parrilla a leña.',
      amenities: ['Quincho con parrilla', 'Kitchenette', 'Frigobar', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi', 'Estacionamiento']
    },
    {
      dir: 3, slug: 'cabana-3', name: 'Cabaña 3', tag: 'Entre lavandas',
      photos: 3, hero: 1, design: 2,
      capacity: '2 personas', beds: '1 triple + 1 simple', spec3: 'Galería propia',
      short: 'Coqueta y tranquila, con galería propia entre canteros de lavanda.',
      long: 'De fachada de adobe y galería con mesa para el café de la mañana, la Cabaña 3 se asoma a un jardín de lavandas. Íntima y luminosa, es perfecta para una escapada de dos, con todo lo necesario a mano.',
      highlight: 'Galería propia entre canteros de lavanda.',
      amenities: ['Galería', 'Kitchenette', 'Frigobar', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi', 'Ropa de cama']
    },
    {
      dir: 4, slug: 'cabana-4', name: 'Cabaña 4', tag: 'La única con dos baños',
      photos: 3, hero: 1, design: 2,
      capacity: '4 personas', beds: '1 doble + 3 simples', spec3: 'Dos baños',
      short: 'Amplia y práctica, la única con dos baños y pared de piedra bola.',
      long: 'La Cabaña 4 es cómoda y bien resuelta: dormitorios, kitchenette equipada y rincón de comedor, con una linda pared de piedra bola como protagonista. Es la única del predio con dos baños, así que resulta muy práctica para una familia o un grupo que viaja junto.',
      highlight: 'La única cabaña con dos baños privados.',
      amenities: ['Kitchenette', 'Frigobar', 'Microondas', 'Smart TV', 'Dos baños privados', 'Agua caliente', 'WiFi', 'Ropa de cama']
    },
    {
      dir: 5, slug: 'cabana-5', name: 'Cabaña 5', tag: 'Dos camas',
      photos: 6, hero: 4, design: 1,
      capacity: '2 personas', beds: '1 doble + 1 simple', spec3: 'Kitchenette',
      short: 'Ambiente cómodo con cama doble, cama simple y kitchenette propia.',
      long: 'Con cama doble, una cama simple, kitchenette de azulejos y detalles en madera, la Cabaña 5 es práctica y acogedora. Una buena opción para una pareja o para quienes viajan con un acompañante.',
      highlight: 'Cama doble, cama simple y kitchenette equipada.',
      amenities: ['Cama doble', 'Cama simple', 'Kitchenette', 'Frigobar', 'Microondas', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi']
    },
    {
      dir: 6, slug: 'cabana-6', name: 'Cabaña 6', tag: 'Íntima y cálida',
      photos: 5, hero: 3, design: 1,
      capacity: '2 personas', beds: '1 cama doble', spec3: 'Kitchenette',
      short: 'Acogedora y silenciosa, con cama matrimonial y kitchenette propia.',
      long: 'La Cabaña 6 propone un descanso simple y cálido: una cama matrimonial mullida, kitchenette con lo necesario y una atmósfera serena para desconectar. Íntima y tranquila, invita a no hacer nada.',
      highlight: 'Kitchenette propia y ambiente sereno.',
      amenities: ['Kitchenette', 'Frigobar', 'Microondas', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi', 'Ropa de cama']
    },
    {
      dir: 7, slug: 'cabana-7', name: 'Cabaña 7', tag: 'Living amplio',
      photos: 7, hero: 1, design: 2,
      capacity: '2 personas', beds: '1 doble + sofá cama', spec3: 'Living amplio',
      short: 'Espaciosa y luminosa, con living-comedor de techo de caña y sillones.',
      long: 'De techo de caña y madera, la Cabaña 7 tiene un living-comedor amplio con sillones de mimbre y buena luz natural. Un espacio versátil y hogareño para disfrutar tanto adentro como en su galería.',
      highlight: 'Living-comedor amplio con techo de caña.',
      amenities: ['Living amplio', 'Kitchenette', 'Frigobar', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi', 'Galería']
    },
    {
      dir: 8, slug: 'cabana-8', name: 'Cabaña 8', tag: 'Cómoda y luminosa',
      photos: 6, hero: 1, design: 2,
      capacity: '2 personas', beds: '1 doble + sofá cama', spec3: 'Smart TV',
      short: 'Dormitorio amplio y ordenado, con Smart TV y mucha luz.',
      long: 'La Cabaña 8 es cómoda, clara y sin vueltas: un dormitorio amplio con buen placard, Smart TV y todo listo para descansar. Práctica y luminosa, cumple con lo que se necesita para una estadía tranquila.',
      highlight: 'Dormitorio amplio y luminoso.',
      amenities: ['Smart TV', 'Placard', 'Kitchenette', 'Frigobar', 'Baño privado', 'Agua caliente', 'WiFi', 'Ropa de cama']
    },
    {
      dir: 9, slug: 'cabana-9', name: 'Cabaña 9', tag: 'Amplia y de adobe',
      photos: 13, hero: 1, design: 2,
      capacity: '4 personas', beds: '1 doble + 3 simples', spec3: 'Dos dormitorios',
      short: 'La más rústica: muros de adobe, nichos de época y dos dormitorios para cuatro.',
      long: 'La Cabaña 9 conserva el encanto de lo hecho a mano: muros de adobe, nichos con cerámica y detalles de otra época. Con dos dormitorios y varios ambientes, es ideal para la familia o un grupo que busca espacio y carácter.',
      highlight: 'Muros de adobe con nichos y dos dormitorios.',
      amenities: ['Dos dormitorios', 'Kitchenette', 'Frigobar', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi', 'Estacionamiento']
    },
    {
      dir: 10, slug: 'cabana-10', name: 'Cabaña 10', tag: 'Con loft',
      photos: 11, hero: 1, design: 2,
      capacity: '4 personas', beds: '1 doble + 3 simples + sofá cama', spec3: 'Loft',
      short: 'Amplia y familiar, con loft de camas bajo techo de caña.',
      long: 'La Cabaña 10 se despliega en dos niveles, con un cálido loft de camas bajo el techo de caña y muros en tonos tierra. Amplia y alegre, es perfecta para la familia o un grupo de amigos que viaja junto.',
      highlight: 'Loft de camas bajo techo de caña.',
      amenities: ['Loft', 'Dos ambientes', 'Kitchenette', 'Frigobar', 'Smart TV', 'Baño privado', 'Agua caliente', 'WiFi']
    }
  ];

  // Métodos utilitarios por cabaña (rutas relativas a la raíz del sitio)
  CABINS.forEach(c => {
    c.url = `cabanas/${c.slug}.html`;
    c.imgPath = (i) => `${BASE}/${c.dir}/${i}.jpg`;
    c.img = () => c.imgPath(c.hero);           // foto principal (tarjeta + hero)
    c.designImg = () => c.imgPath(c.design);   // foto de la sección "La cabaña"
    c.galleryPaths = () => Array.from({ length: c.photos }, (_, k) => c.imgPath(k + 1));
  });

  window.CABINS = CABINS;
})();
