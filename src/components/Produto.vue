<template id="Produto">
    <div class="row">
        <div class="col-12">
            <input type="text" name="prodName" placeholder="Nome do produto" class="form-input" required="">
        </div>
        <div class="col-12">
            <select name="prodCat" class="form-select" required="">
                <option value="" selected="" disabled="">Selecione a categoria do produto</option>
            </select>
        </div>
        <div class="col-12 mb-3">
            <input type="date" name="prodDate" placeholder="Data de expiração do prdutco" class="form-input"
                required="">
        </div>
        <div class="col-xs-6 col-lg-6 col-md-6 col-sm-12  mb-3">
            <input type="number" name="prodStockActual" placeholder="Stock Inicial do produto" class="form-input-v2"
                required="">
        </div>
        <div class="col-xs-6 col-lg-6 col-md-6 col-sm-12  mb-3">
            <input type="number" name="prodStockAlerta" placeholder="Stock de alerta do produto"
                class="form-input-v2" required="">
        </div>
        <div class="col-12 mb-3">
            <input type="number" name="prodPu" placeholder="Preço unitário do produto" class="form-input"
                required="">
        </div>
    </div>
</template>