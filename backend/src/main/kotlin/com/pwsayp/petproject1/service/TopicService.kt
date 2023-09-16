package com.pwsayp.petproject1.service

import com.pwsayp.petproject1.model.Topic
import com.pwsayp.petproject1.model.dto.TopicPostDto
import com.pwsayp.petproject1.model.dto.TopicPutDto
import com.pwsayp.petproject1.repository.TopicRepository
import com.pwsayp.petproject1.util.UuidUtils
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class TopicService(
    private val topicRepository: TopicRepository
) {

    fun getAllTopics(): Iterable<Topic> =
        topicRepository.findAll()

    fun getTopicById(id: String): Topic? =
        topicRepository.findByIdOrNull(id)

    fun addTopic(dto: TopicPostDto) {
        val topic = Topic(
            id = UuidUtils.getUUID(),
            title = dto.title,
            elements = dto.elements
        )
        topicRepository.save(topic)
    }

    fun updateTopicById(id: String, dto: TopicPutDto) {
        val oldTopic = getTopicById(id)
        oldTopic?.let {
            val newTopic = Topic(
                id = id,
                title = dto.title ?: oldTopic.title,
                elements = dto.elements ?: oldTopic.elements
            )
            topicRepository.save(newTopic)
        }
    }

    fun deleteTopicById(id: String) {
        topicRepository.deleteById(id)
    }

}
