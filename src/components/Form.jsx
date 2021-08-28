import { useState } from "react";
import axios from "axios";

const Form = () => {
  const consultarCep = async () => {
    const endereco = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    console.log(endereco.data);
    setForm({ ...form, logradouro: endereco.data.logradouro, bairro: endereco.data.bairro, cidade: endereco.data.localidade, estado: endereco.data.uf });
  };

  const createUser = async (user) => {
    const newUser = await axios.post("https://gamaacademy-jobsnet.herokuapp.com/register", form);
  };

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
      <form id="cadastro" className="needs-validation">
        <div className="row g-3">
          <h4 className="mb-3">Dados Pessoais</h4>

          <div className="col-12">
            <label htmlFor="nome" className="form-label">
              Nome Completo *
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, nome: e.target.value });
              }}
              value={form.nome}
              required
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="cpf" className="form-label">
              CPF *
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, cpf: e.target.value });
              }}
              value={form.cpf}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              value={form.email}
            />
          </div>

          <div className="col-12">
            <label htmlFor="cargo" className="form-label">
              Cargo Pretendido
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, cargo: e.target.value });
              }}
              value={form.cargo}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="dataNascimento" className="form-label">
              Data de Nascimento
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, dataNascimento: e.target.value });
              }}
              value={form.dataNascimento}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="estadoCivil" className="form-label">
              Estado Civil
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, estadoCivil: e.target.value });
              }}
              value={form.estadoCivil}
              required
            />
            {/* <select className="form-select" id="estadoCivil" required>
              <option value="">Selecionar...</option>
              <option>Solteiro(a)</option>
              <option>Casado(a)</option>
              <option>Divorciado(a)</option>
              <option>Viúvo(a)</option>
            </select> */}
          </div>

          <div className="col-md-6">
            <label htmlFor="sexo" className="form-label">
              Sexo
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, sexo: e.target.value });
              }}
              value={form.sexo}
              required
            />
            {/* <select className="form-select" id="sexo" required>
              <option value="">Selecionar...</option>
              <option>Feminino</option>
              <option>Masculino</option>
            </select> */}
          </div>

          <div className="col-sm-6">
            <label htmlFor="telefone1" className="form-label">
              Telefone 1
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, telefone1: e.target.value });
              }}
              value={form.telefone1}
              required
            />
            <div className="invalid-feedback">Campo obrigatório.</div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="telefone2" className="form-label">
              Telefone 2
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, telefone2: e.target.value });
              }}
              value={form.telefone2}
            />
            <div className="invalid-feedback">Favor inserir um telefone válido.</div>
          </div>

          <hr className="my-4" />

          <h4 className="mb-3">Endereço</h4>

          <div className="col-md-3">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, cep: e.target.value });
              }}
              value={form.cep}
              required
            />
            <div className="invalid-feedback">Campo obrigatório.</div>
          </div>
          <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => consultarCep()}>
            Consultar CEP
          </button>

          <div className="col-10">
            <label htmlFor="logradouro" className="form-label">
              Logradouro
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, logradouro: e.target.value });
              }}
              value={form.logradouro}
              required
            />
            <div className="invalid-feedback">Campo obrigatório.</div>
          </div>

          <div className="col-2">
            <label htmlFor="numero" className="form-label">
              Número
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, numero: e.target.value });
              }}
              value={form.numero}
              required
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="bairro" className="form-label">
              Bairro
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, bairro: e.target.value });
              }}
              value={form.bairro}
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, cidade: e.target.value });
              }}
              value={form.cidade}
              required
            />
            <div className="invalid-feedback">Campo obrigatório.</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, estado: e.target.value });
              }}
              value={form.estado}
              required
            />
            <div className="invalid-feedback">Selecionar uma opção.</div>
          </div>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => createUser()}>
          Cadastrar
        </button>
      </form>
    </>
  );
};

export default Form;
