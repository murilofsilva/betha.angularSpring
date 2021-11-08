package com.spring.agoraVai.resources;

import com.spring.agoraVai.model.Produtos;
import com.spring.agoraVai.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutosResource {
    private final ProdutoService produtoService;

    @Autowired
    public ProdutosResource(ProdutoService produtoService){
        this.produtoService = produtoService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Produtos>> getAllProdutos(){
        List<Produtos> produtos = produtoService.getAllProdutos();
        return new ResponseEntity<>(produtos, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Produtos> getProdutoById(@PathVariable("id") Long id) throws UserPrincipalNotFoundException {
        Produtos produto = produtoService.findProdutoById(id);
        return new ResponseEntity<>(produto, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Produtos> addProduto(@RequestBody Produtos produto){
        Produtos newproduto = produtoService.addProduto(produto);
        return new ResponseEntity<>(newproduto, HttpStatus.CREATED);
    }

    @RequestMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduto(@PathVariable("id") Long id) {
        produtoService.deleteProduto(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
