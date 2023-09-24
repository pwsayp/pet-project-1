package com.pwsayp.petproject1.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("users")
data class User(
    @Id
    val id: String,
    val username: String,
    val password: String,
    val role: Role
)