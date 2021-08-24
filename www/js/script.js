window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");
  const buscar = document.querySelector("#buscar");
  const alterar = document.querySelector("#alterar");
  const deletar = document.querySelector("#deletar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const id = document.querySelector("#id");

  //Ação Cadastro
  cadastrar.addEventListener("click", function(){
    let formdata = new FormData();
    formdata.append(`nome`, `${nome.value}`);
    formdata.append(`curso`, `${curso.value}`);

    fetch('https://jussimarleal.com.br/exemplo_api/pessoa', {
      body: formdata,
      method: 'post',
      mode: 'cors',
      cache: 'default'
    }).then(()=>{
          alert("Registro efetuado com sucesso");
          limpar();
        }
    )
  });
  
  //Ação Listar
  buscar.addEventListener(`click`, function(){
    fetch(`https://jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, {
      method: 'get',
      mode: 'cors',
      cache: 'default'
    }).then(response=>{
      response.json().then(data =>{
        nome.value = data['nome'];
        curso.value = data['curso'];      })
    })
  });

  //Ação Alterar
  alterar.addEventListener(`click`, function(){
    fetch(`https://jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, {
      method: 'put',
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        'nome': `${nome.value}`,
        'curso': `${curso.value}`
      }),
      mode: 'cors',
      cache: 'default'
    }).then(()=>{
      alert("Registro Alterado com sucesso ");
      limpar();
      })
  });

  //Ação Deletar
  deletar.addEventListener(`click`, function(){
    fetch(`https://jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, {
      method: 'delete',
      mode: 'cors',
      cache: 'default'
    }).then(()=>{
      alert("Registro Deletado com sucesso");
      limpar();
      })
  });

  //Metodo Limpa Campo
  function limpar(){
    nome.value = "";
    curso.value = "";
  }
}