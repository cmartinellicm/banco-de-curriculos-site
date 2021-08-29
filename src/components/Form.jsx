import { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";

const Form = () => {
  // Buscar CEP via API externa - ViaCEP
  const consultarCep = async () => {
    const endereco = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, logradouro: endereco.data.logradouro, bairro: endereco.data.bairro, cidade: endereco.data.localidade, estado: endereco.data.uf });
  };

  // Enviar dados do usuário para a API cadastrar no DB
  const createUser = async () => {
    axios
      .post("https://gamaacademy-jobsnet.herokuapp.com/register", form)
      .then(function (response) {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(function (error) {
        if (error.response.status === 500) {
          alert("Não foi possível cadastrar no momento.");
        } else {
          alert(error.response.data);
        }
      });
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
              Nome Completo <span className="obrigatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, nome: e.target.value });
              }}
              value={form.nome}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="cpf" className="form-label">
              CPF <span className="obrigatorio">*</span>
            </label>
            <InputMask
              mask="999.999.999-99"
              type="text"
              size="11"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, cpf: e.target.value });
              }}
              value={form.cpf}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="email" className="form-label">
              Email <span className="obrigatorio">*</span>
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
              Cargo Pretendido <span className="obrigatorio">*</span>
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

          <div className="col-sm-4">
            <label htmlFor="dataNascimento" className="form-label">
              Data de Nascimento <span className="obrigatorio">*</span>
            </label>
            <InputMask
              mask="99/99/9999"
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, dataNascimento: e.target.value });
              }}
              value={form.dataNascimento}
            />
          </div>

          <div className="col-sm-4">
            <label htmlFor="estadoCivil" className="form-label">
              Estado Civil <span className="obrigatorio">*</span>
            </label>
            <select
              className="form-select"
              value={form.estadoCivil}
              onChange={(e) => {
                setForm({ ...form, estadoCivil: e.target.value });
              }}
            >
              <option value="">Selecionar...</option>
              <option value="solteiro">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </select>
          </div>

          <div className="col-sm-4">
            <label htmlFor="sexo" className="form-label">
              Sexo <span className="obrigatorio">*</span>
            </label>
            <select
              className="form-select"
              value={form.sexo}
              onChange={(e) => {
                setForm({ ...form, sexo: e.target.value });
              }}
            >
              <option value="">Selecionar...</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>

          <div className="col-sm-6">
            <label htmlFor="telefone1" className="form-label">
              Telefone Celular <span className="obrigatorio">*</span>
            </label>
            <InputMask
              mask="(99)99999-9999"
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, telefone1: e.target.value });
              }}
              value={form.telefone1}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="telefone2" className="form-label">
              Telefone Residencial
            </label>
            <InputMask
              mask="(99)9999-9999"
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, telefone2: e.target.value });
              }}
              value={form.telefone2}
            />
          </div>

          <hr className="my-4" />

          <h4 className="mb-3">Endereço</h4>

          <div className="col-md-3">
            <label htmlFor="cep" className="form-label">
              CEP <span className="obrigatorio">*</span>
            </label>
            <InputMask
              mask="99999-999"
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, cep: e.target.value });
              }}
              value={form.cep}
              onBlur={() => consultarCep()}
            />
          </div>

          <div className="col-10">
            <label htmlFor="logradouro" className="form-label">
              Logradouro <span className="obrigatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, logradouro: e.target.value });
              }}
              value={form.logradouro}
            />
          </div>

          <div className="col-2">
            <label htmlFor="numero" className="form-label">
              Número <span className="obrigatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, numero: e.target.value });
              }}
              value={form.numero}
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="bairro" className="form-label">
              Bairro <span className="obrigatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, bairro: e.target.value });
              }}
              value={form.bairro}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="cidade" className="form-label">
              Cidade <span className="obrigatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, cidade: e.target.value });
              }}
              value={form.cidade}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="estado" className="form-label">
              Estado <span className="obrigatorio">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setForm({ ...form, estado: e.target.value });
              }}
              value={form.estado}
            />
          </div>
        </div>

        <hr className="my-4" />
        <p className="obrigatorio">* Campos obrigatórios</p>

        <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => createUser()}>
          Cadastrar
        </button>
      </form>
    </>
  );
};

export default Form;
