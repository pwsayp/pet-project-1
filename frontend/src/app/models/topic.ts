export interface ITopic {
  id: number
  title: string,
  category: string,
  elements: ITopicElement[]
}

export interface ITopicElement {
  first: string,
  second: string
}

export interface ITopicFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export interface ITopicNode {
  name: string;
  children?: ITopicNode[];
}
