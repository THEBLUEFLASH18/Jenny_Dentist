import Atropos from 'atropos';
import 'atropos/atropos.css'; 

// Initialize


const myAtropos = Atropos({
  el: '.my-atropos',
});

document.querySelectorAll('.my-atropos').forEach(atroposElement => {
  Atropos({
    el: atroposElement,
  });
});
