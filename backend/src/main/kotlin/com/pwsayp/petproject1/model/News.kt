package com.pwsayp.petproject1.model

import java.time.LocalDateTime
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class News(
    @Id
    val id: String,
    val title: String,
    val content: String,
    val date: LocalDateTime
)