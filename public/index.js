let pagina = 1;
let contentHTML = '';
//botones

const btnSiguiente = document.getElementById('btnMas');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 42){
		pagina += 1;
		cargarPersonajes();
	}
});
//

const container = document.getElementById('item-container');
const cargarPersonajes = async () => {
    try{
        const api = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
        const respuesta = await api.json();
        console.log(respuesta)
        
        
        respuesta.results.forEach(results => {
            console.log(results.name);
            const name = results.name;
            const gender = results.gender;
            const img = results.image;
            const locationName = results.location.name;
            const locationURL = results.location.url;
            const origin = results.origin.name;
            const originURL = results.origin.url;
            const especie = results.species;
            const estado = results.status;
            const type = results.type;
            const urlPerso = results.url;
            contentHTML += `
                    <div class=" bg-slate-700  p-5 m-1 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                        <img src="${img}" alt="${name}" class="h-80 w-80 personaje rounded-xl">
                        <div class="p-2">    
                            <a href="${urlPerso}" target="_blank" class="no-underline hover:underline decoration-white" >
                                <h2 class="font-bold text-lg mb-2 text-center text-white">${name}</h3>
                            </a>
                            <a>
                                <p class="text-white text-center">Location: ${locationName}</p>
                            </a>
                            <a>
                                <p class="text-white text-center">Origin:${origin}</p>
                            </a>
                            <a>
                                <p class="text-sm text-white text-center">Gender: ${gender}</p>
                            </a>
                            
                            
                        </div>
                        
                        <a>

                        </a>
                        <h3 class=""></h3>
                    </div>
            `;
            container.innerHTML = contentHTML;
        })
    } catch (error) {
        console.log(error)
    }
    
    
};




cargarPersonajes();

// const appMarvel ={
//     render: ()=>{
//         const app = document.getElementById('app');
//         
//         let contentHTML = '';

//         fetch(urlApi)
//             .then(response => response.json())
//             .then((json) => {
                
//                 for (const character of json.data.results) {
//                     const urlHero = hero.urls[0].url;
//                     const description = hero.descrition;
//                     const srcHero = hero.thumbnail.path + '.' + hero.thumbnail.extension;
//                     const heroName = hero.name;
//                     contentHTML += `
//                         <div class="bg-slate-700 rounded-xl shadow-lg flex items-center space-x-4 m-5">
//                             <a href="${urlHero}" target="_blank">
//                                 <img src="${srcHero}" alt="${heroName}" class="w-40 h-40">
//                             </a>
//                             <a href="${urlHero}" target="_blank" class="no-underline hover:underline decoration-white" >
//                                 <h3 class="text-2xl text-white">${heroName}</h3>
//                             </a>
//                             <!--<h3 class="">${description}</h3>-->
//                         </div>`;
//                 }
//                 console.log(json, 'RESPONSE.JSON')
//                 app.innerHTML = contentHTML;
//             })
//             .catch(error => console.log(error, 'ERROR'))
//     }
// };

// appMarvel.render();



