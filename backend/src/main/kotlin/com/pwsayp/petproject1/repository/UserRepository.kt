package com.pwsayp.petproject1.repository

import java.util.Optional
import com.pwsayp.petproject1.model.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : MongoRepository<User, String> {
    fun findByUsername(username: String): Optional<User>

}