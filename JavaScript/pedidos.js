
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAvzKKo-g9SpzUEKqpcF3aJ_CIx4GxwPwY",
//     authDomain: "artcut.firebaseapp.com",
//     projectId: "artcut",
//     storageBucket: "artcut.firebasestorage.app",
//     messagingSenderId: "480293505198",
//     appId: "1:480293505198:web:740ee16ea45e98729f853f",
//     measurementId: "G-GSP6V57MHS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



const inputLogo = document.getElementById('logoImagen');
const vistaPrevia = document.getElementById('vistaPreviaLogo');
let urlAnterior = null;

inputLogo.addEventListener('change', () => {
    const archivo = inputLogo.files[0];

    if (urlAnterior) {
        URL.revokeObjectURL(urlAnterior);
        urlAnterior = null;
    }

    if (!archivo || !archivo.type.startsWith('image/')) {
        inputLogo.value = '';
        vistaPrevia.removeAttribute('src');
        vistaPrevia.style.display = 'none';
        return;
    }

    urlAnterior = URL.createObjectURL(archivo);
    vistaPrevia.src = urlAnterior;
    vistaPrevia.style.display = 'block';
});