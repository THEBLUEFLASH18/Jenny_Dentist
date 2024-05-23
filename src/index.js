import Atropos from 'atropos';
import 'atropos/atropos.css'; 
import './styles.css';
import { Application } from '@splinetool/runtime';

// Import images
import jennyLogo from '/Images/Jenny_Logo.JPG';
import dentalCleaningImage from '/Images/Dental-Cleaning.jpg';
import rootCanalImage from '/Images/Root-Canal.jpg';
import ortodontistImage from '/Images/Ortodontist.jpg';
import dentalRemovableImage from '/Images/Dental_Removable.jpg';
import dentalWhiteningImage from '/Images/Dental_Whitening.jpg';
import fixedProthesesImage from '/Images/Fixed_Protheses.jpg';

// Initialize Spline Canvas 
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/PNG2kyRn4x1rdnLt/scene.splinecode');

// Initialize Atropos
document.querySelectorAll('.my-atropos').forEach(atroposElement => {
  Atropos({
    el: atroposElement,
  });
});

// Set image sources dynamically
document.querySelector('.logo img').src = jennyLogo;
document.querySelectorAll('.atropos-inner')[0].querySelector('img').src = dentalCleaningImage;
document.querySelectorAll('.atropos-inner')[1].querySelector('img').src = rootCanalImage;
document.querySelectorAll('.atropos-inner')[2].querySelector('img').src = ortodontistImage;
document.querySelectorAll('.atropos-inner')[3].querySelector('img').src = dentalRemovableImage;
document.querySelectorAll('.atropos-inner')[4].querySelector('img').src = dentalWhiteningImage;
document.querySelectorAll('.atropos-inner')[5].querySelector('img').src = fixedProthesesImage;
