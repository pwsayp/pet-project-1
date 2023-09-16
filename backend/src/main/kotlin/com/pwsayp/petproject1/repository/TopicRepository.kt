package com.pwsayp.petproject1.repository

import com.pwsayp.petproject1.model.Topic
import org.springframework.data.mongodb.repository.MongoRepository

interface TopicRepository : MongoRepository<Topic, String>
