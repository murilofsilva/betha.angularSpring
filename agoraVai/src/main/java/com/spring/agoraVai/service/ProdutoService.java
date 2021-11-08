package com.spring.agoraVai.service;

import com.spring.agoraVai.model.Produtos;
import com.spring.agoraVai.repo.ProdutoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@Service
@Transactional
public class ProdutoService {
    private final ProdutoRepo produtoRepo;

    @Autowired
    public ProdutoService(ProdutoRepo produtoRepo){
        this.produtoRepo = produtoRepo;
    }

    public Produtos addProduto(Produtos produto){
        return produtoRepo.save(produto);
    }

    public List<Produtos> getAllProdutos(){
        return this.produtoRepo.findAll();
    }

    public void deleteProduto(Long id){
        produtoRepo.deleteProdutoById(id);
    }

    public Produtos findProdutoById(Long id) throws UserPrincipalNotFoundException {
        return produtoRepo.findProdutoById(id).orElseThrow(() ->
        new UserPrincipalNotFoundException("Não encontrado"));
    }
}
