<template id="ShowOpt">
  <div>
    <div class="container">
      <div class="row justify-content-center" style="border-top:6px solid var(--primary-color);">
        <div class="col-xs-2 col-lg-4 col-sm-12 col-md-6" @click="modalType.myType='Categoria'" data-toggle="modal" data-target="#modalGeral">
          <div class="item_quadrado" >
            <div class="foto">
              <center class="item_icon">
                <i class="fad fa-stream"></i>
              </center>
            </div>
            <h1 class="titulo_item text-center">Registrar Categoria</h1>
          </div>
        </div>
        <div class="col-xs-2 col-lg-4 col-sm-12 col-md-6" @click="modalType.myType='Produto'" data-toggle="modal" data-target="#modalGeral">
          <div class="item_quadrado">
            <div class="foto">
              <center class="item_icon">
                <i class="fad fa-box"></i>
              </center>
            </div>
            <h1 class="titulo_item text-center">Registrar Produto</h1>
          </div>
        </div>
        <div class="col-xs-2 col-lg-4 col-sm-12 col-md-6" @click="modalType.myType='DashVenda'" data-toggle="modal" data-target="#modalGeral">
          <div class="item_quadrado">
            <div class="foto">
              <center class="item_icon">
                <i class="fad fa-badge-dollar fa-pulse"></i>
              </center>
            </div>
            <h1 class="titulo_item text-center">Dashboard Vendas</h1>
          </div>
        </div>
      </div>
    </div>
    <Modal :type="modalType"/>
  </div>
</template>

<script>
    import Modal from './ModalShow';
    export default {
        data:function(){
            return{
                modalType: {myType:''}
            }
        },
        components: {
            Modal
        }
    }
</script>