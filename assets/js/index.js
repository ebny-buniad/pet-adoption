// Load all pets

const loadAllPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => displayAllPets(data.pets));
}

const displayAllPets = (allPets) => {
    const petsContainer = document.getElementById('pets-container');
    allPets.forEach(pet => {
        console.log(pet)
        const div = document.createElement('div');
        div.innerHTML =
            `<div class="border rounded-md p-3">
                            <img class="rounded-md"
                                src="${pet.image}" alt="">
                            <div class="space-y-2 mt-5 text-gray-600 text-[14px]">
                                <h4 class="font-bold text-[18px]">Mister Tartosh</h4>
                                <p><i class="fa-solid fa-box-open pe-2"></i>Breed:<span> ${pet.breed}</span></p>
                                <p><i class="fa-regular fa-calendar pe-2"></i>Birth:<span> ${pet.date_of_birth}</span></p>
                                <p><i class="fa-solid fa-venus pe-2"></i>Gender:<span></span> ${pet.gender}</p>
                                <p><i class="fa-solid fa-dollar-sign pe-2"></i>Price:<span> $${pet.price}</span></p>
                            </div>
                            <hr class="my-3">
                            <div class="flex justify-between">
                                <button class="btn px-6 bg-transparent border-gray-400"><i
                                        class="fa-regular fa-thumbs-up"></i></button>
                                <button class="btn px-7 bg-transparent border-primary text-primary">Adopt</button>
                                <button class="btn px-7 bg-transparent border-primary text-primary">Details</button>
                            </div>
                        </div>`;
        petsContainer.appendChild(div);
    });
}

loadAllPets();