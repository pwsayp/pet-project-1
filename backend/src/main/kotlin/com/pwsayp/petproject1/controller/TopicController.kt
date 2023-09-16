package com.pwsayp.petproject1.controller

import com.pwsayp.petproject1.model.Topic
import com.pwsayp.petproject1.model.dto.TopicPostDto
import com.pwsayp.petproject1.model.dto.TopicPutDto
import com.pwsayp.petproject1.service.TopicService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/topics")
class TopicController(
    private val topicService: TopicService
) {

    @GetMapping
    private fun getAllTopics() =
        ResponseEntity<Iterable<Topic>>(topicService.getAllTopics(), HttpStatus.OK)

    @GetMapping("{id}")
    private fun getTopicById(@PathVariable id: String) =
        ResponseEntity<Topic>(topicService.getTopicById(id), HttpStatus.OK)

    @PostMapping
    private fun addTopic(@RequestBody dto: TopicPostDto) =
        ResponseEntity<Unit>(topicService.addTopic(dto), HttpStatus.CREATED)

    @PutMapping("{id}")
    private fun updateTopicById(@PathVariable id: String, @RequestBody dto: TopicPutDto) =
        ResponseEntity<Unit>(topicService.updateTopicById(id, dto), HttpStatus.OK)

    @DeleteMapping("{id}")
    private fun deleteTopicById(@PathVariable id: String) =
        ResponseEntity<Unit>(topicService.deleteTopicById(id), HttpStatus.OK)
}