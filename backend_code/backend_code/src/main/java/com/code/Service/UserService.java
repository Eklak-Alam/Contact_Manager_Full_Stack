package com.code.Service;

import com.code.Model.Users;
import com.code.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private AuthenticationManager authManager;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public Users signUp(Users users) {
        users.setPassword(encoder.encode(users.getPassword())); // Save encoded password
        return repo.save(users);
    }

    public String verify(Users users) {
        Users existingUser = repo.findByEmail(users.getEmail());  // Use email instead of username

        if (existingUser == null) {
            return "User not found";
        }

        // Compare the raw password with the encoded one
        boolean passwordMatches = encoder.matches(users.getPassword(), existingUser.getPassword());

        if (passwordMatches) {
            return "Login Successful🎉";
        }
        else {
            return "Invalid username or password";
        }

    }

}
