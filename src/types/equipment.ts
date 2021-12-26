export interface Equipment {
  name: string;
  fullQuantity: number;
  missing?: number;
  owner?: boolean;
}

export interface MissingType {
  index: number;
  state: Equipment[];
}
