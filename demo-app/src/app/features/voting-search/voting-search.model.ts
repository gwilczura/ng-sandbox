import {
  ISearchFilterItem,
  SearchItemType,
} from '../../shared/dynamic-search/dynamic-search.model';

export interface VotingResultItem {
  vote: string;
  person: string;
  category: string;
  votingName: string;
  groupName: string;
  sessionName: string;
  date: string;
  hour: string;
}

export let defaultSearchItems: ISearchFilterItem[] = [
  {
    id: 'groupName',
    name: 'groupName',
    label: 'Group',
    type: SearchItemType.TextBox,
    isDefault: true,
    isActive: true,
  },
  {
    id: 'votingName',
    name: 'votingName',
    label: 'Voting Name',
    type: SearchItemType.TextBox,
    isDefault: true,
    isActive: true,
  },
  {
    id: 'person',
    name: 'person',
    label: 'Person',
    type: SearchItemType.TextBox,
    isDefault: true,
    isActive: true,
  },
  {
    id: 'sessionName',
    name: 'sessionName',
    label: 'Session Name',
    type: SearchItemType.TextBox,
    isDefault: false,
    isActive: false,
  },
  {
    id: 'vote',
    name: 'vote',
    label: 'Vote',
    type: SearchItemType.TextBox,
    isDefault: false,
    isActive: false,
  },
  {
    id: 'date',
    name: 'date',
    label: 'Date',
    type: SearchItemType.TextBox,
    isDefault: false,
    isActive: false,
  },
];
