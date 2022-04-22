import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router([]);

router
    .get("/livros", LivroController.listarLivros)
    .get('/livros/busca',LivroController.listarLivrosporEditora)
    .post("/livros",LivroController.cadastrarLivros)
    .put("/livros/:id", LivroController.atualizarLivro)
    .get("/livros/:id",LivroController.listarLivroporID)
    .delete("/livros/:id",LivroController.excluirLivro)
    
export default router