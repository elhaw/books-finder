declare namespace ISearchBar {
  export interface IProps {
    getSearchQuery: (searchKeyword: string) => void;
  }
}

export { ISearchBar };
