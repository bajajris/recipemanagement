package com.recipe.recipemanagement.auth;

import com.google.common.collect.Lists;
import com.recipe.recipemanagement.Repositories.UserRepository;
import com.recipe.recipemanagement.models.User;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static com.recipe.recipemanagement.config.ApplicationUserRole.*;

@Repository("fake")
public class FakeApplicationUserDaoService implements ApplicationUserDao {

    // private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Autowired
    public FakeApplicationUserDaoService(UserRepository userRepository) {
        // this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
        return getApplicationUsers().stream().filter(applicationUser -> username.equals(applicationUser.getUsername()))
                .findFirst();
    }

    private List<ApplicationUser> getApplicationUsers() {

        List<User> users = userRepository.findAll();

        List<ApplicationUser> applicationUsers = Lists.newArrayList(
        // new ApplicationUser(
        // "annasmith",
        // passwordEncoder.encode("password"),
        // USER.getGrantedAuthorities(),
        // true,
        // true,
        // true,
        // true
        // ),
        // new ApplicationUser(
        // "linda",
        // passwordEncoder.encode("password"),
        // ADMIN.getGrantedAuthorities(),
        // true,
        // true,
        // true,
        // true
        // ),
        // new ApplicationUser(
        // "tom",
        // passwordEncoder.encode("password"),
        // ADMIN.getGrantedAuthorities(),
        // true,
        // true,
        // true,
        // true
        // )
        );

        users.forEach(user -> {
            applicationUsers.add(new ApplicationUser(user.getUsername(), user.getPassword(),
                    user.getRole().getRolename().equals("USER") ? USER.getGrantedAuthorities()
                            : ADMIN.getGrantedAuthorities(),
                    true, true, true, true));
        });

        return applicationUsers;
    }

}
