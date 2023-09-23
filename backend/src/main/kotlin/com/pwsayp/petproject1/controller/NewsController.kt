package com.pwsayp.petproject1.controller

import com.pwsayp.petproject1.model.News
import com.pwsayp.petproject1.service.NewsService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin
@RestController
@RequestMapping("api/v1/news")
class NewsController(
    private val newsService: NewsService
) {

    @GetMapping
    fun getAllNews() =
        ResponseEntity<Iterable<News>>(newsService.getAllTopics(), HttpStatus.OK)

}