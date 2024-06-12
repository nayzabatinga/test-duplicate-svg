// Incluir a biblioteca SVGO
const script = document.createElement('script');
script.src = 'https://unpkg.com/svgo-browser@latest';
script.onload = () => {
    // Cria o botão
    const button = document.createElement('button');
    button.innerText = 'Abrir Modal';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.zIndex = '1000';
    document.body.appendChild(button);

    // Cria o modal
    const modal = document.createElement('div');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1001';

    // SVG a ser otimizado
    const svgString = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    `;

    // Otimiza o SVG usando SVGO
    svgo.optimize(svgString).then(result => {
        // Insere o SVG otimizado no modal
        modal.innerHTML = result.data;
    });

    document.body.appendChild(modal);

    // Função para abrir o modal
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Cria um botão para fechar o modal
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Fechar';
    closeButton.style.marginTop = '20px';
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Adiciona o botão de fechar ao modal
    modal.appendChild(closeButton);
};
document.head.appendChild(script);
