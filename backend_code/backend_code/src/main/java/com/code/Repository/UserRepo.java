package com.code.Repository;

import com.code.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<Users, Integer> {
   Users findByUsername(String username);
   Users findByEmail(String email);

}
