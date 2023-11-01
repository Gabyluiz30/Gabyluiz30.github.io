const formNewUser = {
  build: () => {
    const root = document.getElementById("root");

    const formTemplate = document.createElement("form");
    formTemplate.className = "form-control";
    formTemplate.setAttribute("id", "signForm");
    formTemplate.innerHTML = `
    <h3 class="mt-2 mb-4"> cadastro de novo usuário </h3>
    <label for="nome" clas="form-label">nome</label>
        <input class= "form-control"  type="text" id="nome">
        <label for="idade" class="form-label">idade</label>
         <input class= "form-control"  type="number" id="idade">
         <label for="login" class="for-label">login</label>
         <input class= "form-control"  type= "text"  id="login">
         <label for="senha" class="form-label">senha</label>
         <input class= "form-control"  type= "password" id= "senha">
         
         <button type="submit"  class="btn  btn-primary  mt-4">salvar</button>
        `;

    root.appendChild(formTemplate);
  },
};
export { formNewUser };
