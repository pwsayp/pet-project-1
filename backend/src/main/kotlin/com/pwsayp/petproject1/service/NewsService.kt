package com.pwsayp.petproject1.service

import com.pwsayp.petproject1.model.News
import com.pwsayp.petproject1.repository.NewsRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class NewsService(
    private val newsRepository: NewsRepository
) {

    fun getAllTopics(pageable: Pageable): Page<News> =
        newsRepository.findAll(pageable)

}
