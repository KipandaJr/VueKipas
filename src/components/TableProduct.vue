<template id="TableProduct">
  <div class="container">
    <div class="row justify-content-center" style="border-top:6px solid var(--primary-color);">
      <div class="col-12 mt-2 table-responsive">
        <table class="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Produto</th>
              <th scope="col">Categoria</th>
              <th scope="col">Data Exp</th>
              <th scope="col">Stock inicial</th>
              <th scope="col">Stock alerta</th>
              <th scope="col">Preço</th>
              <th scope="col">Operações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 10" :key="item">
              <th scope="row">{{item}}</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Morna</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
