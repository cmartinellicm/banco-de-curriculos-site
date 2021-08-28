import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    cargo: "",
    dataNascimento: "",
    estadoCivil: "",
    sexo: "",
    telefone1: "",
    telefone2: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  return (
    <>
      <form id="cadastro" class="needs-validation" novalidate>
        <div class="row g-3">
          <h4 class="mb-3">Dados Pessoais</h4>

          <div class="col-12">
            <label for="nome" class="form-label">
              Nome Completo *
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, nome: e.target.value });
              }}
              value={form.nome}
              required
            />
          </div>

          <div class="col-sm-6">
            <label for="cpf" class="form-label">
              CPF *
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, cpf: e.target.value });
              }}
              value={form.cpf}
              required
            />
          </div>

          <div class="col-12">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              value={form.email}
            />
          </div>

          <div class="col-12">
            <label for="cargo" class="form-label">
              Cargo Pretendido
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, cargo: e.target.value });
              }}
              value={form.cargo}
            />
          </div>

          <div class="col-sm-6">
            <label for="dataNascimento" class="form-label">
              Data de Nascimento
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, dataNascimento: e.target.value });
              }}
              value={form.dataNascimento}
              required
            />
          </div>

          <div class="col-md-6">
            <label for="estadoCivil" class="form-label">
              Estado Civil
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, estadoCivil: e.target.value });
              }}
              value={form.estadoCivil}
              required
            />
            {/* <select class="form-select" id="estadoCivil" required>
              <option value="">Selecionar...</option>
              <option>Solteiro(a)</option>
              <option>Casado(a)</option>
              <option>Divorciado(a)</option>
              <option>Viúvo(a)</option>
            </select> */}
          </div>

          <div class="col-md-6">
            <label for="sexo" class="form-label">
              Sexo
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, sexo: e.target.value });
              }}
              value={form.sexo}
              required
            />
            {/* <select class="form-select" id="sexo" required>
              <option value="">Selecionar...</option>
              <option>Feminino</option>
              <option>Masculino</option>
            </select> */}
          </div>

          <div class="col-sm-6">
            <label for="telefone1" class="form-label">
              Telefone 1
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, telefone1: e.target.value });
              }}
              value={form.telefone1}
              required
            />
            <div class="invalid-feedback">Campo obrigatório.</div>
          </div>

          <div class="col-sm-6">
            <label for="telefone2" class="form-label">
              Telefone 2
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, telefone2: e.target.value });
              }}
              value={form.telefone2}
            />
            <div class="invalid-feedback">Favor inserir um telefone válido.</div>
          </div>

          <hr class="my-4" />

          <h4 class="mb-3">Endereço</h4>

          <div class="col-md-3">
            <label for="cep" class="form-label">
              CEP
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, cep: e.target.value });
              }}
              value={form.cep}
              required
            />
            <div class="invalid-feedback">Campo obrigatório.</div>
          </div>

          <div class="col-10">
            <label for="logradouro" class="form-label">
              Logradouro
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, logradouro: e.target.value });
              }}
              value={form.logradouro}
              required
            />
            <div class="invalid-feedback">Campo obrigatório.</div>
          </div>

          <div class="col-2">
            <label for="numero" class="form-label">
              Número
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, numero: e.target.value });
              }}
              value={form.numero}
              required
            />
          </div>

          <div class="col-md-5">
            <label for="bairro" class="form-label">
              Bairro
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, bairro: e.target.value });
              }}
              value={form.bairro}
              required
            />
          </div>

          <div class="col-md-4">
            <label for="cidade" class="form-label">
              Cidade
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, cidade: e.target.value });
              }}
              value={form.cidade}
              required
            />
            <div class="invalid-feedback">Campo obrigatório.</div>
          </div>

          <div class="col-md-3">
            <label for="estado" class="form-label">
              Estado
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => {
                setForm({ ...form, estado: e.target.value });
              }}
              value={form.estado}
              required
            />
            <div class="invalid-feedback">Selecionar uma opção.</div>
          </div>
        </div>

        <hr class="my-4" />

        <button class="w-100 btn btn-primary btn-lg" type="button" onclick="newUser()">
          Cadastrar
        </button>
      </form>
    </>
  );
}

export default Form;
