
function removeActiveClass() {
    const activeClass = document.getElementsByClassName('active');
    for (const button of activeClass) {
        button.classList.remove('active');
    }

}
// Load all pets

const loadAllPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(response => response.json())
        .then(data => displayAllPets(data.pets));
}

const displayAllPets = (allPets) => {
    const petsContainer = document.getElementById('pets-container');
    petsContainer.innerHTML = '';
    allPets.forEach(pet => {
        // console.log(pet)
        const div = document.createElement('div');
        div.innerHTML =
            `<div class="border rounded-md p-3">
                            <img class="rounded-md w-full h-60 object-cover"
                                src="${pet.image}" alt="" loading="lazy">
                            <div class="space-y-2 mt-5 text-gray-600 text-[14px]">
                                <h4 class="font-bold text-[18px]">Mister Tartosh</h4>
                                <p><i class="fa-solid fa-box-open pe-2"></i>Breed:<span> ${pet.breed}</span></p>
                                <p><i class="fa-regular fa-calendar pe-2"></i>Birth:<span> ${pet.date_of_birth}</span></p>
                                <p><i class="fa-solid fa-venus pe-2"></i>Gender:<span></span> ${pet.gender}</p>
                                <p><i class="fa-solid fa-dollar-sign pe-2"></i>Price:<span> $${pet.price}</span></p>
                            </div>
                            <hr class="my-3">
                            <div class="flex justify-between">
                                <button onclick="likedImage('${pet.image}')" class="btn px-6 bg-transparent border-gray-400"><i
                                        class="fa-regular fa-thumbs-up"></i></button>
                                <button class="btn px-7 bg-transparent border-primary text-primary">Adopt</button>
                                <button class="btn px-7 bg-transparent border-primary text-primary">Details</button>
                            </div>
                        </div>`;
        petsContainer.appendChild(div);
    });
}

loadAllPets();

// Load all category

const loadAllCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayAllCategory(data.categories))
}

loadAllCategory()

const displayAllCategory = (allCategory) => {
    const categoryButtons = document.getElementById('category-buttons');
    allCategory.forEach(category => {
        console.log(category)
        // function createCategoryButton(category) {
        //     const div = document.createElement('div');
        //     const button = document.createElement('button');
        //     button.classList.add('border', 'rounded-md', 'py-5', 'w-full', 'flex', 'justify-center', 'items-center', 'gap-3');
        //     button.id = `btn${category.category}`;
        //     button.setAttribute('aria-label', `Select category: ${category.category}`);
        //     const img = document.createElement('img');
        //     img.classList.add('w-8');
        //     img.src = category.category_icon;
        //     img.alt = `${category.category} icon`;
        //     const textNode = document.createTextNode(category.category);
        //     button.appendChild(img);
        //     button.appendChild(textNode);
        //     button.addEventListener('click', () => {
        //         // console.log(`Category Selected: ${category.category}`);
        //         loadPets(`${category.category}`);
        //     });
        //     div.appendChild(button);
        //     return div;
        // }
        // categoryButtons.appendChild(createCategoryButton(category));

        const div = document.createElement('div');
        div.innerHTML = `<button id="btn-${category.category}" onclick="loadPets('${category.category}')"
        class="border w-full h-16 rounded-md flex justify-center items-center gap-3">
        <img class="w-8" src="${category.category_icon}" alt="">${category.category}</button>`
        categoryButtons.appendChild(div);
    })
}

// Display Category wise pets -

const loadPets = (petCategory) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${petCategory}`)
        .then(response => response.json())
        .then(data => {
            removeActiveClass();
            const clickBtn = document.getElementById(`btn-${petCategory}`);
            clickBtn.classList.add('active')
            displayAllPets(data.data);
        });
}




// Show history image - 

const likedImage = (image) => {
    // console.log(image)
    const likeImageContainer = document.getElementById('like-image-container');

    let img = `<img class = "rounded-md" src="${image}" alt="">`;
    const div = document.createElement('div');
    div.innerHTML = img;
    likeImageContainer.appendChild(div);
}