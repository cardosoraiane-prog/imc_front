async function cadastrarUsuario(){
    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
}


try {
    const res = await fetch("http://localhost:3000/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    const resultado = await res.json();
    if (resultado.token) {
      localStorage.setItem("token", resultado.token);
      window.location.href = "index.html";
    } else {
      alert(resultado.erro);
    }
  } catch (erro) {
    alert("Falha na comunnicação com o servidor.");
  }
}
