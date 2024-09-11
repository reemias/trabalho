function abrirModal(titulo, descricao, numero, instagramUrl, listaServicos) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalDescricao').innerText = descricao;
    document.getElementById('modalNumero').innerHTML = "Número: <a href='https://api.whatsapp.com/send/?phone=5582988873225&text&type=phone_number&app_absent=0'>" + numero + "</a>";
    
    var instagramLink = document.getElementById('modalInstagram');
    instagramLink.href = instagramUrl;
    instagramLink.innerText = "CONFIRA MAIS NO NOSSO INSTAGRAM";
    
    const listaElement = document.getElementById('modalListaServicos');
    listaElement.innerHTML = '';
    listaServicos.forEach(servico => {
        const li = document.createElement('li');
        li.innerText = servico;
        listaElement.appendChild(li);
    });

    document.getElementById('modal').style.display = "flex"; 
}

function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
