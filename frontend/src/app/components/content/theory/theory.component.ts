import {Component, OnInit} from '@angular/core';
import {TopicsService} from "../../../services/topics.service";
import {ITopic} from "../../../models/topic";

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent implements OnInit {

  topics: ITopic[] = []

  topic: ITopic = { elements: [], id: 0, title: "" }

  constructor(
      private topicsService: TopicsService
  ) {}

  ngOnInit() {
    this.listTopics()
  }

  getTopic(id: number) {
    this.topicsService.getTopicById(id).subscribe((result: ITopic) => {
      this.topic = result;
    })
  }

  updateTopic(topic: ITopic) {

  }

  deleteTopic(id: number) {
    this.topicsService.deleteTopicById(id).subscribe(() => {
      this.listTopics();
    })
  }

  private listTopics() {
    this.topicsService.getAllTopics().subscribe((result: ITopic[]) => {
      this.topics = result;
    })
  }
}
