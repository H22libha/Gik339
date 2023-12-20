// Den kollar om dokumentet har laddats för att köra scriptet
//upift 4
document.addEventListener('DOMContentLoaded', function () {

    // Här Hämtar elementen från HTML-dokumentet.
//
    const fargInput = document.getElementById('farg');

    // Här Hämtar input-färg för innehåll.
    const innehallInput = document.getElementById('innehall');

    // Här Hämtar checkboxen för att ändra stil.
    const divStyleCheckbox = document.getElementById('divStyle');

    // Här Hämtar knappen för att ta bort innehåll.
    const removeButton = document.getElementById('removeButton');

    // Här Hämtar div-elementet där resultatet visas.
    const outputDiv = document.getElementById('outputDiv');

    // Eventlyssnare för färginput-fältet.
    // Här ändrar bakgrundsfärgen på outputDiv när värdet i färginput-fältet ändras och checkboxen är markerad.
    //upift5.
    fargInput.addEventListener('input', function () {
        if (divStyleCheckbox.checked) {
            outputDiv.style.backgroundColor = fargInput.value;
        }
    });

     // Kollar för innehållsinput-fältet.
    // Uppdaterar textinnehållet i outputDiv när användaren skriver i innehållsfältet.
    innehallInput.addEventListener('input', function () {
        outputDiv.textContent = innehallInput.value;
    });
    // När användaren klickar på 'ta bort'-knappen
    removeButton.addEventListener('click', function () {
        // Ta bort output-diven från dokumentet
        outputDiv.remove(); 
    });
    
})