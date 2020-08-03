<template id="ModalShow">
  <div class="modal fade" style=" overflow: hidden;" id="modalGeral" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="modalGeral" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="form-title">
            <span v-if="type.myType=='Categoria'"><i class="fad fa-stream"></i>NOVA CATEGORIA</span> 
            <span v-else-if="type.myType=='Produto'"><i class="fad fa-box"></i>NOVO PRODUTO</span> 
            <span v-else><i class="fad fa-badge-dollar fa-pulse"></i>RELATÓRIO DE VENDAS</span>
          </h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="newProd" class="form-item">
            <form method="post" class="form-content">
                <component :is="type.myType"></component>
            </form>
          </div>
          <div class="row" v-if="type.myType!='DashVenda'">
            <div class="col-xs-12 col-lg-6 col-md-6 col-sm-12 mb-2">
              <button type="reset" class="form-button button-secondary">
                <i style="font-size:20px" class="fad fa-eraser form-legend-icon"></i>Limpar
              </button>
            </div>
            <div class="col-xs-12 col-lg-6 col-md-6 col-sm-12">
              <button type="submit" class="form-button button-primary">
                <i style="font-size:20px" class="fad fa-check-circle form-legend-icon"></i>Adicionar {{type.myType}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Categoria from './Categoria';
    import Produto from './Produto';
    import DashVenda from './DashVenda';
    export default {
        props:['type'],
        components:{
            Categoria,
            DashVenda,
            Produto
        }
    }
</script>