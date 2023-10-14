import {Component, OnInit} from '@angular/core';
import {TopicsService} from "../../../services/topics.service";
import {ITopic} from "../../../models/topic";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-learn-topic',
  templateUrl: './learn-topic.component.html',
  styleUrls: ['./learn-topic.component.css']
})
export class LearnTopicComponent implements OnInit {

  topic!: ITopic;

  constructor(
    private topicsService: TopicsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'].toString()
      this.topicsService.getTopicById(id).subscribe(response => {
        this.topic = response;
      })
    })
  }

  // transform(topic: ITopic): ITopicFlatNode[] {
  //   return topic.elements.map((element) => {
  //
  //   })
  // }
}
