import {Component, OnInit} from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {TopicsService} from "../../services/topics.service";
import {ITopic} from "../../models/topic";

interface ITopicsNode {
  name: string;
  isLeaf: boolean;
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

  leafElements!: any[];

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

  constructor(
    private topicsService: TopicsService
  ) {}

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.topicsService.getAllTopics().subscribe((result) => {
      console.log(result)
      this.dataSource.data = this.buildTree(result);
      console.log(this.dataSource.data)
    })
  }

  private buildTree(topics: ITopic[]): any[] {
    const tree: any[] = [];

    topics.forEach((topic) => {
      let currentNode = tree;
      topic.categories.forEach((category) => {
        const existingNode = currentNode.find((node) => node.name === category);
        if (existingNode) {
          if (existingNode.children) {
            currentNode = existingNode.children;
          } else {
            existingNode.children = [];
            currentNode = existingNode.children;
          }
        } else {
          const newNode = { name: category, isLeaf: false, children: [] };
          currentNode.push(newNode);
          currentNode = newNode.children;
        }
      });

      if (topic.elements && topic.elements.length > 0) {
        for (const element of topic.elements) {
          currentNode.push({ name: element, isLeaf: true });
        }
      }
    });

    return tree;
  }


}
