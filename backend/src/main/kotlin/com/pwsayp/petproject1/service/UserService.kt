package com.pwsayp.petproject1.service

import java.util.Collections
import com.pwsayp.petproject1.repository.UserRepository
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository
) : UserDetailsService {
    override fun loadUserByUsername(username: String): UserDetails {
        return userRepository.findByUsername(username)
            .map { user ->
                User(
                    user.username,
                    user.password,
                    Collections.singleton(user.role)
                )
            }.orElseThrow { throw UsernameNotFoundException("Failed to retrieve user: $username.") }
    }
}