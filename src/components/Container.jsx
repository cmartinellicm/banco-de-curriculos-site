import Form from "./Form";

const Container = () => {
  return (
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <img class="d-block mx-auto mb-4" src={process.env.PUBLIC_URL + "/logo512.png"} alt="Logo JobsNET" width="80" />
          <h2>JobsNET</h2>
          <p class="lead">Faça seu cadastro para se conectar com as melhores oportunidades de emprego!</p>
        </div>

        <div class="row g-5">
          <Form></Form>
        </div>
      </main>
    </div>
  );
};

export default Container;
