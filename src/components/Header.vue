<template id="NavbarMenu">
    <nav class="navbar navbar-expand-sm navbar-dark mb-5" style="background-color: var(--primary-color);">
        <a class="navbar-brand" href="#">Hedaki Company</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#hedaki"
            aria-controls="hedaki" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="hedaki">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link" exact> Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/listaProduto" class="nav-link" exact> Lista de Produtos</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Ferramentas</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown03">
                        <a class="dropdown-item" href="#">Pesquisa avançada</a>
                        <a class="dropdown-item" href="#">Definições</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
