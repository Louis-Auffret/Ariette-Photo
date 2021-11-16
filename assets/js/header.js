        // variable pour le nom.
        var firstName = window.prompt('Quel est ton Prénom ?'); 
        var elementNom = document.getElementById('myName'); 
        elementNom.innerText = `– Bonjour ${firstName} –`; 
        var elementButton = document.getElementById('myButton');

        elementButton.addEventListener('click', function() { 
            var userMail = document.getElementById('yourMail').value;
            alert(`Merci ${firstName}, nous vous enverrons une réponse à l'adresse suivante :\n${userMail}\nBonne Visite !`);
            elementNom.innerText = `Merci ${firstName}`; 
            var elementWhatever = document.getElementById('whatever');
            elementWhatever.style.display = 'none';
        });

        const buttn = document.querySelector('.buttn');

        buttn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })