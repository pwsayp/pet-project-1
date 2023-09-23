package com.pwsayp.petproject1.repository

import com.pwsayp.petproject1.model.News
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface NewsRepository : MongoRepository<News, String> {

}
