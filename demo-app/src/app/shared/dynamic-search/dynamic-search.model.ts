export enum SearchItemType {
  TextBox = 1,
  DateTime = 2,
  CheckBox = 3,
  Select = 4,
}

export interface ISearchFilterItem {
  type: SearchItemType;
  id: string;
  name: string;
  label: string;
  isDefault: boolean;
  isActive: boolean;
  optionsName?: string;
  options?: SelectItemData[];
}

export interface SelectItemData {
  key: string;
  value: string;
}
