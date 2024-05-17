import Atropos from 'atropos';
import 'atropos/atropos.css'; 
import './styles.css'

// Initialize


const myAtropos = Atropos({
  el: '.my-atropos',
});

document.querySelectorAll('.my-atropos').forEach(atroposElement => {
  Atropos({
    el: atroposElement,
  });
});
