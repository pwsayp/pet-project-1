import {Component, OnInit} from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {ITopic, ITopicElement} from "../../models/topic";
import {TopicsService} from "../../services/topics.service";

interface ITopicsNode {
  name: string;
  children?: ITopicsNode[];
}

interface TopicsFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  private _transformer = (node: ITopicsNode, level: number): TopicsFlatNode  => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<TopicsFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: TopicsFlatNode) => node.expandable;

  rawTopics!: ITopic[];
  convertedTopics!: ITopicsNode[];


  constructor(
    private topicsService: TopicsService
  ) {}

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.topicsService.getAllTopics().subscribe((result) => {
      this.rawTopics = result;
      this.dataSource.data = this.convertTopics();
    })
  }

  convertTopics(): ITopicsNode[] {
    return this.rawTopics.map((rawTopic) => {
      const convertedTopic: ITopicsNode = {
        name: rawTopic.title
      };

      if (rawTopic.elements && rawTopic.elements.length > 0) {
        convertedTopic.children = this.convertElements(rawTopic.elements);
      }

      return convertedTopic;
    })
  }

  private convertElements(elements: ITopicElement[]) {
    return elements.map((element) => {
      const convertedElement: ITopicsNode = {
        name: `${element.first} - ${element.second}`,
      };

      return convertedElement;
    });
  }
}
