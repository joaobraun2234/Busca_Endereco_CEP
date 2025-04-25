document.getElementById('cepForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const cepInput = document.getElementById('cep');
    const logradouroInput = document.getElementById('logradouro');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
  
    const cep = cepInput.value.replace(/\D/g, '');
  
    if (cep.length !== 8) {
      alert('CEP inválido. Digite 8 números.');
      return;
    }
  
    try {
      console.log(`Consultando CEP: ${cep}`);
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      console.log('Resposta da API:', data);
  
      if (data.erro) {
        alert('CEP não encontrado.');
        return;
      }
  
      logradouroInput.value = data.logradouro || '';
      bairroInput.value = data.bairro || '';
      cidadeInput.value = data.localidade || '';
    } catch (error) {
      console.error('Erro ao consultar a API:', error);
      alert('Erro ao consultar o CEP.');
    }
  });
  
  
  