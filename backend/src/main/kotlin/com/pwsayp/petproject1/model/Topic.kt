package com.pwsayp.petproject1.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "topics")
data class Topic(
    @Id
    val id: String,
    val title: String,
    val elements: Set<String>
)