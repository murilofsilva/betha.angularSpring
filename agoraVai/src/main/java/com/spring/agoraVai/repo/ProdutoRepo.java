package com.spring.agoraVai.repo;

import com.spring.agoraVai.model.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProdutoRepo extends JpaRepository<Produtos, Long> {
    void deleteProdutoById(Long id);

    Optional<Produtos> findProdutoById(Long id);
}
