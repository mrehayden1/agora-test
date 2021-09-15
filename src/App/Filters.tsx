export type Sort = 'newest' | 'oldest' | 'name' | 'name-desc';

export const DEFAULT_SORT: Sort = 'newest';

type Props = {
  onSearch?: (text: string) => void;
  onSortChange?: (sort: Sort) => void;
};

export default function Filters(props: Props) {
  function handleSearchInput(e: React.FormEvent<HTMLInputElement>) {
    if (props.onSearch) {
      const target = e.target as HTMLInputElement;
      props.onSearch(target.value);
    }
  }

  return (
    <form className="filters">
      <h2>Filters</h2>
      <div className="control">
        <label htmlFor="sort-input">Sort by: </label>
        <select id="sort-input" name="sort" onChange={(e) => props.onSortChange && props.onSortChange(e.target.value as Sort)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="name">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>
      <div className="control">
        <label htmlFor="search-input">Search mission name: </label>
        <input id="search-input" name="search" onInput={handleSearchInput} />
      </div>
    </form>
  );
}
